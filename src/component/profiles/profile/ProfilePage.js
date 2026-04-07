import React from "react";
import Image from "next/image";
import CustomButton from "@/comman-component/customButton";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

export const ProfilePage = ({ profile }) => {
  const router = useRouter();
  const { logout } = useAuth();
  return (
    <div className="custom-container bg-white py-8 md:py-10">
      <h2 className="responsive-heading text-[#1A2E33] font-medium  text-center mb-5 sm:mb-10 ">{`Personal Information`}</h2>
      <div className="flex bg-[#DEF2FC] items-center text-center gap-9 p-2  rounded-lg">
        <div>
          {profile?.profilePic && profile?.profilePic !== "undefined" ? (
            <div className="relative size-25 rounded-full overflow-hidden bg-red-900">
              <Image
                src={profile?.profilePic}
                alt={"image"}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="size-25 bg-[#35c0f0] text-4xl rounded-full flex justify-center items-center font-normal text-white">
              {profile?.fullName.substring(0, 1)?.toUpperCase()}
            </div>
          )}
        </div>
        <h3 className="responsiveheading5 text-[#1A2E33]  font-medium mt-3 mb-2 sm:mb-5 items-center text-center">
          <strong>{profile?.fullName}</strong>
        </h3>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2  my-7 gap-3 lg:w-[80%]">
        <div className="flex flex-col items-start border-1 border-[#0000001A] px-3 py-2">
          <p className="responsive-text font-[900] items-start  text-[#00000080]">
            {`Full Name`}
          </p>
          <p className="responsive-text font-[900] items-start mt-1 text-[#1A2E33]">
            {profile?.fullName}
          </p>
        </div>
        <div className="flex flex-col items-start border-1 border-[#0000001A] px-3 py-2">
          <p className="responsive-text font-[900] items-start  text-[#00000080]">
            {`Email`}
          </p>
          <p className="responsive-text font-[900] items-start mt-1 text-[#1A2E33]">
            {profile?.email}
          </p>
        </div>
        <div className="flex flex-col items-start border-1 border-[#0000001A] px-3 py-2">
          <p className="responsive-text font-[900] items-start  text-[#00000080]">
            {`Phone no`}
          </p>
          <p className="responsive-text font-[900] items-start mt-1 text-[#1A2E33]">
            {profile?.mobile}
          </p>
        </div>
        <div className="flex flex-col items-start border-1 border-[#0000001A] px-3 py-2">
          <p className="responsive-text font-[900] items-start  text-[#00000080]">
            {`Preferred Language`}
          </p>
          <p className="responsive-text font-[900] items-start mt-1 text-[#1A2E33]">
            {`English`}
          </p>
        </div>
        <div className="flex flex-col items-start border-1 border-[#0000001A] px-3 py-2">
          <p className="responsive-text font-[900] items-start  text-[#00000080]">
            {`Registered on`}
          </p>
          <p className="responsive-text font-[900] items-start mt-1 text-[#1A2E33]">
            {formatDate(profile?.createdAt)}
          </p>
        </div>
        <div className="flex flex-col items-start border-1 border-[#0000001A] px-3 py-2">
          <p className="responsive-text font-[900] items-start  text-[#00000080]">
            {`Bio / About You`}
          </p>
          <p className="responsive-text font-[900] items-start mt-1 text-[#1A2E33]">
            {profile?.bio?.length > 0
              ? profile?.bio
              : "Short bio about their travel vibe"}
          </p>
        </div>
        {/* {data?.map((val) => (
          <div
            key={val.id}
            className="flex flex-col items-start border-1 border-[#0000001A] p-3"
          >
            <p className="responsiveheading5 items-start  text-[#00000080]">
              {val.label}
            </p>
            <p className="responsiveheading5 items-start mt-1 text-[#1A2E33]">
              {val.title}
            </p>
          </div>
        ))} */}
      </div>
      <div className="flex gap-6 mt-7 lg:mt-16 items-center">
        <Link href="/edit-profile">
          <LinkButton text="Edit Profile" className="h-[51px]! w-[130px]!" />
        </Link>
        {/* <CustomButton onClick={() => router.push("edit-profile")} width={142}>{`Edit Profile`}</CustomButton> */}

        <CustomButton
          width={107}
          color="#37863F"
          onClick={logout}
        >{`Logout`}</CustomButton>
      </div>
    </div>
  );
};
