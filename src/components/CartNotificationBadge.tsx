import { HiOutlineShoppingCart } from "react-icons/hi2";
import { cn } from "../lib/utils";

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
      <HiOutlineShoppingCart size={30} />
      <span
        className={cn(
          "bg-pumpkin-500",
          "inline-flex items-center justify-center",
          "absolute -top-2 left-4 min-h-6 min-w-6",
          "rounded-full text-xs font-semibold shadow",
        )}
      >
        {cart}
      </span>
    </a>
  );
};

export { CartNotificationBadge };
