import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";
import { FlexContainer } from "../../styles";

export default function Appbar() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <FlexContainer type="column">
      {matches ? <AppbarMobile /> : <AppbarDesktop />}
    </FlexContainer>
  );
}
