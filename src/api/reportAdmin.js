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
