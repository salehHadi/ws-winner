import { Box } from "@mui/material";
import {
  FooterBottomContainer,
  FooterContainer,
  FooterElementContainer,
  FooterUpperContainer,
} from "../../styles/footer";
import { FlexContainer, ItemText, ItemText2, ItemText3 } from "../../styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return (
    <FooterContainer>
      <FooterUpperContainer>
        <FooterElementContainer type="column">
          <FlexContainer>
            <ItemText2>تواصل معنا</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={1}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end" }}>
            <ItemText3>معلومات التواصل</ItemText3>
            <ItemText3>+واتس اب: 966576638198</ItemText3>
            <ItemText3>sasa97977s@hotmail.com : ايميل </ItemText3>
          </FlexContainer>
        </FooterElementContainer>
        <FooterElementContainer type="column">
          <FlexContainer>
            <ItemText2>تواصل معنا</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={1}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end" }}>
            <ItemText3>معلومات التواصل</ItemText3>
            <ItemText3>+واتس اب: 966576638198</ItemText3>
            <ItemText3>sasa97977s@hotmail.com : ايميل </ItemText3>
          </FlexContainer>
        </FooterElementContainer>
        <FooterElementContainer type="column">
          <FlexContainer>
            <ItemText2>تواصل معنا</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={1}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end" }}>
            <ItemText3>معلومات التواصل</ItemText3>
            <ItemText3>+واتس اب: 966576638198</ItemText3>
            <ItemText3>sasa97977s@hotmail.com : ايميل </ItemText3>
          </FlexContainer>
        </FooterElementContainer>
        <FooterElementContainer type="column">
          <FlexContainer>
            <ItemText2>تواصل معنا</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={1}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end" }}>
            <ItemText3>معلومات التواصل</ItemText3>
            <ItemText3>+واتس اب: 966576638198</ItemText3>
            <ItemText3>sasa97977s@hotmail.com : ايميل </ItemText3>
          </FlexContainer>
        </FooterElementContainer>
        <FooterElementContainer type="column">
          <FlexContainer>
            <ItemText2>تواصل معنا</ItemText2>
            <Box sx={{ fontWeight: "bold" }} ml={1}>
              |
            </Box>
          </FlexContainer>
          <FlexContainer type="column" sx={{ alignItems: "end" }}>
            <ItemText3>معلومات التواصل</ItemText3>
            <ItemText3>+واتس اب: 966576638198</ItemText3>
            <ItemText3>sasa97977s@hotmail.com : ايميل </ItemText3>
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
          <ItemText>شروط الاستخدام</ItemText>
          <Box sx={{ fontWeight: "bold" }} ml={1} mr={1}>
            |
          </Box>
          <ItemText>سياسة الخصوصة</ItemText>
        </FlexContainer>
      </FooterBottomContainer>
    </FooterContainer>
  );
}
