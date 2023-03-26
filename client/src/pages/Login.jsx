import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import axois from "axios";

const Login = () => {
  const navigate = useNavigate();
  const onFinishHander = async (value) => {
    try {
      const res = await axois.post("/api/v1/user/login", value);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHander}
          className="login-form"
        >
          <h1 className="text-center fw-bold">Login</h1>

          <Form.Item label="Email" name="email">
            <Input type="text" required className="input" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required className="input" />
          </Form.Item>

          <button className="btn btn-success btn_style" type="submit">
            Submit
          </button>
          <Link to={"/register"} className="style_Login_button">
            Not Registered
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
