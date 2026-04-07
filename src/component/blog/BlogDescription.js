import React from "react";
import style from "./../../styles/blogdescription.module.css";
const BlogDescription = ({ blog }) => {
  return (
    <div className={`${style.noTailwind}`}>
      <div className="custom-container  ">
        <div className="border border-[#35C0F0] rounded-[10px] sm:rounded-[20px] md:rounded-[30px] p-5 px-5 mt-3 sm:mt-6">
          <div
            className={`${style.descriptionContent}  dm_sans`}
            dangerouslySetInnerHTML={{ __html: blog?.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;

// import NoTailwindWrapper from "@/comman-component/NoTailwindWrapper";
// import React from "react";

// const BlogDescription = ({ blog }) => {
//   let data = blog?.description?.replace(
//     /(<iframe\b[^>]*?)\s*sandbox=(["']?)?[^"'\s>]*?(["']?)?([^>]*>)/gi,
//     "$1 $4"
//   );
//   data = data.replace(
//     /<table([^>]*)>([\s\S]*?)<\/table>/gi,
//     '<div class="table-wrapper"><table$1>$2</table></div>'
//   );

//   return (
//     <NoTailwindWrapper
//       styleText={`
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           font-family: "DM Sans", Arial, sans-serif;
//         }

//        .custom-container {
//   max-width: 1280px;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 1rem;
//   padding-right: 1rem;
//   margin:40px 0px 0px 0px
  
// }

// @media (min-width: 640px) {
//   .custom-container {
//   margin-left: auto;
//   margin-right: auto;
//     padding-left: 1.5rem;
//     padding-right: 1.5rem;
//   }
// }
// @media (min-width: 768px) {
//   .custom-container {
//   margin-left: auto;
//   margin-right: auto;
//     padding-left: 2rem;
//     padding-right: 2rem;
//   }
// }
// @media (min-width: 1024px) {
//   .custom-container {
//   margin-left: auto;
//   margin-right: auto;
//     padding-left: 2.5rem;
//     padding-right: 2.5rem;
//   }
// }

//         .descriptionContent {
//         padding:30px;
//         border:1px solid #37863f;
//         border-radius:20px;
//           line-height: 1.6;
//           color: #333;
//           font-size: 16px;
//         }
//           @media (min-width: 1024px) {
//   .descriptionContent {
//     font-size: 18px;
//   }
// }
//           .descriptionContent ul li {
//           padding-left:10px;
//            list-style-position: inside;
//           }
//              .descriptionContent ol li {
//           padding-left:10px;
//            list-style-position: inside;
//           }
//            .descriptionContent img {
//   max-width: 100%;
//   height: auto;
//   display: block;
// }
//   .descriptionContent .table-wrapper{
//   width :100%;
//   overflow: auto;
//   } 
//    .table-wrapper td {
//   border:1px solid ;}
//         .descriptionContent img {
//           display: block;      
//           margin: 1px auto;   
//         }

//         /* If images are inside links, keep the same behavior */
//         .descriptionContent a img {
//           border: none;
//         }
//       `}
//     >
//       <div className="custom-container">
//         <div
//           className="descriptionContent"
//           dangerouslySetInnerHTML={{ __html: data }}
//         />
//       </div>
//     </NoTailwindWrapper>
//   );
// };

// export default BlogDescription;
