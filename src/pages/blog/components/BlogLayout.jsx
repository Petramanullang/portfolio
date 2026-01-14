import React from "react";

export const BlogLayout = ({ title = "Blog", children }) => {
  return (
    <div className="w-full">
      {/* ✅ Container yang melebar sesuai viewport */}
      <div
        className="mx-auto w-full
        max-w-[1180px]
        xl:max-w-[1280px]
        2xl:max-w-[1440px]
        3xl:max-w-[1680px]
        px-4 md:px-6 lg:px-8 3xl:w-[130%]
      "
      >
        <div className="pt-2">
          {title ? (
            <h1 className="text-5xl font-black tracking-tight">{title}</h1>
          ) : null}
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};
