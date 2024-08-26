"use client";

import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { login, setToken, setUserId } from "./services/authService";

export default function LoginPage() {
  const router = useRouter();
  const theme = useTheme();

  const textFieldStyle = {
    color: "white",
    "& label.Mui-focused": {
      color: theme.palette.common.overlay,
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.common.overlay,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.common.overlay,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.common.overlay,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.overlay,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.common.overlay,
      },
      "&.MuiInputBase-input input": {
        color: theme.palette.common.overlay,
      },
    },
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await login(values);
      setUserId(response.id);
      setToken(response.token);
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        gap: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.palette.common.primary,
      }}
    >
      <Toaster />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                bgcolor: theme.palette.common.shadow,
                padding: 4,
                borderRadius: 2,
                boxShadow: theme.shadows[3],
                width: "400px",
              }}
            >
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  color: theme.palette.common.secondary,
                  fontWeight: "bold",
                  letterSpacing: 2,
                  mb: 3,
                }}
              >
                Dashboard
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={textFieldStyle}
                InputProps={{
                  sx: {
                    color: theme.palette.common.secondary,
                  },
                }}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={textFieldStyle}
                InputProps={{
                  sx: {
                    color: theme.palette.common.secondary,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  mt: 3,
                  bgcolor: theme.palette.common.focus,
                  "&:hover": { bgcolor: theme.palette.common.focus },
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Log In
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
