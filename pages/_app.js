import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // const [isMounted, setIsMounted] = useState(false);
  // const darkMode = useDarkMode(true);
  // const theme = darkMode.value ? darkTheme : lightTheme;

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // return (
  //   <ThemeProvider theme={theme}>
  //     <button onClick={darkMode.enable}>DARK MODE</button>
  //     <button onClick={darkMode.disable}>LIGHT MODE</button>
  //     {isMounted && <Component {...pageProps} />}
  //   </ThemeProvider>
  // );

  return <Component {...pageProps} />;
}
