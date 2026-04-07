import { Chip, Pagination } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import LatestBlog from "./LatestBlog";
import { apiClient } from "@/lib/api-client";
import BlogSubscription from "./BlogSubscription";
import FAQ from "@/comman-component/commonFaq";
const faqData = [
  {
    question: "What are the best treks in India for beginners?",
    answer:
      "We regularly publish guides on beginner-friendly treks like Triund, Kedarkantha, and Nag Tibba with details on duration, difficulty, and preparation.Keep checking out and reading about the best treks from Zentrail Travel and Trekking in India for more info.",
  },
  {
    question: "How should I prepare for a high-altitude trek?",
    answer:
      "Our Fitness & Prep blogs cover training routines, nutrition tips, and acclimatization techniques to help you get trek-ready.",
  },
  {
    question: "What should I pack for a Himalayan trek?",
    answer:
      "Check our Travel Tips section for a complete packing checklist — from must-have gear and clothing layers to safety essentials.",
  },
  {
    question: "Which is the best season for trekking in the Himalayas?",
    answer:
      "Spring–summer (Mar–Jun) is great for meadows and clear skies, monsoon (Jul–Sep) for lush greenery, and winter (Dec–Feb) for snow treks. Our blog offers seasonal guides to help you choose the right batch.",
  },
  {
    question: "Is group (batch) trekking better than solo trekking?",
    answer:
      "Batch treks offer safety, expert guidance, shared costs, and the joy of traveling with like-minded adventurers making them a smarter and more enjoyable choice than going solo. Our blog explains the benefits of batch-based trekking — safety, guided support, community bonding, and cost-effectiveness.",
  },
  {
    question: "How do I choose the right trek based on fitness level?",
    answer:
      "Each trek guide includes difficulty grading, trail distance, and altitude info so you can match it with your current fitness level.",
  },
  {
    question: "What safety measures are followed on Zentrail treks?",
    answer:
      "We share behind-the-scenes content on how our guides handle safety protocols, first aid, and emergency preparedness on every batch. Keep exploring Zentrail Blogs for in-depth details",
  },
];

const traveldata = [
  { id: 1, label: "Package", image: "/blog/blog1.png" },
  { id: 2, label: "Safety", image: "/blog/blog2.png" },
  { id: 3, label: "gear", image: "/blog/blog3.png" },
  { id: 4, label: "food", image: "/blog/blog4.png" },
];

const categoryList = [
  { id: "Weekend Escapes", label: "Weekend Escapes" },
  { id: "Travel Tips", label: "Travel Tips" },
  { id: "Trek Guides", label: "Trek Guides" },
  { id: "Behind the Trails", label: "Behind the Trails" },
  { id: "Batch Stories", label: "Batch Stories" },
  { id: "Trail Tech", label: "Trail Tech" },
  { id: "Fitness & Prep", label: "Fitness & Prep" },
  { id: "View All", label: "View All" },
];

const BlogCategory = ({ category, posts }) => {
  const scrollRef = useRef(null);
  const [categoryselected, setCatogorySelected] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [filteredblogData, setfilteredblogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [faq, setFaq] = useState([]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    setShowButtons(scrollWidth > clientWidth);
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [category]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
    const scrollAmount = cardWidth;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const fetchApiCall = async (name) => {
    setPage(1)
    setCatogorySelected(name);
    try {
      setLoading(true);
      const { data } = await apiClient.get(
        `blogs/travel/search/allblog?type=blog&status=Published&query=${name}&page=1&limit=8`
      );
      setfilteredblogData({blogs:data?.results} || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      if (categoryselected == "") {
        const { data } = await apiClient.get(`blogs/all/travel?type=blog&status=Published&page=${value}&limit=8`);
        setfilteredblogData(data || []);
      } else {
        const { data } = await apiClient.get(
          `blogs/travel/search/allblog?type=blog&status=Published&query=${categoryselected}&page=${value}&limit=8`
        );
        setfilteredblogData(data?.results || []);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchApiCallAll = async () => {
    setCatogorySelected("");
    setPage(1)
    setFaq([])
    try {
      setLoading(true);
      const { data } = await apiClient.get(`blogs/all/travel?type=blog&status=Published&page=1&limit=8`);
      setfilteredblogData(data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (posts?.blogs?.length > 0) {
      setfilteredblogData(posts);
      setFaq([])
    }
  }, [posts?.blogs]);


  return (
    <>
    <div className="custom-container mt-6 md:mt-10 mb-5">
      <h2 className="dm_sans responsiveheading2 text-center">{`Blog Categories`}</h2>
      <p className="dm_sans responsive-text mt-3 text-[#555] text-center">{`Explore our blog posts by category.`}</p>

      <div className="mt-8 gap-x-1 flex items-center">
        {showButtons && (
          <button
            onClick={() => scroll("left")}
            className="p-1 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineArrowBackIos size={15} />
          </button>
        )}
        <div className="gap-5 flex scrollbutunvisible" ref={scrollRef}>
          <Chip
            variant={categoryselected == "" ? "outlined" : "filled"}
            label={"All"}
            onClick={fetchApiCallAll}
            sx={{
              paddingX: "20px",
              fontSize: "16px",
              backgroundColor: categoryselected !== "" && "#35C0F02e",
            }}
          />
          {category?.map((val, i) => (
            <Chip
              variant={categoryselected == val.name ? "outlined" : "filled"}
              key={i}
              label={val.name}
              onClick={() => {fetchApiCall(val.name)
              setFaq(val?.faq)}}
              sx={{
                paddingX: "20px",
                fontSize: "16px",
                backgroundColor:
                  categoryselected !== val.name ? "#35C0F02e" : "transparent",
              }}
            />
          ))}
        </div>

        {showButtons && (
          <button
            onClick={() => scroll("right")}
            className="p-1 rounded-full border-1 text-[#37863F] border-[#37863F] cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineArrowForwardIos size={15} color="green" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-5 mt-10">
        <h3 className="dm_sans text-[20px] font-[900] ">Travel Tips</h3>
        <div className="flex scrollbutunvisible gap-5">
          {traveldata?.map((val, i) => (
            <div key={i} className="flex gap-2 items-center">
              <p className="text-center md:text-left text-[16px] font-medium dm-sans text-[#4D5D60] ">
                {val.label}
              </p>
              <div className="relative size-7">
                <Image src={val.image} alt="icons" fill />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="custom-container py-7">
        <h3 className="dm_sans responsiveheading2 text-center mb-7">{`Latest Blogs`}</h3>
        {loading ? (
          <p className="h-[400px] flex items-center justify-center">
            Loading blogs...
          </p>
        ) : (
          <LatestBlog
            // posts={(filteredblogData.length > 0 &&categoryselected!=="All")? filteredblogData : posts?.blogs}
            posts={filteredblogData}
            categoryselected={categoryselected}
          />
        )}
      </div>
      {filteredblogData?.totalpages>1&&<div className="flex justify-center "><Pagination count={filteredblogData?.totalpages} page={page} onChange={handleChange} color="success"/></div>}
      
    </div>
     <BlogSubscription />
      <FAQ faqData={faq?.length>0?faq:faqData} />
    </>
  );
};

export default BlogCategory;
