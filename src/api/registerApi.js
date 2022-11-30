import axios from "axios";

export const uploadImage = async (img) => {
  let formdata = new FormData();
  formdata.set("key", process.env.REACT_APP_IMGBB_KEY);
  formdata.append("image", img);

  const { data } = await axios({
    method: "post",
    url: "https://api.imgbb.com/1/upload",
    data: formdata,
  });

  const url = data.data.display_url;

  return url;
};

export const saveUser = (user) => {
  axios
    .post(`${process.env.REACT_APP_SERVER_API}/users`, user, {
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
    .then((data) => console.log(data))
    .catch((err) => console.log("error from save user", err));
};
