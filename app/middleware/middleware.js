"use client";
import { useRouter } from "next/navigation";
import { getToken } from "../services/authService";

export const isAuthenticated = () => {
  console.log(typeof window);

  if (typeof window === "undefined") {
    return false;
  }

  const token = getToken();
  if (!token || token === "null" || token === "undefined") {
    return false;
  }
  return true;
};

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  return isAuthenticated() ? children : router.push("/");
};

export default ProtectedRoute;
