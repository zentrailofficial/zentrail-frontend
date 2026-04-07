import TextInput from "@/comman-component/TextInput";
import React, { useState } from "react";
import formStyle from "@/comman-component/TextInput/inputStyle";
import { useForm } from "react-hook-form";
import CustomButton from "@/comman-component/customButton";
import buttonStyle from "@/comman-component/customButton/buttonStyle";
import Image from "next/image";
import { Dialog, DialogContent } from "@mui/material";
import ThankyouPopup from "@/comman-component/ThankyouPopup/ThankyouPopup";
const BlogSubscription = () => {
  const handleClosee = () => {
    setOpenn(false);
    reset();
  };
  const [openn, setOpenn] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOpenn(true);
    setTimeout(() => {
      setOpenn(false);
    }, 3000);

  };
  return (
    <div className="py-6 md:py-10 bg-[url('/blog/section3.png')] bg-cover bg-center ">
      <div className="custom-container grid grid-cols-12 gap-5 md:gap-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-7 dm_sans">
          <div>
            <h2 className="responsiveheading2 font-medium text-[#1A2E33] relative mb-1.5 mt-5">
              {`Want to `}{" "}
              <span className="text-[#37863F]">{` trek smarter?`}</span>
              <div className=" w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[64px]  md:h-[64px] absolute md:top-[-65px] md:left-[-10px] sm:top-[-50px] sm:left-[-10px] top-[-30px] left-0 ">
                <Image
                  src="/blog/trekkingman.svg"
                  fill
                  className=" object-contain"
                  alt="contact image"
                />
              </div>
            </h2>
          </div>
          <p className="responsive-text  text-[#4D5D60] ">{`Subscribe to TrailMail, our no-noise, once-a-week travel drop. Get exclusive trek tips, discounts, and gear hacks.`}</p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email"
              sx={formStyle.blogfield}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter valid email",
                },
              }}
            />
            <CustomButton type="submit" sx={buttonStyle.blogbutton}>
              Subscribe
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
            </CustomButton>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BlogSubscription;
