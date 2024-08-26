"use client";
import { IconButton } from "@mui/material";
import ProtectedRoute from "../middleware/middleware";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { getTheme } from "../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/slices/themeSlice";
import ResponsiveDrawer from "./components/drawer";

export default function DashboardLayout({ children }) {
  const theme = getTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <ProtectedRoute>
      <IconButton
        onClick={handleToggle}
        color="inherit"
        sx={{ color: theme.palette.common.secondary }}
      >
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <ResponsiveDrawer>{children}</ResponsiveDrawer>
    </ProtectedRoute>
  );
}
