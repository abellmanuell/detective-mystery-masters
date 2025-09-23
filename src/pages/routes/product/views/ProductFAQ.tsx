import { Paragraphing } from "../../../../components/Paragraphing";
import { FAQSelf } from "../../../views/FAQ";

import ArrowIcon from "../../../../assets/images/icons/icon-greater-than.svg";

const ProductFAQ = () => {
  return (
    <section className="bg-tequila-500 rounded-2xl p-6">
      <FAQSelf
        icon={ArrowIcon}
        faqs={[
          {
            question: "Bundle includes",
            answer: (
              <div className="space-y-5">
                <Paragraphing className="!leading-[24px]">
                  🧩 12 Captivating Puzzles offering hours of thrilling
                  gameplay.
                </Paragraphing>

                <Paragraphing className="!leading-[24px]">
                  ⏱️ 2-4 Hours of Immersive Fun for solo or group enjoyment.
                </Paragraphing>

                <Paragraphing className="!leading-[24px]">
                  👥 Play Solo or with Friends (1-8 players) for the ultimate
                  adventure.
                </Paragraphing>

                <Paragraphing className="!leading-[24px]">
                  🖨️ Print & Play - Easy setup for all chapters at once.
                </Paragraphing>

                <Paragraphing className="!leading-[24px]">
                  💡 Innovative Mirror-Revealed Hints throughout your journey.
                </Paragraphing>
              </div>
            ),
          },

          {
            question: "Other Information",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
          },
        ]}
      />
    </section>
  );
};

export { ProductFAQ };
