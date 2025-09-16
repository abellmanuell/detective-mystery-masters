import IconFolders from "../assets/images/icons/icon-folders.svg";
import IconGift from "../assets/images/icons/icon-gift.svg";
import IconPackage from "../assets/images/icons/icon-package.svg";
import IconPeople from "../assets/images/icons/icon-people.svg";

interface HeroFeatureItemProps {
  title: string;
  icon: string;
}

const HeroFeatureItem = ({ title, icon }: HeroFeatureItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <img
        src={icon}
        alt={title}
        height={40}
        width={40}
        className="size-[40px] object-contain"
      />
      <h4 className="font-bebas-neue text-xl text-[#424242]">{title}</h4>
    </div>
  );
};

const HeroFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0">
      <HeroFeatureItem title="Realistic materials" icon={IconFolders} />
      <HeroFeatureItem title="Free shipping" icon={IconPackage} />
      <HeroFeatureItem title="Perfect for 1-8 people" icon={IconPeople} />
      <HeroFeatureItem title="Gift Ready" icon={IconGift} />
    </div>
  );
};

export { HeroFeatures };
