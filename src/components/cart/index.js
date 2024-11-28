import React from "react";
import { FlexContainer, ItemText } from "../../styles";
import { Colors } from "../../styles/theme";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  CartItemContainer,
  ImageContainer,
  ProductTitle,
  PurchaseButton,
  PurchaseContainer,
  TextElement,
} from "../../styles/cart";

export default function CartComponent() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
        <PurchaseContainer
          borderRight={!matches && "1px solid black"}
          paddingRight={1}
          gap={2}
        >
          <FlexContainer gap={2}>
            <ItemText>105.99 SAR</ItemText>
            <ItemText>اجمالي العربة</ItemText>
          </FlexContainer>

          <PurchaseButton>آدفع الآن</PurchaseButton>
        </PurchaseContainer>

        {/* flex for items */}
        <FlexContainer type="column" sx={{ width: "100%", gap: 3 }}>
          <CartItemContainer>
            <FlexContainer gap={3}>
              <TextElement>المجموع</TextElement>
              <ItemText>|</ItemText>
              <TextElement>الكمية</TextElement>
              <ItemText>|</ItemText>
              <TextElement>السعر</TextElement>
            </FlexContainer>
            <FlexContainer sx={{ alignItems: "end", gap: 1 }}>
              <TextElement sx={{ fontSize: "8px" }}>
                مجموع القطع ( ٢ قطعة )
              </TextElement>
              <ItemText>محتويات السلة</ItemText>
            </FlexContainer>
          </CartItemContainer>

          {/* Product drtalies */}
          <CartItemContainer>
            <FlexContainer gap={2}>
              <TextElement>105.99</TextElement>
              <ItemText>|</ItemText>
              <TextElement>
                <input style={{ width: "60px" }} />
              </TextElement>
              <ItemText>|</ItemText>
              <TextElement>105.99</TextElement>
            </FlexContainer>

            <FlexContainer
              sx={{ alignItems: "start", gap: 1, overflow: "hidden" }}
            >
              <FlexContainer type="column" gap={2}>
                <ProductTitle>
                  حلوى جيلاتينية - تركيبة معدنية متعددة الفيتامينات اليومية
                  للأطفال - مع فيتامين C وD3 والزنك
                </ProductTitle>

                <FlexContainer
                  justifyContent="center"
                  type="column"
                  width="100%"
                >
                  <TextElement
                    width="100%"
                    textAlign="right"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    حجم العبوة
                  </TextElement>
                  <select name="example" id="example" style={{ width: "70%" }}>
                    <option value="value1">Option 1</option>
                    <option value="value2">Option 2</option>
                    <option value="value3">Option 3</option>
                  </select>
                </FlexContainer>
              </FlexContainer>
              <ImageContainer>
                <img src="/productImage2.png" alt="product img" width="100%" />
              </ImageContainer>
            </FlexContainer>
          </CartItemContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
