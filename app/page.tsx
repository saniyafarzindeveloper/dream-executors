import About from "@/components/landing-page/About";
import Expertise from "@/components/landing-page/Expertise";
import MainHero from "@/components/landing-page/MainHero";
import Offerings from "@/components/landing-page/Offerings";

const Page = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <MainHero />
      <Offerings />
      <About />
      <Expertise />
    </div>
  );
};

export default Page;
