"use client";
import CustomButton from "@/comman-component/customButton";
import TextInput from "@/comman-component/TextInput";
import formStyle from "@/comman-component/TextInput/inputStyle";
import { useAuth } from "@/context/AuthContext";
import { apiClient } from "@/lib/api-client";
import { Checkbox, FormControlLabel } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignupForm = () => {
  const { login } = useAuth();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post("userAuth/travel/signup", data);
      reset();
      login(response);
    } catch (err) {
      console.log("API Error:", err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          control={control}
          name="fullName"
          placeholder="Full name"
          label="Full Name"
          rules={{
            required: "Fullname is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only alphabets are allowed",
            },
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          }}
        />
        <TextInput
          control={control}
          name="email"
          placeholder="Your Email"
          label="Email Address"
          type="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          }}
        />
        <div className="flex flex-col relative">
          {" "}
          <label className="dm_sans font-medium text-[14px] leading-[25px]">
            Mobile Number
          </label>
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: "Mobile number is required",
              validate: (value) => {
                const digits = value.replace(/\D/g, "");
                return digits.length == 12 || "Enter a valid mobile number";
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <MuiTelInput
                  {...field}
                  value={field.value || ""}
                  defaultCountry="IN"
                  size="small"
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  sx={formStyle.input}
                  error={!!error}
                />
                {error && (
                  <span className="dm_sans text-[14px] text-red-700 absolute bottom-[10] left-0">
                    {error.message}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <TextInput
          control={control}
          type="password"
          name="password"
          placeholder="Minimum 8 characters"
          label="Password"
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Mininum 8 character required " },
          }}
        />
        <TextInput
          control={control}
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          label="Confirm Password"
          rules={{
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
        />
        <Controller
          name="agreedToTerms"
          control={control}
          defaultValue={false}
          rules={{
            required: "Agree terms and conditions",
          }}
          render={({ field, fieldState: { error } }) => (
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value || false}
                    sx={formStyle.checkbox}
                  />
                }
                label="Agree to T&C"
                sx={formStyle.checkboxlabel}
              />
              {error && (
                <span className="dm_sans text-[14px] text-red-700">
                  {error.message}
                </span>
              )}
            </div>
          )}
        />
        <p className="dm_sans font-normal text-[14px] leading-[20px] bg-[#E2FFD5] p-2 rounded-[6px] text-center mb-[35px]">{`I agree to ZenTrail’s Terms & Privacy Policy`}</p>
        <div>
          <CustomButton
            type="submit"
            height="52px"
            width="162px"
            loading={isSubmitting}
          >
            {`Let’s Go!`}
          </CustomButton>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
