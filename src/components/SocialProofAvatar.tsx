import { cn } from "../lib/utils";

interface SocialProofAvatarProps {
  imageUrl: string;
  name: string;
  props?: React.ComponentProps<"img">;
}

const SocialProofAvatar = ({
  imageUrl,
  name,
  ...props
}: SocialProofAvatarProps) => {
  return (
    <img
      src={imageUrl}
      title={name}
      alt={name}
      height="51"
      width="51"
      className={cn(
        "relative -ml-3 inline-block h-[34.71px] w-[34.71px] rounded-full object-cover md:h-[51px] md:w-[51px]",
        "transition-all duration-300 ease-in-out",
        "first:ml-0 md:-ml-4 md:h-12 md:w-12",
      )}
      {...props}
    />
  );
};

export default SocialProofAvatar;
