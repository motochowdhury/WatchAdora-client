import { useEffect } from "react";
import { useState } from "react";

const useUser = (email) => {
  const [user, setUser] = useState({});
  const [processing, setProccessing] = useState(false);

  useEffect(() => {
    setProccessing(true);
    fetch(`${process.env.REACT_APP_SERVER_API}/user?email=${email}`, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setProccessing(false);
      })
      .catch(() => setProccessing(false));
  }, [email]);

  return [user, processing];
};

export default useUser;
