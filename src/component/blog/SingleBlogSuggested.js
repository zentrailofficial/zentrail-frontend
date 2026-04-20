import BlogCard from "@/comman-component/blog/BlogCard";
import LinkButton from "@/comman-component/LinkButtton/LinkButton";
import Link from "next/link";
import React from "react";

const defaultContent = {
  heading: "Suggested Blogs",
};

const SingleBlogSuggested = ({
  suggestedBlogs,
  path,
  content = defaultContent,
}) => {
  return (
    <>
      <div className="bg-[url('/blog/section3.png')] bg-cover bg-center py-6 md:py-10">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row w-full gap-5 sm:gap-10 ">
            <div className="w-full md:w-1/1 p-2 self-center lg:pr-[100px]">
              <p className="responsive-text ">
                {`Your first trek isn’t about proving anything. It’s about experiencing something real. When you go with a `}
                <span className="text-green-600 font-bold">{`Zentrail batch,`}</span>
                {` you’re not just walking trails — you’re joining a tribe.`}
              </p>
              <p className="responsive-text text-green-600 mt-3">{`Still unsure?`}</p>
              <p className="responsive-text ">
                <span className="text-[#000]">{`DM us on Instagram `}</span>
                {`or drop your questions in the comments below. Our past trekkers love helping first-timers.`}
              </p>
            </div>
            <div className="w-full md:w-1/2 p-2 self-center flex flex-col gap-5">
              <p className="responsive-text">{`Ready to take the first step?`}</p>
              <Link href="/upcoming-trips">
                <LinkButton
                  text="Check Upcoming Beginner Treks"
                  className="w-full!"
                />
              </Link>
              {/* <CustomButton>
                <Link href="/upcoming-trips">
                  {`Check Upcoming Beginner Treks`}
                </Link>
              </CustomButton> */}
              <Link href={`https://wa.me/+918287316546`}>
                <LinkButton
                  text="Join Our WhatsApp Interest Group"
                  className="w-full!"
                />
              </Link>
              {/* <CustomButton>
                <Link
                  href={`https://wa.me/+918287316546`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`Join Our WhatsApp Interest Group`}
                </Link>
              </CustomButton> */}
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container py-6 md:py-10">
        <h2 className="responsiveheading2 text-center">{content.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 md:mt-10">
          {suggestedBlogs?.map((val, i) => (
            <BlogCard path={path} key={i} blogData={val} border={false} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleBlogSuggested;
