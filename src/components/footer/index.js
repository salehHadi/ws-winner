import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  FooterBottomContainer,
  FooterContainer,
  FooterElementContainer,
  FooterUpperContainer,
} from "../../styles/footer";
import { FlexContainer, ItemText2, ItemText5 } from "../../styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FooterContainer>
      <FooterUpperContainer>
        <FooterElementContainer type="column" order={matches ? 1 : 5}>
          <FlexContainer mb={1}>
            <ItemText2>تواصل معنا</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={0.5}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end", gap: "4px" }}>
            <a href="https://wa.me/+966576638198">
              <ItemText5>+واتس اب: 966576638198</ItemText5>
            </a>
            <a href="mailto:sasa97977s@hotmail.com">
              <ItemText5>sasa97977s@hotmail.com : ايميل </ItemText5>
            </a>
          </FlexContainer>
        </FooterElementContainer>

        <FooterElementContainer type="column" order={matches ? 2 : 4}>
          <FlexContainer mb={1}>
            <ItemText2> .. روابط مهمة</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={0.5}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end", gap: "4px" }}>
            <Link to="#">
              <ItemText5>.. من نحن</ItemText5>
            </Link>
            <Link to="/shop">
              <ItemText5>صفحة المتجر </ItemText5>
            </Link>
          </FlexContainer>
        </FooterElementContainer>

        <FooterElementContainer type="column" order={matches ? 3 : 3}>
          <FlexContainer mb={1}>
            <ItemText2> الطلب و الشحن</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={0.5}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end", gap: "4px" }}>
            <Link to="#">
              <ItemText5>تتبع شحنتك</ItemText5>
            </Link>
            <Link to="#">
              <ItemText5>الشحن و التوصيل </ItemText5>
            </Link>
            <Link to="#">
              <ItemText5>الاسترجاع & استيراد الاموال </ItemText5>
            </Link>
          </FlexContainer>
        </FooterElementContainer>

        <FooterElementContainer type="column" order={matches ? 4 : 2}>
          <FlexContainer mb={1}>
            <ItemText2> روابط اخرى</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={0.5}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end", gap: "4px" }}>
            <Link to="#">
              <ItemText5>الفرص الوظيفية</ItemText5>
            </Link>
            <Link to="#">
              <ItemText5>طلبات الجملة </ItemText5>
            </Link>
          </FlexContainer>
        </FooterElementContainer>

        <FooterElementContainer type="column" order={matches ? 5 : 1}>
          <FlexContainer mb={1}>
            <ItemText2> إخلاء المسؤولية</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={0.5}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end", gap: "4px" }}>
            <ItemText5 sx={{ direction: "rtl" }}>
              ليس بالضروره ان تكون جميع المنتجات والبيانات الموجودة على هذا
              الموقع قد قيمة من قبل إدارة الغذاء والدواء في البلد الخاص بك وليس
              المقصود منها تشخيص أي مرض أو علاجه أو الوقاية منه.
            </ItemText5>
          </FlexContainer>
        </FooterElementContainer>
      </FooterUpperContainer>

      <FooterBottomContainer>
        <FlexContainer ml={2}>
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
          <LinkedInIcon />
        </FlexContainer>

        <FlexContainer mr={2}>
          <ItemText2>شروط الاستخدام</ItemText2>
          <Box sx={{ fontWeight: "bold" }} ml={1} mr={1}>
            |
          </Box>
          <ItemText2>سياسة الخصوصة</ItemText2>
        </FlexContainer>
      </FooterBottomContainer>
    </FooterContainer>
  );
}
