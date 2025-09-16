import Container from "./Container";
import { cn } from "../lib/utils";

const HeaderProductItem = (props: React.ComponentProps<"a">) => {
  return (
    <a
      {...props}
      className={cn(
        "font-bebas-neue text-3xl font-bold uppercase",
        "hover:text-tequila-800 focus:text-tequila-800",
        props.className,
      )}
    />
  );
};

const HeaderProductsList = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-tequila-500 md:bg-tequila-500/90 border-tequila-600",
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
          <HeaderProductItem href="#">Detective Cases</HeaderProductItem>
          <HeaderProductItem href="#">Escape rooms</HeaderProductItem>
          <HeaderProductItem href="#">Card games</HeaderProductItem>
          <HeaderProductItem href="#">Print & play</HeaderProductItem>
        </Container>
      </div>
    </div>
  );
};

export { HeaderProductsList };
