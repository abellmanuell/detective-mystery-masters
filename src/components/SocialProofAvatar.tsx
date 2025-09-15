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
      className="relative -ml-4 inline-block h-10 rounded-full object-cover transition-all duration-300 ease-in-out first:ml-0 hover:z-10 hover:ml-0 hover:scale-110 md:h-12 md:w-12"
      {...props}
    />
  );
};

export default SocialProofAvatar;
