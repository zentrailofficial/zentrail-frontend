import TextInput2 from "@/comman-component/TextInput2";
import { Chip, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import formStyle2 from "@/comman-component/TextInput2/inputStyle2";
import { MuiTelInput } from "mui-tel-input";
import CustomButton from "@/comman-component/customButton";
import CustomButton2 from "@/comman-component/customButton2";
import PersonIcon from "@mui/icons-material/Person";
import {
  Dialog,
  DialogContent,
} from "@mui/material";
import AddTraveller from "./addTraveller";
import formatdate from "@/lib/formateDate";
import { apiClient } from "@/lib/api-client";
import { toast } from "react-toastify";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline, IoPricetagsSharp } from "react-icons/io5";

const gender = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "other" },
];

const payment = [
  { id: "online", label: "online" },
  { id: "Cash", label: "Cash" },
  { id: "Bank Transfer", label: "Bank Transfer" },
];

export const BookingForm = ({ apiData }) => {
  const [openbatchesmodel, setopenbatchesmodel] = useState(false)
  const [travellers, setTravellers] = useState([]);
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      batches: {},
      fullname: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      billing_address: "",
      tour_id: apiData?._id,
      number_of_people: "",
      peoplelist: [],
      booking_date: new Date(),
      preference: "",
      travel_date_start: "",
      travel_date_end: "",
      status: "pending",
      paymentmethod: ""
    },
  });

  const batches = watch("batches");

  useEffect(() => {
    if (batches?.fromDate) {
      setValue("travel_date_start", batches.fromDate);
    }
    if (batches?.toDate) {
      setValue("travel_date_end", batches.toDate);
    }
  }, [batches, setValue]);

  const onSubmit = async (data) => {
    const mainTraveller = {
      fullname: data.fullname,
      age: data.age,
      gender: data.gender,
    };
    const updatedPeopleList = [mainTraveller, ...(data.peoplelist || [])];
     const updatedData = {
    ...data,
    peoplelist: updatedPeopleList,
    number_of_people: updatedPeopleList.length,
  };
    const res = await apiClient.post(`booking/travel`, updatedData)
    if (res?.status == 201) {
      toast.success(res?.data?.message)
      reset()
      setTravellers([])
    }
  };

  const handleAddTraveller = (travellerData) => {
    const updatedTravellers = [...travellers, travellerData];
    setTravellers(updatedTravellers);
    setValue("peoplelist", updatedTravellers);
    // setValue("number_of_people", updatedTravellers?.length + 1)
  };

  const handleDeleteTraveller = (indexToDelete) => {
    const updated = travellers.filter((_, index) => index !== indexToDelete);
    setTravellers(updated);
    setValue("peoplelist", updated);
    // setValue("number_of_people", updated?.length + 1)
  };



  return (
    <div className="custom-container mt-6 md:mt-10 ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <h2 className="dm_sans responsiveheading2 font-medium mb-2 ">
            {`Booking Form`}
          </h2>
          <p className="dm_sans  responsive-text text-[#4D5D60] font-medium mb-3">
            {`Fill in the details below to secure your spot.`}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-12  gap-5 py-2  ">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6 w-full overflow-auto">
                <label className="dm_sans font-medium text-[14px] leading-[25px]">{`Choose Batches`}</label>
                <div className="w-full overflow-auto! scrollbutunvisible ">
                  <div className="border rounded-[6px] px-3 h-[42px] w-full border-slate-300 flex cursor-pointer items-center" onClick={() => setopenbatchesmodel(true)}>
                    <Controller
                      name="batches"
                      control={control}
                      rules={{
                        validate: (value) =>
                          value?.fromDate && value?.toDate
                            ? true
                            : "Please select a valid batch (start and end date)",
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Stack flexDirection="row" flexWrap={"wrap"} gap={2}>
                            {field?.value?.fromDate ? <span className="dm_sans text-[#222]">{`${formatdate(field?.value?.fromDate)} to ${formatdate(field?.value?.toDate)}`}</span> : !error?.message && "select batches"}
                          </Stack>
                          {error && (
                            <p className="dm_sans  text-red-800 text-[14px] mt-1">
                              {error?.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 ">
                <TextInput2
                  control={control}
                  className="dm_sans font-medium text-[14px] leading-[15px] border! border-gray-300! rounded-md px-3 py-2 w-full "
                  name="fullname"
                  placeholder="Enter your full name"
                  type="text"
                  label="Full Name"
                  rules={{
                    required: "Full Name is required ",
                    minLength: { value: 3, message: "Minimum 3 characters" },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only alphabets are allowed",
                    },
                  }}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 ">
                <TextInput2
                  control={control}
                  name="age"
                  type="number"
                  label="Age"
                  placeholder="Enter your age"
                  className="dm_sans font-medium text-[14px] leading-[15px] border! border-gray-300! rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-[#3D863F]"
                  rules={{
                    required: "Minimum age is required ",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only  type numerice value",
                    },
                    min: { value: 1, message: "Age must be at least 1" },
                    max: { value: 100, message: "Age must be less than 100" },
                  }}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <label className="dm_sans font-medium text-[14px] leading-[25px]">{`Gender`}</label>
                <div className="w-full overflow-auto scrollbutunvisible ">
                  <Controller
                    name="gender"
                    control={control}
                    rules={{
                      required: "Please select a gender",
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <div className="w-full">
                        <div className="flex gap-2">
                          {gender.map((opt) => (
                            <Chip
                              key={opt.id}
                              label={opt.label}
                              onClick={() => field.onChange(opt.id)}
                              className="dm_sans font-medium text-[14px] leading-[18px] text-[#4D5D60] "
                              sx={{
                                borderRadius: "6px",
                                height: "40px",
                                backgroundColor:
                                  field.value === opt.id ? "#35C0F0" : "#35C0F02",
                                color: field.value === opt.id ? "#fff" : "#4D5D60",
                                "&:hover": {
                                  backgroundColor: "#35C0F0",
                                  color: "#fff",
                                },
                              }}
                            />
                          ))}
                        </div>
                        {error && (
                          <p className="dm_sans  text-red-800 text-[14px] mt-1">
                            {error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <TextInput2
                  control={control}
                  className="dm_sans font-medium w-full text-[14px] leading-[15px]  border-1! border-gray-300! rounded-md  "
                  name="email"
                  label="Email "
                  placeholder="Enter  your email address"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email ",
                    },
                  }}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6 ">
                <div className=" w-full flex flex-col relative">
                  <label className="dm_sans font-medium text-[14px] leading-[25px]">
                    {`Phone`}
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <MuiTelInput
                          className="dm_sans font-medium text-[14px] leading-[15px]  border-1! border-gray-300! rounded-md px-3 py-2  "
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
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <TextInput2
                  control={control}
                  name="preference"
                  type="text"
                  label="Tell us your preferences…"
                  placeholder="Special requests or dietary preferences"
                  className="dm_sans font-medium text-[14px] leading-[15px] w-full border-1! border-gray-300! rounded-md px-3 py-2  "
                />
                <p className="dm_sans text-[12px] text-gray-400 mt-1 block">
                  {`Optional`}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6 ">
                <label className="dm_sans font-medium text-[14px] leading-[25px]">{`Payment Method`}</label>
                <div className="w-full overflow-auto scrollbutunvisible ">
                  <Controller
                    name="paymentmethod"
                    control={control}
                    rules={{
                      required: "Please select a payment method",
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <div className="w-full">
                        <div className="flex gap-2">
                          {payment.map((opt) => (
                            <Chip
                              key={opt.id}
                              label={opt.label}
                              onClick={() => field.onChange(opt.id)}
                              className="dm_sans font-medium text-[14px] leading-[18px] text-[#4D5D60]"
                              sx={{
                                borderRadius: "6px",
                                height: "40px",
                                backgroundColor:
                                  field.value === opt.id ? "#35C0F0" : "#35C0F02",
                                color: field.value === opt.id ? "#fff" : "#4D5D60",
                                "&:hover": {
                                  backgroundColor: "#35C0F0",
                                  color: "#fff",
                                },
                              }}
                            />
                          ))}
                        </div>
                        {error && (
                          <p className="dm_sans  text-red-800 text-[14px] mt-1">
                            {error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6  ">

                <TextInput2
                  control={control}
                  name="billing_address"
                  type="number"
                  label="billing address"
                  placeholder="billing address"
                  className="dm_sans font-medium text-[14px] leading-[15px] border! border-gray-300! rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-[#3D863F]"
                  rules={{
                    required: "billing address is required ",
                  }}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6 mb-4 w-full ">
                <div>
                  <label className="dm_sans font-medium text-[14px] block mb-1">
                    {`Add Traveller`}
                  </label>
                  <div
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="cursor-pointer dm_sans text-[14px] text-gray-500 py-2 px-3 rounded-md border border-gray-300 w-full bg-white"
                  >
                    {travellers.length > 0 ? (
                      <div className="flex gap-3 flex-wrap">
                        {travellers.map((t, i) => (
                          <Chip
                            key={i}
                            icon={<PersonIcon />}
                            label={t.fullname}
                            onDelete={() => handleDeleteTraveller(i)}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 mt-2">Click to add travellers</p>
                    )}

                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <CustomButton2
                className="dm_sans font-medium text-[14px] leading-[15px]"
                onClick={() => {
                  reset()
                  setTravellers([])
                }}
              >
                {"Reset"}
              </CustomButton2>
              <CustomButton type="submit" loading={isSubmitting} disabled={isSubmitting}>
                Submit
              </CustomButton>
            </div>

            <div>
              <Dialog
                open={openbatchesmodel}
                onClose={() => setopenbatchesmodel(false)}
                aria-labelledby="connect-us-title"
                maxWidth="sm"
                fullWidth
              >
                <DialogContent className="px-4! sm:px-6!">
                  <Controller
                    name="batches"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Stack flexDirection="row" flexWrap={"wrap"} gap={2}>
                        {apiData?.batches?.map((val) =>
                          <Chip key={val._id}
                            label={`${formatdate(val.fromDate)} to ${formatdate(val.toDate)}`}
                            onClick={() => {
                              field.onChange(val)
                              setopenbatchesmodel(false)
                            }}
                            className="dm_sans font-medium text-[14px] leading-[18px] text-[#4D5D60]"
                            sx={{
                              borderRadius: "50px",
                              height: "40px",
                              backgroundColor:
                                field.value?._id === val._id ? "#35C0F0" : "#35C0F02",
                              color: field.value?._id === val._id ? "#fff" : "#4D5D60",
                              "&:hover": {
                                backgroundColor: "#35C0F0",
                                color: "#fff",
                              },
                            }}
                          />
                        )}
                      </Stack>
                    )}
                  />
                </DialogContent>
              </Dialog>
            </div>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="connect-us-title"
              maxWidth="sm"
              fullWidth
            >
              <AddTraveller handleClose={() => setOpen(false)} onSave={handleAddTraveller} />
            </Dialog>
          </form>
        </div>
        <div className="col-span-12 md:col-span-4 md:p-5 mb-5">
          <div className="gap-3 flex flex-col border border-slate-300 rounded">

            <div className="w-[100%] h-[200px] relative">
              <Image src={apiData?.featuredImage?.url} fill quality={100} alt="Image"/>

              {/* <TripCards val={apiData}  /> */}
            </div>
            <h3 className="responsiveheading6 dm_sans mx-5 mt-2 mb-0">{apiData?.title}</h3>
            <div className="flex dm_sans gap-3 mx-5 items-center"><div className="size-5 shrink-0"><MdDateRange size={20} /></div><span>{apiData?.duration}</span></div>
            <div className="flex dm_sans gap-3 mx-5 items-center"><div className="size-5 shrink-0"><IoLocationOutline size={20} /></div><span>{apiData?.locationAddress}</span></div>
            <div className="flex dm_sans gap-3 mx-5 mb-5 items-center"><div className="size-5 shrink-0"><IoPricetagsSharp size={20} /></div>
              <div className="  gap-2 bottom-2 left-3">
                <p className="dm_sans responsive-text font-medium text-[#000]">
                  {`Price: ₹`}
                  {apiData?.price - (
                    apiData?.discount?.amount
                      ? apiData?.discount.amount
                      : apiData?.discount?.percentage > 0
                        ? (apiData?.price * apiData?.discount.percentage) / 100
                        : 0
                  )}
                </p>
                <p className="dm_sans text-[12px] font-normal text-[#000]">
                  ({(apiData?.discount?.amount > 0 || apiData?.discount?.percentage > 0) ? <del>{`₹`}{apiData?.price}</del> : <span>{`₹`}{apiData?.price}</span>}{apiData?.discount?.amount > 0 ? <><span className="delay-900 text-[green] ms-3">{`₹`}{apiData?.discount?.amount}{" Off"}</span> </> : apiData?.discount?.percentage > 0 ? <><span className="delay-900 text-[lightgreen] ms-3">{apiData?.discount?.percentage}{`%`} {" Off"}</span></> : ""})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

