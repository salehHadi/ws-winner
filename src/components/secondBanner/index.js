import { useMediaQuery, useTheme } from "@mui/material";
import { FlexContainer } from "../../styles";

export function SecondBanner() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <FlexContainer
      sx={{
        height: matches ? "90px" : "148px",
        backgroundColor: "#D9D9D9",
      }}
    ></FlexContainer>
  );
}
