import { cva } from "class-variance-authority";

export const buttonStyles = cva(["px-4", "py-2", "rounded-sm"], {
  variants: {
    intent: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-300 text-black hover:bg-gray-400",
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
});
