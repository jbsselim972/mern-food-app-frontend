import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="min-h-[500px] justify-center items-center flex bg-gradient-to-bl from-blue-900 via-blue-200 via-75% to-blue-100">
      <img src={hero} className=" w-[500px] " />
    </div>
  );
};

export default Hero;
