import React from "react";
import { FlexContainer, ItemText, ItemText2 } from "../../styles";
import { Colors } from "../../styles/theme";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  CartItemContainer,
  ImageContainer,
  ProductTitle,
  PurchaseButton,
  PurchaseContainer,
  SelectedFiled,
  TextElement,
} from "../../styles/cart";
import { useUIContext } from "../../contexts/ui";
import { CounterContainer, FiledInput } from "../../styles/productDetails";

export default function CartComponent() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const {
    addCount,
    decreaseCount,
    productCount,
    allProductsData,
    setAllProductsData,
  } = useUIContext();

  const products = allProductsData.filter((e) => e.addedToCart === true);

  // const optionValue = getProduct.variant.find((e) => e.isActive === true);

  return (
    <FlexContainer type="column" gap={2} mb={40}>
      <FlexContainer
        sx={{
          width: "100%",
          justifyContent: "end",
          gap: "8px",
        }}
      >
        <TextElement sx={{ color: Colors.color6 }}>عربة التسوق</TextElement>
        <TextElement>/</TextElement>
        <TextElement>جميع المنتجات</TextElement>
        <TextElement>/</TextElement>
        <TextElement>الصفحة الرئيسية</TextElement>
      </FlexContainer>

      <FlexContainer width="100%" gap={3}>
        {/* flex for buy buttom */}

        {products.length > 0 && (
          <PurchaseContainer
            borderRight={!matches && "1px solid black"}
            paddingRight={1}
            paddingBottom={2}
            gap={2}
          >
            <FlexContainer gap={2}>
              <ItemText>105.99 SAR</ItemText>
              <ItemText>اجمالي العربة</ItemText>
            </FlexContainer>

            <PurchaseButton>آدفع الآن</PurchaseButton>
          </PurchaseContainer>
        )}

        {/* flex for items */}

        <FlexContainer type="column" sx={{ width: "100%", gap: 3 }}>
          <CartItemContainer>
            <FlexContainer gap={3}>
              <TextElement>المجموع</TextElement>
              <TextElement>|</TextElement>
              <TextElement>الكمية</TextElement>
              <TextElement>|</TextElement>
              <TextElement>السعر</TextElement>
            </FlexContainer>
            <FlexContainer sx={{ alignItems: "end", gap: 1 }}>
              <ItemText2>محتويات السلة</ItemText2>
            </FlexContainer>
          </CartItemContainer>

          {/* Product drtalies */}
          {products.length > 0 ? (
            products.map((el) => {
              const optionValue = el.variant.find((e) => e.isActive === true);

              const handleChange = (event) => {
                const newVariant = el.variant.map((e) =>
                  e.capsulesNo === event.target.value
                    ? { ...e, isActive: true }
                    : { ...e, isActive: false }
                );
                setAllProductsData((pre) => {
                  return pre.map((element) =>
                    element.id === el.id
                      ? { ...element, variant: newVariant }
                      : element
                  );
                });
              };

              return (
                <CartItemContainer>
                  <FlexContainer gap={2}>
                    <TextElement>
                      {parseFloat(optionValue.price) * el.count}
                    </TextElement>
                    <TextElement>|</TextElement>
                    <CounterContainer
                      sx={{
                        width: "60px",
                        height: "24px",
                      }}
                    >
                      <ItemText
                        onClick={() => decreaseCount()}
                        sx={{
                          fontSize: "16px",
                          // backgroundColor: "#D9D9D9",
                          padding: "2px 4px",
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
                        value={el.count}
                        sx={{
                          fontSize: matches ? "12px" : "16px",
                          height: matches ? "50%" : "70%",
                          width: matches ? "50%" : "70%",
                        }}
                      />
                      <ItemText
                        onClick={() => addCount()}
                        sx={{
                          // backgroundColor: "#D9D9D9",
                          fontSize: "12px",
                          padding: "2px 4px",
                          cursor: "pointer",
                        }}
                      >
                        {"+"}
                      </ItemText>
                    </CounterContainer>
                    <TextElement>|</TextElement>
                    <TextElement>{optionValue.price}</TextElement>
                  </FlexContainer>

                  <FlexContainer
                    sx={{ alignItems: "start", gap: 1, overflow: "hidden" }}
                  >
                    <FlexContainer type="column" gap={1}>
                      <ProductTitle>{el.title}</ProductTitle>

                      <FlexContainer
                        justifyContent="center"
                        type="column"
                        width="100%"
                      >
                        <TextElement
                          width="100%"
                          textAlign="right"
                          sx={{
                            fontSize: "px",
                          }}
                        >
                          حجم العبوة
                        </TextElement>
                        <SelectedFiled
                          name="example"
                          id="example"
                          style={{ width: "70%" }}
                          value={optionValue.capsulesNo}
                          onChange={handleChange}
                        >
                          {el.variant.map((e) => (
                            <option
                              value={e.capsulesNo}
                              id={e.capsulesNo}
                              key={e.capsulesNo}
                            >
                              {e.capsulesNo}
                            </option>
                          ))}
                        </SelectedFiled>
                      </FlexContainer>
                    </FlexContainer>
                    <ImageContainer>
                      <img src={el.image} alt="product img" width="100%" />
                    </ImageContainer>
                  </FlexContainer>
                </CartItemContainer>
              );
            })
          ) : (
            <ItemText> السله فارغه</ItemText>
          )}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
