import { useEffect } from "react";
import { useState } from "react";

const useUser = (email) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_SERVER_API}/user?email=${email}`, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [email]);

  return [user, loading];
};

export default useUser;
