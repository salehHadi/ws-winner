import { Box, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const AddToCartContainer = styled(Box)(({ type, theme }) => ({
  display: "flex",
  flexDirection: type === "column" ? "column" : "row",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    backgroundColor: "white",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: "20px",
    justifyContent: "space-around",
    zIndex: 999,
  },
}));

export const CounterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  border: "1px solid black",
  [theme.breakpoints.up("md")]: {},
}));

export const FiledInput = styled("input")(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  height: "100%",
  // border: "1px solid black",
  fontSize: "20px",
  fontFamily: "Roboto Slab, serif",
  [theme.breakpoints.up("md")]: {
    padding: "4px",
  },
}));

export const AddToCartButton = styled(ListItemButton)(({ theme }) => ({
  padding: "12px 38px 12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  width: "max-content",
  backgroundColor: Colors.color8,
  color: Colors.white,
  borderRadius: "8px",
  marginTop: "20px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    borderRadius: "2px",
    fontSize: "16px",
    padding: "12px 28px 12px",
  },
}));

// <FlexContainer gap={3} mt={3}>
//   <ItemText fontFamily={"Roboto Slab, serif"} color={Colors.color5}>
//     115.00 SAR
//   </ItemText>
//   <ItemText fontFamily={"Roboto Slab, serif"}>الاجمالي</ItemText>
// </FlexContainer>

// <ItemText
//   sx={{
//     padding: "12px 48px 16px",
//     width: "max-content",
//     backgroundColor: Colors.color8,
//     color: Colors.white,
//     borderRadius: "8px",
//     marginTop: "20px",
//   }}
// >
//   آضف الى السله
// </ItemText>
