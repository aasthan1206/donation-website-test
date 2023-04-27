import Image from "next/image";
import hands1 from "../public/images/hands1.png";
import hands2 from "../public/images/hands2.png";

const Hero = () => {
  return (
    <div className="bg-background relative py-16">
      <div className="text-white text-center lg:px-48 lg:py-16">
        <div className="lg:text-7xl lg:font-extrabold">
          Donations that change the world
        </div>
        <div className="text-xl py-12">
          We have taken an initiative to ensure that your donations reach to
          their right places.
        </div>
      </div>
      <div className="absolute top-20 left-10">
        <Image src={hands1} width={300} height={300} alt="hands"/>
      </div>
      <div className="absolute top-40 right-20">
        <Image src={hands2} width={300} height={300} alt="hands" />
      </div>
      <div className="text-center -mt-8"><button className="bg-secondary text-white px-4 py-2 font-semibold hover:bg-primary">Donate Now</button></div>
      
    </div>
  );
};

export default Hero;
