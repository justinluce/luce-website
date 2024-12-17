import { ThemeProvider as ThemeWrapper } from "@mui/material/styles";
import theme from "./themes";

export const ThemeProvider = (props) => {
  return <ThemeWrapper theme={theme}>{props.children}</ThemeWrapper>;
};
