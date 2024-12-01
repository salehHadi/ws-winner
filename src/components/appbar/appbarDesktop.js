import { Link } from "react-router-dom";
import {
  ButtonContainerDesktop,
  CartIcon,
  FlexContainer,
  ItemText2,
} from "../../styles";
import {
  AppbarContainer,
  TypographyText,
  IconSearch,
  LogoImage,
  SearchBar,
  UserIcon,
  // MyListDe,
  MyListDesktop,
} from "../../styles/appbar";

export default function AppbarDesktop({ matches }) {
  return (
    <>
      <AppbarContainer>
        {/* Logo Section */}
        <FlexContainer
          sx={{
            justifyContent: "start",
            width: "250px",
          }}
        >
          <Link to="/">
            <LogoImage
              src="https://i.ibb.co/ZdSyTgL/logo512.png"
              alt="logo"
              width={"72px"}
            />
          </Link>
        </FlexContainer>

        {/* Search Section */}
        <FlexContainer sx={{ position: "relative" }}>
          <SearchBar placeholder=".. ابحث عن المنتج" type="text" />
          <IconSearch />
        </FlexContainer>

        {/* Login section */}
        <FlexContainer>
          <FlexContainer mr={1}>
            <TypographyText>تسجيل الدخول / تسجيل حساب جديد</TypographyText>
            <UserIcon />
          </FlexContainer>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </FlexContainer>
      </AppbarContainer>

      <FlexContainer
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", width: "100%" }}
      >
        <MyListDesktop type="row">
          <Link to="/">
            <ButtonContainerDesktop>
              <ItemText2>.. من نحن</ItemText2>
            </ButtonContainerDesktop>
          </Link>
          <Link to="/shop">
            <ButtonContainerDesktop>
              <ItemText2>المتجر</ItemText2>
            </ButtonContainerDesktop>
          </Link>
          <Link to="/">
            <ButtonContainerDesktop>
              <ItemText2>الرئيسية</ItemText2>
            </ButtonContainerDesktop>
          </Link>
        </MyListDesktop>
      </FlexContainer>
    </>
  );
}
