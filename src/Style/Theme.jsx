const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          btnC: {
            main: "#1565c0",
            hover: "#5788c0",
          },
          bg: {
            main: "#b3b3b3",
          },
        }
      : {
          // palette values for dark mode
          btnC: {
            main: "orange",
            hover: "#e3ce96",
          },
          bg: {
            main: "#545454",
          },
        }),
  },
});

export default getDesignTokens;
