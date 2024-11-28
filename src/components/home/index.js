import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { FlexContainer } from "../../styles";
import HomeDesktop from "./homeDesktop";
import HomeMobile from "./homeMobile";

export default function Home() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <FlexContainer type="column">
      {matches ? <HomeMobile /> : <HomeDesktop />}
    </FlexContainer>
  );
}
