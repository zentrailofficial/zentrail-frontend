import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Image from "next/image";
import TextInput2 from "../TextInput2";
import { Controller, useForm } from "react-hook-form";
import formStyle2 from "../TextInput2/inputStyle2";
import dynamic from "next/dynamic";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from "../customButton";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import ThankyouPopup from "../ThankyouPopup/ThankyouPopup";
import { toast } from "react-toastify";
const MuiTelInput = dynamic(
  () => import("mui-tel-input").then((mod) => mod.MuiTelInput),
  { ssr: false }
);

export default function ConnectUsModal({ open, setOpen }) {
  const [openn, setOpenn] = useState(false);
  const handleClose = () => {
    reset();
    setTimeout(() => {
      setOpen(false);
    }, 0);


  };
  const handleClosee = () => {
    reset();
    setOpenn(false);
  };



  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNo: "",
      email: "",
      extraFields: {
        message: "",
      },
    },
  });


  const onSubmit = async (data) => {
    try {
      const res = await apiClient.post("inquiryform/travel", data);
      reset();
      setOpenn(true);
      setTimeout(() => {
        setOpenn(false);
        setOpen(false);
      }, 5000);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const today = new Date().toISOString().split("T")[0];
  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="connect-us-title"
        maxWidth="md"
        fullWidth
      >
        <div className="relative">
          <button
            onClick={handleClose}
            aria-label="close"
            className="absolute top-2 right-2 z-50 rounded-full p-1 text-black hover:bg-[#F7F3FF] cursor-pointer"
          >
            <CloseIcon size={25} />
          </button>

          <DialogContent className="relative overflow-visible bg-[#DEF2FC] px-4! sm:px-6!">
            <div className="items-center rounded-2xl">
              <div className="grid md:grid-cols-12 gap-5  items-center justify-center-safe">
                <div className="col-span-12 sm:col-span-6 lg:col-span-5 items-start align-baseline  h-full hidden sm:block">
                  <div
                    className="w-full  h-[195px] md:h-[480px] 
                    bg-[url(/connectusmodal.webp)] bg-cover bg-center 
                    rounded-lg p-2 sm:p-6 justify-center-safe relative "
                  >
                    <h2
                      className="dm_sans responsiveheading2 font-medium text-white 
                      bg-gradient-to-b from-[#3D863F] to-[#3D863F]/10 p-2
                      sm:p-6 rounded-lg"
                    >
                      {` “Exclusive Trail Packages & Best Deals”`}
                    </h2>
                    <div className="relative size-[50px] items-center m-auto ">
                      <Image
                        src="/route.svg"
                        alt="Modal image"
                        fill
                        className="object-fit items-center "
                      />
                    </div>
                    <p
                      className="absolute bottom-1 sm:bottom-3 left-1/2 whitespace-nowrap
                      -translate-x-1/2 dm_sans text-[14px] sm:text-[16px] 
                      text-white font-medium"
                    >
                      <Link
                        href={`https://wa.me/${"+91 8287316546".replace(
                          /\s/g,
                          ""
                        )} `}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-1.5 hover:underline cursor-pointer text-[#DEF2FC]"
                      >
                        <TbBrandWhatsappFilled className="text-white text-lg" />
                        {`   +91 8287316546`}
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-7">
                  <h2 className="responsiveheading2 text-[#1A2E33] text-start mb-2">
                    {` Hurry! Fill Form & Get Best Trek/Trail Deals`}
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid gap-1"
                  >
                    <TextInput2
                      control={control}
                      sx={formStyle2.input}
                      className="dm_sans font-medium text-[14px] leading-[15px]"
                      name="fullName"
                      placeholder="Enter your name"
                      type="text"
                      label="Name"
                      rules={{
                        required: "Name is required ",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters",
                        },
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Only alphabets are allowed",
                        },
                      }}
                    />
                    <div className="flex flex-col relative mt-2">
                      <label className="dm_sans font-medium text-[14px] leading-[25px]  }">
                        {`  Mobile Number`}
                      </label>
                      <Controller
                        sx={formStyle2.input}
                        name="phoneNo"
                        control={control}
                        placeholder="XXXXXXX"
                        rules={{
                          required: "Mobile number is required",
                          validate: (value) => {
                            const digits = value.replace(/\D/g, "").trim();
                            if (digits.length !== 12) {
                              return "Enter a valid 10-digit mobile number";
                            }
                            return true;
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
                              sx={formStyle2.input}
                              error={!!error}
                            />
                            {error && (
                              <span className="dm_sans text-[14px] text-red-700  left-0">
                                {error.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </div>
                    <div className="mt-2">
                    <TextInput2
                      control={control}
                      sx={formStyle2.input}
                      className="dm_sans font-medium text-[14px] leading-[15px]"
                      name="email"
                      label="Email Address"
                      placeholder="Enter your email"
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Enter a valid email ",
                        },
                      }}
                    />
                    </div>
                   <div className="mt-2">
                     <TextInput2
                      control={control}
                      name="extraFields.message"
                      label="Message"
                      placeholder="Short message"
                      sx={formStyle2.input}
                      multiline
                      rows={2}
                      rules={{
                        maxLength: { value: 250, message: "Maximum 250 characters" },
                      }}
                      inputProps={{ maxLength: 250 }}
                    />
                   </div>

                    {/* <div>
                      <div>
                        <Controller
                          name="extraFields.travellerOption"
                          control={control}
                          rules={{
                            required: "Please select or type a value",
                          }}
                          render={({ field, fieldState: { error } }) => (
                            <div>
                              <label className="dm_sans font-medium text-[14px] text-[#000] block mb-1">
                                {`Destination / Trail Name`}
                              </label>
                              <input
                                sx={formStyle2.input}
                                type="text"
                                list="travellerOptions"
                                placeholder="Select or type"
                                value={field.value || ""}
                                onChange={(e) => field.onChange(e.target.value)}
                                className="dm_sans font-medium text-[14px] text-gray-700 py-2.5 px-3 
                                                    rounded-md bg-white
                                w-full  max-w-[600px] outline-0 "
                              />
                              <datalist id="travellerOptions">
                                <option value="Bir-Rajgunda- Barot Vally Circuit" />
                                <option value="Kareri Lake Trek " />
                                <option value="Tirthan Vally" />
                                <option value="Triund Trek" />
                                <option value="Mcleodganj Sightseeing" />
                                <option value="Naina Peak Trek (Nainital)" />
                              </datalist>

                              {error && (
                                <span className="dm_sans text-[13px] text-red-600 mt-1 block">
                                  {error.message}
                                </span>
                              )}
                            </div>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-col-1 sm:grid-cols-2 gap-2">
                      <div>
                        <Controller
                          name="extraFields.travelmonth"
                          control={control}
                          rules={{
                            required: "Date is required",
                          }}
                          render={({ field, fieldState: { error } }) => (
                            <div>
                              <label className="dm_sans font-medium text-[14px] text-[#000] block mt-1 mb-1">
                                {`Preferred Travel Date`}
                              </label>

                              <input
                                sx={formStyle2.input}
                                type="date"
                                min={today}
                                value={field.value || ""}
                                onChange={(e) => field.onChange(e.target.value)}
                                className="dm_sans font-medium uppercase text-[14px] bg-white text-gray-700 p-2  rounded-md 
                                  w-full sm:w-3/3 max-w-[465px] outline-0  mb-1 "
                              />

                              {error && (
                                <span className="dm_sans text-[13px] text-red-600 mt-1 block">
                                  {error.message}
                                </span>
                              )}
                            </div>
                          )}
                        />
                      </div>

                      <div>
                        <Controller
                          name="extraFields.numoftravelers"
                          control={control}
                          rules={{
                            required: "Enter number of travelers",
                            min: { value: 1, message: "Minimum 1 traveler" },
                            max: {
                              value: 100,
                              message: "Maximum 100 travelers",
                            },
                          }}
                          render={({ field, fieldState: { error } }) => {
                            return (
                              <div className="w-full">
                                <label className="dm_sans font-medium text-[14px] text-gray-700 block mt-1 mb-1">
                                  {`No. of Travelers`}
                                </label>

                                <div className="flex gap-2 mb-5 items-center">
                                  <input
                                    sx={formStyle2.input}
                                    {...field}
                                    type="number"
                                    value={field.value || 1}
                                    onChange={(e) => {
                                      const val =
                                        e.target.value === ""
                                          ? ""
                                          : Number(e.target.value);
                                      if (
                                        val === "" ||
                                        (val >= 1 && val <= 100)
                                      ) {
                                        field.onChange(val);
                                      }
                                    }}
                                    className="dm_sans font-medium text-[14px] text-center py-2 bg-white 
              text-gray-700 rounded-md w-full max-w-[400px] outline-0 focus:outline-none focus:ring-0  "
                                    min={1}
                                    max={100}
                                  />

                                  <button
                                    type="button"
                                    onClick={() =>
                                      field.onChange(
                                        Math.max((field.value || 1) - 1, 1)
                                      )
                                    }
                                    disabled={(field.value || 1) <= 1}
                                    className="px-3 py-1  bg-gray-200 font-bold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    {`−`}
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      field.onChange(
                                        Math.min((field.value || 1) + 1, 100)
                                      )
                                    }
                                    disabled={(field.value || 1) >= 100}
                                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    {`+`}
                                  </button>
                                </div>

                                {error && (
                                  <span className="dm_sans text-[13px] text-red-600">
                                    {error.message}
                                  </span>
                                )}
                              </div>
                            );
                          }}
                        />
                      </div>
                    </div> */}
                   <div className="mt-4">
                     <CustomButton
                      className="dm_sans font-medium text-[14px] leading-[15px] mt-4"
                      type="submit"
                      loading={isSubmitting}
                    >
                      {`Submit & Get Quote`}
                    </CustomButton>
                   </div>

                    <Dialog
                      open={openn}
                      onClose={handleClosee}
                      aria-labelledby="connect-us-title"
                      maxWidth="sm"
                      fullWidth
                    >
                      <DialogContent className="bg-[#DEF2FC] px-4! sm:px-6!">
                        <ThankyouPopup handleClosee={handleClosee} />
                      </DialogContent>
                    </Dialog>


                  </form>
                </div>
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
