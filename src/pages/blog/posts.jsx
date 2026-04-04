import React from "react";
import { MuxDemuxContent } from "./content/MuxDemuxContent";
import { DataConceptsPost } from "./content/DataConceptsPost";
import { ETLProcessPost } from "./content/ETLProcessPost";

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
    content: MuxDemuxContent,

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
    slug: "proses-teknis-etl",
    title:
      "Pertemuan 3 - Kontrak Perkuliahan & Proses Teknis ETL: Rahasia Dapur Data",
    excerpt:
      "Ngomongin aturan kelas ITPLN, kenapa database itu terstruktur, sampai bongkar rahasia proses Extract, Transform, Load (ETL).",
    date: "2026-04-04",
    readTime: "5 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-3.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-3.png",
    content: ETLProcessPost,
    sections: [
      { id: "aturan-kelas", label: "Aturan Kelas" },
      { id: "database-terstruktur", label: "Database Terstruktur" },
      { id: "etl-process", label: "Proses ETL" },
      { id: "dw-vs-dds", label: "DW vs DDS" },
    ],
  },

  {
    slug: "database-vs-data-warehouse",
    title:
      "Pertemuan 2 - Membedah Konsep Database, Data Warehouse, dan Dataset",
    excerpt:
      "Memahami perbedaan karakteristik, target pengguna, dan tujuan penyimpanan data di dalam sebuah organisasi.",
    date: "2026-04-04",
    readTime: "4 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-2.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-2.png",
    content: DataConceptsPost,

    sections: [
      { id: "target-pengguna", label: "Target Pengguna" },
      { id: "redundansi", label: "Redundansi Data" },
      { id: "frekuensi-akses", label: "Frekuensi Akses" },
      { id: "istilah", label: "Istilah Baris & Kolom" },
      { id: "tujuan", label: "Tujuan Implementasi" },
    ],
  },
];
