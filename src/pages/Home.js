import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="h-[1000vh]">
      <Header />
      <Carousel />
      <Intro />
    </div>
  );
}
