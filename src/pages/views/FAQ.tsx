import { useState, type ReactElement, type ReactNode } from "react";

import { cn } from "../../lib/utils";

import MinusCircleIcon from "../../assets/images/icons/icon-minus-circle.svg";
import AddCircleIcon from "../../assets/images/icons/icon-add-circle.svg";

import Container from "../../components/Container";
import { Heading2 } from "../../components/headings/Heading2";
import { Heading3 } from "../../components/headings/Heading3";
import { Paragraphing } from "../../components/Paragraphing";

type FAQItemProps = {
  question: string;
  answer: string | ReactNode | ReactElement;
  icon?: string;
};

interface FAQProps {
  icon?: string;
  faqs: Array<FAQItemProps>;
  className?: string;
}

const FAQ = ({ faqs, icon }: FAQProps) => {
  return (
    <Container
      className={cn(
        "relative z-5 grid gap-12 overflow-clip py-20 md:!py-[128px] lg:grid-cols-2",
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

      <div className="pt-12">
        <FAQSelf faqs={faqs} icon={icon} />
      </div>
    </Container>
  );
};

export const FAQSelf = ({ faqs, icon, className }: FAQProps) => {
  return (
    <section className={cn("grid gap-8", className)}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          icon={icon}
        />
      ))}
    </section>
  );
};

function FAQItem({ question, answer, icon }: FAQItemProps) {
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
        <Heading3 className="text-xl leading-7">{question}</Heading3>
        <span>
          {isOpen ? (
            <img
              src={icon ?? MinusCircleIcon}
              className={cn("h-6 w-6", icon && "rotate-90")}
            />
          ) : (
            <img src={icon ?? AddCircleIcon} className={cn("h-6 w-6")} />
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
