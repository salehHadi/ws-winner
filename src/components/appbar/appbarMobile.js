import { useState } from "react";
import {
  ButtonContainer,
  CartIcon,
  FlexContainer,
  ItemText,
} from "../../styles";
import {
  AppbarContainer,
  BurgerIcon,
  IconSearch,
  LogoImage,
  MyList,
  SearchBar,
  UserIcon,
} from "../../styles/appbar";
import { Link } from "react-router-dom";

export default function AppbarMobile({ matches }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <AppbarContainer>
        {/* Login section */}
        <FlexContainer
          sx={{
            width: "100%",
            justifyContent: "start",
          }}
        >
          <FlexContainer mr={1}>
            <Link to="/">
              <UserIcon />
            </Link>
          </FlexContainer>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </FlexContainer>

        {/* Logo Section */}
        <FlexContainer
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <LogoImage src="/logo 1.svg" alt="logo" />
          </Link>
        </FlexContainer>

        {/* Menu Container */}
        <FlexContainer
          sx={{
            width: "100%",
            justifyContent: "end",
          }}
        >
          <BurgerIcon
            onClick={() => setIsVisible(!isVisible)}
            sx={{ cursor: "pointer" }}
          />
        </FlexContainer>
      </AppbarContainer>

      {isVisible && (
        <MyList>
          <Link to="/" onClick={() => setIsVisible(false)}>
            <ButtonContainer>
              <ItemText>الرئيسية</ItemText>
            </ButtonContainer>
          </Link>
          <Link to="/shop" onClick={() => setIsVisible(false)}>
            <ButtonContainer>
              <ItemText>المتجر</ItemText>
            </ButtonContainer>
          </Link>
          {/* <Link to="/shop" onClick={() => setIsVisible(false)}>
            <ButtonContainer>
              <ItemText>.. من نحن</ItemText>
            </ButtonContainer>
          </Link> */}
        </MyList>
      )}

      {/* Search Section */}
      <FlexContainer
        sx={{ position: "relative", width: "100%", marginTop: "8px" }}
      >
        <SearchBar placeholder=".. ابحث عن المنتج" type="text" />
        <IconSearch />
      </FlexContainer>
    </>
  );
}
