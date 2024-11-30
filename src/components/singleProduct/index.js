import { Link } from "react-router-dom";
import {
  ButtonContainer,
  CartIcon,
  FlexContainer,
  ItemText2,
} from "../../styles";

import { Colors } from "../../styles/theme";
import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function SingleProduct(props) {
  const { id, image, title, variant } = props.data;

  const [selectedValue, setSelectedValue] = useState(variant[0].capsulesNo);
  const [productPrice, setProductPrice] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the state with the selected value
    // console.log(event.target.value, variant, "here");
  };

  useEffect(() => {
    const price = variant.find((e) => e.capsulesNo === selectedValue);

    setProductPrice(price.price);
  }, [selectedValue]);

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FlexContainer
      type="column"
      sx={{
        gap: "20px",
        width: matches ? "160px" : "206px",
        border: `1px solid rgba(7, 36, 8, 0.2)`,
        borderRadius: "4px",
        padding: "10px",
      }}
    >
      <Link to={`/shop/${id}`}>
        <img src={image} alt="product-image" width="100%" />
        <ItemText2
          sx={{
            maxWidth: "100%",
            textAlign: "center",
            borderBottom: `1px solid ${Colors.color1}`,
          }}
        >
          {title}
        </ItemText2>
      </Link>
      <FlexContainer justifyContent="space-between" width="100%">
        <select
          name="example"
          id="example"
          style={{ width: "100%" }}
          value={selectedValue}
          onChange={handleChange}
        >
          {variant.map((e) => (
            <option value={e.capsulesNo} id={e.capsulesNo}>
              {e.capsulesNo}
            </option>
          ))}
        </select>
        <ItemText2 width="100%" textAlign="right">
          عدد الكبسولات
        </ItemText2>
      </FlexContainer>

      <FlexContainer justifyContent="space-between" width="100%" mt={-1}>
        <ItemText2 width="100%" textAlign="center">
          {productPrice}
        </ItemText2>
        <ItemText2 width="100%" textAlign="right">
          السعر
        </ItemText2>
      </FlexContainer>

      <ButtonContainer sx={{ background: Colors.color1, borderRadius: "4px" }}>
        <CartIcon sx={{ width: "20px", height: "18px", color: Colors.white }} />
        <ItemText2 color={Colors.white}>.. أضف الى السله</ItemText2>
      </ButtonContainer>
    </FlexContainer>
  );
}
