import { announcements, bestselling } from "../../../lib/globalVariables";

import Wrapper from "../../../components/Wrapper";
import Container from "../../../components/Container";

import { HeaderNavBar } from "../../../components/HeaderNavBar";
import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";
import { TitleCard } from "../../../components/TitleCard";
import { Heading3 } from "../../../components/headings/Heading3";
import { TitleImage } from "../../../components/TitleImage";

import TitleAsideImage from "../../../assets/images/hero-aside.webp";
import Product1 from "../../../assets/images/products/product-1.webp";
import Product2 from "../../../assets/images/products/product-2.webp";
import Product3 from "../../../assets/images/products/product-3.webp";
import Product4 from "../../../assets/images/products/product-4.webp";
import { Paragraphing } from "../../../components/Paragraphing";
import { ProductCard } from "../../../components/package/ProductCard";
import { LiveTestimony } from "../../../components/testimonial/LiveTestimony";
import { FAQ } from "../../views/FAQ";
import { Footer } from "../../views/Footer";

export default function ShopAll() {
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

        <Container className="border-b border-[#F3D4B5] pb-8">
          <article className="grid gap-8 pt-[18px] pb-8 md:pt-[24.2px] md:pb-[94px] lg:grid-cols-2">
            <TitleCard
              titleAndSub={{
                title: "Shop all",
                subTitle:
                  "Some SEO and general information would be cool to have here",
              }}
              breadCrumbs={{
                name: "Home page",
                leaf: [{ name: "Shop all", href: "shop-all" }],
              }}
            />

            <TitleImage imageUrl={TitleAsideImage} />
          </article>

          <article className="xxs:grid-cols-2 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            <ShopCategory href="#" imageUrl={Product1} name="Bundles" />
            <ShopCategory href="#" imageUrl={Product2} name="Case Games" />
            <ShopCategory href="#" imageUrl={Product3} name="Escape Rooms" />
            <ShopCategory href="#" imageUrl={Product4} name="Print & Plays" />
            <ShopCategory href="#" imageUrl={Product2} name="Card Games" />
          </article>
        </Container>

        <hr className="text-[#D5B08B]" />

        <Container className="py-12">
          <div className="flex justify-between text-lg">
            <Paragraphing>Showing 20 results</Paragraphing>

            <Paragraphing>
              Sort: <b>Bestsellers</b>
            </Paragraphing>
          </div>

          <section className="grid grid-cols-2 gap-6 pt-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            {bestselling.map((item, i) => (
              <ProductCard key={i} {...item} />
            ))}
          </section>
        </Container>

        <div className="bg-dark-burgundy-500 relative">
          <LiveTestimony
            title="HERE'S WHAT OUR DETECTIVES ARE SAYING"
            className="pt-16 pb-0 md:!pb-0"
          />
        </div>

        <Container className="py-12">
          <section className="grid grid-cols-2 gap-6 pt-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            {bestselling.map((item, i) => (
              <ProductCard key={i} {...item} />
            ))}
          </section>
        </Container>

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

const ShopCategory = ({
  href,
  imageUrl,
  name,
}: {
  href: string;
  imageUrl: string;
  name: string;
}) => (
  <>
    <div className="space-y-4">
      <div className="xxs:w-[167px] h-[167px] w-full overflow-clip rounded-2xl md:h-[187px] md:w-[240px]">
        <a href={href}>
          <img
            src={imageUrl}
            className="xxs:w-[167px] h-[167px] w-full object-cover md:h-[187px] md:w-[240px]"
          />
        </a>
      </div>
      <a href={href}>
        <Heading3>{name}</Heading3>
      </a>
    </div>
  </>
);
