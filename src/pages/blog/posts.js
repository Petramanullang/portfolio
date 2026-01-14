// src/pages/blog/posts.js
export const BLOG_POSTS = [
  {
    slug: "multiplexer-demultiplexer",
    title: "Multiplexer & Demultiplexer",
    excerpt:
      "Definisi, cara kerja, tabel kebenaran, contoh 2:1 MUX dan 1:2 DEMUX, diagram, dan slot video YouTube.",
    date: "2026-01-14",
    readTime: "6 min read",
    tag: "Teknik Digital",
    cover: "/Portfolio/Mul-Demul.png",
    youtube: "https://youtu.be/HIeQhZ9Gq5s",
    sections: [
      { id: "pendahuluan", label: "Pendahuluan" },
      { id: "mux", label: "Multiplexer (MUX)" },
      { id: "mux-table", label: "Truth Table MUX" },
      { id: "demux", label: "Demultiplexer (DEMUX)" },
      { id: "demux-table", label: "Truth Table DEMUX" },
      { id: "perbedaan", label: "Perbedaan" },
      { id: "video", label: "Video" },
    ],
  },
  {
    slug: "truth-table-cepat",
    title: "Truth Table: Cara Cepat Baca & Bikin",
    excerpt:
      "Checklist cepat menyusun tabel kebenaran rangkaian kombinasi (biar gak skip langkah).",
    date: "2026-01-14",
    readTime: "4 min read",
    tag: "Digital Logic",
    cover: "/Portfolio/Portfolio-2.png",
    youtube: "",
    sections: [{ id: "coming", label: "Coming soon" }],
  },
  {
    slug: "logic-gates-mux-demux",
    title: "Gerbang Logika untuk Implementasi MUX/DEMUX",
    excerpt:
      "Cara turunin persamaan logika dan mapping ke AND/OR/NOT dengan cara paling gampang.",
    date: "2026-01-14",
    readTime: "5 min read",
    tag: "Logic Gates",
    cover: "/Portfolio/Blog-1.png",
    youtube: "",
    sections: [{ id: "coming", label: "Coming soon" }],
  },
];
