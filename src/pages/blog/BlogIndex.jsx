// src/pages/blog/BlogIndex.jsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogLayout } from "./components/BlogLayout";
import { BlogToolbar } from "./components/BlogToolbar";
import { BlogPostRow } from "./components/BlogPostRow";
import { BlogSidebar } from "./components/BlogSidebar";
import { useBlogQuery } from "./hooks/useBlogQuery";
import { BLOG_POSTS } from "./posts";

const EmptyState = ({ onReset }) => (
  <Card className="border-border bg-background">
    <CardContent className="p-6">
      <div className="text-lg font-black">Tidak ada hasil</div>
      <p className="mt-2 text-sm text-muted-foreground">
        Coba ganti keyword / pilih topic lain.
      </p>
      <div className="mt-4">
        <Button
          className="border-2 bg-[#171717] hover:bg-white! hover:text-black!"
          onClick={onReset}
        >
          Reset filter
        </Button>
      </div>
    </CardContent>
  </Card>
);

const EndOfFeed = () => (
  <Card className="border-border bg-background">
    <CardContent className="p-6">
      <div className="text-lg font-black">End of feed</div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        Post kamu saat ini masih sedikit, jadi wajar halaman “habis” lebih
        cepat. Kalau mau nambah, tinggal tambah object baru di{" "}
        <b>src/pages/blog/posts.js</b>.
      </p>

      <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
        <div>✅ Tambah: title, excerpt, tag, date, readTime, cover</div>
        <div>
          ✅ Konten detail: isi `content` (format markdown/html yang kamu pakai)
        </div>
        <div>✅ Route otomatis: /blog/{`{slug}`}</div>
      </div>
    </CardContent>
  </Card>
);

export const BlogIndex = () => {
  const q = useBlogQuery(BLOG_POSTS, { pageSize: 6 });

  const showPosts = q.visible.length > 0;

  return (
    <BlogLayout>
      <div className="space-y-6">
        <BlogToolbar
          query={q.query}
          onQuery={q.setQuery}
          tags={q.tags}
          tag={q.tag}
          onTag={q.setTag}
          sort={q.sort}
          onSort={q.setSort}
          onReset={q.reset}
          total={BLOG_POSTS.length}
          filtered={q.filtered.length}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          {/* LEFT */}
          <div className="space-y-4">
            {!showPosts ? (
              <EmptyState onReset={q.reset} />
            ) : (
              <>
                {q.visible.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                  >
                    <BlogPostRow post={post} />
                  </motion.div>
                ))}
              </>
            )}
          </div>

          {/* RIGHT */}
          <BlogSidebar
            posts={q.filtered.length ? q.filtered : BLOG_POSTS}
            tags={q.tags}
            activeTag={q.tag}
            onTag={q.setTag}
          />
        </div>
      </div>
    </BlogLayout>
  );
};
