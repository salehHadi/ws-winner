import { Box, List, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, FontSize, FontWeight } from "../theme";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

// appbar container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
  width: "100%",
}));

// Cart and log in section

export const TypographyText = styled(Typography)(() => ({
  fontSize: FontSize.size1,
  color: Colors.color1,
  fontWeight: FontWeight.bold,
}));

export const UserIcon = styled(PermIdentityIcon)(() => ({
  color: Colors.color1,
  width: "30px",
  height: "34px",
}));

// Search Bar

export const SearchBar = styled("input")(({ theme }) => ({
  width: "100%",
  height: "42px",
  backgroundColor: "#D9D9D9",
  border: "none",
  borderRadius: "4px",
  textAlign: "center",
  fontSize: FontSize.size2,
  fontWeight: FontWeight.bold,
  [theme.breakpoints.up("md")]: {
    width: "453px",
  },
}));

export const IconSearch = styled(SearchIcon)(() => ({
  color: Colors.color1,
  width: "30px",
  height: "34px",
  position: "absolute",
  right: "10px",
}));

// Logo section
export const LogoImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,

  [theme.breakpoints.down("md")]: {
    width: "58px",
    height: "50px",
    // test another dimintion 63, 54
  },
}));

// List Section

export const MyListDesktop = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  gap: type === "row" ? "32px" : "4px",

  width: "max-content",
}));
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  gap: type === "row" ? "56px" : "4px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
  width: "100%",
}));

export const BurgerIcon = styled(MenuIcon)(() => ({
  color: Colors.color1,
  width: "30px",
  height: "34px",
}));
