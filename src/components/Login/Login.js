import { Redirect } from "react-router-dom";

import Cookies from "js-cookie";

import { useState } from "react";

import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import "./Login.css";

function Login() {
  const [loginFormInputData, setLoginFormInputData] = useState({
    email: "",
    password: "",
  });

  const [showSubmitError, setShowSubmitError] = useState(false);

  function loginHandleChange(event) {
    const { name, value } = event.target;
    setLoginFormInputData({ ...loginFormInputData, [name]: value });
  }

  const onSubmitSuccess = (userId) => {
    Cookies.set("user_id", userId, {
      expires: 30,
      path: "/",
    });
    setShowSubmitError(false);
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
  };

  const loginHandleSubmit = async (event) => {
    event.preventDefault();
    const emailAndPasswordDataObj = loginFormInputData;

    const url = "https://bursting-gelding-24.hasura.app/api/rest/get-user-id";

    const options = {
      method: "POST",
      body: JSON.stringify(emailAndPasswordDataObj),
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const userId = data.get_user_id[0].id;
      onSubmitSuccess(userId);
      window.location.reload();
    } catch (error) {
      onSubmitFailure(error);
    }
  };

  const userId = Cookies.get("user_id");
  if (userId !== undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-home-container">
      {showSubmitError && (
        <div className="error-container">Not A Authenticate User</div>
      )}
      <p>admin : admin@gmail.com - Admin@123</p>
      <p>non-admin : rahul@gmail.com - rahul@123</p>
      <div className="login-container">
        <h1 className="login-heading">Login Form</h1>
        <form className="login-form-container" onSubmit={loginHandleSubmit}>
          <label className="login-email-label">Email</label>
          <div className="login-email-container">
            <AiOutlineMail className="login-email-icon" />
            <input
              className="login-email-input"
              type="email"
              name="email"
              placeholder="Enter Your Mail"
              value={loginFormInputData.email}
              onChange={loginHandleChange}
            />
          </div>

          <label className="login-email-label">Password</label>
          <div className="login-email-container">
            <AiOutlineLock className="login-email-icon" />
            <input
              className="login-email-input"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={loginFormInputData.password}
              onChange={loginHandleChange}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
