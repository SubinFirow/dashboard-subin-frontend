"use client";
import { useRouter } from "next/navigation";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
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
