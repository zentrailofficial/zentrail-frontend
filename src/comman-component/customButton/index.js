import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  children,
  variant = "contained",
  color = "#35C0F0",
  type = "submit",
  height ="50px",
  borderRadius="8px",
  width,
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  loading,
  className,
  ariaLabel,
  sx = {},
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      // color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={loading}
      className={className}
      aria-label={ariaLabel}
      sx={{
        borderRadius: {borderRadius},
        whiteSpace:"nowrap",
        height: height,
        px:3,
        width: width,
        textTransform: "none",
        backgroundColor: color,
        fontSize: {xs: "15px",sm: "16px",md: "18px"},
        lineHeight: "24px",
        fontWeight: 500,
        fontFamily: "Manrope",
        boxShadow: "none",
         "&:hover": { opacity: 0.9 ,boxShadow: "none", },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
