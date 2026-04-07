import buttonStyle from "@/comman-component/customButton/buttonStyle";
import CustomButton2 from "@/comman-component/customButton2";
import { Dialog, DialogContent } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ChangePassword from "../changepassword/ChangePassword";

const EditBanner = ({ profile }) => {
  const [open, setOpen] = useState(false);

  const UserInformation = {
    image: {
      src: "edit-profile.svg",
      alt: "editbanner",
    },
    name: "Girdhar Sharma",
    subtext: "Let’s make every journey mindful.",
  };
  return (
    <div className="bg-[#4D5D60] py-3">
      <div className="custom-container grid grid-cols-12 h-[300px] md:h-[220px] items-center sm:gap-1 md:gap-10 justify-items-center md:justify-items-normal text-center md:text-left">
        <div className="flex  flex-col md:flex-row items-center  gap-4 md:gap-10 col-span-12 sm:col-span-12 md:col-span-9 rounded-full sm:mb-1.5 ">
          <div>
            {profile?.profilePic &&profile?.profilePic!=="undefined" ? (
              <div className="relative size-25 rounded-full overflow-hidden bg-red-900">
              <Image
                src={profile?.profilePic}
                alt={"image"}
                fill
                className="object-cover"
              />
              </div>
            ) : (
              <div className="size-25 bg-[#35c0f0] text-4xl rounded-full flex justify-center items-center font-normal text-white">{profile?.fullName.substring(0,1)?.toUpperCase()}</div>

            )}
          </div>
          <div className=" text-[#FFFFFF] dm_sans ">
            <h1 className="responsiveheading5">{profile?.fullName}</h1>
            <p className="text-sm">{UserInformation.subtext}</p>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-3 justify-items-center text-center">
          <CustomButton2
            sx={buttonStyle.editProfile}
            onClick={() => {
              setOpen(true);
            }}
          >
            {`Change Password`}
          </CustomButton2>
        </div>
      </div>
      <Dialog
        open={open}
        aria-labelledby="connect-us-title"
        maxWidth="xs"
        fullWidth
        sx={{ borderRadius: "20px" }}
        className=""
      >
        <DialogContent className=" bg-[#DEF2FC]  border border-gray-400   px-4! sm:px-6!">
          <ChangePassword setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditBanner
