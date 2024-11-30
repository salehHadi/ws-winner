import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import PromotionMessage from "./components/promotionMessage";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import ProductDetailsPage from "./pages/productDetailsPage";
import CartPage from "./pages/cartPage";
import "./styles/general.css";
// import { UIProvider } from "./contexts/ui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PromotionMessage />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Appbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
