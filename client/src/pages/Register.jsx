import "../styles/Register.css";
import { useDispatch } from "react-redux";  
import { showLoading,hideLoading  } from "../redux/features/alertSlice";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import axois from "axios";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHander = async (value) => {
    try {
      dispatch(showLoading());
      const res = await axois.post("/api/v1/user/register", value);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
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
          className="register-form"
        >
          <h1 className="text-center fw-bold">Register</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required className="input" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="text" required className="input" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required className="input" />
          </Form.Item>

          <button className="btn btn-success btn_style" type="submit">
            Submit
          </button>
          <Link to={"/login"} className="style_Login_button">
            Already Registered
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
