import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
import TextInput2 from "@/comman-component/TextInput2";
import CustomButton from "@/comman-component/customButton";
import CloseIcon from "@mui/icons-material/Close";
import { apiClient } from "@/lib/api-client";
import { BASE_URL_API } from "@/lib/common";
import Cookies from "js-cookie";
import {  toast } from 'react-toastify';

const ChangePassword = ({ setOpen }) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = await Cookies.get("zentrail_user_token");
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const res = await apiClient.put(
        `${BASE_URL_API}userAuth/travel/user/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res?.data) {
        reset();
        toast.success(res?.data?.message);
        setOpen(false);
      }
       
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.log(error);
    }
  };

  return (
    <div className="rounded-3xl!">
      <button
        onClick={() => {
          setOpen(false);
          reset();
        }}
        aria-label="close"
        className="absolute top-6 right-7 rounded-full p-1 text-[#000] hover:bg-[#F7F3FF] hover:cursor-pointer"
      >
        <CloseIcon />
      </button>
      <div className="rounded-3xl! p-2 items-center ">
        <h3 className="dm_sans responsive-text items-center text-[#183032]   mt-1 flex gap-1 font-bold!">
          <FiLock />
          {`Change Password`}
        </h3>
        <p className="dm_sans text-[16px]  text-[#4D5D60] mt-1 mb-2 font-medium!">
          {`Update your password to keep your account secure`}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput2
            control={control}
            className=" dm_sans mb-[-2]! "
            type="password"
            name="oldPassword"
            placeholder="Enter your current password"
            label="Current Password"
            rules={{
              required: "Password is required",
              minLength: { value: 8, message: "Mininum 8 character required " },
            }}
          />
          <TextInput2
            control={control}
            type="password"
            name="password"
            placeholder="Enter your new password"
            label="New Password"
            rules={{
              required: "New password is required",
              minLength: { value: 8, message: "Mininum 8 character required " },
            }}
            className=" dm_sans mb-[-2]! "
          />
          <TextInput2
            control={control}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your New Password"
            label="Confirm New Password"
            rules={{
              required: "Confirm New Password is required",
              validate: (value) =>
                value === watch("password") || "Confirm passwords do not match",
            }}
            className=" dm_sans mb-[-2]! "
          />
          <CustomButton
            className="dm_sans font-medium text-[14px] leading-[15px] w-full! mt-3!"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Update Password"}
          </CustomButton>
         
        </form>
        <h3 className="dm_sans responsive-text text-[#1A2E33] font-medium mb-2 mt-4 ">{`Password Security Tips:`}</h3>
        <ul className="dm_sans text-[14px] list-disc px-4   text-[#4D5D60]  font-medium  mb-2 sm:mb-3 sm:whitespace-nowrap">
          <li>{`Use at least 8 characters`} </li>
          <li>{`Include uppercase and lowercase letters`} </li>
          <li>{`Add numbers and special characters`} </li>
          <li>{`Avoid common words or personal information`} </li>
          <li>{`Don't reuse passwords from other accounts`} </li>
        </ul>
      </div>
    </div>
  );
};

export default ChangePassword;
