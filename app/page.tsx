import FifthComponent from "./components/FifthComponent";
import FourSubcomponent from "./components/FourSubcomponent";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourSubcomponent/>
      <FifthComponent/>
      <Pricing/>
    </>
  )
}
