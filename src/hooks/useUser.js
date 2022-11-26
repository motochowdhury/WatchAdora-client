import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useUser = ({ email }) => {
  const [currUser, setCurrUser] = useState({});
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios.get(`${process.env.REACT_APP_SERVER_API}/users?email=${email}`),
  });
  if (isLoading) {
    return;
  }
  setCurrUser(data.data.data);

  return [currUser];
};

export default useUser;
