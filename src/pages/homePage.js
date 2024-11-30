// import HomeComponent from "../components/home/index";
import MostSales from "../components/mostSales";
import { SecondBanner } from "../components/secondBanner";
import { ContactUs } from "../components/contactUs";
import ScrollToTop from "../animations/ScrollToTop";

export function HomePage() {
  return (
    <>
      <ScrollToTop />
      {/* <HomeComponent /> */}
      <MostSales />
      <SecondBanner />
      <ContactUs />
    </>
  );
}
