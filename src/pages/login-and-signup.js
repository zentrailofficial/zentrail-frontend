import CustomButton from "@/comman-component/customButton";
import CustomButton2 from "@/comman-component/customButton2";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import SEO from "@/comman-component/Seo";
import TextInput from "@/comman-component/TextInput";
import ForgetPopUp from "@/component/forgetpassword/ForgetPopUp";
import PopStyle from "@/component/forgetpassword/popStyle";
import { useAuth } from "@/context/AuthContext";
import { apiClient } from "@/lib/api-client";
import { Box, Modal } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Signin = () => {
  const { login } = useAuth();
  const [showForgetPopup, setShowForgetPopup] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post("userAuth/travel/login", data);
      if (response?.status === 200) {
        reset();
        login(response);
      }
      // toast.success( "login successfully!");
    } catch (err) {
      console.log("API Error:", err);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <SEO
        // url="http://localhost:3000/signup"
        metaTitle="Zentrail Login & Signup | Access or Create Your Account"
        metaDescription="Login or sign up to Zentrail to explore curated tours, trekking adventures, and mindful journeys across India. Manage bookings and start your next trip today."
        keywords="login page, Zentrail login, Create Zentrail account, Travel & Trekking Account, trekking account, login for trip confirmation, tour and trekking in india"
        // canonical="http://localhost:3000/signup"
        ogTitle="Zentrail Login & Signup | Access or Create Your Account"
        ogDescription="Login or sign up to Zentrail to explore curated tours, trekking adventures, and mindful journeys across India. Manage bookings and start your next trip today."
        twitterTitle=" Zentrail Login & Signup | Access or Create Your Account"
        twitterDescription="Login or sign up to Zentrail to explore curated tours, trekking adventures, and mindful journeys across India. Manage bookings and start your next trip today."
        robots="index, follow"
      />

      <div className="bg-[#DEF2FC] flex align-middle items-center py-6 md:py-10 ">
        <div className="custom-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <h1 className="dm_sans font-medium text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[30px]">
                {`Log In`}
              </h1>
              <p className="responsive-text text-[#4D5D60] mt-4">
                {`Log in to view your trips, manage bookings, and access exclusive
              member perks.`}
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextInput
                  control={control}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  label="Email Address"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  }}
                />
                <TextInput
                  control={control}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  label="Password"
                  rules={{
                    required: "Password is required",
                  }}
                />
                <div className="flex gap-1 flex-wrap items-center">
                  <div className="flex-1">
                    <CustomButton2
                      type="button"
                      variant="outlined"
                      color="#000000"
                      width={"100%"}
                      height="48px"
                      onClick={() => setShowForgetPopup(true)}
                    >
                      {`Forgot Password?`}
                    </CustomButton2>
                  </div>

                  <div className="flex-1 ml-2">
                    <Link href="/signup">
                      <LinkButton text="Sign Up" className="bg-black w-[150px]! h-[50px] hover:bg-black!" />
                    </Link>
                    {/* <CustomButton
                        type="button"
                        className="flex-1"
                        width={"100%"}
                        color="#000000"
                        height="48px"
                        onClick={()=>{router.push("signup")}}
                      >
                        {`Sign Up`}
                      </CustomButton> */}
                  </div>
                  <div className="flex-1">
                    <CustomButton
                      className="flex-1"
                      width={"100%"}
                      color="#000000"
                      height="48px"
                      loading={isSubmitting}
                    >
                      {`Log In`}
                    </CustomButton>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showForgetPopup && (
        <Modal
          open={showForgetPopup}
          onClose={() => setShowForgetPopup(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

        >
          <Box sx={PopStyle.forgetpassword}>
            <ForgetPopUp open={showForgetPopup} setopen={setShowForgetPopup} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Signin;
