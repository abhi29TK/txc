import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

type props = {
  children: React.ReactNode;
};

const Screen: React.FC<props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex",  flexDirection: 'column' }}>
      <Header />
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Screen;
