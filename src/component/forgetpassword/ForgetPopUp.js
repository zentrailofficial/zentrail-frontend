import CustomButton from "@/comman-component/customButton";
import buttonStyle from "@/comman-component/customButton/buttonStyle";
import CustomButton2 from "@/comman-component/customButton2";
import TextInput from "@/comman-component/TextInput";
import formStyle from "@/comman-component/TextInput/inputStyle";
import TextInput2 from "@/comman-component/TextInput2";
import formStyle2 from "@/comman-component/TextInput2/inputStyle2";
import { apiClient } from "@/lib/api-client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import OTPInput from "react-otp-input";
import { toast } from 'react-toastify';

const ForgetPopUp = ({ setopen }) => {
  const { handleSubmit, control, watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [sendotp, setsendotp] = useState(0);
  const [otp, setOtp] = useState("");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("Confirmpassword");
  const [isVerifying, setIsVerifying] = useState(false);
  const onSubmit = async (data) => {
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match!");
      return;
    }
    try {
      const res = await apiClient.post("/userAuth/travel/forgot-password-otp", {
        email: data.email,
      });
      // alert(res.data.message);
      toast.success(res?.data?.message);
      setsendotp(1);
    } catch (err) {
      toast.error("Error sending OTP:", err);
    }
  };

  const handleVerify = async () => {
    try {
      setIsVerifying(true);
      const res = await apiClient.post("/userAuth/travel/verify-otp-reset", {
        email,
        otp,
        password,
        confirmPassword,
      });
      toast.success(res.data.message);
      setopen(false);
    } catch (err) {
      toast.error("Error verifying OTP:");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div>
      <div className="custom-container h-full bg-[#DEF2FC] p-6">
        <div className="flex flex-col md:flex-row  justify-center gap-3 sm:gap-5 md:gap-10">
          <div className="md:w-1/2 w-full text-center md:text-left ">
            <div className="dm_sans">
              <h2 className="responsiveheading2">{`Trouble Logging In?`}</h2>
              <h6 className="responsive-text">{`Let’s get you back on your travel trail.`}</h6>
            </div>
            <div className=" w-[250px] h-[180px] sm:w-[303px] sm:h-[260px] md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-[360px] relative m-auto  mt-3 md:mt-10">
              <Image
                src="/forgetHero.png"
                alt="forgetHero"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="dm_sans mb-4 mb:mb-11">
              <h4 className="responsiveheading5 font-medium">{`No worries, it happens.`}</h4>
              <p>{`Enter your email address or mobile number linked with your ZenTrail account, and we’ll send you a secure link to reset your password.`}</p>
            </div>

            <div>
              {sendotp == 0 && (
                <>
                  <div className="dm_sans mb-1  mb:mb-2">
                    <h2 className="lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] font-bold">
                      {`Reset Password`}
                    </h2>
                    <p className="text-base">
                      {` Please enter your email to receive the reset instructions.`}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                      <TextInput2
                        control={control}
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        sx={formStyle2.fieldstyle}
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "enter valid email",
                          },
                        }}
                      />
                    </div>
                    <div className="mb-2">
                      <TextInput2
                        control={control}
                        type="password"
                        name="password"
                        placeholder="Enter your New password"
                        label="New Password"
                        rules={{
                          required: "New Password is required",
                        }}
                      />
                    </div>
                    <div className="mb-2">
                      <TextInput2
                        control={control}
                        type="password"
                        name="Confirmpassword"
                        placeholder="Enter your Confirm password"
                        label="Confirm Password"
                        rules={{
                          required: "Password is required",
                        }}
                      />
                    </div>
                    <p className="text-sm dm_sans text-[#00000080] mt-2">{`We'll send you a link to reset your password.`}</p>

                    <div className="flex flex-wrap gap-3 md:gap-2 sm:gap-2 mt-4">
                      <div>
                        <CustomButton2
                          variant="outlined"
                          color="#000000"
                          sx={buttonStyle.forgetButton}
                          onClick={() => setopen(false)}
                        >
                          Cancel
                        </CustomButton2>
                      </div>
                      <div>
                        <CustomButton
                          onClick={handleSubmit(onSubmit)}
                          type="submit"
                          loading={isSubmitting}
                          sx={buttonStyle.forgetButton}

                        >
                          Send Reset Link
                        </CustomButton>
                      </div>
                    </div>
                  </form>
                </>
              )}

              {sendotp == 1 && (
                <div className="w-full">
                  <h2 className="lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] font-bold">
                    {`Verify OTP`}
                  </h2>
                  <p className="text-base">
                    {` Please enter your otp send to your email`}
                  </p>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<TfiLayoutLineSolid size={10} />}
                    renderInput={(props) => (
                      <input
                        {...props}
                        className="!w-[40px] !h-[45px] sm:!w-[55px] sm:!h-[50px] bg-amber-50 border border-gray-300 text-center text-lg rounded-md "
                      />
                    )}
                  />

                  <div className="flex flex-wrap gap-3 md:gap-2 sm:gap-2 mt-10">
                    <div>
                      <CustomButton2
                        variant="outlined"
                        color="#000000"
                        sx={buttonStyle.forgetButton}
                        onClick={() => setopen(false)}
                      >
                        Cancel
                      </CustomButton2>
                    </div>
                    <div>
                      <CustomButton
                        onClick={handleVerify}
                        type="submit"
                        loading={isVerifying}
                        sx={buttonStyle.forgetButton}
                      >
                        Verify
                      </CustomButton>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPopUp;
