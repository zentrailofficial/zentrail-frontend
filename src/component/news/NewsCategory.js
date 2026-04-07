import {  Pagination } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { apiClient } from "@/lib/api-client";
import FAQ from "@/comman-component/commonFaq";
import LatestBlog from "../blog/LatestBlog";
import BlogSubscription from "../blog/BlogSubscription";

const faqData = [
    {
        question: "What kind of travel news does Zentrail cover?",
        answer:
            "Zentrail features the latest updates on destinations, travel advisories, trends, and inspiring stories from explorers across India.",
    },
    {
        question: "How often is the travel news updated on Zentrail?",
        answer:
            "Our travel news section is updated regularly with fresh insights, destination updates, and seasonal travel highlights.",
    },
    {
        question: "Where can I read about new trekking routes or travel advisories?",
        answer:
            " Check the Adventure & Trekking News section for route updates, safety guidelines, and official advisories.",
    },
     {
        question: "What are the top travel trends for 2025?",
        answer:
            "Eco-tourism, offbeat adventures, and slow travel experiences are shaping the biggest travel trends for 2025.",
    },
    {
        question: "Does Zentrail provide verified travel information?",
        answer:
            "Yes, all travel news and updates on Zentrail are verified through reliable sources and experienced travel contributors.",
    },
    {
        question: "How can I get regular travel updates from Zentrail?",
        answer:
            "Subscribe to TrailMail, our weekly newsletter that shares curated travel stories, tips, and exclusive trek offers",
    },
    {
        question: "Can travelers contribute stories or news to Zentrail?",
        answer:
            " Absolutely! Zentrail welcomes authentic travel experiences and stories — you can reach out via our contact section to submit your piece.",
    },
   
];

const defaultline = {
  line: "No News found",
}

const NewsCategory = ({ category, posts, path }) => {
    const scrollRef = useRef(null);
    const [categoryselected, setCatogorySelected] = useState("");
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

  

    const fetchApiCall = async (name) => {
        setPage(1)
        setCatogorySelected(name);
        try {
            setLoading(true);
            const { data } = await apiClient.get(
                `blogs/travel/search/allblog?type=news&status=Published&query=${name}&page=1&limit=8`
            );
            setfilteredblogData({ blogs: data?.results } || []);
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
                const { data } = await apiClient.get(`blogs/all/travel?type=news&status=Published&page=${value}&limit=8`);
                setfilteredblogData(data || []);
            } else {
                const { data } = await apiClient.get(
                    `blogs/travel/search/allblog?type=news&status=Published&query=${categoryselected}&page=${value}&limit=8`
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
            const { data } = await apiClient.get(`blogs/all/travel?type=news&status=Published&page=1&limit=8`);
            setfilteredblogData(data || []);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //   if (categoryselected !== "All") {
    //     fetchApiCall();
    //   } else {
    //     setfilteredblogData([]);
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [categoryselected]);

    useEffect(() => {
        if (posts?.blogs?.length > 0) {
            setfilteredblogData(posts);
            setFaq([])
        }
    }, [posts?.blogs]);

    // console.log(filteredblogData)

    return (
        <>
            <div className="custom-container mt-6 md:mt-10 mb-5">
                <h2 className="dm_sans responsiveheading2 text-center">{`News Categories`}</h2>
                <p className="dm_sans responsive-text mt-3 text-[#555] text-center">{`Explore our travel news articles by category.`}</p>
                <div className="custom-container py-7">
                    <h3 className="dm_sans responsiveheading2 text-center mb-7">{`Latest News`}</h3>
                    {loading ? (
                        <p className="h-[400px] flex items-center justify-center">
                            Loading News...
                        </p>
                    ) : (
                        <LatestBlog
                            // posts={(filteredblogData.length > 0 &&categoryselected!=="All")? filteredblogData : posts?.blogs}
                            path={path}
                            posts={filteredblogData}
                            categoryselected={categoryselected}
                            content={defaultline}
                        />
                    )}
                </div>
                {filteredblogData?.totalpages > 1 && <div className="flex justify-center ">
                    <Pagination count={filteredblogData?.totalpages} page={page} onChange={handleChange} color="success" /></div>}
            </div>
            <BlogSubscription />
            <FAQ faqData={faq?.length > 0 ? faq : faqData} />
        </>
    );
};

export default NewsCategory;
