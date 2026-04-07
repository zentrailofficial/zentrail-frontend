import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blogData, border , path}) => {
  const { featuredImage, createdAt, title, uid } = blogData;

  const formatdate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formatted = date.toLocaleDateString("en-US", options);
    return formatted;
  };

  return (
    <Link
      href={`/${path||"blogs"}/${uid}`}
      className={`${
        border && "border-[1.2px]"
      } border-[#7A9195] rounded-[10px]  py-5 h-fit group-hover:shadow group-focus:shadow group-active:shadow 
          hover:bg-[#DEF2FC] focus:bg-[#DEF2FC] active:bg-[#DEF2FC] 
          hover:transform-gpu focus:transform-gpu active:transform-gpu  transition`}
    >
      <div className="relative  mx-auto rounded-full overflow-hidden size-[150px] md:size-[150px]">
        <Image
          src={featuredImage?.url}
          fill
          quality={100}
          alt={title}
          className="object-cover"
        />
      </div>

      <div className="text-center mt-4">
        <div className="flex gap-2 justify-center items-center my-4">
          <div className="pr-1 border-r-4  border-[#DEF2FC] group-hover:border-[white] group-focus:border-[white] group-active:border-[white]">
            <div className="relative shrink-0 w-[50px] h-[50px]  ">
              <Image
                src="/blog/blogcardicon1.png"
                alt="Blog Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-left">
            <p className="dm_sans text-sm text-[#0000008f]">{`Published on`}</p>
            <p className="dm_sans text-[#35C0F0] text-sm line-clamp-1">
              {formatdate(createdAt)}
            </p>
          </div>
        </div>

        <div className="px-3">
          <h4 className="dm_sans font-semibold mb-2 line-clamp-2 h-[45px]">{title}</h4>
          <p className="dm_sans text-[#555] text-base line-clamp-2 h-[45px]">
            {blogData?.meta?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
