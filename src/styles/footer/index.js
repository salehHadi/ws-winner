import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  background: "rgba(73, 185, 55, 0.1)",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "8px 0",
  marginTop: "40px",
  gap: "16px",
  [theme.breakpoints.up("md")]: {
    padding: "10px 0",
  },
}));

export const FooterUpperContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
}));

export const FooterElementContainer = styled(Box)(({ theme }) => ({
  display: "flex",

  justifyContent: "center",
  alignItems: "end",
  flexDirection: "column",
  padding: "8px 0",
  [theme.breakpoints.up("md")]: {
    padding: "10px 0",
  },
}));

export const FooterBottomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid black",
  width: "100%",
  paddingTop: "8px",
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
}));
