import React, { useRef, useState } from "react";
import axios from "axios";
import logo from "./RNP_LOGO.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { trafficUser } from "./users";
import {
  UserIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.warn("Username and password should not be empty", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    params.append("referer", "https://gis.police.gov.rw/portal/");
    params.append("client", "https://gis.police.gov.rw/portal/");
    params.append("expiration", "3600");

    const URL =
      "https://gis.police.gov.rw/portal/sharing/generateToken?f=json";

    axios
      .post(URL, params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        setLoading(false);
        if (response.data.error) {
          toast.error("Username or password invalid", {
            position: "top-center",
          });
        } else {
          const token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("username", username);

          const esriSAPIOAuth = {
            "https://gis.police.gov.rw": {
              appId: "dashboards",
              codeVerifier: null,
              expires: 1717601203,
              refreshToken: null,
              ssl: true,
              stateID: null,
              token: token,
              userId: username,
            },
          };
          window.sessionStorage.setItem(
            "esriJSAPIOAuth",
            JSON.stringify(esriSAPIOAuth)
          );

          const isTrafficUser = trafficUser.some(
            (user) => user.username === username
          );

          if (isTrafficUser) {
            navigate("/accident", { replace: true });
          } else {
            navigate("/allincidents", { replace: true });
          }
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4 relative overflow-hidden">

      {/* Decorative background circles */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-blue-700 opacity-20 blur-3xl" />
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl" />

      <div className="relative w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Card top banner */}
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 px-8 pt-8 pb-6 flex flex-col items-center border-b border-blue-700">
            <div className="bg-white rounded-full p-2 shadow-lg mb-4">
              <img src={logo} alt="RNP Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="text-center">
              <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-1">
                Rwanda National Police
              </p>
              <h1 className="text-white text-2xl font-extrabold tracking-wide">
                Incidents Management
              </h1>
              <h1 className="text-white text-2xl font-extrabold tracking-wide">
                System
              </h1>
              <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            </div>
          </div>

          {/* Form area */}
          <div className="px-8 py-8">
            <p className="text-gray-500 text-sm text-center mb-6 font-medium">
              Sign in to your account to continue
            </p>

            <form onSubmit={submit} className="space-y-5">

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <UserIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <input
                    ref={usernameRef}
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <input
                    ref={passwordRef}
                    id="password"
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {show ? (
                      <EyeSlashIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Footer note */}
        <div className="text-center mt-6 space-y-1">
          <span className="inline-flex items-center gap-1.5 bg-blue-800 bg-opacity-60 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-600 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
            Version 2.0
          </span>
          <p className="text-blue-300 text-xs opacity-70">
            © {new Date().getFullYear()} Rwanda National Police. All rights reserved.
          </p>
        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
