import { toast } from "react-toastify";

export const showToast = (type, msg) => {
  console.log("here");
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;

    default:
      return false;
  }
};
