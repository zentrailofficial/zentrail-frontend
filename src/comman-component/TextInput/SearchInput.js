import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { FaSearch } from "react-icons/fa";
import formStyle from "./inputStyle";
import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ value, onChange,sx }) => {
  return (
    <TextField
      size="small"
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Search.."
      sx={{ ...formStyle.input, ...sx,borderRadius:"8px" ,width:"300px"}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IoIosSearch color="#4D5D60" size={25}/>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
