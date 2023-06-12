"use client";

import React from "react";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={1}
        theme="light"
      />
    </>
  );
}
