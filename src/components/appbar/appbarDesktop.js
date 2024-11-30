import { Link } from "react-router-dom";
import {
  ButtonContainerDesktop,
  CartIcon,
  FlexContainer,
  ItemText,
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
              width={"99px"}
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
          <CartIcon />
        </FlexContainer>
      </AppbarContainer>

      <MyListDesktop type="row">
        <Link to="/">
          <ButtonContainerDesktop>
            <ItemText>.. من نحن</ItemText>
          </ButtonContainerDesktop>
        </Link>
        <Link to="/shop">
          <ButtonContainerDesktop>
            <ItemText>المتجر</ItemText>
          </ButtonContainerDesktop>
        </Link>
        <Link to="/">
          <ButtonContainerDesktop>
            <ItemText>الرئيسية</ItemText>
          </ButtonContainerDesktop>
        </Link>
      </MyListDesktop>
    </>
  );
}
