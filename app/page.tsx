import CountDown from "@/components/CountDown/CountDown";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <CountDown />
      <Features />
      <Daimoku />
      {/* <Brands />
      <Testimonials />
      <Blog />
      <Contact /> */}
    </>
  );
}
