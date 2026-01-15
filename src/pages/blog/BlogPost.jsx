// src/pages/blog/BlogPost.jsx
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
                  {/* ✅ Medium feel: center the article text width */}
                  <div className="mx-auto w-full max-w-[760px]">
                    {post.slug !== "multiplexer-demultiplexer" ? (
                      <div className="rounded-2xl border border-border bg-accent/20 p-5">
                        <div className="text-sm font-black">Coming soon</div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Konten post ini belum diisi.
                        </p>
                      </div>
                    ) : (
                      <ArticleProse>
                        <h4>Nama Kelompok </h4>
                        <b>- Petra Juliansen Manullang - 202431127</b><br />
                        <b>- Muhammad Raka Ilham - 202431145 </b>

                        <h2 id="pendahuluan">Pendahuluan</h2>
                        <p>
                          Dalam teknik digital, <b>Multiplexer (MUX)</b> dan{" "}
                          <b>Demultiplexer (DEMUX)</b> dipakai untuk mengatur
                          jalur data/sinyal. MUX memilih satu input dari banyak
                          input menuju satu output, sedangkan DEMUX mengarahkan
                          satu input ke salah satu output berdasarkan selektor.
                        </p>

                        <h2 id="mux">Multiplexer (MUX)</h2>
                        <p>
                          MUX adalah rangkaian kombinasi untuk memilih input
                          dengan sinyal selektor <code>S</code>. Contoh paling
                          umum: <b>2:1 MUX</b>.
                        </p>

                        <figure>
                          <img src={post.cover} alt="Ilustrasi MUX/DEMUX" />
                          <figcaption>Contoh ilustrasi</figcaption>
                        </figure>

                        <blockquote>
                          Tips: Kalau selektor <code>S=0</code> maka output ikut
                          input A, kalau <code>S=1</code> output ikut input B.
                        </blockquote>

                        <h3 id="mux-table">Truth Table 2:1 MUX</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>S</th>
                              <th>Y</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>B</td>
                            </tr>
                          </tbody>
                        </table>

                        <h2 id="demux">Demultiplexer (DEMUX)</h2>
                        <p>
                          DEMUX adalah kebalikan MUX: satu input <code>D</code>{" "}
                          diarahkan ke output tertentu. Contoh: <b>1:2 DEMUX</b>{" "}
                          dengan output <code>Y0</code> dan <code>Y1</code>.
                        </p>

                        <h3 id="demux-table">Truth Table 1:2 DEMUX</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>S</th>
                              <th>Y0</th>
                              <th>Y1</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0</td>
                              <td>D</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>0</td>
                              <td>D</td>
                            </tr>
                          </tbody>
                        </table>

                        <h2 id="perbedaan">Perbedaan</h2>
                        <ul>
                          <li>
                            <b>MUX</b>: banyak input → 1 output
                          </li>
                          <li>
                            <b>DEMUX</b>: 1 input → banyak output
                          </li>
                          <li>Selektor memilih “jalur” yang aktif.</li>
                        </ul>

                        <h2 id="video">Video Referensi</h2>

                        {ytId ? (
                          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-accent/30">
                              <div className="inline-flex items-center gap-2 text-sm font-black">
                                <Youtube className="h-5 w-5" /> Cuplikan YouTube
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
                        ) : (
                          <div className="mt-4 rounded-2xl border border-border bg-accent/20 p-4 text-sm text-muted-foreground">
                            <b>Belum ada video.</b> Isi <code>youtube</code> di
                            post ini.
                          </div>
                        )}
                      </ArticleProse>
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
