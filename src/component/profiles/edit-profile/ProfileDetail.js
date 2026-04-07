import TextInput from "@/comman-component/TextInput";
import React, { useEffect } from "react";
import formStyle from "@/comman-component/TextInput/inputStyle";
import { Controller, useForm } from "react-hook-form";
import { Chip } from "@mui/material";
import CustomButton from "@/comman-component/customButton";
import CustomButton2 from "@/comman-component/customButton2";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL_API } from "@/lib/common";
import { apiClient } from "@/lib/api-client";
import Cookies from "js-cookie";
import { MuiTelInput } from "mui-tel-input";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import TextInput2 from "@/comman-component/TextInput2";
import formStyle2 from "@/comman-component/TextInput2/inputStyle2";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";

const ProfileDetail = ({ profile, profilecomplete }) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      mobile: "", // start empty
      travelStyle: [],
    },
  });
  const travelOptions = [
    { id: "Nature", label: "Nature" },
    { id: "Luxury", label: "Luxury" },
    { id: "Spiritual", label: "Spiritual" },
  ];
  const router = useRouter();

  const onSubmit = async (data) => {
    // return
    try {
      const token = await Cookies.get("zentrail_user_token");
      const formData = new FormData();
      formData.append("fullName", data.fullName || "");
      formData.append("email", data.email || "");
      formData.append("mobile", data.mobile || "");
      formData.append("bio", data.bio || "");
      formData.append("travelStyle", Array.isArray(data.travelStyle) ? data.travelStyle.join(",") : "");
      if (data.profilePic instanceof File) {
        formData.append("profilePic", data.profilePic);
      } else if (profile?.profilePic) {
        formData.append("profilePic", profile.profilePic);
      }
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
      if (res?.status == 200) {
        reset();
        toast.success("profile updated successfully");
        router.push("/profile")
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message)
    }
  };

  useEffect(() => {
    if (profile?.mobile) {
      reset({ mobile: profile.mobile });
    }
  }, [profile, reset]);

  useEffect(() => {
    if (!profile) return;
    let normalizedTravelStyle = [];

    if (Array.isArray(profile.travelStyle)) {
      normalizedTravelStyle = profile.travelStyle
        .flatMap((item) =>
          typeof item === "string"
            ? item.split(",").map((s) => s.trim())
            : []
        )
        .filter(Boolean);
    }

    reset({
      fullName: profile.fullName || "",
      email: profile.email || "",
      mobile: profile.mobile || "",
      travelStyle: normalizedTravelStyle,
      bio: profile.bio || "",
    });
  }, [profile, reset]);


  return (
    <>
      <div className="py-9 md:py-10">
        <div className="custom-container">
          <div className="dm_sans mb-7">
            <h2 className="responsiveheading2 text-[#1A2E33]">{`Profile Details`}</h2>
            <p className="text-base text-[#4D5D60]">{`Update your details to get personalized suggestions and a smoother booking experience.`}</p>
          </div>
          <div className="lg:w-[80%]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput2
                control={control}
                name="fullName"
                placeholder="Enter your full name"
                sx={formStyle2.editfield}
                label="Name"
                defaultValue={profile?.fullName}
                rules={{
                  required: "name is required",
                  minLength: { value: 3, message: "Min 3 characters" },
                }}
              />
              <TextInput2
                control={control}
                name="email"
                label="Enter your email"
                type="email"
                defaultValue={profile?.email}
                disabled
                placeholder="Enter your email"
                sx={formStyle2.editfield}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "enter valid email",
                  },
                }}
              />
              <label className="dm_sans font-medium text-[14px] leading-[25px]">
                Phone Number
              </label>
              <Controller
                name="mobile"
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
                      defaultValue={profile.mobile}
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                      fullWidth
                      sx={[formStyle2.input, { border: "1px solid #0000001A" }]}
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
              <label className="dm_sans font-medium text-[14px] leading-[25px] block mb-1">
                {`Profile Picture`}
              </label>
              <Controller
                name="profilePic"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      sx={formStyle2.editfield}
                      className="hidden w-full"
                      onChange={(e) => field.onChange(e.target.files[0])}
                    />

                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer  rounded-[8px] flex  border border-[#0000001A] px-4 py-3 text-sm text-gray-600 "
                    >
                      <span className="w-full">
                        Upload your profile picture
                      </span>
                    </label>

                    {field.value && (
                      <p className="mt-3 text-sm text-gray-500">
                        Selected:{" "}
                        <span className="font-medium">{field.value.name}</span>
                      </p>
                    )}
                  </div>
                )}
              />

              <div className="my-4">
                <label className="dm_sans font-medium text-[14px] leading-[25px] block">
                  {`Travel Style`}
                </label>

                <Controller
                  name="travelStyle"
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const handleToggle = (option) => {
                      let newValue = Array.isArray(field.value)
                        ? [...field.value]
                        : [];

                      if (newValue.includes(option)) {
                        // remove if already selected
                        newValue = newValue.filter((item) => item !== option);
                      } else {
                        // add if not selected
                        newValue.push(option);
                      }

                      field.onChange(newValue);
                    };

                    return (
                      <div className="flex flex-wrap gap-2">
                        {travelOptions.map((option) => (
                          <Chip
                            key={option.id}
                            label={option.label}
                            onClick={() => handleToggle(option.label)}
                            sx={{
                              borderRadius: "6px",
                              height: "40px",
                              backgroundColor: field.value?.includes(
                                option.label
                              )
                                ? "#35C0F0"
                                : "#35C0F02e",
                              color: field.value?.includes(option.label)
                                ? "#fff"
                                : "#4D5D60",
                              "&:hover": {
                                backgroundColor: "#35C0F0",
                                color: "#fff",
                              },
                            }}
                          />
                        ))}
                      </div>
                    );
                  }}
                />
              </div>
              <TextInput
                control={control}
                name="bio"
                label="Bio / About You"
                defaultValue={profile?.bio}
                placeholder="Short bio about your travel vibe"
                sx={formStyle.editfield}
                multiline
                rows={2}
                rules={{
                  maxLength: { value: 250, message: "Maximum 250 characters" },
                }}
                inputProps={{ maxLength: 250 }}
              />
              <div className="text-left text-[12px] text-[#4D5D60] mt-[-20px] mb-[30px]">
                {watch("bio")?.length || 0}/250
              </div>
              <div className="flex flex-wrap justify-center sm:justify-normal  gap-2">

                {/* <CustomButton2 onClick={() => router.push("/profile")} type="button" width={"168px"} height={"50px"}>
                  {`Cancel`}
                </CustomButton2> */}

                <CustomButton
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  type="submit"
                  width={"168px"}
                >
                  {`Save`}
                </CustomButton>
                <CustomButton
                  type="button"
                  onClick={() => reset()}
                  color="green"
                >
                  {`Reset To Default`}
                </CustomButton>
                <Link href="/profile">
                  <LinkButton text="Cancel" className="w-[180px]" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-11 bg-[#E8F8E1]">
        <div className="custom-container bg-[#E8F8E1] ">
          <div className="dm_sans mb-7 text-center flex flex-col items-center gap-3.5 ">
            <h2 className="responsiveheading2 text-[#000000] mb-2 sm:mb-5">{`Profile Completion`}</h2>
            <Image
              src="/profilecomplete.svg"
              alt="progress"
              width={58}
              height={58}
            />
            <p>{`Your profile is ${profilecomplete?.completionPercentage}% complete.`}</p>

            <CustomButton onClick={() => router.push("/profile")} width={"240px"} color="#000000">
              {`Complete Profile`}
            </CustomButton>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
