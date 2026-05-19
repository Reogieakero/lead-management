import React from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // Internal SPA navigation
  to?: string;
  // Anchor props
  href?: string;
  target?: string;
  rel?: string;
  // Button props
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

function getClassName(variant: ButtonVariant, className?: string) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return [base, className].filter(Boolean).join(" ");
}

function parseSizeStyle(size: ButtonSize): React.CSSProperties {
  if (size === "sm") return { padding: "8px 18px", fontSize: 13 };
  if (size === "lg") return { padding: "14px 36px", fontSize: 15 };
  return {};
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  style,
  to,
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const combinedClassName = getClassName(variant, className);
  const inlineStyle: React.CSSProperties = {
    ...style,
    ...(size !== "md" ? parseSizeStyle(size) : {}),
  };

  if (to !== undefined) {
    return (
      <Link
        to={to}
        className={combinedClassName}
        style={inlineStyle}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  if (href !== undefined) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        style={inlineStyle}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      style={inlineStyle}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
}