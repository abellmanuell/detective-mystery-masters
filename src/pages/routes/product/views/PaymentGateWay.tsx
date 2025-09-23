import { cn } from "../../../../lib/utils";

const PaymentGateWay = ({
  name,
  imageUrl,
  className,
  isBorder = false,
  ...props
}: {
  name: string;
  imageUrl: string;
  isBorder?: boolean;
  className?: string;
}) => (
  <a
    href="#"
    className={cn(
      className,
      !isBorder && "border-pumpkin-500 border",
      "flex h-[31.5px] w-[43px] items-center justify-center rounded-sm",
    )}
    {...props}
  >
    <img src={imageUrl} alt={name} />
  </a>
);

export { PaymentGateWay };
