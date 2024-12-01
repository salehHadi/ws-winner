import { Link } from "react-router-dom";
import {
  ButtonContainer,
  CartIcon,
  FlexContainer,
  ItemText2,
  ItemText4,
  ItemText5,
} from "../../styles";

import { Colors } from "../../styles/theme";
import { useMediaQuery, useTheme } from "@mui/material";
import { useUIContext } from "../../contexts/ui";

export default function SingleProduct(props) {
  const { id, image, title, variant } = props.data;

  const { allProductsData, setAllProductsData } = useUIContext();

  const getProduct = allProductsData.find((e) => e.id === id);
  const optionValue = getProduct.variant.find((e) => e.isActive === true);

  const price = variant.find((e) => e.isActive === true);

  const handleChange = (event) => {
    const newVariant = getProduct.variant.map((e) =>
      e.capsulesNo === event.target.value
        ? { ...e, isActive: true }
        : { ...e, isActive: false }
    );
    setAllProductsData((pre) => {
      return pre.map((el) =>
        el.id === id ? { ...el, variant: newVariant } : el
      );
    });
  };

  // console.log(allProductsData, "allProductsData");

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FlexContainer
      type="column"
      sx={{
        gap: "20px",
        width: matches ? "40%" : "206px",
        maxWidth: "206px",
        border: `1px solid rgba(7, 36, 8, 0.2)`,
        borderRadius: "4px",
        padding: "10px",
      }}
    >
      <Link to={`/shop/${id}`}>
        <img src={image} alt="product-image" width="100%" />
        <ItemText4
          sx={{
            maxWidth: "100%",
            height: "48px",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3, // Limit to 3 lines
            textOverflow: "ellipsis",
            textAlign: "center",
            borderBottom: `1px solid ${Colors.color1}`,
            marginTop: "4px",
          }}
        >
          {title}
        </ItemText4>
      </Link>
      <FlexContainer justifyContent="space-between" width="100%">
        <select
          name="example"
          id="example"
          style={{ width: "70%" }}
          value={optionValue.capsulesNo}
          onChange={handleChange}
        >
          {variant.map((e) => (
            <option value={e.capsulesNo} id={e.capsulesNo}>
              {e.capsulesNo}
            </option>
          ))}
        </select>
        <ItemText5 width="100%" textAlign="right">
          عدد الكبسولات
        </ItemText5>
      </FlexContainer>

      <FlexContainer justifyContent="space-between" width="100%" mt={-1}>
        <ItemText2 width="100%" textAlign="start" paddingLeft={1}>
          {price.price}
        </ItemText2>
        <ItemText2 width="100%" textAlign="right">
          السعر
        </ItemText2>
      </FlexContainer>

      <ButtonContainer sx={{ background: Colors.color1, borderRadius: "4px" }}>
        <CartIcon sx={{ width: "20px", height: "18px", color: Colors.white }} />
        {matches ? (
          <ItemText4 color={Colors.white}>.. أضف الى السله</ItemText4>
        ) : (
          <ItemText2 color={Colors.white}>.. أضف الى السله</ItemText2>
        )}
      </ButtonContainer>
    </FlexContainer>
  );
}
