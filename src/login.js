import React, { useRef, useState } from "react";
import axios from "axios";
import logo from "./RNP_LOGO.png";
import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      // toast.warn("Username and password should not be empty");
      return;
    }

    console.log(username);
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    params.append("referer", "https://gis.police.gov.rw/portal/");
    params.append("client", "https://gis.police.gov.rw/portal/");
    params.append("expiration", "3600");

    const URL = "https://gis.police.gov.rw/portal/sharing/generateToken?f=json";

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(URL, params, config)
      .then((response) => {
        if (response.data.error) {
          // toast.error(response.data.error.message);
          // toast.error("Username or password invalid");
        } else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", username);
          // toast.success("You have successfully login");
          navigate("/Crime", { replace: true });
        }
      })
      .catch((error) => {
        // toast.error(error.message);
      });
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900">
            <div className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
              <div className="font-bold self-center text-xl sm:text-3xl text-gray-800">
                <center>
                  <img alt="" src={logo} className="w-12" />
                </center>
                <h1>Login Here</h1>
              </div>
              <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Enter your credentials to access your account
              </div>

              <div className="mt-10">
                <form onSubmit={submit}>
                  <div className="flex flex-col mb-5">
                    <label
                      for="username"
                      className="mb-1 text-xs font-semibold tracking-wide text-gray-600"
                    >
                      Username:
                    </label>

                    <div className="relative">
                      <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <i className="fas fa-user text-blue-500"></i>
                      </div>
                      <input
                        ref={usernameRef}
                        id="text"
                        type="FormControlInput1"
                        className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                        placeholder="Enter your username"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label
                      for="password"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      Password:
                    </label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span>
                          <i
                            className="fas fa-lock text-blue-500"
                            onClick={handleShow}
                          ></i>
                        </span>
                      </div>

                      <input
                        ref={passwordRef}
                        id="password"
                        type={show ? "text" : "password"}
                        name="FormControlInput2"
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                        placeholder="••••••••"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="flex w-full">
                    <button
                      type="submit"
                      onSubmit={submit}
                      className="flex mt-2  items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-800 hover:bg-blue-500 rounded-2xl py-2 w-full transition duration-150 ease-in"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default Login;
