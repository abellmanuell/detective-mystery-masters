import IconFolders from "../assets/images/icon-folders.png";
import IconGift from "../assets/images/icon-gift.png";
import IconPackage from "../assets/images/icon-package.png";
import IconPeople from "../assets/images/icon-people.png";

interface HeroFeatureItemProps {
  title: string;
  icon: string;
}

const HeroFeatureItem = ({ title, icon }: HeroFeatureItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
      <img src={icon} alt={title} className="size-16 object-contain" />
      <h4 className="font-bebas-neue">{title}</h4>
    </div>
  );
};

const HeroFeatures = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <HeroFeatureItem title="Realistic materials" icon={IconFolders} />
      <HeroFeatureItem title="Free shipping" icon={IconPackage} />
      <HeroFeatureItem title="Perfect for 1-8 people" icon={IconPeople} />
      <HeroFeatureItem title="Gift Ready" icon={IconGift} />
    </div>
  );
};

export { HeroFeatures };
