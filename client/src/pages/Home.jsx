import React, { useEffect } from "react";

import axios from "axios";

const Home = () => {
  const getUserData = async () => {
    const res = await axios.post(
      "/api/v1/user/getUserData",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h4>HomePage </h4>
    </div>
  );
};

export default Home;
