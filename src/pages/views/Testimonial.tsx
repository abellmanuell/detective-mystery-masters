import { cn } from "../../lib/utils";

import { Heading2 } from "../../components/headings/Heading2";
import Container from "../../components/Container";
import { Paragraphing } from "../../components/Paragraphing";
import { AiFillStar } from "react-icons/ai";
import { Heading3 } from "../../components/headings/Heading3";

import AndreImage from "../../assets/images/testimonials/andre.webp";
import JoseImage from "../../assets/images/testimonials/jose.webp";
import GabrielImage from "../../assets/images/testimonials/gabriella.webp";
import { LiveTestimony } from "../../components/testimonial/LiveTestimony";

const Testimonial = () => {
  return (
    // <Wrapper>
    <div className="bg-dark-burgundy-500 relative z-2">
      <Container className={cn("py-20 md:px-10 md:!py-[128px]")}>
        <div className="space-y-4 text-center text-white">
          <Paragraphing className="font-light">
            120,000 customer testimonials about the product
          </Paragraphing>
          <Heading2 className="lg:!text-[56px] lg:!leading-[67.2px]">
            Loads of happy case solvers
          </Heading2>
        </div>

        <section
          className={cn(
            "xxs:grid-cols-2 grid gap-x-6 gap-y-10",
            "lg:grid-cols-4 lg:gap-x-10",
            "pt-12 lg:pt-16 lg:pb-0",
          )}
        >
          <Testimony
            name="Andre"
            imageUrl={AndreImage}
            testimony="Lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum."
            rate={5}
          />

          <Testimony
            name="Jose"
            imageUrl={JoseImage}
            testimony="Lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum."
            rate={5}
          />

          <Testimony
            name="Joaqin"
            imageUrl={GabrielImage}
            testimony="Lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum."
            rate={5}
          />

          <Testimony
            name="Gabriel"
            imageUrl={AndreImage}
            testimony="Lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum, lorepsum ipsum."
            rate={5}
          />
        </section>
      </Container>

      <LiveTestimony
        title="And here's some of the live action"
        isSocialCount={true}
      />
    </div>
    // </Wrapper>
  );
};

interface TestimonyProps {
  name: string;
  imageUrl: string;
  rate?: number;
  testimony: string;
  className?: string;
}

const Testimony = ({
  name,
  imageUrl,
  rate = 1,
  testimony,
  className,
}: TestimonyProps) => {
  const rateList = [];
  for (let i = 0; i < rate; i++) {
    rateList.push(i);
  }

  return (
    <div
      className={cn(
        "bg-tequila-500 xxxs:p-4 flex flex-col rounded-[10px] p-0.5 md:p-6",
        className,
      )}
    >
      <div className="text-pumpkin-500 flex items-center gap-1">
        {rateList.map((i) => (
          <AiFillStar key={i} className="h-[15.11px] w-[16px]" />
        ))}
      </div>

      <Paragraphing className="grow py-6 text-lg leading-[27px]">
        {testimony}
      </Paragraphing>

      <div className="flex items-center space-x-5">
        <div className="h-10 w-10">
          <img
            src={imageUrl}
            alt="Andre Picture"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <Heading3 className="text-base !leading-[24px] capitalize">
          {name}
        </Heading3>
      </div>
    </div>
  );
};

export { Testimonial };
