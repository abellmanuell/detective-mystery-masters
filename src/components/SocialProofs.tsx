import { AiFillStar } from "react-icons/ai";
import SocialProofAvatar from "./SocialProofAvatar";

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
    <div className="flex space-x-4">
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
          <div className="text-pumpkin-500 flex items-center">
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
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

export { SocialProofs };
