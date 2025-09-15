import { cn } from "../lib/utils";
import ShoppingCartIcon from "../assets/images/shopping-cart.svg";

interface CartNotificationBadgeProps {
  href: string;
  cart: string;
  props?: React.Component<"a">;
}

const CartNotificationBadge = ({
  href,
  cart,
  props,
}: CartNotificationBadgeProps) => {
  return (
    <a {...props} href={href} className={cn("relative inline-flex")}>
      <img
        src={ShoppingCartIcon}
        alt="Shopping Cart Icon"
        height={20}
        width={20}
        className="inline-block"
      />
      <span
        className={cn(
          "bg-pumpkin-500",
          "inline-flex items-center justify-center",
          "absolute -top-2 left-3 min-h-[18px] min-w-[18px]",
          "rounded-full text-sm font-semibold shadow",
        )}
      >
        {cart}
      </span>
    </a>
  );
};

export { CartNotificationBadge };
