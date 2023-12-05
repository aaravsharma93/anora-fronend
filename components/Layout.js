import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./MainHeader";
import Footer from "./Footer";
import useSettings from "../hooks/useSettings";
import { Toaster } from 'react-hot-toast';
import Loader from "./Loader";
import { AuthContextProvider } from "../contexts/AuthContext";

Layout.propTypes = {
  children: PropTypes.node,
};

export default function Layout({ children }) {
  const { themeMode } = useSettings();
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  return (
    <>
      <AuthContextProvider
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
      >
        <Header />
        {/* <Loader /> */}
        <main className={`${themeMode === "dark" ? "bg-dark" : ""} pb-5 pt-3`}>
          {children}
          <Toaster />
        </main>
        <Footer />
      </AuthContextProvider>
    </>
  );
}
