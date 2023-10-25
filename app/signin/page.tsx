"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn />
    </div>
  );
}

export default page;
