"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { getTheme } from "./theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const theme = getTheme();

  return (
    <html lang="en">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <body
            className={inter.className}
            style={{ background: theme.palette.common.primary }}
          >
            {children}
          </body>
        </ThemeProvider>
      </Provider>
    </html>
  );
}
