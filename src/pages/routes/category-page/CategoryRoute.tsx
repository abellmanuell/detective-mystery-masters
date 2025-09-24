import { announcements } from "../../../lib/globalVariables";

import Wrapper from "../../../components/Wrapper";
import Container from "../../../components/Container";

import { HeaderNavBar } from "../../../components/HeaderNavBar";
import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";
import { TitleCard, type BreadCrumbProps } from "../../../components/TitleCard";
import { TitleImage } from "../../../components/TitleImage";

import TitleAsideImage from "../../../assets/images/hero-aside.webp";

import { FAQ } from "../../views/FAQ";
import { Footer } from "../../views/Footer";
import { Outlet } from "react-router";

interface CategoryPageProps {
  title: string;
  subTitle: string;
  breadCrumbs: BreadCrumbProps;
}

export default function CategoryPage({
  title,
  subTitle,
  breadCrumbs,
}: CategoryPageProps) {
  return (
    <>
      <Wrapper>
        {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
        <AnnouncementBar>
          {announcements.map(({ icon, text }, i) => {
            return <AnnouncementBarItem key={i} icon={icon} text={text} />;
          })}
        </AnnouncementBar>

        <HeaderNavBar />

        <Container className="border-b border-[#F3D4B5] md:pb-16">
          <article className="grid gap-8 pt-[18px] md:pt-[24.2px] lg:grid-cols-2">
            <TitleCard
              titleAndSub={{
                title,
                subTitle,
              }}
              breadCrumbs={breadCrumbs}
            />

            <TitleImage imageUrl={TitleAsideImage} />
          </article>
        </Container>

        <Outlet />

        {/* FAQ section */}
        <FAQ
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
          ]}
        />

        {/* Footer Section */}
        <Footer />
      </Wrapper>
    </>
  );
}
