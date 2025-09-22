import { cn } from "../../lib/utils";

import Container from "../../components/Container";
import { HeroContent } from "../../components/HeroContent";
import { HeroAside } from "../../components/HeroAside";

const LandingPage = () => {
  return (
    <Container
      className={cn(
        "grid grid-cols-1 gap-2 md:gap-8",
        "lg:grid-cols-2",
        "pt-0 md:!p-4",
      )}
    >
      <HeroContent />
      <HeroAside />
    </Container>
  );
};

export { LandingPage };
