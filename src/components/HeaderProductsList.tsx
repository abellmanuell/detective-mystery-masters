import Container from "./Container";
import { cn } from "../lib/utils";
import { Link } from "react-router";

const HeaderProductItem = (props: React.ComponentProps<"a">) => {
  return (
    <Link
      to={props.href || "#"}
      className={cn(
        "font-bebas-neue text-3xl font-bold uppercase",
        "hover:text-tequila-800 focus:text-tequila-800",
        props.className,
      )}
      {...props}
    />
  );
};

const HeaderProductsList = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-chamois-500 md:bg-chamois-500 border-chamois-600",
        "relative overflow-clip border-t shadow",
        props.className,
      )}
    >
      <div className="bg-noise absolute inset-0 h-svh opacity-20 mix-blend-overlay" />

      <div className="relative z-20">
        <Container
          className={cn(
            "flex gap-10 max-lg:flex-col lg:justify-between lg:px-8",
          )}
        >
          <HeaderProductItem href="/detective-cases">
            Detective Cases
          </HeaderProductItem>
          <HeaderProductItem href="/escape-rooms">
            Escape rooms
          </HeaderProductItem>
          <HeaderProductItem href="/card-games">Card games</HeaderProductItem>
          <HeaderProductItem href="/print-and-play">
            Print & play
          </HeaderProductItem>
        </Container>
      </div>
    </div>
  );
};

export { HeaderProductsList };
