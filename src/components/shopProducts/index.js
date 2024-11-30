import {
  ButtonContainer,
  FlexContainer,
  ItemText,
  ItemText2,
} from "../../styles";
import { Colors } from "../../styles/theme";
import SingleProduct from "../singleProduct";
import data from "../../data/data.json";
import { Link } from "react-router-dom";
// import HouseSidingIcon from "@mui/icons-material/HouseSiding";

export default function ShopProducts() {
  return (
    <>
      <FlexContainer type="column" width="100%" gap="16px">
        {/* top part */}
        <FlexContainer
          sx={{
            width: "100%",
            justifyContent: "end",
            gap: "8px",
          }}
        >
          <ItemText2 sx={{ color: Colors.color6 }}>جميع المنتجات</ItemText2>
          <ItemText2>/</ItemText2>
          <Link to="/">
            <ItemText2>الصفحة الرئيسية</ItemText2>
          </Link>
        </FlexContainer>

        {/* Product Collection Part */}
        <FlexContainer
          sx={{
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {data.map((e) => (
            <SingleProduct data={e} />
          ))}
        </FlexContainer>

        {/* CTA Button */}

        {/* <ButtonContainer
          sx={{
            border: `1px solid ${Colors.color1}`,
            borderRadius: "4px",
            padding: "10px",
            gap: "10px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src="/storeIcon.svg"
            alt="store Icon"
            style={{ width: "27px", height: "22px" }}
          />
          <HouseSidingIcon />
          <ItemText2>استعراض كافة المنتجات</ItemText2>
        </ButtonContainer> */}
      </FlexContainer>
    </>
  );
}
