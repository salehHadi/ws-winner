import {
  ButtonContainer,
  FlexContainer,
  ItemText,
  ItemText2,
} from "../../styles";
import { Colors } from "../../styles/theme";
import SingleProduct from "../singleProduct";
import data from "../../data/data.json";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Link } from "react-router-dom";

export default function MostSales() {
  const first4Values = data.slice(0, 4);

  return (
    <FlexContainer type="column" width="100%" gap="16px">
      {/* top part */}
      <FlexContainer
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Link to="/shop">
          <ButtonContainer
            sx={{
              border: `1px solid ${Colors.color1}`,
              borderRadius: "4px",
              padding: "10px",
              gap: "10px",
              maxWidth: "max-content",
            }}
          >
            {/* <img
            src="/storeIcon.svg"
            alt="store Icon"
            style={{ width: "27px", height: "22px" }}
          /> */}
            <HouseSidingIcon />
            <ItemText2>استعراض كافة المنتجات</ItemText2>
          </ButtonContainer>
        </Link>

        <ItemText>.. الاكثر مبيعا</ItemText>
      </FlexContainer>

      {/* Product Collection Part */}
      <FlexContainer
        sx={{
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {first4Values.map((e) => (
          <SingleProduct data={e} />
        ))}
      </FlexContainer>

      {/* CTA Button */}

      <Link to="/shop">
        <ButtonContainer
          sx={{
            border: `1px solid ${Colors.color1}`,
            borderRadius: "4px",
            padding: "10px",
            gap: "10px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* <img
          src="/storeIcon.svg"
          alt="store Icon"
          style={{ width: "27px", height: "22px" }}
        /> */}
          <HouseSidingIcon />
          <ItemText2>استعراض كافة المنتجات</ItemText2>
        </ButtonContainer>
      </Link>
    </FlexContainer>
  );
}
