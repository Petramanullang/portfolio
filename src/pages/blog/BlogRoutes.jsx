import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BlogIndex } from "./BlogIndex";
import { BlogPost } from "./BlogPost";

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route index element={<BlogIndex />} />
      <Route path=":slug" element={<BlogPost />} />
      <Route path="*" element={<Navigate to="/blog" replace />} />
    </Routes>
  );
};
