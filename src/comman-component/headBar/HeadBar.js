import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HeadBar() {
    const [latestTrip, setLatestTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchLatestTrip = async () => {
            try {
                const response = await apiClient.get(`travel-packages/travel/getalltravelpackage?page=1&limit=1`);
                if (response?.data?.data?.length > 0) {
                    setLatestTrip(response.data.data[0]);
                }
            } catch (error) {
                console.error("Error fetching latest trip:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestTrip();
    }, []);

    // Discount calculation 
    const calculateDiscount = () => {
        if (!latestTrip) return null;

        const price = Number(latestTrip?.price) || 0;
        const discount = latestTrip?.discount;

        // Check if discount object exists
        if (!discount) return null;

        // Method 1: Direct amount discount
        if (discount?.amount > 0) {
            return {
                amount: discount.amount,
                type: "amount",
            };
        }

        // Method 2: Percentage discount
        if (discount?.percentage > 0 && price > 0) {
            const discountAmount = Math.round((price * discount.percentage) / 100);
            return {
                amount: discountAmount,
                percentage: discount.percentage,
                type: "percentage",
            };
        }

        return null;
    };

    const discountInfo = calculateDiscount();
    const handleClick = () => {
        if (latestTrip) {
            router.push(`/trail/${latestTrip?.slug}`);
        }
    };
    if (loading) {
        return (
            <div className="fixed top-0 left-0 w-full z-50 bg-[#0b7a3b] text-white text-center py-2 px-4">
                <p className="text-sm md:text-base font-medium animate-pulse">
                    {` Loading latest trips...`}
                </p>
            </div>
        );
    }
    if (!latestTrip) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#17361E] text-white text-center py-2 px-4 cursor-pointer hover:bg-[#096b33] transition-colors"
            onClick={handleClick}>
            <p className="text-sm md:text-base font-medium flex items-center justify-center gap-2 flex-wrap">
                <span className="truncate max-w-[200px] md:max-w-none capitalize hover:none">
                    {latestTrip?.title}
                    {discountInfo && " - Early Bird"}
                </span>
                {discountInfo ? (
                    <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs md:text-sm font-bold">
                        {discountInfo.type === "amount"
                            ? `Save upto ₹${discountInfo.amount.toLocaleString("en-IN")} 🎉`
                            : `Save upto ${discountInfo.percentage}% (₹${discountInfo.amount.toLocaleString("en-IN")}) 🎉`}
                    </span>
                ) : (
                    <span className="text-yellow-300 font-semibold">{`Book Now !`} 🚀</span>
                )}
            </p>
        </div>
    );
}