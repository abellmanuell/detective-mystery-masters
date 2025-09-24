import Container from "../../../components/Container";
import { Heading3 } from "../../../components/headings/Heading3";
import { PackageCard } from "../../../components/package/PackageCard";
import { Paragraphing } from "../../../components/Paragraphing";
import { LiveTestimony } from "../../../components/testimonial/LiveTestimony";
import { bestselling } from "../../../lib/globalVariables";

type CategoryItemProps = {
  href: string;
  imageUrl: string;
  name: string;
};

interface ProductsRouteProps {
  category?: Array<CategoryItemProps>;
}

const ProductsRoute = ({ category }: ProductsRouteProps) => {
  return (
    <>
      {category && (
        <Container className="md:py-[46px]">
          <article className="xxs:grid-cols-2 grid gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {category?.map((c, i) => (
              <CategoryItem key={i} {...c} />
            ))}
          </article>
        </Container>
      )}

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
            <PackageCard key={i} {...item} />
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
            <PackageCard key={i} {...item} />
          ))}
        </section>
      </Container>
    </>
  );
};

const CategoryItem = ({ href, imageUrl, name }: CategoryItemProps) => (
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

export default ProductsRoute;
