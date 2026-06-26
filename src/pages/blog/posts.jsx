import React from "react";
import { MuxDemuxContent } from "./content/MuxDemuxContent";
import { DataConceptsPost } from "./content/DataConceptsPost";
import { ETLProcessPost } from "./content/ETLProcessPost";
import { StarSnowflakePost } from "./content/StarSnowflakePost";
import { Pertemuan5Post } from "./content/Pertemuan5Post";
import { Pertemuan6Post } from "./content/Pertemuan6Post";
import { Pertemuan7Post } from "./content/Pertemuan7Post";
import { Pertemuan9Post } from "./content/Pertemuan9Post";
import { Pertemuan10Post } from "./content/Pertemuan10Post";
import { Pertemuan11Post } from "./content/Pertemuan11Post";
import { Pertemuan12Post } from "./content/Pertemuan12Post";
import { Pertemuan13Post } from "./content/Pertemuan13Post";
import { Pertemuan14Post } from "./content/Pertemuan14Post";

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
  {
    slug: "praktikum-snowflake-schema",
    title: "Pertemuan 6: Merakit Snowflake Schema & Aturan Emasnya",
    excerpt:
      "Latihan langsung memecah tabel dimensi dan memahami satu aturan emas Snowflake Schema yang pantang dilanggar.",
    date: "2026-04-25",
    readTime: "4 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-6.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-6.png",
    content: Pertemuan6Post,
    sections: [
      { id: "bedah-skema", label: "Dari Bintang Jadi Salju" },
      { id: "aturan-emas", label: "Aturan Emas Snowflake" },
      { id: "uji-coba-join", label: "Uji Coba JOIN" },
    ],
  },
  {
    slug: "persiapan-uts-data-warehouse",
    title:
      "Pertemuan 7: Ngerancang Data Warehouse dari Struk Belanjaan! Simulasi Live Coding UTS",
    excerpt:
      "Simulasi Live Coding UTS! Bedah teori Physical Design, optimasi Buffer Pool, sampe merancang Star Schema dari sebuah struk belanja.",
    date: "2026-05-02",
    readTime: "6 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-7.png", // Ganti dengan gambar cover kamu
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-7.png", // Masukkan gambar struk Mie Gacoannya
    content: Pertemuan7Post,
    sections: [
      { id: "teori-physical-design", label: "Teori Physical Design" },
      { id: "trik-optimasi", label: "Trik Optimasi (Buffer & Partisi)" },
      { id: "bedah-kasus-invoice", label: "Bedah Kasus Invoice" },
    ],
  },
  {
    slug: "olap-cube-data-warehouse",
    title: "Pertemuan 9: Mengutak-atik Data dengan Operasi OLAP Cube",
    excerpt:
      "Belajar cara mengekstrak data warehouse dari berbagai sudut pandang menggunakan operasi Roll-Up, Drill-Down, Slice, Dice, dan Pivot.",
    date: "2026-06-06", // Tanggal rilis hari ini
    readTime: "5 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-9.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-9.png",
    content: Pertemuan9Post,
    sections: [
      { id: "mengenal-olap", label: "Mengenal OLAP & Cube" },
      { id: "operasi-olap", label: "5 Operasi Utama OLAP" },
      { id: "codingan-bagian-a", label: "Query SQL Bagian A" },
      { id: "codingan-bagian-b", label: "Studi Kasus Bagian B" },
    ],
  },
  {
    slug: "slowly-changing-dimension-scd",
    title: "Pertemuan 10: Mengatasi Data yang Berubah-ubah dengan SCD",
    excerpt:
      "Gimana cara ngurus data pelanggan yang sering berubah domisili atau naik level member tanpa merusak histori masa lalu? Kenalan sama SCD Type 1, 2, dan 3!",
    date: "2026-06-11", // Tanggal rilis hari ini
    readTime: "5 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-10.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-10.png",
    content: Pertemuan10Post,
    sections: [
      { id: "apa-itu-scd", label: "Apa itu SCD?" },
      { id: "jenis-scd", label: "3 Jurus Utama SCD" },
      { id: "studi-kasus", label: "Studi Kasus Pelanggan" },
    ],
  },
  {
    slug: "praktikum-kelompok-olap-p11",
    title: "Pertemuan 11: Kerja Kelompok Eksekusi 7 Operasi OLAP!",
    excerpt:
      "Laporan hasil eksplorasi Kelompok 6 mengeksekusi Roll Up, Drill Down, Slice, Dice, hingga ngoding Pivot SQL untuk memutar data.",
    date: "2026-06-21",
    readTime: "6 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-11.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-11.png",
    content: Pertemuan11Post,
    sections: [
      { id: "rollup-drilldown", label: "Roll Up & Drill Down" },
      { id: "slice-dice", label: "Slice & Dice" },
      { id: "sisa-misi", label: "Pivot & Drill Across" },
    ],
  },
  {
    slug: "implementasi-data-warehouse-industri",
    title: "Pertemuan 12: Bedah Kasus DW di 5 Sektor Industri!",
    excerpt:
      "Laporan Individu: Dari mendeteksi kredit macet Fintech, robot penjaga gudang PT KAI, sampai rahasia algoritma Netflix!",
    date: "2026-06-26",
    readTime: "7 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-12.png", // Siapkan cover buatanmu
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-12.png",
    content: Pertemuan12Post,
    sections: [
      { id: "sektor-keuangan", label: "Fintech & Perbankan" },
      { id: "sektor-industri", label: "Industri Migas" },
      { id: "sektor-pemerintahan", label: "Pemerintahan" },
      { id: "sektor-transportasi", label: "Transportasi (KAI)" },
      { id: "sektor-marketing", label: "Marketing (Netflix)" },
    ],
  },
  {
    slug: "kuliah-praktisi-hris-etl",
    title:
      "Pertemuan 13: Kuliah Praktisi - HRIS, Penilaian KPI, dan Bocoran UAS!",
    excerpt:
      "Membahas implementasi Data Warehouse dalam Human Resource Information System (HRIS) dan konsep ETL (Extract, Transform, Destination).",
    date: "2026-07-03",
    readTime: "5 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-13.png",
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-13.png",
    content: Pertemuan13Post,
    sections: [
      { id: "dw-dalam-hris", label: "DW & Fitur HRIS" },
      { id: "kpi-dilema", label: "Terlambat Tapi Performa Bagus?" },
      { id: "bocoran-uas-etl", label: "Bocoran UAS: ETL" },
    ],
  },
  {
    slug: "praktikum-sql-operasi-olap",
    title: "Pertemuan 14: Eksekusi Nyata Operasi OLAP dengan SQL! 💻",
    excerpt:
      "Nggak cuma teori, di pertemuan ini kita langsung turun ke database buat ngerjain Roll Up, Slice, Dice, Pivot, sampai Drill Across pakai SQL.",
    date: "2026-07-10",
    readTime: "6 min read",
    tag: "Data Warehouse",
    cover: "/Blog/Data-Warehouse/Data-Warehouse-14.png", // Siapkan nama gambarnya
    youtube: "",
    referenceImage: "/Blog/Data-Warehouse/Data-Warehouse-14.png",
    content: Pertemuan14Post,
    sections: [
      { id: "persiapan-data", label: "Persiapan Data" },
      { id: "agregasi-rincian", label: "Roll Up & Drill Down" },
      { id: "potong-kubus", label: "Slice & Dice" },
      { id: "pivot-across", label: "Pivot & Drill Across" },
    ],
  },
];
