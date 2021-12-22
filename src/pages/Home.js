import Intro from "../components/home/Intro";
import Header from "../components/home/Header";
import Carousel from "../components/home/Carousel";
import Products from "../components/home/Products";
import Footer from "../components/home/Footer";

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
