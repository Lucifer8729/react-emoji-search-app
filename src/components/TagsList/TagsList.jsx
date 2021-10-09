import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchByTags } from "../../store/actions";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Chip, Typography, Divider } from "@mui/material";
import TAGS_LIST from "./TAGS_LIST";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#42a5f5",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// const tags = ["happy", "sad", "angry", "sleepy"];

const TagsList = () => {
  const [expanded, setExpanded] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState([]);
  const list = useSelector((state) => state.emojis.emoji);
  const last_item = useSelector((state) => state.emojis.itemCount);
  const dispatch = useDispatch();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleDelete = (tag) => {
    setSelectedTags((prevValue) => prevValue.filter((val) => val !== tag));
  };

  const handleClick = (tag) => {
    if (!selectedTags.find((val) => tag === val)) {
      setSelectedTags((prevValue) => [...prevValue, tag]);
      // dispatch(searchByTags(last_item, 25, selectedTags, list));
    }
  };

  React.useEffect(() => {
    dispatch(searchByTags(last_item, 25, selectedTags, list));
  }, [selectedTags]);

  return (
    <Box mt={3} mb={3}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: "white" }}>Select Tags</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {selectedTags.length !== 0 ? (
            <>
              {selectedTags.map((tag, i) => (
                <Chip
                  key={i}
                  sx={{ mr: 1, mb: 1 }}
                  label={tag}
                  size="small"
                  color="primary"
                  variant="filled"
                  onDelete={() => handleDelete(tag)}
                />
              ))}
              <Divider sx={{ mb: 1 }} />
            </>
          ) : null}
          {TAGS_LIST.map((tag, i) => (
            <Chip
              key={i}
              sx={{ mr: 1, mb: 1 }}
              label={tag}
              size="small"
              color="primary"
              variant="outlined"
              clickable={true}
              onClick={() => handleClick(tag)}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TagsList;
