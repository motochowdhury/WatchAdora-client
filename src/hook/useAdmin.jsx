import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setAdmin] = useState({});
  const [proccessing, setProccessing] = useState(false);

  useEffect(() => {
    setProccessing(true);
    fetch(`${process.env.REACT_APP_SERVER_API}/admin?email=${email}`, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data?.isAdmin);
        setProccessing(false);
      })
      .catch(() => setProccessing(false));
  }, [email]);

  return [isAdmin, proccessing];
};

export default useAdmin;
