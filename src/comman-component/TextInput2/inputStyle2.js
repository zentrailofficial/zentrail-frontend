const formStyle2 = {
  input: {
    backgroundColor: "white",
    borderRadius: "6px",
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
   
  },
  checkbox: {
    color: "green",
    "&.Mui-checked": {
      color: "green",
    },
    "& .MuiSvgIcon-root": {
      borderRadius: "12px",
      fontSize: 28,
    },
  },
  checkboxlabel: {
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#000000",
      fontFamily: "DM Sans",
    },
  },
  fieldstyle: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
  },
  blogfield: {
    border: "1px solid #35C0F0",
  },
  editfield: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  },

  editchip: {
    mx: 0.2,
    my: 0.5,
    cursor: "pointer",
  },
};

export default formStyle2;
