import CustomButton from "@/comman-component/customButton";
import TextInput from "@/comman-component/TextInput";
import { Chip, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import formStyle from "@/comman-component/TextInput/inputStyle";
import { MuiTelInput } from "mui-tel-input";
import { apiClient } from "@/lib/api-client";
import SelectInput from "@/comman-component/SelectInput";
import { toast } from "react-toastify";
import ThankyouPopup from "@/comman-component/ThankyouPopup/ThankyouPopup";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const options = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "email", label: "Email" },
];

const budgetRangeOption = [
  { id: "Budget", label: "Budget" },
  { id: "Mid-range", label: "Mid-range" },
  { id: "Luxury", label: "Luxury" },
  { id: "Not Sure Yet", label: "Not Sure Yet" },
];

const lookingforoptions = [
  { id: "Offbeat Trail", label: "Offbeat Trail" },
  { id: "Wellness Retreat", label: "Wellness Retreat" },
  { id: "Trek", label: "Trek" },
  { id: "Cultural Experience", label: "Cultural Experience" },
];

const ContactForm = () => {
  const [loading, setloading] = useState(null);
  const handleClosee = () => {
    setOpenn(false);
    reset();
  };
  const [openn, setOpenn] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNo: "",
      email: "",
      extraFields: {
        travelmonth: "",
        numoftravelers: "",
        preferredcontact: "",
        lookingfor: "",
        budgetrange: "",
      },
      sourcePage: "travel",
    },
  });

  const onSubmit = async (data) => {
    setloading(true);
    try {
      const res = await apiClient.post("inquiryform/travel", data);
      reset();
      setOpenn(true);
      setTimeout(() => {
        setOpenn(false);
      }, 3000);
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message, {
        autoClose: 3000,
      });
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="bg-[#DEF2FCBD] py-6 md:py-10" id="form">
      <div className="custom-container">
        <h2 className="responsiveheading2 text-center">{`Drop Us a Message`}</h2>
        <p className="responsive-text text-center text-[#4D5D60] mt-2 mb-6">{`We usually reply within 24 hours (faster on WhatsApp).`}</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:grid grid-cols-2 gap-x-5"
        >
          <div className="">
            <TextInput
              control={control}
              name="fullName"
              placeholder="Enter your full name"
              type="text"
              label="Full Name"
              rules={{
                required: "Full name is required ",
                minLength: { value: 3, message: "Minimum 3 characters" },
                pattern: {
                  value: /^[A-Za-z\s]+$/, // only letters and spaces
                  message: "Only alphabets are allowed",
                },
              }}
            />
            {/* <TextInput
              control={control}
              name="phone"
              type="tel"
              label="Mobile Number"
              placeholder="Enter your mobile number"
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              }}
              inputProps={{
                max: 10,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              onKeyDown={(e) => {
                if (
                  !/[0-9]/.test(e.key) &&
                  e.key !== "Backspace" &&
                  e.key !== "Tab"
                ) {
                  e.preventDefault();
                }
              }}
            /> */}

            <div className="flex flex-col relative">
              {" "}
              <label className="dm_sans font-medium text-[14px] leading-[25px]">
                Mobile Number
              </label>
              {/* <Controller
              name="phone"
              control={control}
              rules={{
                required: "Mobile number is required",
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="relative">
                  <MuiTelInput
                    {...field}
                    defaultCountry="in"
                    // onlyCountries={["in"]}
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={field.value || ""}
                    onChange={(value) => {
                      // Prevent entering more than 10 digits
                      const digits = value.replace(/\D/g, "");
                      // if (digits.length <= 10) {
                      field.onChange(value);
                      // }
                    }}
                    error={!!error}
                    // helperText={error?.message}
                    
                    InputProps={{
                      sx: formStyle.input,
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />
                  {error && (
                    <p className="dm_sans absolute bottom-[8] text-[14px] text-red-700 left-0">
                      {error?.message}
                    </p>
                  )}
                </div>
              )}
            /> */}
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

            {/* <TextInput
              control={control}
              type="text"
              label="Travel Month (optional)"
              name="extraFields.travelmonth"
              placeholder="Months : Jan"
            /> */}
            <Controller
              name="extraFields.travelmonth"
              control={control}
              rules={{
                validate: (value) => {
                  if (!value) return true; // optional
                  return (
                    months.includes(value) || "Please select a valid month"
                  );
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <SelectInput
                    value={months}
                    options={months}
                    label="Travel Month"
                    placeholder="Month (optional)"
                    field={field} // pass field here
                  />
                  {error && (
                    <span className="dm_sans text-[14px] text-red-700 absolute bottom-[10] left-0">
                      {error.message}
                    </span>
                  )}
                </>
              )}
            />

            {/* <div>
            <label className="dm_sans font-medium text-[14px] leading-[25px]">Number of Travelers</label>
              <input
                list="options"
                className="bg-white w-full rounded-[6px] p-2 outline-0"
                placeholder="Type to search..."
              />
              <datalist id="options">
                {months?.map((val, i) => (
                  <option className="bg-red-900" key={i} value={val} />
                ))}
              </datalist>
            </div> */}

            <TextInput
              control={control}
              type="number"
              name="extraFields.numoftravelers"
              label="Number of Travelers"
              placeholder="Enter number of travelers"
              rules={{
                required: "Enter number of travelers",
                min: { value: 1, message: "Minimum 1 traveler" },
                max: { value: 100, message: "Maximum 100 travelers" },
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                min: 1,
                max: 100,
              }}
              onKeyDown={(e) => {
                // Allow only numbers and control keys
                if (
                  !/[0-9]/.test(e.key) &&
                  e.key !== "Backspace" &&
                  e.key !== "Tab"
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className="">
            <TextInput
              control={control}
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
            <div>
              <label className="dm_sans font-medium text-[14px] leading-[25px]">
                {`Preferred Contact Method`}
              </label>
              <Controller
                name="extraFields.preferredcontact"
                control={control}
                rules={{ required: "Please select a contact method" }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex gap-2 mb-8 relative">
                    {options.map((opt) => (
                      <Chip
                        key={opt.id}
                        label={opt.label}
                        onClick={() => field.onChange(opt.id)}
                        className="dm_sans font-medium text-[14px] leading-[18px] flex-1"
                        sx={{
                          borderRadius: "6px",
                          height: "40px",
                          backgroundColor:
                            field.value === opt.id ? "#35C0F0" : "#35C0F02e",
                          color: field.value === opt.id ? "#fff" : "#4D5D60",
                          "&:hover": {
                            backgroundColor: "#35C0F0",
                            color: "#fff",
                          },
                        }}
                      />
                    ))}
                    {error && (
                      <span className="dm_sans text-[14px] text-red-700 absolute bottom-[-25] left-0">
                        {error.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <label className="dm_sans font-medium text-[14px] leading-[25px]">{`What Are You Looking For?`}</label>
            <div className="w-full overflow-auto scrollbutunvisible mb-8">
              <Controller
                name="extraFields.lookingfor"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex gap-2">
                    {lookingforoptions.map((opt) => (
                      <Chip
                        key={opt.id}
                        label={opt.label}
                        onClick={() => field.onChange(opt.id)}
                        className="dm_sans font-medium text-[14px] leading-[18px] text-[#4D5D60]"
                        sx={{
                          borderRadius: "6px",
                          height: "40px",
                          backgroundColor:
                            field.value === opt.id ? "#35C0F0" : "#35C0F02e",
                          color: field.value === opt.id ? "#fff" : "#4D5D60",
                          "&:hover": {
                            backgroundColor: "#35C0F0",
                            color: "#fff",
                          },
                        }}
                      />
                    ))}
                  </div>
                )}
              />
            </div>
            <label className="dm_sans font-medium text-[14px] leading-[25px]">{`Budget Range`}</label>
            <div className="w-full overflow-auto scrollbutunvisible">
              <Controller
                name="extraFields.budgetrange"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex gap-2">
                    {budgetRangeOption.map((opt) => (
                      <Chip
                        key={opt.id}
                        label={opt.label}
                        onClick={() => field.onChange(opt.id)}
                        className="dm_sans font-medium text-[14px] leading-[18px] text-[#4D5D60]"
                        sx={{
                          borderRadius: "6px",
                          height: "40px",
                          backgroundColor:
                            field.value === opt.id ? "#35C0F0" : "#35C0F02e",
                          color: field.value === opt.id ? "#fff" : "#4D5D60",
                          "&:hover": {
                            backgroundColor: "#35C0F0", // ✅ stays same as selected
                            color: "#fff",
                          },
                        }}
                      />
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="col-span-2 text-center mt-10 sm:mt-0">
            <CustomButton
              width={300}
              borderRadius="12px"
              type="submit" // ✅ submit handled by react-hook-form
              loading={loading}
            >
              Send Message
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
