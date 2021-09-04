import axios from "axios";

export const getProfile = async (username) => {
  console.log(username);
  const url = "https://api.github.com/users/" + username;

  console.log(url);

  try {
    let response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    return "error";
  }
};
