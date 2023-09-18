import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className={`d-flex ${user?'justify-content-between':'justify-content-center'}  items-center`}>
        {!isAuthenticated ? (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => loginWithRedirect()}
          >
            Login With Google
          </button>
        ) : (
          <>
            {" "}
            <p>Hello, {user?.name} !!</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
