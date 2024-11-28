import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { FlexContainer, ItemText, ItemText2, ItemText3 } from "../../styles";

// import ProductDetailsMobile from "./productDetailsMobile";
// import ProductDetailsDesktop from "./productDetailsDesktop";
import { Colors } from "../../styles/theme";
import {
  AddToCartButton,
  AddToCartContainer,
  CounterContainer,
  FiledInput,
} from "../../styles/productDetails";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const theme = useTheme();

  const productId = parseInt(id);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [productDetails, setProductDetails] = useState(
    data.find(({ id }) => id === productId)
  );

  const [productCount, setProductCount] = useState(1);

  function activationStatues(id) {
    const updatedVariants = productDetails.variant.map((el) => {
      return el.capsulesNo === id
        ? { ...el, isActive: true }
        : { ...el, isActive: false };
    });

    setProductDetails((prevProduct) => ({
      ...prevProduct,
      variant: updatedVariants,
    }));
  }

  return (
    <FlexContainer type="column" width="100%" gap="16px">
      {/* Navigation */}
      <FlexContainer
        sx={{
          width: "100%",
          justifyContent: "end",
          gap: "8px",
        }}
      >
        <ItemText2
          sx={{
            color: Colors.color6,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            direction: "rtl",
            width: "150px",
          }}
        >
          {productDetails.title}
        </ItemText2>
        <ItemText2>/</ItemText2>
        <ItemText2>جميع المنتجات</ItemText2>
        <ItemText2>/</ItemText2>
        <ItemText2>الصفحة الرئيسية</ItemText2>
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
          <img
            src={productDetails.image}
            alt="img"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          {/* Top part */}
          <FlexContainer
            type="column"
            gap={2}
            sx={{
              borderTop: `2px solid ${Colors.color1}`,
              borderBottom: `2px solid ${Colors.color1}`,
              padding: "4px 0",
            }}
          >
            <ItemText>{productDetails.title}</ItemText>
            <ItemText
              sx={{
                borderTop: `2px solid ${Colors.color1}`,
                width: "100%",
                textAlign: "end",
                padding: "4px 0",
                color: Colors.color5,
              }}
            >
              .. {productDetails.productState}
            </ItemText>
          </FlexContainer>

          {/* Selection Part */}
          <FlexContainer type="column" gap={"10px"} mt={"20px"}>
            <ItemText2 color="#E24949" width="100%" textAlign="end">
              إختار الحجم
            </ItemText2>

            <FlexContainer color={Colors.color4} gap={2} flexWrap={"wrap"}>
              {productDetails.variant.map((el) => (
                <FlexContainer
                  onClick={() => activationStatues(el.capsulesNo)}
                  type="column"
                  sx={{
                    border: `2px solid ${Colors.color4}`,
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
              استمتع بفوائد مذهلة لصحة القلب والمناعة مع مكمل بربارين مع قرفة
              سيلان، الذي يحتوي على 5000 مجم من المكونات الطبيعية القوية في كل
              عبوة تضم 150 كبسولة. يجمع هذا المنتج بين خصائص البربارين المعروفة
              والفوائد الصحية لقرفة سيلان، مما يجعله خيارًا مثاليًا لدعم نمط
              حياة صحي. ### الفوائد الرئيسية: - **دعم صحة القلب:** يساعد
              البربارين في تحسين مستويات الكولسترول وتنظيم ضغط الدم، مما يعزز
              صحة القلب والشرايين. - **تعزيز المناعة:** قرفة سيلان تُعتبر مضادًا
              للأكسدة، مما يساعد على تعزيز جهاز المناعة وحماية الجسم من الأمراض.
              - **تحسين مستويات السكر:** يُسهم البربارين في تحسين حساسية
              الأنسولين وتنظيم مستويات السكر في الدم، مما يفيد بشكل خاص مرضى
              السكري. - **تحسين الهضم:** تمتاز قرفة سيلان بخصائصها المساعدة على
              الهضم، مما يعزز من صحة الجهاز الهضمي بشكل عام. ### الاستخدام: توصى
              بتناول كبسولة واحدة يوميًا مع كوب من الماء، ويفضل تناولها مع
              الطعام لتحقيق أفضل النتائج. ### ملاحظة: قبل بدء استخدام بربارين مع
              قرفة سيلان، يُفضل استشارة الطبيب، خاصةً للأشخاص الذين يتناولون
              أدوية معينة أو يعانون من حالات صحية خاصة. اجعل بربارين مع قرفة
              سيلان 5000 مجم جزءًا من روتينك اليومي، واستمتع بالفوائد الصحية
              المتعددة التي تعزز من صحتك العامة وجودة حياتك!
            </ItemText3>
          </FlexContainer>
        </Grid>

        {/*  */}

        <Grid item xs={12} md={3} lg={4}>
          <AddToCartContainer type={matches ? "row" : "column"} gap={3}>
            <FlexContainer type="column">
              <ItemText2 color={Colors.color4}>عدد العبوات</ItemText2>
              <CounterContainer>
                <FiledInput
                  type="number"
                  min={1}
                  step={1}
                  max={99}
                  value={productCount}
                />
                <ItemText
                  onClick={() => setProductCount((pre) => pre + 1)}
                  sx={{
                    position: "absolute",
                    right: "5px",
                    top: "0px",
                    fontSize: "20px",
                    // backgroundColor: "#D9D9D9",
                    padding: "4px 12px 8px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  {"+"}
                </ItemText>
                <ItemText
                  onClick={() =>
                    setProductCount((pre) => (pre >= 2 ? pre - 1 : pre))
                  }
                  sx={{
                    position: "absolute",
                    left: "10px",
                    top: "0px",
                    fontSize: "20px",
                    // backgroundColor: "#D9D9D9",
                    padding: "4px 12px 8px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  {"-"}
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

            <AddToCartButton>آضف الى السله</AddToCartButton>
          </AddToCartContainer>
        </Grid>
      </Grid>
    </FlexContainer>
  );
}
