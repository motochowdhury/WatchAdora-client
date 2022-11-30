import axios from "axios";
import { toast } from "react-toastify";

export const saveWishList = (wishProduct) => {
  axios
    .post(`${process.env.REACT_APP_SERVER_API}/wishlist`, wishProduct, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
    .then((data) => toast.success("Added In Wishlist"))
    .catch((err) => toast.error(err));
};
