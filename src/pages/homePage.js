import HomeComponent from "../components/home/index";
import MostSales from "../components/mostSales";
import { SecondBanner } from "../components/secondBanner";

export function HomePage() {
  return (
    <>
      <HomeComponent />
      <MostSales />
      <SecondBanner />
    </>
  );
}
