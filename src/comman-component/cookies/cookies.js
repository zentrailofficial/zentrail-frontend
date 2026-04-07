import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "../customButton";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Slide,
  Switch,
} from "@mui/material";

const COOKIE_KEY = "cookie_preferences";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CookiesPopup = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiePref = Cookies.get(COOKIE_KEY);
    if (cookiePref) {
      try {
        const parsed = JSON.parse(cookiePref);
        setPreferences({
          necessary: true,
          analytics: !!parsed.analytics,
          marketing: !!parsed.marketing,
        });
      } catch (e) {
        // If parsing fails, show banner
        setShowBanner(true);
      }
    } else {
      // If no cookie preferences exist, show banner
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (!showBanner) setShowPreferences(false);
  }, [showBanner]);

  if (!showBanner) return null;
  const savePreferencesToCookie = (prefs) => {
    Cookies.set(COOKIE_KEY, JSON.stringify(prefs), {
      expires: 365,
      sameSite: "Lax",
    });
  };
  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPrefs);
    savePreferencesToCookie(newPrefs);
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    const newPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPrefs);
    savePreferencesToCookie(newPrefs);
    setShowBanner(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    setShowPreferences(false);
    savePreferencesToCookie(preferences);
    setShowBanner(false);
  };

  const handlePreferenceChange = (type) => (event) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: event.target.checked,
    }));
  };

  return (
    <>

    <div className="fixed  bottom-0 md:bottom-5 left-0 right-0 mx-0  md:mx-5 lg:mx-12 z-30 ">
      <div className="flex flex-col md:flex-row  gap-0.5 md:gap-2   items-center bg-[#DEF2FC] rounded-t-xl rounded-xl md:rounded-full  ">
        <div className=" w-full px-2 m-2.5">
          <div className="flex flex-row gap-1.5 md:gap-2  items-center">
            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] relative shrink-0">
              <Image src="/cookies.svg" alt="logo" fill className="object-contain" />
            </div>
            <div className="text-base">
              <p className="dm_sans">{`We use cookies to improve your experience. By continuing, you agree to our use of cookies`}</p>
            </div>
          </div>
        </div>
        <div className=" w-full px-1 md:px-5 my-1.5   ">
          <div className="flex flex-row gap-2 sm:gap-4 justify-center md:justify-end  items-center">
            <p className="dm_sans  responsive-text text-[#1A2E33] font-medium">
              <Link
                onClick={handleManagePreferences}
                href="/"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1.5 hover:underline cursor-pointer text-[#1A2E33] whitespace-nowrap"
              >
                {`Cookies Settings`}
              </Link>
            </p>
            <div className="flex sm:flex-row gap-2 sm:gap-5">
              <CustomButton
                onClick={handleAcceptAll}
                height={{xs: "40px", sm:"50px"}}
                className="w-[100px] sm:w-full text-sm sm:text-base"
                type="submit"
                color="#1A2E33"
              >
                {`Accept All`}
              </CustomButton>
              <CustomButton
                height={{xs: "40px", sm:"50px"}}
                onClick={handleRejectNonEssential}
                className="w-[100px] sm:w-full  text-sm sm:text-base"
                type="submit"
              >
                {`Reject All`}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Dialog
        open={showPreferences}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowPreferences(false)}
        maxWidth="sm"
        fullWidth
        className="rounded-[24px] m-4"
      >
        {/* <DialogTitle className="flex justify-between items-center pb-2"> */}
          <p className="dm_sans  responsive-text font-bold!">
            {" "}
            {`Cookie Preferences`}{" "}
          </p>
          <IconButton
            aria-label="close"
            onClick={() => setShowPreferences(false)}
            className="text-gray-500"
          >
            <CloseIcon />
          </IconButton>
        {/* </DialogTitle> */}
        <DialogContent className="pt-4">
          {/* Necessary Cookies */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <p className="dm_sans responsive-text font-bold! text-base">
                {" "}
                {`Necessary Cookies`}{" "}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-green-700 font-bold dm_sans text-[15px]">
                  {" "}
                  {` ✔ Always Active`}{" "}
                </p>
              </div>
            </div>
            <p className=" dm_sans text-[15px] text-[#1A2E33]">
              {`These are essential for the website to function properly (you can't turn these off).`}
            </p>
          </div>
          <Divider className="my-2" />
          {/* Analytics Cookies */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <p className="dm_sans responsive-text font-bold! text-base">
                {" "}
                {`Analytics Cookies`}{" "}
              </p>
              <FormControlLabel
                control={
                  <Switch
                    color="success"
                    checked={preferences.analytics}
                    onChange={handlePreferenceChange("analytics")}
                  />
                }
                label=""
                className="m-0!"
              />
            </div>
            <p className=" dm_sans text-[15px] text-[#1A2E33]">
              {` Help us understand how users interact with our site so we can improve the experience.`}
            </p>
          </div>
          <Divider className="my-2" />
          {/* Marketing Cookies */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <p className="dm_sans responsive-text font-bold! text-base">
                {" "}
                {`Marketing Cookies`}{" "}
              </p>
              <FormControlLabel
                control={
                  <Switch
                    color="success"
                    checked={preferences.marketing}
                    onChange={handlePreferenceChange("marketing")}
                  />
                }
                label=""
                className="m-0!"
              />
            </div>
            <p className=" dm_sans text-[15px] text-[#1A2E33]">
              {`Allow us to show you personalized ads and offers on platforms like Instagram, Google, and YouTube.`}
            </p>
          </div>
        </DialogContent>
        <DialogActions className="p-6 pt-2">
          <CustomButton onClick={handleSavePreferences} size="large" fullWidth>
            {`Save My Preferences`}
          </CustomButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CookiesPopup;
