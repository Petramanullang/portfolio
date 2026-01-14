// src/pages/blog/components/ArticleProse.jsx
import React from "react";

export const ArticleProse = ({ children }) => {
  return (
    <article
      className={[
        "max-w-[720px] mx-auto",
        "text-[17px] leading-[1.9] tracking-[0.01em]",
        "text-foreground",
        // headings
        "[&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-black [&>h2]:tracking-tight",
        "[&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-black",
        // paragraphs
        "[&>p]:mt-4 [&>p]:text-muted-foreground",
        // lists
        "[&>ul]:mt-4 [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:text-muted-foreground",
        "[&>ol]:mt-4 [&>ol]:pl-6 [&>ol]:list-decimal [&>ol]:text-muted-foreground",
        "[&>li]:mt-2",
        // links
        "[&_a]:underline [&_a]:underline-offset-4 [&_a]:text-foreground",
        // blockquote
        "[&>blockquote]:mt-6 [&>blockquote]:border-l-4 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:text-muted-foreground",
        // code
        "[&_code]:rounded-md [&_code]:border [&_code]:border-border [&_code]:bg-accent/40 [&_code]:px-2 [&_code]:py-1 [&_code]:text-[0.95em]",
        // images/figures
        "[&>figure]:mt-6 [&>figure]:mb-2",
        "[&>figure_img]:w-full [&>figure_img]:rounded-2xl [&>figure_img]:border [&>figure_img]:border-border",
        "[&>figure_figcaption]:mt-2 [&>figure_figcaption]:text-xs [&>figure_figcaption]:text-muted-foreground",
        // tables (optional)
        "[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse",
        "[&_th]:border [&_th]:border-border [&_th]:bg-accent/40 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-black",
        "[&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-muted-foreground",
      ].join(" ")}
    >
      {children}
    </article>
  );
};
