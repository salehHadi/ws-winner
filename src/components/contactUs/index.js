import {
  ButtonContainer,
  FlexContainer,
  ItemText,
  ItemText2,
} from "../../styles";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Colors } from "../../styles/theme";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Link } from "react-router-dom";

export function ContactUs() {
  return (
    <FlexContainer type="column" gap="40px">
      <FlexContainer
        sx={{
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <FlexContainer
          type="column"
          sx={{
            gap: "8px",
            padding: "24px 40px",
          }}
        >
          <EventAvailableIcon sx={{ width: "72px", height: "82px" }} />
          <ItemText>هل تحتاج ألى استشارة</ItemText>
          <ItemText
            sx={{
              fontWeight: "400",
              height: "80px",
              maxWidth: "177px",
              textAlign: "center",
            }}
          >
            يمكنك سؤال خبيرة التغذية المتخصصه ما تريد بشكل مجاني
          </ItemText>
          <ButtonContainer
            sx={{
              backgroundColor: "#FFDD2E",
              borderRadius: "4px",
              padding: "4px 16px",
            }}
          >
            <ItemText>.. اسال الان</ItemText>
          </ButtonContainer>
        </FlexContainer>

        {/* ------------------ */}
        <FlexContainer
          type="column"
          sx={{
            gap: "8px",
            padding: "24px 40px",
          }}
        >
          <QuestionMarkIcon sx={{ width: "82px", height: "82px" }} />
          <ItemText>يمكنك سؤالنا ما تريد</ItemText>
          <ItemText
            sx={{
              fontWeight: "400",
              height: "80px",
              maxWidth: "177px",
              textAlign: "center",
            }}
          >
            يسعدنا سماع ما تريد قوله لخدمتك بشكل افضل
          </ItemText>

          <FlexContainer gap="16px">
            <ButtonContainer
              sx={{
                backgroundColor: "#FFDD2E",
                borderRadius: "4px",
                padding: "4px 16px",
                gap: "8px",
              }}
            >
              <MarkEmailReadIcon />
              <ItemText>ايميل</ItemText>
            </ButtonContainer>
            <ButtonContainer
              sx={{
                backgroundColor: "#FFDD2E",
                borderRadius: "4px",
                padding: "4px 16px",
                gap: "8px",
              }}
            >
              <WhatsAppIcon />
              <ItemText>واتس اب</ItemText>
            </ButtonContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
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
    </FlexContainer>
  );
}
