import EditBanner from '@/component/profiles/edit-profile/EditBanner'
import ProfileDetail from '@/component/profiles/edit-profile/ProfileDetail'
import { BASE_URL_API } from '@/lib/common'
import axios from 'axios'
import React from 'react'

const EditProfile = ({apiData,profilecomplete}) => {
  return (
    <>
        <EditBanner profile={apiData?.user}/>
        <ProfileDetail profile={apiData?.user} profilecomplete={profilecomplete}/>
    </>
  )
}

export default EditProfile;

export async function getServerSideProps(context) {
  const token = context.req.cookies?.zentrail_user_token;
    if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let apiData = null;
  let profilecomplete = null

  try {
    const res = await axios.get(`${BASE_URL_API}userAuth/travel/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
     const res2 = await axios.get(`${BASE_URL_API}userAuth/travel/user/profile-completion`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    apiData = res?.data;
     profilecomplete = res2?.data
  } catch (err) {
    console.error("SSR API error:", err.message);
  }

  return {
    props: { apiData,profilecomplete }, // passed to component as props
  };
}
