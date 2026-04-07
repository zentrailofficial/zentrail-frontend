// components/ProtectedRoute.js
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.isLoggedIn) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user?.isLoggedIn) {
    return <p>Loading...</p>; // spinner while redirecting
  }

  return children;
}
