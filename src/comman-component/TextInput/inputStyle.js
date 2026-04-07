const formStyle = {
  input: {
    backgroundColor: "white",
    borderRadius: "6px",
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
    marginBottom: "30px",
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
  
    marginBottom: "28px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
  },
  blogfield: {
    outline: "1.5px solid #35C0F0",
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
  galleryfilter:{
    width:{ xs: "100%", sm: "100%", md: "350px" },  
    border: "1px solid rgba(77, 93, 96, 1)",
     marginBottom: "0px",
  },
};

export default formStyle;
