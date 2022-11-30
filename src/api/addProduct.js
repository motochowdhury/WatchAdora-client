import axios from "axios";
import { toast } from "react-toastify";

export const addProduct = (data, setLoading, reset) => {
  setLoading(true);
  axios
    .post(`${process.env.REACT_APP_SERVER_API}/products`, data, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
    .then((data) => {
      setLoading(false);
      reset();
      toast.success("product added successfully");
    })
    .catch((err) => {
      setLoading(false);
      toast.success(err);
    });
};

export const deleteMyProduct = (id, refetch) => {
  fetch(`${process.env.REACT_APP_SERVER_API}/product?id=${id}`, {
    method: "DELETE",
    headers: {
      authorization: `bearar ${localStorage.getItem("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Product deleted Successfully");
      refetch();
    })
    .catch((err) => toast.error(err.message));
};

export const unsoldPro = (id, refetch) => {
  fetch(`${process.env.REACT_APP_SERVER_API}/product/unsold?id=${id}`, {
    method: "PATCH",
    headers: {
      authorization: `bearar ${localStorage.getItem("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Product Unsolded SUccessfully");
      refetch();
    })
    .catch((err) => toast.error(err.message));
};

export const advertiseProd = (id, refetch) => {
  fetch(`${process.env.REACT_APP_SERVER_API}/product/ad?id=${id}`, {
    method: "PATCH",
    headers: {
      authorization: `bearar ${localStorage.getItem("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Product Advertisement Enable");
      refetch();
    })
    .catch((err) => toast.error(err.message));
};
