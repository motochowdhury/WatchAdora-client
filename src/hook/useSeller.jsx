import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setSeller] = useState({});
  const [proccessing, setProccessing] = useState(false);

  useEffect(() => {
    setProccessing(true);
    fetch(`${process.env.REACT_APP_SERVER_API}/seller?email=${email}`, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSeller(data?.isAdmin);
        setProccessing(false);
      })
      .catch(() => setProccessing(false));
  }, [email]);

  return [isSeller, proccessing];
};

export default useSeller;
