import { Box, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, FontSize, FontWeight } from "./theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const FlexContainer = styled(Box)(({ type }) => ({
  display: "flex",
  flexDirection: type === "column" ? "column" : "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const ItemText = styled(Typography)(() => ({
  fontWeight: FontWeight.bold,
  fontSize: FontSize.size2,
}));
export const ItemText2 = styled(Typography)(() => ({
  fontWeight: FontWeight.bold,
  fontSize: FontSize.size1,
}));
export const ItemText3 = styled(Typography)(() => ({
  fontWeight: FontWeight.regular,
  fontSize: FontSize.size1,
}));
export const ItemText4 = styled(Typography)(() => ({
  fontWeight: FontWeight.bold,
  fontSize: FontSize.size3,
}));
export const ItemText5 = styled(Typography)(() => ({
  fontWeight: FontWeight.regular,
  fontSize: FontSize.size3,
}));

export const ButtonContainerDesktop = styled(ListItemButton)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
}));
export const ButtonContainer = styled(ListItemButton)(() => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
}));

export const CartIcon = styled(ShoppingCartIcon)(() => ({
  color: Colors.color1,
  width: "30px",
  height: "34px",
}));
