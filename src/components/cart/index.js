import React from "react";
import { FlexContainer, ItemText, ItemText2 } from "../../styles";
import { Colors } from "../../styles/theme";
import { ListItemButton, useMediaQuery, useTheme } from "@mui/material";
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
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function CartComponent() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { cartProducts, setCartProducts } = useUIContext();

  const calculateTotal = cartProducts.map((el) => {
    const getPriceSelected = el.variant.find((e) => e.isActive === true);
    return el.count * parseFloat(getPriceSelected.price);
  });

  const totalCart = calculateTotal.reduce((a, b) => a + b, 0);

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
        <Link to="/shop">
          <TextElement>جميع المنتجات</TextElement>
        </Link>
        <TextElement>/</TextElement>
        <Link to="/">
          <TextElement>الصفحة الرئيسية</TextElement>
        </Link>
      </FlexContainer>

      <FlexContainer width="100%" gap={3}>
        {/* flex for buy buttom */}

        {cartProducts.length > 0 && (
          <PurchaseContainer
            borderRight={!matches && "1px solid black"}
            paddingRight={1}
            paddingBottom={2}
            gap={2}
          >
            <FlexContainer gap={2}>
              <ItemText>{totalCart} SAR</ItemText>
              <ItemText>اجمالي العربة</ItemText>
            </FlexContainer>

            <PurchaseButton>آدفع الآن</PurchaseButton>
          </PurchaseContainer>
        )}

        {/* flex for items */}

        <FlexContainer
          type="column"
          sx={{ width: "100%", gap: 3, justifyContent: "space-between" }}
        >
          <CartItemContainer>
            <FlexContainer
              gap={3}
              sx={{ width: "50%", justifyContent: "space-between" }}
            >
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
          {cartProducts.length > 0 ? (
            cartProducts.map((el) => {
              const optionValue = el.variant.find((e) => e.isActive === true);

              const handleChange = (event) => {
                const newVariant = el.variant.map((e) =>
                  e.capsulesNo === event.target.value
                    ? { ...e, isActive: true }
                    : { ...e, isActive: false }
                );
                setCartProducts((pre) => {
                  return pre.map((element) =>
                    element.id === el.id
                      ? { ...element, variant: newVariant }
                      : element
                  );
                });
              };

              return (
                <CartItemContainer>
                  <FlexContainer
                    gap={2}
                    type="column"
                    sx={{ justifyContent: "space-around", width: "50%" }}
                  >
                    <FlexContainer
                      sx={{ width: "100%", justifyContent: "space-between" }}
                    >
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
                        <ListItemButton
                          onClick={() => {
                            setCartProducts((pre) => {
                              return pre.map((element) =>
                                element.id === el.id
                                  ? {
                                      ...element,
                                      count:
                                        element.count >= 2
                                          ? element.count - 1
                                          : 1,
                                    }
                                  : element
                              );
                            });
                          }}
                          sx={{
                            fontSize: "16px",
                            padding: "2px 8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:
                              el.count === 1 ? "#D9D9D9" : "white",
                          }}
                          disabled={el.count === 1 ? true : false}
                        >
                          {"-"}
                        </ListItemButton>

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
                        <ListItemButton
                          onClick={() => {
                            setCartProducts((pre) => {
                              return pre.map((element) =>
                                element.id === el.id
                                  ? {
                                      ...element,
                                      count:
                                        element.count >= 99
                                          ? 99
                                          : element.count + 1,
                                    }
                                  : element
                              );
                            });
                          }}
                          sx={{
                            fontSize: "12px",
                            padding: "2px 8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:
                              el.count >= 99 ? "#D9D9D9" : "white",
                          }}
                          disabled={el.count >= 99 ? true : false}
                        >
                          {"+"}
                        </ListItemButton>
                      </CounterContainer>
                      <TextElement>|</TextElement>
                      <TextElement>{optionValue.price}</TextElement>
                    </FlexContainer>

                    <FlexContainer>
                      <ListItemButton>
                        <DeleteForeverIcon
                          onClick={() =>
                            setCartProducts((pre) => {
                              return pre.filter(
                                (element) => element.id !== el.id
                              );
                            })
                          }
                        />
                      </ListItemButton>
                    </FlexContainer>
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
