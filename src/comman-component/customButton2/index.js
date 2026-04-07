import React from "react";
import { Button } from "@mui/material";

const CustomButton2 = ({
  children,
  variant = "outlined",
  color = "#35C0F0",
  type = "submit",
  height,
  width,
  borderRadius="8px",
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  loading,
  sx = {},
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        borderRadius: {borderRadius},
        whiteSpace:"nowrap",
        height: height,
        px:3,
        width: width,
        textTransform: "none",
        // backgroundColor: color,
        fontSize: {xs: "15px",sm: "16px",md: "18px"},
        lineHeight: "24px",
        fontWeight: 500,
        fontFamily: "DM Sans",
        boxShadow: "none",
         "&:hover": { opacity: 0.9 ,boxShadow: "none", backgroundColor:"#26B6E6",color:"white",borderColor:"#26B6E6" },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton2;
