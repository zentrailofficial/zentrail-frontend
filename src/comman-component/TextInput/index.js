import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import formStyle from "./inputStyle";
import { Controller } from "react-hook-form";

const TextInput = ({
  control,
  rules,
  label,
  placeholder = "",
  type = "text",
  name,
  value,
  defaultValue = "",
  // onChange,
  helperText = "",
  disabled = false,
  required = false,
  multiline = false,
  rows = 3,
  className = "",
  sx = {},
  ...rest
}) => {

    const [showPassword, setShowPassword] = useState(false);

  if (!control) {
    console.error(`⚠️ Missing "control" for field "${name}"`);
    return null;
  }

    const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <label className="dm_sans font-medium text-[14px] leading-[25px]">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            <TextField
              {...field}
              {...rest}
              size="small"
              fullWidth
              // label={label}
              // name={name}
              type={type === "password" && !showPassword ? "password" : "text"}
              // value={value}
              defaultValue={defaultValue}
              // onChange={onChange}
              error={!!error}
              // helperText={error ? error?.message : ""}
              disabled={disabled}
              // required={required}
              multiline={multiline}
              rows={multiline ? rows : undefined}
              placeholder={placeholder}

              className={`${error?.message?"bg-red-800":"bg-white"} ${className}`}
              sx={{ ...formStyle.input, ...sx }}
              InputProps={{
                endAdornment:
                  type === "password" ? (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ) : null,
              }}
            />
           { <span className="dm_sans absolute bottom-[8] text-[14px] text-red-700 left-0">
              { error?.message ||""}
            </span>}
          </div>
        )}
      />
    </>
  );
};

export default TextInput;
