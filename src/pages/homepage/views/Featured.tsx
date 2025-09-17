import Marquee from "react-fast-marquee";
import { Heading3 } from "../../../components/headings/Heading3";

import MashableLogo from "../../../assets/images/featured-logo/mashable.svg";
import BuzzFeed from "../../../assets/images/featured-logo/buzzfeed.svg";
import Entertainment from "../../../assets/images/featured-logo/entertainment.svg";
import TheGuardian from "../../../assets/images/featured-logo/the-guardian.svg";
import GoodHouseKeeping from "../../../assets/images/featured-logo/good-housekeeping.svg";

const Featured = () => {
  return (
    <div className="bg-dark-burgundy-500 relative h-[210px] w-full py-8">
      <Heading3 className="pb-6 text-center text-lg text-white">
        detective games featured in
      </Heading3>

      <div>
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          <FeaturedItem imageUrl={MashableLogo} alt="Mashable Logo" />
          <FeaturedItem imageUrl={BuzzFeed} alt="BuzzFeed Logo" />
          <FeaturedItem imageUrl={Entertainment} alt="Entertainment Logo" />
          <FeaturedItem imageUrl={TheGuardian} alt="The Guardian Logo" />
          <FeaturedItem
            imageUrl={GoodHouseKeeping}
            alt="Good House Keeping Logo"
          />
        </Marquee>
      </div>
    </div>
  );
};

const FeaturedItem = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="mx-[86px] flex justify-center py-[23px]">
    <img src={imageUrl} alt={alt} />
  </div>
);

export { Featured };
