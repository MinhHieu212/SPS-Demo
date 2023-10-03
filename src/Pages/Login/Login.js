import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="Login_container flex flex-col gap-y-3 items-center justify-center w-full h-[500px]">
      {show ? (
        <>
          <span className="text-3xl font-bold">Hello from Login page</span>
          <Link to="/Home">
            <button className="px-4 py-2 text-white text-xl bg-blue-400">
              Login
            </button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Login;
