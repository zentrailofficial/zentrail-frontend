import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import FaqSchema from "../FaqSchema";

const FAQ = ({ faqData = [], includeSchema = true }) => {
  const [expanded, setExpanded] = useState(null);
  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <>
      {includeSchema && faqData.length > 0 && <FaqSchema faqData={faqData} />}
      {faqData && faqData.length > 0 && (
        <div className="custom-container py-7">
          <h2 className="responsiveheading2 text-center mb-5">{`Frequently Asked Questions`}</h2>
          {Boolean(faqData?.map.length) &&
            faqData?.map((item, index) => (
              <div key={index} className="mb-2.5">
                <div
                  className={`px-[15px] sm:px-[33px] md:px-[38px] py-[14px] sm:py-[15px] md:py-[17px] rounded-[20px] border border-[#93ADB2] cursor-pointer transition-all 
             ${
               expanded === index
                 ? "bg-[#37863F] text-white"
                 : "bg-transparent text-[#1A2E33]"
             }
            `}
                  onClick={() => handleChange(index)}
                >
                  <div className="flex justify-between items-center ">
                    <h3
                      className={`responsiveheading6 dm_sans font-medium  text-[#1A2E33] ${
                        expanded === index ? "text-white" : "text-[#1A2E33]"
                      }`}
                    >
                      {item.question}
                    </h3>
                    {expanded === index ? (
                      <RemoveIcon className="transform transition-all duration-200" />
                    ) : (
                      <AddIcon className="transform transition-all duration-200" />
                    )}
                  </div>
                  {expanded === index && (
                    <div className="mt-1.5 md:mt-3">
                      <p className="responsive-text dm_sans">{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default FAQ;
