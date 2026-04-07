import "@/styles/globals.css";
import Layout from "../layout/layout";
import Layout1 from "../layout/layout1";
import Head from "next/head";
import {
  Geist,
  Geist_Mono,
  DM_Sans,
  Manrope,
  Licorice,
} from "next/font/google";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AuthProvider } from "@/context/AuthContext";
import * as gtag from "@/lib/gtag";
import dynamic from "next/dynamic";
import ScrollToTopButton from "@/comman-component/ScrollToTopButton";
// import { ToastContainer } from "react-toastify";
// const ToastContainer = dynamic(() => import("react-toastify").then(mod => mod.ToastContainer));
const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

// import { GoogleOAuthProvider } from "@react-oauth/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});
const licorice = Licorice({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-licorice",
});
const layouts = {
  default: Layout,
  layout1: Layout1,
};

NProgress.configure({ showSpinner: false, speed: 400 });

// Router events for NProgress
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
  // Track pageview for Google Analytics
  gtag.pageview(url);
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts.default;
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${manrope.variable} ${licorice.variable}`}
    >
      <Head>
        <title>zentrail</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}> */}
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
            <ScrollToTopButton />
          </Layout>
        </AuthProvider>
        <ToastContainer />
      {/* </GoogleOAuthProvider> */}
    </div>
  );
}
