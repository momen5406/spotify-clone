"use client";
import Box from "@/components/Box";
import React from "react";
import { ScaleLoader } from "react-spinners";

const loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <ScaleLoader color="#22c55e" />
    </Box>
  );
};

export default loading;
