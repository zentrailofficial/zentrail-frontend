import CustomButton from "@/comman-component/customButton";
import TextInput from "@/comman-component/TextInput";
import formStyle from "@/comman-component/TextInput/inputStyle";
import { apiClient } from "@/lib/api-client";
import { MuiTelInput } from "mui-tel-input";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import ThankyouPopup from "@/comman-component/ThankyouPopup/ThankyouPopup";
import { Dialog, DialogContent } from "@mui/material";

const TripDetails = ({ description }) => {
  const [openn, setOpenn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Estimate line height based on computed styles
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "24");
    const maxHeight = lineHeight * 10; // 10 lines

    const checkClamped = () => {
      const actualHeight = el.scrollHeight;
      setIsClamped(actualHeight > maxHeight);
    };

    checkClamped(); // Initial check

    // Optional: observe for size/content changes
    const resizeObserver = new ResizeObserver(checkClamped);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [description]);

  const handleClosee = () => {
    setOpenn(false);
    reset();
  };

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await apiClient.post("inquiryform/travel", data);
      setOpenn(true);
      setTimeout(() => {
        setOpenn(false);
      }, 3000);
      reset();
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="py-2 md:py-4">
      <div className="custom-container">
        <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-20 ">
          <div className="col-span-12 sm:col-span-6 md:col-span-7 dm_sans">
            <div className="flex flex-col gap-5">
              <h2 className="responsiveheading2 font-medium text-[#1A2E33] ">
                {`Overview/Trip Details`}
              </h2>
              <div className="max-h-[350px] overflow-auto text-[#1A2E33] descriptionscroll">
                <div className="text-[#1A2E33]">
                  <div
                    ref={contentRef}
                    className={`responsive-text quillistEditor text-[#1A2E33] transition-all duration-300 ease-in-out ${!expanded ? "line-clamp-10" : ""}`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  {isClamped && (
                    <button
                      className="text-blue-600 mt-2 hover:underline focus:outline-none cursor-pointer"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Explore Less" : "Explore More"}
                    </button>
                  )}
                </div>{" "}
              </div>
              {/* <p className="responsive-text  text-[#1A2E33] ">{description}</p> */}
              {/* <span className="underline text-base">
                {TripDetailsContent.exploreLink}
              </span> */}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-5 dm_sans max-w-full">
            <div className="border border-[#37863F] rounded-xl p-4 sm:p-5 md:p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  control={control}
                  name="fullName"
                  placeholder="Full name"
                  label="Full Name"
                  sx={formStyle.fieldstyle}
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

                <div className="flex flex-col relative">
                  <label
                    htmlFor="phoneNo"
                    className="dm_sans font-medium text-[14px] leading-[25px]"
                  >
                    Mobile Number
                  </label>
                  <Controller
                    name="phoneNo"
                    control={control}
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
                          id="phoneNo"
                          value={field.value || ""}
                          defaultCountry="IN"
                          size="small"
                          onChange={(value) => {
                            field.onChange(value);
                          }}
                          sx={[
                            formStyle.input,
                            { border: "1px solid #e5e5e5", padding: "0px" },
                          ]}
                          className="border-2"
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
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  sx={formStyle.fieldstyle}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "enter valid email",
                    },
                  }}
                />
                <div className="flex items-center gap-6">
                  <div>
                    <CustomButton
                      aria-label="Submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      Submit
                    </CustomButton>
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
                  </div>
                  <div>
                    <Link
                      aria-label="Chat with us on WhatsApp"
                      href={`https://wa.me/+918287316546`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline cursor-pointer"
                    >
                      <FaWhatsapp
                        aria-label="WhatsApp Icon"
                        size={28}
                        color="#37863F"
                        className="hover:underline cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
