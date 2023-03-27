import React, { useEffect } from "react";

import axios from "axios";
import Layout from './../components/Layout';

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
    console.log(res.data);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h4>HomePage </h4>
      
    </Layout>
  );
};

export default Home;
