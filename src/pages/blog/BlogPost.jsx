import React, { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Tags,
  Youtube,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react";
import { BLOG_POSTS } from "./posts";
import { ArticleProse } from "./components/ArticleProse";

const getYouTubeId = (input) => {
  if (!input) return "";
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "");
    const v = url.searchParams.get("v");
    if (v) return v;
    const parts = url.pathname.split("/").filter(Boolean);
    const embedIndex = parts.indexOf("embed");
    if (embedIndex !== -1 && parts[embedIndex + 1])
      return parts[embedIndex + 1];
    return "";
  } catch {
    return "";
  }
};

export const BlogPost = () => {
  const { slug } = useParams();
  const post = useMemo(() => BLOG_POSTS.find((p) => p.slug === slug), [slug]);
  if (!post) return <Navigate to="/blog" replace />;

  const ytId = getYouTubeId(post.youtube);
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const CONTAINER =
    "mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8 min-[1920px]:ml-40";

  return (
    <div className="w-full">
      <div className={CONTAINER}>
        <div className="space-y-6">
          {/* Top actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap items-center justify-between gap-2"
          >
            <Link to="/blog">
              <Button variant="outline" className="border-2">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            </Link>

            {ytId ? (
              <a
                href={`https://www.youtube.com/watch?v=${ytId}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="border-2 bg-white! hover:text-gray-500!">
                  Open Video
                </Button>
              </a>
            ) : null}
          </motion.div>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* MAIN */}
            <div className="min-w-0">
              <Card className="overflow-hidden border-border bg-background">
                {/* Hero */}
                <div className="relative">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-[260px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 font-semibold backdrop-blur">
                        <Tags className="h-4 w-4" />
                        {post.tag}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">
                      {post.title}
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 md:p-10">
                  <div className="mx-auto w-full max-w-[760px]">
                    {post.content ? (
                      <ArticleProse>
                        {/* Render konten secara dinamis dari post.js */}
                        <post.content />

                        {/* Bagian Referensi (Bisa Video, Gambar, atau Keduanya) */}
                        <h2 id="video">Referensi</h2>

                        {ytId || post.referenceImage ? (
                          <div className="mt-4 space-y-6">
                            {/* 1. Jika ada YouTube, tampilkan ini */}
                            {ytId && (
                              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                                <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-accent/30">
                                  <div className="inline-flex items-center gap-2 text-sm font-black">
                                    <Youtube className="h-5 w-5" /> Cuplikan
                                    YouTube
                                  </div>
                                  <a
                                    href={`https://www.youtube.com/watch?v=${ytId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                                  >
                                    <LinkIcon className="h-4 w-4" /> buka
                                  </a>
                                </div>

                                <div className="aspect-video">
                                  <iframe
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${ytId}`}
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                </div>
                              </div>
                            )}

                            {/* 2. Jika ada Gambar Referensi, tampilkan ini */}
                            {post.referenceImage && (
                              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                                <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-accent/30">
                                  <div className="inline-flex items-center gap-2 text-sm font-black">
                                    <ImageIcon className="h-5 w-5" /> Gambar
                                    Referensi
                                  </div>
                                </div>
                                <div className="p-4 bg-muted/20">
                                  <img
                                    src={post.referenceImage}
                                    alt="Gambar Referensi"
                                    className="w-full h-auto rounded-lg object-contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          /* 3. Jika tidak ada video maupun gambar */
                          <div className="mt-4 rounded-2xl border border-border bg-accent/20 p-4 text-sm text-muted-foreground">
                            <b>Belum ada referensi.</b> Isi <code>youtube</code>{" "}
                            atau <code>referenceImage</code> di post ini.
                          </div>
                        )}
                      </ArticleProse>
                    ) : (
                      <div className="rounded-2xl border border-border bg-accent/20 p-5">
                        <div className="text-sm font-black">Coming soon</div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Konten post ini belum diisi.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* SIDEBAR */}
            <aside className="min-w-0 space-y-4 lg:sticky lg:top-6 h-fit">
              {/* TOC */}
              <Card className="border-border bg-background">
                <CardContent className="p-5">
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Contents
                  </div>

                  <div className="mt-4 grid gap-2">
                    {(post.sections || []).map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-foreground transition"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>

                  {/* fallback kalau sections kosong */}
                  {!post.sections || post.sections.length === 0 ? (
                    <div className="mt-3 text-xs text-muted-foreground">
                      (Belum ada daftar isi. Tambah <code>sections</code> di{" "}
                      <code>posts.js</code>.)
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              {/* More from */}
              <Card className="border-border bg-background">
                <CardContent className="p-5">
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    More from this blog
                  </div>
                  <div className="mt-4 space-y-3">
                    {more.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/blog/${p.slug}`}
                        className="block rounded-xl border border-border bg-background px-3 py-3 hover:bg-accent/40 transition"
                      >
                        <div className="text-sm font-black leading-snug line-clamp-2">
                          {p.title}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {p.tag} • {p.readTime}
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
