import Header from "../components/home/Header";
import Carousel from "../components/home/Carousel";
import Intro from "../components/home/Intro";
import Products from "../components/home/Products";

export default function Home() {
  return (
    <div className="h-[1000vh]">
      <Header />
      <Carousel />
      <Intro />
      <Products />
    </div>
  );
}
