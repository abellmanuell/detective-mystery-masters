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
        "bg-tequila-500 border-tequila-600 border-t shadow",
        props.className,
      )}
    >
      <Container
        className={cn("flex gap-10 max-lg:flex-col lg:justify-between lg:px-8")}
      >
        <HeaderProductItem href="#">Detective Cases</HeaderProductItem>
        <HeaderProductItem href="#">Escape rooms</HeaderProductItem>
        <HeaderProductItem href="#">Card games</HeaderProductItem>
        <HeaderProductItem href="#">Print & play</HeaderProductItem>
      </Container>
    </div>
  );
};

export { HeaderProductsList };
