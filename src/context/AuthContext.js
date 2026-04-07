import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

const defaultUser = {
  token: "",
  isLoggedIn: false,
  profile: {},
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("zentrail_user");
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("zentrail_user", JSON.stringify(user));
    }
  }, [user]);

  const login = (userData) => {
    const { token, user: profile } = userData?.data || {};
    if (!token || !profile) {
      console.error("Invalid login response", userData);
      return;
    }

    setUser({
      ...defaultUser,
      isLoggedIn: true,
      token,
      profile,
    });

    Cookies.set("zentrail_user_token", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
    router.push("/") 
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("zentrail_user");
    }
    Cookies.remove("zentrail_user_token");
    setUser(defaultUser);
    router.push("/") 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
