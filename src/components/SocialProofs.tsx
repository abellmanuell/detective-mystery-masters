import SocialProofAvatar from "./SocialProofAvatar";
import StarIcon from "../assets/images/icons/icon-star.svg";

type SocialProof = {
  imageUrl: string;
  name: string;
};

interface SocialProofsProps {
  proofs: SocialProof[];
  rate: string;
  players: string;
}

const SocialProofs = ({ proofs, rate, players }: SocialProofsProps) => {
  return (
    <div className="xs:flex xs:space-y-0 space-y-4 space-x-4 overflow-clip">
      <section className="flex">
        {proofs.map((proof, i) => (
          <SocialProofAvatar
            key={i}
            imageUrl={proof.imageUrl}
            name={proof.name}
          />
        ))}
      </section>

      <section className="text-sm font-medium md:text-base lg:text-lg">
        <div className="flex">
          <div className="xxxs:flex gap-2">
            <div className="text-pumpkin-500 flex items-center gap-1">
              <Stars w={20} h={20} />
              <Stars w={20} h={20} />
              <Stars w={20} h={20} />
              <Stars w={20} h={20} />
              <Stars w={20} h={20} />
            </div>
            <p className="ml-1 font-semibold text-black">
              {rate ?? "4.8 / 5.0"}
            </p>
          </div>
        </div>
        <p className="font-semibold">from {players} players</p>
      </section>
    </div>
  );
};

export const Stars = ({ w = 16, h = 16 }: { w?: number; h?: number }) => (
  <img
    src={StarIcon}
    alt="Star Icon"
    className={`max-h-[${h}px] max-w-[${w}px]`}
  />
);

export { SocialProofs };
