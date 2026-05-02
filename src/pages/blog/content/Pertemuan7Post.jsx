import React from "react";

export const Pertemuan7Post = () => {
  return (
    <>
      <p>
        Wah, nggak kerasa kita udah sampe di ujung materi sebelum tempur! 🔥
      </p>
      <p>
        Di Pertemuan 7 ini, kita nggak main-main lagi. Materi kali ini adalah
        simulasi langsung alias "bocoran" buat persiapan{" "}
        <b>Ujian Tengah Semester (UTS)</b> mata kuliah Data Warehouse!.
      </p>
      <p>
        Biar nggak panik pas ujian di Lab IR nanti, yuk kita bedah
        bareng-bareng kisi-kisinya, mulai dari teori <i>Physical Design</i>{" "}
        sampe simulasi <i>Live Coding</i> ngerancang data warehouse dari sebuah
        struk struk belanjaan! 🍜
      </p>

      {/* Gambar Cover */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-7.jpeg"
        alt="Persiapan UTS Data Warehouse"
        className="rounded-xl border border-border mt-4"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Persiapan Live Coding UTS Genap -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
        
      </p>

      <h2 id="teori-physical-design">1. Pemanasan: Teori Physical Design 🧠</h2>
      <p>
        Sebelum koding, kita harus paham dulu bedanya <i>Logical</i> dan{" "}
        <i>Physical Design</i>:
      </p>
      <ul>
        <li>
          <b>Logical Design:</b> Ini ibarat gambar arsitek. Kita cuma mikirin
          konsepnya: tabel apa aja yang dibutuhin, apa hubungannya (relasi), dan
          milih mau pake skema bintang atau salju.
        </li>
        <li>
          <b>Physical Design:</b> Nah, ini tugas kuli bangunannya! Mengubah
          gambar tadi jadi struktur nyata di <i>database</i>. Fokus
          utamanya ada dua: bikin <b>Kinerja Query cepet</b>, dan{" "}
          <b>Pemeliharaan gampang</b> (biar sistem nggak <i>down</i> pas{" "}
          <i>update</i> jutaan baris data).
        </li>
      </ul>

      <p>
        Pas diubah ke <i>Physical Design</i>, nama-namanya pada ganti baju
        nih:
      </p>
      <ul>
        <li>
          <i>Entity</i> (Entitas) berubah wujud jadi <b>Tables (Tabel)</b>
        </li>
        <li>
          <i>Attributes</i> berubah jadi <b>Columns (Kolom)</b>.
        </li>
        <li>
          <i>Relationships</i> jadi <b>Foreign Key Constraints</b>.
        </li>
        <li>
          <i>Primary Unique Identifiers</i> jadi <b>Primary Key Constraints</b>
          .
        </li>
      </ul>

      <h2 id="trik-optimasi">
        2. Senjata Rahasia Optimasi: Buffer Pool & Partisi 🚀
      </h2>
      <p>
        Biar nilai UTS-nya maksimal, jangan lupa sebutin dua teknik optimasi ini
        kalo ditanya dosen:
      </p>

      <h3>A. Buffer Pool (Si Meja Kerja)</h3>
      <p>
        Bayangin <i>Disk</i> (hardisk) itu lemari arsip yang di ujung ruangan,
        lambat banget kalo bolak-balik ngambil data. Nah, <b>Buffer Pool</b> ini
        adalah area di memori (RAM) yang fungsinya kayak meja kerja kita.
      </p>
      <p>
        Data yang sering dibaca ditaruh sementara di meja kerja ini biar
        pengolahannya super cepet dan ngurangin proses I/O (bolak-balik ke
        lemari). Untuk <i>Data Warehouse</i> yang datanya gede banget,
        disarankan pake <i>Table Space</i> dengan ukuran <i>page size</i> 16KB
        atau 32KB biar muat banyak baris sekali angkut!
      </p>

      <h3>B. Partitioned Table (Rak Bersekat)</h3>
      <p>
        Kalo punya satu tabel raksasa, pas nyari data tanggal tertentu, sistem
        bakal meriksa dari ujung ke ujung (lambat!).
      </p>
      <p>
        Solusinya? Dipisah pake partisi (misal{" "}
        <code>PARTITION BY RANGE (waktu_transaksi)</code>). Jadi
        datanya dipisah per bulan. Kalo kita mau nyari data bulan
        Januari, sistem cuma bakal buka laci bulan Januari dan nyuekin laci
        lainnya (ini namanya <i>Partition Pruning</i>). Cerdas kan?
        😎
      </p>

      <h2 id="bedah-kasus-invoice">
        3. Simulasi UTS: Kasus Invoice "Mie Gacoan" 🍜
      </h2>
      <p>
        Oke, masuk ke menu utama! Soal UTS-nya kira-kira begini: Kita dikasih
        sebuah <b>Invoice / Struk Belanja</b> (contohnya struk Mie Gacoan cabang
        Banjarmasin Hasan Basri), terus disuruh ngerancang <i>Data Warehouse</i>
        -nya!
      </p>

      <img
        src="/public/Blog/Data-Warehouse/Struk-Gacoan.png"
        alt="Contoh Struk Mie Gacoan"
        className="rounded-xl border border-border w-1/2 mx-auto my-4"
      />

      <p>Mari kita lakukan analisis kritisnya:</p>

      <h3>Langkah 1: Tentukan Tabel Fakta dan Dimensi</h3>
      <p>Dari struk di atas, kita bisa mecah datanya jadi:</p>
      <ul>
        <li>
          <b>Fact Table (fact_penjualan):</b> Berisi angka-angka transaksi,
          seperti <code>jumlah_item</code>, <code>subtotal</code>,{" "}
          <code>pajak</code>, <code>grand_total</code>, <code>cash</code>, dan{" "}
          <code>kembalian</code>.
        </li>
        <li>
          <b>Dimensi Cabang (dim_cabang):</b> Berisi info lokasi (Banjarmasin
          Hasan Basri, alamat lengkap).
        </li>
        <li>
          <b>Dimensi Waktu (dim_waktu):</b> Berisi tanggal dan jam transaksi
          (12-02-2005 00:44).
        </li>
        <li>
          <b>Dimensi Struk (dim_info):</b> Berisi nama kasir (PUTRIA), info
          pemesanan (TAKE AWAY), dan nama kustomer (NIYA).
        </li>
        <li>
          <b>Dimensi Produk (dim_produk):</b> Berisi daftar makanan (Mie Gacoan
          LV 1, Siomay Ayam, Udang Keju) beserta harganya.
        </li>
      </ul>

      <h3>Langkah 2: Star Schema atau Snowflake?</h3>
      <p>
        Kalo disuruh milih di soal ujian, <b>Star Schema</b> adalah pilihan
        paling aman buat kasus retail kayak gini. Alasannya:
      </p>
      <ul>
        <li>
          <b>Kapasitas Penyimpanan (Storage Efficiency):</b> Memang Star Schema
          sedikit boros karena ada redundansi di tabel dimensi, tapi untuk level
          restoran cepat saji, kecepatan analisis jauh lebih prioritas daripada
          ngirit storage.
        </li>
        <li>
          <b>Optimalisasi Data:</b> Skema ini gampang banget dibaca sama{" "}
          <i>tools reporting</i> buat nganalisis menu apa yang paling laku hari
          ini, tanpa perlu nge-<i>join</i> banyak tabel yang bikin server
          restoran *down* (lemot).
        </li>
      </ul>

      <p>
        Jangan lupa, di UTS nanti kalian harus siapin mental buat ngetik
        kodingan DDL (Create Table), ngisi minimal 3 baris data (Insert)
        berdasarkan item yang ada di struk, dan yang paling seram... nulis{" "}
        <b>QUERY JOIN</b> buat nampilin datanya!
      </p>
      <p>
        Pokoknya, hafal-hafalin sintaks MySQL kalian di PHP MyAdmin ya! Semangat
        UTS-nya, semoga dapet A! 🅰️✨
      </p>
    </>
  );
};
