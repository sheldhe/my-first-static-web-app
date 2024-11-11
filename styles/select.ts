import { cva } from "class-variance-authority";

export const selectStyles = cva(
  "block w-full px-3 py-2 border rounded-sm focus:outline-none transition",
  {
    variants: {
      intent: {
        primary: "",
        secondary: "border-gray-300 focus:ring-gray-400 focus:border-gray-400",
        error: "border-red-500 focus:ring-red-500 focus:border-red-500",
      },
      size: {
        small: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  }
);
