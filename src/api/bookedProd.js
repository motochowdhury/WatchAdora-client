import { toast } from "react-toastify";

export const deleteBookedProd = (id, refetch) => {
  fetch(`${process.env.REACT_APP_SERVER_API}/booking?id=${id}`, {
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
