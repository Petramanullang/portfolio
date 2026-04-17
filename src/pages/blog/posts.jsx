import React from "react";
import { MuxDemuxContent } from "./content/MuxDemuxContent";
import { DataConceptsPost } from "./content/DataConceptsPost";
import { ETLProcessPost } from "./content/ETLProcessPost";
import { StarSnowflakePost } from "./content/StarSnowflakePost";
import { Pertemuan5Post } from "./content/Pertemuan5Post";

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
  {
    slug: "star-vs-snowflake-schema",
    title:
      "Pertemuan 4 - Star Schema vs Snowflake Schema: Mana yang Lebih Oke?",
    excerpt:
      "Membedah arsitektur penyimpanan data di Data Warehouse. Pilih si Bintang yang kenceng atau si Salju yang rapi?",
    date: "2026-04-12",
    readTime: "5 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-4.png",
    youtube: "", // Isi kalau ada video praktikumnya
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-4.png",
    content: StarSnowflakePost,
    sections: [
      { id: "star-schema", label: "Star Schema" },
      { id: "snowflake-schema", label: "Snowflake Schema" },
      { id: "perbandingan", label: "Perbandingan Detail" },
      { id: "kesimpulan", label: "Pilih yang Mana?" },
    ],
  },
  {
    slug: "normalisasi-star-vs-snowflake",
    title:
      "Pertemuan 5 - Bedah Normalisasi: Kenapa Star Schema Sengaja Ngelanggar Aturan?",
    excerpt:
      "Ngebongkar rahasia 1NF, 2NF, 3NF di dalam tabel Data Warehouse dan tugas memperbaiki skema relasi Snowflake.",
    date: "2026-04-17",
    readTime: "5 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-5.png", // Sesuaikan nama file gambar kamu
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-5.png",
    content: Pertemuan5Post,
    sections: [
      { id: "star-schema-normalisasi", label: "Normalisasi Star Schema" },
      { id: "snowflake-schema-normalisasi", label: "Normalisasi Snowflake" },
      { id: "tugas-praktikum", label: "Tugas Praktikum 5" },
    ],
  },
];
