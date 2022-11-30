import { toast } from "react-toastify";

export const deleteSeller = (id, email, refetch) => {
  fetch(
    `${process.env.REACT_APP_SERVER_API}/admin/seller?id=${id}&email=${email}`,
    {
      method: "DELETE",
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    }
  )
    .then((res) => res.json)
    .then((data) => {
      toast.success("Seller Deleted");
      refetch();
    })
    .catch((err) => {
      toast.success(err.message);
    });
};

export const verifySeller = (email, refetch) => {
  fetch(`${process.env.REACT_APP_SERVER_API}/admin/seller?email=${email}`, {
    method: "PATCH",
    headers: {
      authorization: `bearar ${localStorage.getItem("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => refetch());
};
