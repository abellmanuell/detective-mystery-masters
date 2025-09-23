import { announcements } from "../../../lib/globalVariables";

import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";
import { HeaderNavBar } from "../../../components/HeaderNavBar";
import Wrapper from "../../../components/Wrapper";
import { TitleCard } from "../../../components/TitleCard";

import FAQImage from "../../../assets/images/testimonials/live-action-3.webp";
import { TitleImage } from "../../../components/TitleImage";
import Container from "../../../components/Container";
import { FAQSelf } from "../../views/FAQ";
import { ShopByCategory } from "../../views/ShopByCategory";
import { Footer } from "../../views/Footer";

const FAQRoute = () => {
  return (
    <Wrapper>
      {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
      <AnnouncementBar>
        {announcements.map(({ icon, text }, i) => {
          return <AnnouncementBarItem key={i} icon={icon} text={text} />;
        })}
      </AnnouncementBar>

      <HeaderNavBar />

      <Container>
        <article className="grid gap-8 pt-[18px] pb-8 md:pt-[24.2px] md:pb-[94px] lg:grid-cols-2">
          <TitleCard
            titleAndSub={{
              title: "FAQ",
              subTitle: "Have a question? We're here to help.",
            }}
            breadCrumbs={{
              name: "Home page",
              rootHref: ".",
              leaf: [{ name: "FAQ", href: "#" }],
            }}
          />

          <TitleImage imageUrl={FAQImage} />
        </article>

        <section className="grid gap-5 pb-20 md:grid-cols-2">
          <FAQSelf
            className="mb-5"
            faqs={[
              {
                question: "Can you buy a printable?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "CAN I GET A REFUND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WILL I GET IT BEFORE CHRISTMAS?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WILL I GET IT BEFORE HALLOWEEN?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "Can you buy a printable?",
                answer: "Yes, that is definetely possible.",
              },
            ]}
          />

          <FAQSelf
            faqs={[
              {
                question: "Can you buy a printable?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "CAN I GET A REFUND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WILL I GET IT BEFORE CHRISTMAS?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WILL I GET IT BEFORE HALLOWEEN?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
                answer: "Yes, that is definetely possible.",
              },
              {
                question: "Can you buy a printable?",
                answer: "Yes, that is definetely possible.",
              },
            ]}
          />
        </section>
      </Container>

      <ShopByCategory className="bg-transparent" />

      <Footer />
    </Wrapper>
  );
};

export default FAQRoute;
