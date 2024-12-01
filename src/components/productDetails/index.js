import { Grid, useMediaQuery, useTheme } from "@mui/material";
import {
  CartIcon,
  FlexContainer,
  ItemText,
  ItemText2,
  ItemText3,
  ItemText4,
} from "../../styles";

// import getProductMobile from "./productDetailsMobile";
// import ProductDetailsDesktop from "./productDetailsDesktop";
import { Colors } from "../../styles/theme";
import {
  AddToCartButton,
  AddToCartContainer,
  CounterContainer,
  FiledInput,
} from "../../styles/productDetails";
import { Link, useParams } from "react-router-dom";
// import data from "../../data/data.json";
import { useState } from "react";
import { useUIContext } from "../../contexts/ui";

export default function ProductDetails() {
  const { id } = useParams();
  const theme = useTheme();

  const productId = parseInt(id);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const {
    allProductsData,
    setAllProductsData,
    addCount,
    decreaseCount,
    productCount,
  } = useUIContext();

  const getProduct = allProductsData.find(({ id }) => id === productId);

  function activationStatues(id) {
    const newVariant = getProduct.variant.map((el) => {
      return el.capsulesNo === id
        ? { ...el, isActive: true }
        : { ...el, isActive: false };
    });

    setAllProductsData((pre) => {
      return pre.map((el) =>
        el.id === getProduct.id ? { ...el, variant: newVariant } : el
      );
    });
  }

  const addToCart = () => {
    setAllProductsData((pre) => {
      return pre.map((el) =>
        el.id === id ? { ...el, addedToCart: true } : el
      );
    });
  };

  return (
    <FlexContainer type="column" width="100%" gap="16px">
      {/* Navigation */}
      <FlexContainer
        sx={{
          width: "100%",
          justifyContent: "end",
          gap: "8px",
          marginBottom: "20px",
          marginTop: "-20px",
        }}
      >
        <ItemText4
          sx={{
            color: Colors.color6,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            direction: "rtl",
            width: "150px",
          }}
        >
          {getProduct.title}
        </ItemText4>
        <ItemText4>/</ItemText4>
        <Link to="/shop">
          <ItemText4>جميع المنتجات</ItemText4>
        </Link>
        <ItemText4>/</ItemText4>
        <Link to="/">
          <ItemText4>الصفحة الرئيسية</ItemText4>
        </Link>
      </FlexContainer>

      {/* Product details */}

      <Grid
        spacing={0}
        container
        sx={{
          justifyContent: "center",
          alignItems: "start",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} md={3} lg={4}>
          <img src={getProduct.image} alt="img" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          {/* Top part */}
          <FlexContainer
            type="column"
            gap={2}
            sx={{
              borderTop: `1px solid ${Colors.color1}`,
              borderBottom: `1px solid ${Colors.color1}`,
              padding: "4px 0",
            }}
          >
            <ItemText2>{getProduct.title}</ItemText2>
            <ItemText2
              sx={{
                borderTop: `1px solid ${Colors.color1}`,
                width: "100%",
                textAlign: "end",
                padding: "4px 0",
                color:
                  getProduct.productState === "متوفر" ? Colors.color5 : "red",
              }}
            >
              .. {getProduct.productState}
            </ItemText2>
          </FlexContainer>

          {/* Selection Part */}
          <FlexContainer type="column" gap={"10px"} mt={"20px"}>
            <ItemText2 color="#E24949" width="100%" textAlign="end">
              إختار الحجم
            </ItemText2>

            <FlexContainer color={Colors.color4} gap={2} flexWrap={"wrap"}>
              {getProduct.variant.map((el) => (
                <FlexContainer
                  onClick={() => activationStatues(el.capsulesNo)}
                  type="column"
                  sx={{
                    border: `1px solid ${Colors.color4}`,
                    borderRadius: "4px",
                    padding: "4px",
                    opacity: el.isActive ? "100%" : "50%",
                    cursor: "pointer",
                  }}
                >
                  <ItemText> {el.capsulesNo} :عدد الكبسولات</ItemText>
                  <ItemText
                    fontFamily={"Roboto Slab, serif"}
                    fontWeight={"bold"}
                  >
                    {el.price} SAR
                  </ItemText>
                </FlexContainer>
              ))}
            </FlexContainer>
          </FlexContainer>

          {/* Description */}
          <FlexContainer type="column" mt={5} gap={2}>
            <ItemText2 color={Colors.color4} textAlign="end" width="100%">
              وصف المنتج
            </ItemText2>
            <ItemText3
              sx={{
                lineHeight: "2.0",
                maxHeight: "200px",
                overflow: "scroll",
                marginBottom: 5,
              }}
            >
              {getProduct.description}
            </ItemText3>
          </FlexContainer>
        </Grid>

        {/*  */}

        <Grid item xs={12} md={3} lg={4}>
          <AddToCartContainer type={matches ? "row" : "column"} gap={3}>
            <FlexContainer type="column">
              <ItemText2 color={Colors.color4}>عدد العبوات</ItemText2>
              <CounterContainer>
                <ItemText
                  onClick={() => decreaseCount()}
                  sx={{
                    fontSize: "20px",
                    // backgroundColor: "#D9D9D9",
                    padding: "4px 12px 8px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  {"-"}
                </ItemText>

                <FiledInput
                  type="number"
                  min={1}
                  step={1}
                  max={99}
                  value={productCount}
                />
                <ItemText
                  onClick={() => addCount()}
                  sx={{
                    fontSize: "20px",
                    // backgroundColor: "#D9D9D9",
                    padding: "4px 12px 8px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  {"+"}
                </ItemText>
              </CounterContainer>
            </FlexContainer>

            {!matches && (
              <FlexContainer gap={3}>
                <ItemText
                  fontFamily={"Roboto Slab, serif"}
                  color={Colors.color5}
                >
                  115.00 SAR
                </ItemText>
                <ItemText fontFamily={"Roboto Slab, serif"}>الاجمالي</ItemText>
              </FlexContainer>
            )}

            <AddToCartButton onClick={() => addToCart()}>
              {" "}
              <CartIcon
                sx={{ width: "20px", height: "18px", color: Colors.white }}
              />
              آضف الى السله
            </AddToCartButton>
          </AddToCartContainer>
        </Grid>
      </Grid>
    </FlexContainer>
  );
}
