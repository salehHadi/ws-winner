import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const PurchaseContainer = styled(Box)(({ theme }) => ({
  // position: ""
  display: "flex",
  flexDirection: "column",
  width: "280px",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFF",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 8,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 99,
  },
}));

export const PurchaseButton = styled(Box)(() => ({
  padding: "12px 48px 16px",
  width: "max-content",

  backgroundColor: Colors.color8,
  color: Colors.white,
  borderRadius: "8px",
  fontWeight: "bold",
}));

export const CartItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  textAlign: "end",

  //   [theme.breakpoints.down("md")]: {

  //   },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: "160px",
  height: "162px",

  [theme.breakpoints.down("md")]: {
    width: "132px",
    height: "133px",
  },
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  width: "100px",
  fontWeight: "bold",
  //   height: "50px",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3, // Limit to 3 lines
  textOverflow: "ellipsis",
  marginTop: "16px",

  [theme.breakpoints.up("md")]: {
    width: "250px",
    fontSize: "14px",
  },
}));

export const TextElement = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "bold",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    fontWeight: "bold",
  },
}));
