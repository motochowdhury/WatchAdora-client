import axios from "axios";
import { toast } from "react-toastify";

export const reportAdmin = (reportProdudct) => {
  axios
    .post(`${process.env.REACT_APP_SERVER_API}/reportadmin`, reportProdudct, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
    .then((data) => toast.success("Reported Successfully"))
    .catch((err) => toast.error(err));
};

export const deleteReportedProd = (id, prodId, refetch) => {
  fetch(
    `${process.env.REACT_APP_SERVER_API}/report?id=${id}&productId=${prodId}`,
    {
      method: "DELETE",
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      toast.success("Product Deleted");
      refetch();
    })
    .catch((err) => toast.error(err.message));
};
