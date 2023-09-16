export const getDesignTokens = (mode) => ({
  palette: {
    mode,
  },
});

// USE THIS LINK FOR REFERENCE:
// https://mui.com/material-ui/customization/dark-mode/#system-ToggleColorMode.js

// EXAMPLE OF HOW TO USE THIS IN A COMPONENT:
// import { useContext } from "react";
// import { useTheme } from "@mui/material/styles";

// function MyApp() {
//   const theme = useTheme();
//   const { toggleColorMode } = useContext(ColorModeContext);
//   return (
//     <Button onClick={toggleColorMode}>
//       {theme.palette.mode === "dark" ? "Use Light" : "Use Dark"}
//     </Button>
//   );
// }
