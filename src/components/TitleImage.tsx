import { cn } from "../lib/utils";

const TitleImage = ({ imageUrl }: { imageUrl: string }) => (
  <section>
    <div
      className={cn("h-[292px] overflow-clip", "hidden rounded-2xl md:block")}
    >
      <img
        src={imageUrl}
        alt="Title Aside Image"
        // width={664}
        height={292}
        className="w-full object-cover object-[80%_-500px]"
      />
    </div>
  </section>
);

export { TitleImage };
