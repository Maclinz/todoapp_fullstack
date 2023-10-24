"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default page;
