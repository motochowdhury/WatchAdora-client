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

export const bookWishProd = (id, prod, refetch) => {
  delete prod?._id;
  fetch(`${process.env.REACT_APP_SERVER_API}/wishlist?id=${id}`, {
    method: "DELETE",
    headers: {
      "application-type": "application/json",
      authorization: `bearar ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(prod),
  })
    .then((res) => res.json())
    .then((data) => {
      axios
        .post(`${process.env.REACT_APP_SERVER_API}/booking`, prod, {
          headers: {
            authorization: `bearar ${localStorage.getItem("access-token")}`,
          },
        })
        .then((data) => toast.success("Booking Successfull"))
        .catch((err) => toast.error(err));
      refetch();
    });
};

export const deleteWishProd = (id, refetch) => {
  fetch(`${process.env.REACT_APP_SERVER_API}/wishlist?id=${id}`, {
    method: "DELETE",
    headers: {
      authorization: `bearar ${localStorage.getItem("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Product Deleted");
      refetch();
    })
    .catch((err) => toast.error(err.message));
};
