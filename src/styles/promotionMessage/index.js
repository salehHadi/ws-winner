import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, FontSize, FontWeight } from "../theme";

export const VisionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  background: Colors.color6,
  color: Colors.white,
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 0",
  [theme.breakpoints.up("md")]: {
    padding: "10px 0",
  },
}));

export const VisionMessage = styled(Typography)(({ theme }) => ({
  fontWeight: FontWeight.bold,
  fontSize: FontSize.size1,
  color: Colors.white,
  [theme.breakpoints.up("md")]: {
    fontSize: FontSize.size2,
  },
}));

export const SecondContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  background: Colors.color1,
  color: Colors.white,
  justifyContent: "space-between",
  alignItems: "center",

  padding: "4px 0",
  //   [theme.breakpoints.up("md")]: {
  //     padding: "10px 0",
  //   },
}));

export const PromotionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  background: Colors.color1,
  color: Colors.white,
  justifyContent: "start",
  alignItems: "center",
  //   [theme.breakpoints.up("md")]: {
  //     padding: "10px 0",
  //   },
}));
export const ContactContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  background: Colors.color1,
  color: Colors.white,
  justifyContent: "end",
  alignItems: "center",
  //   [theme.breakpoints.up("md")]: {
  //     padding: "10px 0",
  //   },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: FontWeight.bold,
  fontSize: FontSize.size1,
  color: Colors.white,
}));
