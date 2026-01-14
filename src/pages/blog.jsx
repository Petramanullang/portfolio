// src/pages/blog.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  X,
  Clock,
  Tags,
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Youtube,
  Link as LinkIcon,
} from "lucide-react";

export const Blog = () => {
  // ========== STATE ==========
  const [view, setView] = useState("feed"); // "feed" | "preview"
  const [activeId, setActiveId] = useState(posts[0]?.id);
  const [q, setQ] = useState("");
  const [tagFilter, setTagFilter] = useState("All");

  const topRef = useRef(null);

  // ========== HELPERS ==========
  const getYouTubeId = (input) => {
    if (!input) return "";
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

    try {
      const url = new URL(input);
      if (url.hostname.includes("youtu.be"))
        return url.pathname.replace("/", "");
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

  const tags = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.tag)));
    return ["All", ...unique];
  }, [posts]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return posts.filter((p) => {
      const okTag = tagFilter === "All" ? true : p.tag === tagFilter;
      if (!okTag) return false;
      if (!s) return true;
      const hay = `${p.title} ${p.excerpt} ${p.tag}`.toLowerCase();
      return hay.includes(s);
    });
  }, [posts, q, tagFilter]);

  const activePost = useMemo(() => {
    const inFiltered = filtered.find((p) => p.id === activeId);
    if (inFiltered) return inFiltered;
    return filtered[0] || posts[0];
  }, [filtered, posts, activeId]);

  useEffect(() => {
    if (!filtered.length) return;
    const stillThere = filtered.some((p) => p.id === activeId);
    if (!stillThere) setActiveId(filtered[0].id);
  }, [filtered, activeId]);

  const goPreview = (id) => {
    setActiveId(id);
    setView("preview");
    requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const goFeed = () => {
    setView("feed");
    requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // ========== UI PARTS ==========
  const Pill = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
        active
          ? "bg-white text-black border-white"
          : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );

  const Badge = ({ children }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
      <Tags className="h-4 w-4" />
      {children}
    </span>
  );

  const Divider = () => <div className="h-px w-full bg-border" />;

  const Table = ({ head, rows }) => (
    <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-accent/40">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-black">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} className="border-t border-border">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const Code = ({ children }) => (
    <code className="rounded-md border border-border bg-accent/40 px-2 py-1 text-[0.95em] text-foreground">
      {children}
    </code>
  );

  const H2 = ({ id, children }) => (
    <h2
      id={id}
      className="scroll-mt-28 text-xl md:text-2xl font-black tracking-tight"
    >
      {children}
    </h2>
  );

  const P = ({ children }) => (
    <p className="mt-2 leading-relaxed text-muted-foreground">{children}</p>
  );

  const DiagramMUX2to1 = () => (
    <div className="mt-5 rounded-2xl border border-border bg-background overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-accent/30">
        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
          Diagram 2:1 MUX
        </div>
      </div>
      <div className="p-4">
        <svg viewBox="0 0 820 240" className="h-auto w-full">
          <text
            x="26"
            y="70"
            fill="currentColor"
            opacity="0.9"
            fontSize="14"
            fontWeight="700"
          >
            A
          </text>
          <line
            x1="50"
            y1="65"
            x2="235"
            y2="65"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />

          <text
            x="26"
            y="170"
            fill="currentColor"
            opacity="0.9"
            fontSize="14"
            fontWeight="700"
          >
            B
          </text>
          <line
            x1="50"
            y1="165"
            x2="235"
            y2="165"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />

          <path
            d="M255 40 L455 70 L455 170 L255 200 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <text
            x="335"
            y="130"
            fill="currentColor"
            opacity="0.9"
            fontSize="16"
            fontWeight="900"
          >
            MUX 2:1
          </text>

          <text
            x="310"
            y="228"
            fill="currentColor"
            opacity="0.85"
            fontSize="14"
            fontWeight="700"
          >
            S
          </text>
          <line
            x1="323"
            y1="220"
            x2="323"
            y2="185"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <line
            x1="323"
            y1="185"
            x2="295"
            y2="185"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />

          <line
            x1="455"
            y1="120"
            x2="770"
            y2="120"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <text
            x="780"
            y="125"
            fill="currentColor"
            opacity="0.9"
            fontSize="14"
            fontWeight="700"
          >
            Y
          </text>
        </svg>
      </div>
    </div>
  );

  const DiagramDEMUX1to2 = () => (
    <div className="mt-5 rounded-2xl border border-border bg-background overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-accent/30">
        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
          Diagram 1:2 DEMUX
        </div>
      </div>
      <div className="p-4">
        <svg viewBox="0 0 820 260" className="h-auto w-full">
          <text
            x="26"
            y="135"
            fill="currentColor"
            opacity="0.9"
            fontSize="14"
            fontWeight="700"
          >
            D
          </text>
          <line
            x1="50"
            y1="130"
            x2="255"
            y2="130"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />

          <path
            d="M275 60 L485 30 L485 230 L275 200 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <text
            x="340"
            y="140"
            fill="currentColor"
            opacity="0.9"
            fontSize="16"
            fontWeight="900"
          >
            DEMUX 1:2
          </text>

          <text
            x="320"
            y="252"
            fill="currentColor"
            opacity="0.85"
            fontSize="14"
            fontWeight="700"
          >
            S
          </text>
          <line
            x1="332"
            y1="244"
            x2="332"
            y2="208"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <line
            x1="332"
            y1="208"
            x2="305"
            y2="208"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />

          <line
            x1="485"
            y1="105"
            x2="770"
            y2="105"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <text
            x="780"
            y="110"
            fill="currentColor"
            opacity="0.9"
            fontSize="14"
            fontWeight="700"
          >
            Y0
          </text>

          <line
            x1="485"
            y1="175"
            x2="770"
            y2="175"
            stroke="currentColor"
            opacity="0.35"
            strokeWidth="3"
          />
          <text
            x="780"
            y="180"
            fill="currentColor"
            opacity="0.9"
            fontSize="14"
            fontWeight="700"
          >
            Y1
          </text>
        </svg>
      </div>
    </div>
  );

  const FeedRow = ({ post, idx }) => {
    const isActive = post.id === activeId;
    return (
      <motion.button
        type="button"
        onClick={() => setActiveId(post.id)}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.06 + idx * 0.05 }}
        className={[
          "group w-full text-left rounded-2xl border bg-background transition overflow-hidden",
          isActive
            ? "border-primary/50"
            : "border-border hover:border-primary/30",
        ].join(" ")}
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{post.tag}</Badge>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <h3 className="text-lg md:text-xl font-black tracking-tight group-hover:underline underline-offset-4 truncate">
                  {post.title}
                </h3>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
              </div>

              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button
                  className="border-2 bg-[#171717] hover:bg-white! hover:text-black!"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPreview(post.id);
                  }}
                >
                  Preview <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(post.id);
                  }}
                >
                  Select
                </Button>
              </div>
            </div>

            <div className="hidden sm:block shrink-0">
              <div className="h-24 w-28 md:h-28 md:w-32 rounded-xl overflow-hidden border border-border bg-accent/30">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.button>
    );
  };

  const Preview = ({ post }) => {
    const ytId = getYouTubeId(post.youtube);

    return (
      <motion.div
        key={post.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid gap-6 lg:grid-cols-[1fr_320px]"
      >
        {/* ARTICLE */}
        <Card className="border-border bg-background overflow-hidden">
          {/* HERO */}
          <div className="relative">
            <img
              src={post.cover}
              alt={post.title}
              className="h-[230px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{post.tag}</Badge>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="mt-3 text-2xl md:text-3xl font-black tracking-tight">
                {post.title}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          </div>

          <CardContent className="p-6 md:p-8">
            {/* CONTENT (MUX/DEMUX full only for first post) */}
            {post.id !== "mux-demux" ? (
              <div
                id="coming"
                className="rounded-2xl border border-border bg-accent/20 p-5"
              >
                <div className="text-sm font-black">Coming soon</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Konten untuk post ini belum diisi. Kalau mau, bilang: “isi
                  post ini juga”.
                </p>
              </div>
            ) : (
              <div className="space-y-10">
                <section id="intro" className="space-y-2">
                  <H2 id="intro">Pendahuluan</H2>
                  <P>
                    Dalam teknik digital, <b>MUX</b> dan <b>DEMUX</b> dipakai
                    untuk mengatur jalur data/sinyal. Intinya: <b>MUX</b>{" "}
                    memilih <i>satu input</i> dari banyak input ke{" "}
                    <i>satu output</i>, sedangkan <b>DEMUX</b> mengarahkan{" "}
                    <i>satu input</i> ke <i>salah satu output</i> berdasarkan
                    sinyal selektor.
                  </P>
                </section>

                <Divider />

                <section id="mux" className="space-y-2">
                  <H2 id="mux">Multiplexer (MUX)</H2>
                  <P>
                    Multiplexer adalah rangkaian kombinasi yang melakukan
                    pemilihan (<i>selection</i>) satu data dari beberapa input
                    menuju satu output. Pemilihan dikontrol oleh bit selektor (
                    <Code>S</Code>, <Code>S0</Code>, <Code>S1</Code>, dst).
                  </P>

                  <DiagramMUX2to1 />

                  <div className="mt-5 rounded-2xl border border-border bg-accent/15 p-5">
                    <div className="text-sm font-black">Contoh 2:1 MUX</div>
                    <P>
                      Input: <Code>A</Code>, <Code>B</Code> • Select:{" "}
                      <Code>S</Code> • Output: <Code>Y</Code>
                    </P>
                    <div className="mt-3 text-sm text-muted-foreground">
                      Persamaan logika:
                      <div className="mt-2 rounded-xl border border-border bg-background px-4 py-3 font-mono text-[13px]">
                        Y = (S̄ · A) + (S · B)
                      </div>
                    </div>
                  </div>
                </section>

                <section id="truth-mux" className="space-y-2">
                  <H2 id="truth-mux">Truth Table 2:1 MUX</H2>
                  <P>
                    Ketika <Code>S=0</Code>, output mengikuti <Code>A</Code>.
                    Ketika <Code>S=1</Code>, output mengikuti <Code>B</Code>.
                  </P>
                  <Table
                    head={["S", "Y"]}
                    rows={[
                      ["0", "A"],
                      ["1", "B"],
                    ]}
                  />
                </section>

                <Divider />

                <section id="demux" className="space-y-2">
                  <H2 id="demux">Demultiplexer (DEMUX)</H2>
                  <P>
                    Demultiplexer adalah kebalikan MUX: satu input dialirkan ke
                    salah satu dari beberapa output. Output yang aktif
                    ditentukan oleh bit selektor.
                  </P>

                  <DiagramDEMUX1to2 />

                  <div className="mt-5 rounded-2xl border border-border bg-accent/15 p-5">
                    <div className="text-sm font-black">Contoh 1:2 DEMUX</div>
                    <P>
                      Input: <Code>D</Code> • Select: <Code>S</Code> • Output:{" "}
                      <Code>Y0</Code>, <Code>Y1</Code>
                    </P>
                    <div className="mt-3 text-sm text-muted-foreground">
                      Persamaan logika:
                      <div className="mt-2 grid gap-2">
                        <div className="rounded-xl border border-border bg-background px-4 py-3 font-mono text-[13px]">
                          Y0 = S̄ · D
                        </div>
                        <div className="rounded-xl border border-border bg-background px-4 py-3 font-mono text-[13px]">
                          Y1 = S · D
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="truth-demux" className="space-y-2">
                  <H2 id="truth-demux">Truth Table 1:2 DEMUX</H2>
                  <P>
                    Jika <Code>S=0</Code>, maka <Code>Y0</Code> mengikuti{" "}
                    <Code>D</Code> dan <Code>Y1=0</Code>. Jika <Code>S=1</Code>,
                    kebalikannya.
                  </P>
                  <Table
                    head={["S", "Y0", "Y1"]}
                    rows={[
                      ["0", "D", "0"],
                      ["1", "0", "D"],
                    ]}
                  />
                </section>

                <Divider />

                <section id="compare" className="space-y-2">
                  <H2 id="compare">Perbedaan MUX vs DEMUX</H2>
                  <Table
                    head={["Aspek", "MUX", "DEMUX"]}
                    rows={[
                      [
                        "Arah data",
                        "Banyak input → 1 output",
                        "1 input → banyak output",
                      ],
                      [
                        "Fungsi",
                        "Memilih salah satu input",
                        "Mengalirkan input ke output tertentu",
                      ],
                      [
                        "Kontrol",
                        "Select memilih input",
                        "Select memilih output",
                      ],
                      ["Contoh", "2:1, 4:1, 8:1", "1:2, 1:4, 1:8"],
                    ]}
                  />
                </section>

                <section id="apps" className="space-y-2">
                  <H2 id="apps">Aplikasi</H2>
                  <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <b>Komunikasi data</b>: multiplexing untuk menghemat jalur
                      transmisi.
                    </li>
                    <li>
                      <b>Routing sinyal</b>: memilih channel tertentu (MUX) atau
                      mengarahkan output ke device tertentu (DEMUX).
                    </li>
                    <li>
                      <b>Arsitektur digital</b>: pemilihan sumber data pada
                      bus/register/unit kontrol.
                    </li>
                  </ul>
                </section>

                <Divider />

                <section id="video" className="space-y-2">
                  <H2 id="video">Video YouTube</H2>
                  <P>
                    Isi <Code>youtube</Code> pada data post <b>mux-demux</b>.
                    Bisa URL atau videoId (11 karakter).
                  </P>

                  {ytId ? (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-accent/30">
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
                      <b>Belum ada video.</b> Isi field <Code>youtube</Code> di
                      data post.
                    </div>
                  )}
                </section>

                <section id="refs" className="space-y-2">
                  <H2 id="refs">Referensi</H2>
                  <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      Materi Teknik Digital: Multiplexer & Demultiplexer
                      (slide/buku kuliah).
                    </li>
                    <li>
                      Datasheet IC MUX/DEMUX (mis. keluarga 74xx) untuk contoh
                      implementasi.
                    </li>
                    <li>Video YouTube yang kamu embed (judul & channel).</li>
                  </ul>
                </section>

                <div className="rounded-2xl border border-border bg-accent/20 p-5">
                  <div className="text-sm font-black">Kesimpulan</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    MUX memilih satu input menuju satu output, sedangkan DEMUX
                    mendistribusikan satu input ke output tertentu. Keduanya
                    penting untuk routing sinyal dan efisiensi jalur komunikasi.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SIDEBAR / TOC */}
        <div className="space-y-6">
          <Card className="border-border bg-background">
            <CardContent className="p-5">
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Daftar Isi
              </div>
              <div className="mt-4 grid gap-2">
                {post.sections?.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-foreground transition"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-background">
            <CardContent className="p-5">
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Submit Hint
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Pastikan ada gambar/diagram ✅</li>
                <li>Embed video YouTube ✅</li>
                <li>Jelaskan MUX & DEMUX ✅</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    );
  };

  // ========== PAGE ==========
  return (
    <div ref={topRef} className="mr-5 ml-6 space-y-6">
      {/* TOP BAR (new design) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <h1 className="mb-0">Blog</h1>
        </div>

        <Card className="border-border bg-background">
          <CardContent className="p-4 md:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: segmented + search */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                <div className="flex items-center gap-2">
                  <Pill active={view === "feed"} onClick={goFeed}>
                    Feed
                  </Pill>
                  <Pill
                    active={view === "preview"}
                    onClick={() => setView("preview")}
                  >
                    Preview
                  </Pill>
                </div>

                <div className="relative w-full md:w-[420px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search: title / tag / excerpt..."
                    className="w-full rounded-xl border border-border bg-background pl-10 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                  />
                  {!!q && (
                    <button
                      type="button"
                      onClick={() => setQ("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right: tag chips + actions */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Pill
                      key={t}
                      active={tagFilter === t}
                      onClick={() => setTagFilter(t)}
                    >
                      {t}
                    </Pill>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="border-2"
                    onClick={() => {
                      setQ("");
                      setTagFilter("All");
                      setActiveId(posts[0]?.id);
                    }}
                  >
                    Reset
                  </Button>

                  <Button
                    className="border-2 bg-[#171717] hover:bg-white! hover:text-black!"
                    onClick={() => goPreview(activePost?.id)}
                    disabled={!activePost}
                  >
                    Open Preview <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground">
                  {filtered.length} / {posts.length} posts
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* BODY */}
      <AnimatePresence mode="wait">
        {view === "feed" ? (
          <motion.div
            key="feed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]"
          >
            {/* FEED LIST */}
            <div className="flex flex-col gap-4">
              {filtered.map((p, idx) => (
                <FeedRow key={p.id} post={p} idx={idx} />
              ))}

              {filtered.length === 0 && (
                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="text-lg font-black">No results</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Tidak ada post yang cocok. Coba keyword lain.
                    </p>
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="border-2"
                        onClick={() => setQ("")}
                      >
                        Clear search
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="space-y-6">
              <Card className="border-border bg-background">
                <CardContent className="p-6">
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Selected
                  </div>

                  {activePost ? (
                    <>
                      <div className="mt-3 rounded-xl overflow-hidden border border-border bg-accent/30">
                        <img
                          src={activePost.cover}
                          alt={activePost.title}
                          className="h-36 w-full object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center gap-2">
                          <Badge>{activePost.tag}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {activePost.date}
                          </span>
                        </div>
                        <div className="mt-2 text-lg font-black leading-tight">
                          {activePost.title}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {activePost.excerpt}
                        </p>

                        <div className="mt-4 flex gap-2">
                          <Button
                            className="border-2 bg-[#171717] hover:bg-white! hover:text-black!"
                            onClick={() => goPreview(activePost.id)}
                          >
                            Preview <ArrowUpRight className="ml-1 h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            className="border-2"
                            onClick={() => setActiveId(activePost.id)}
                          >
                            Keep Selected
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Pilih post dulu.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardContent className="p-6">
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Info
                  </div>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Feed = list post, Preview = tampilan artikel.</li>
                    <li>Search bekerja untuk title/excerpt/tag.</li>
                    <li>
                      Post MUX/DEMUX sudah ada konten + diagram + slot YouTube.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {/* Preview header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Button variant="outline" className="border-2" onClick={goFeed}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Feed
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="border-2"
                  onClick={() => {
                    const el = document.getElementById("intro");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Jump to top
                </Button>
                <Button
                  className="border-2 bg-[#171717] hover:bg-white! hover:text-black!"
                  onClick={() => {
                    // quick open YouTube if exists
                    const yt = getYouTubeId(activePost?.youtube);
                    if (yt)
                      window.open(
                        `https://www.youtube.com/watch?v=${yt}`,
                        "_blank"
                      );
                  }}
                  disabled={!getYouTubeId(activePost?.youtube)}
                >
                  Open Video
                </Button>
              </div>
            </div>

            {/* Preview body */}
            {activePost ? <Preview post={activePost} /> : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
