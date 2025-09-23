import type { Swiper as SwiperType } from "swiper";

import { cn } from "../../../../lib/utils";

import { Badge } from "../../../../components/package/Badge";
import { Heading3 } from "../../../../components/headings/Heading3";

import ArrowIcon from "../../../../assets/images/icons/icon-greater-than.svg";
import ZoomIn from "../../../../assets/images/icons/zoom-in.svg";

type PackageProps = { imageUrl: string; packageName: string };

type ProductImageProps = {
  swiperRef: React.RefObject<SwiperType | null>;
  imageUrl: string;
  tags: Array<string>;
  packages: Array<PackageProps>;
};

const ProductPackage = ({ imageUrl, packageName }: PackageProps) => {
  return (
    <div className="bg-dark-burgundy-500 relative inline-flex gap-2 rounded-full px-3 py-[6px]">
      <img src={imageUrl} alt={packageName} className="h-[16px] max-w-[16px]" />
      <Heading3 className="text-sm text-white">{packageName}</Heading3>
    </div>
  );
};

const ProductImage = ({
  imageUrl,
  tags,
  packages,
  swiperRef,
}: ProductImageProps) => {
  return (
    <section>
      <div className="relative h-[358px] p-4">
        <img
          src={imageUrl}
          className={cn(
            "absolute top-0 left-0 size-full object-cover",
            "h-[358px] rounded-2xl",
          )}
        />
        <article className="flex h-[320px] flex-col justify-between">
          <section className="space-y-[30px]">
            <div className="relative flex justify-between">
              <div className="flex flex-col space-y-3 uppercase">
                {tags.map((tag, i) => {
                  return (
                    <Badge
                      key={i}
                      title={tag}
                      className={i == 0 ? "bg-[#FDA32E]" : "bg-[#59C254]"}
                    />
                  );
                })}
              </div>

              <section className="flex flex-col items-end space-y-2">
                {packages.map((p, i) => {
                  return (
                    <ProductPackage
                      key={i}
                      imageUrl={p.imageUrl}
                      packageName={p.packageName}
                    />
                  );
                })}
              </section>
            </div>

            <div className="relative flex justify-between">
              <button
                className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white/60"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img
                  src={ArrowIcon}
                  alt=""
                  className="max-h-[18px] max-w-[18px] rotate-180"
                />
              </button>
              <button
                className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white/60"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img
                  src={ArrowIcon}
                  alt=""
                  className="max-h-[18px] max-w-[18px]"
                />
              </button>
            </div>
          </section>

          <div className="relative self-end">
            <img src={ZoomIn} className="h-[24px] max-w-[24px]" />
          </div>
        </article>
      </div>
    </section>
  );
};

export { ProductImage };
