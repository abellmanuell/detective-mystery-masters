import { cn } from "../../../lib/utils";

import Container from "../../../components/Container";
import { Heading2 } from "../../../components/headings/Heading2";
import { Paragraphing } from "../../../components/Paragraphing";
import { useState } from "react";
import { Heading3 } from "../../../components/headings/Heading3";

import MinusCircleIcon from "../../../assets/images/icons/icon-minus-circle.svg";
import AddCircleIcon from "../../../assets/images/icons/icon-add-circle.svg";

type FAQItemProps = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs: Array<FAQItemProps>;
}

const FAQ = ({ faqs }: FAQProps) => {
  return (
    <Container
      className={cn(
        "relative z-5 grid overflow-clip pt-[54px] pb-20 md:!py-[128px] lg:mb-12 lg:grid-cols-2",
      )}
    >
      <div>
        <Heading2 className="!leading-[48px] lg:!text-[56px] lg:!leading-[67.2px]">
          Frequently Asked <br className="lg:hidden" /> Questions
        </Heading2>
        <Paragraphing className="mt-4 !leading-7 text-[#444444]">
          Everything you need to know about the Detective Mystery Masters.
        </Paragraphing>
      </div>

      <section className="grid gap-8 pt-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </Container>
  );
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-2">
      <div
        className="xxxs:flex cursor-pointer items-center justify-between"
        onClick={toggleOpen}
      >
        <Heading3 className="text-xl leading-5">{question}</Heading3>
        <span>
          {isOpen ? (
            <img src={MinusCircleIcon} className="h-6 w-6" />
          ) : (
            <img src={AddCircleIcon} className="h-6 w-6" />
          )}
        </span>
      </div>
      {isOpen && (
        <Paragraphing className="leading-6 text-[#444444]">
          {answer}
        </Paragraphing>
      )}
    </div>
  );
}
export { FAQ };
