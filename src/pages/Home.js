import Intro from "../components/home/Intro";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Carousel from "../components/home/Carousel";
import Products from "../components/home/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Intro />
      <Products />
      <Footer />
    </>
  );
}
