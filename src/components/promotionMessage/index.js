import { Container, Slide } from "@mui/material";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import GppGoodIcon from "@mui/icons-material/GppGood";
import {
  ContactContainer,
  PromotionContainer,
  SecondContainer,
  Text,
  VisionContainer,
  VisionMessage,
} from "../../styles/promotionMessage";
import { useEffect, useState } from "react";

export default function PromotionMessage() {
  const messages = [
    {
      message: ".. الدفع آمن",
      icon: <CreditScoreIcon />,
    },
    {
      message: ".. 100% منتجات اصلية ",
      icon: <GppGoodIcon />,
    },
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const interValidId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(interValidId);
    };
  }, []);

  return (
    <>
      <VisionContainer>
        <VisionMessage>
          الشركة الاولى في الشرق الاوسط و شمال افريقيا في مجال المكملات
        </VisionMessage>
      </VisionContainer>
      <SecondContainer>
        <Container
          sx={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
        >
          <Slide
            direction={show ? "up" : "down"}
            in={show}
            timeout={{
              enter: 300,
              exit: 300,
            }}
          >
            <PromotionContainer>
              {messages[messageIndex].icon}
              <Text>{messages[messageIndex].message}</Text>
            </PromotionContainer>
          </Slide>
          <ContactContainer>
            <Text>خدمة العملاء: 00966576638198</Text>
          </ContactContainer>
        </Container>
      </SecondContainer>
    </>
  );
}
