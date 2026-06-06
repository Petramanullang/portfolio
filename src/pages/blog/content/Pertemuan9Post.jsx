import React from "react";

export const Pertemuan9Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Nggak kerasa kita udah melewati UTS dan sekarang resmi
        masuk ke materi babak baru di praktikum Data Warehouse Pertemuan 9! 🚀
      </p>
      <p>
        Kalo sebelum UTS kita pusing mikirin cara ngerancang arsitektur database
        (Star & Snowflake Schema), sekarang kita bakal belajar cara "memanen"
        data tersebut biar bisa dianalisis dari berbagai sudut pandang
        menggunakan teknologi bernama <b>OLAP (Online Analytical Processing)</b>
        .
      </p>
      <p>
        Yuk, kita bedah materi dan kodingan query pokoknya buat laporan
        praktikum minggu ini! 📊
      </p>
      <br />

      {/* Gambar Cover atau Ilustrasi OLAP Cube */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-9.jpeg"
        alt="Ilustrasi OLAP Cube Data Warehouse"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Ringkasan Data Warehouse: Materi OLAP Cube -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="mengenal-olap">1. Apa itu OLAP & OLAP Cube? 📳</h2>
      <p>
        Bayangin kamu punya data penjualan yang super gede. Kalo pake database
        relasional biasa (OLTP), pas bos kamu minta data:{" "}
        <i>
          "Berapa total pendapatan produk makanan di cabang Bandung selama bulan
          Januari?"
        </i>
        , query-nya bakal ribet dan lemot karena harus nyari baris demi baris.
      </p>
      <p>
        Nah, <b>OLAP Cube</b> hadir sebagai penyelamat. Data multidimensi
        dibentuk menyerupai kubus 3D (atau lebih) yang mempertemukan berbagai
        fakta numerik (<i>measures</i>) berdasarkan dimensinya (misal: Dimensi
        Waktu, Produk, dan Lokasi). Hasilnya? Data langsung ter-agregasi dan
        bisa ditarik super cepet!
      </p>

      <h2 id="operasi-olap">2. 5 Operasi Utama OLAP yang Wajib Dihafal 🛠️</h2>
      <p>
        Di Teori kali ini, kita mempelajari operasi-operasi dasar untuk
        mengutak-atik kubus data tersebut:
      </p>
      <ul>
        <li>
          <b>Roll-Up:</b> Merangkum data ke tingkat yang lebih tinggi. Contohnya
          dari data penjualan <i>harian</i> digabung jadi <i>bulanan</i> atau{" "}
          <i>tahunan</i> (Sama kayak fungsi <code>GROUP BY</code> di SQL).
        </li>
        <li>
          <b>Drill-Down:</b> Kebalikan dari Roll-Up. Kita melihat data lebih
          detail, misalnya dari total penjualan <i>bulanan</i> dipecah lagi buat
          ngeliat detail <i>harian</i>-nya.
        </li>
        <li>
          <b>Slice:</b> Mengambil satu potongan lurus dari data berdasarkan satu
          dimensi spesifik. Contoh: Memfilter data buat ngeliat bulan{" "}
          <i>Januari saja</i>.
        </li>
        <li>
          <b>Dice:</b> Mengambil sub-kubus baru dengan memfilter dua dimensi
          atau lebih sekaligus. Contoh: Cuma mau ngeliat Produk <i>Makanan</i>{" "}
          di Kota <i>Banjarmasin</i> pada Bulan <i>Februari</i>.
        </li>
        <li>
          <b>Pivot:</b> Memutar orientasi atau tampilan tabel data (mengubah
          baris jadi kolom atau sebaliknya) biar dapet perspektif analisis yang
          baru.
        </li>
      </ul>

      <h2 id="codingan-bagian-a">
        3. Bagian A: Implementasi Query SQL Dasarnya 💻
      </h2>
      <p>
        Sesuai instruksi modul, berikut adalah contoh implementasi query SQL
        dasar berdasarkan tabel contoh acuan yang memuat dimensi{" "}
        <b>Tanggal, Produk, Lokasi,</b> dan measure <b>Pendapatan</b>:
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- 1. Operasi Roll-Up (Agregasi Data dari Harian ke Bulanan/Tahunan)
SELECT 
    YEAR(Tanggal) AS Tahun,
    MONTH(Tanggal) AS Bulan,
    SUM(Pendapatan) AS Total_Pendapatan
FROM fact_penjualan
GROUP BY YEAR(Tanggal), MONTH(Tanggal) WITH ROLLUP;

-- 2. Operasi Drill-Down (Melihat Data Lebih Detail dari Bulan ke Hari)
SELECT 
    Tanggal AS Detail_Hari,
    Produk,
    SUM(Pendapatan) AS Total_Pendapatan
FROM fact_penjualan
WHERE MONTH(Tanggal) = 1 AND YEAR(Tanggal) = 2026 -- Contoh breakdown Januari 2026
GROUP BY Tanggal, Produk;

-- 3. Operasi Slice (Memotong Data Berdasarkan Satu Dimensi, misal Lokasi: 'Banjarmasin')
SELECT 
    Tanggal,
    Produk,
    Pendapatan
FROM fact_penjualan
WHERE Lokasi = 'Banjarmasin';

-- 4. Operasi Dice (Memotong Data Berdasarkan Banyak Dimensi Sekaligus)
SELECT 
    Tanggal,
    Produk,
    Lokasi,
    Pendapatan
FROM fact_penjualan
WHERE Lokasi = 'Banjarmasin' 
  AND Produk = 'Mie Gacoan LV 1'
  AND Tanggal BETWEEN '2026-02-01' AND '2026-02-28';

-- 5. Operasi Pivot (Mengubah Baris Lokasi Menjadi Kolom Pendapatan)
SELECT 
    Produk,
    SUM(CASE WHEN Lokasi = 'Banjarmasin' THEN Pendapatan ELSE 0 END) AS Pendapatan_Banjarmasin,
    SUM(CASE WHEN Lokasi = 'Bandung' THEN Pendapatan ELSE 0 END) AS Pendapatan_Bandung,
    SUM(CASE WHEN Lokasi = 'Jakarta' THEN Pendapatan ELSE 0 END) AS Pendapatan_Jakarta
FROM fact_penjualan
GROUP BY Produk;`}
      </pre>

      <h2 id="codingan-bagian-b">
        4. Bagian B: Studi Kasus Aplikasi Sehari-hari 📱
      </h2>
      <p>
        Untuk Bagian B, aplikasi analisis sehari-hari yang kita pilih sebagai
        contoh adalah{" "}
        <b>Sistem Analisis Penjualan E-Commerce (Dashboard Seller)</b>.
      </p>
      <p>
        Struktur Data Warehouse-nya terdiri dari 1 Fact Table (
        <code>fact_sales</code>) dan 3 Dimension Tables (<code>dim_time</code>,{" "}
        <code>dim_product</code>, dan <code>dim_store_location</code>).
      </p>

      <p>
        Berikut query pokok analisis OLAP yang diimplementasikan pada studi
        kasus E-Commerce ini:
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Query Analisis Dashboard Seller E-Commerce (Gabungan Slice & Dice dengan Agregasi)
SELECT 
    t.tahun,
    t.bulan,
    p.nama_produk,
    l.kota,
    SUM(f.jumlah_terjual) AS Total_Qty,
    SUM(f.total_keuntungan) AS Total_Profit
FROM fact_sales f
JOIN dim_time t ON f.time_id = t.time_id
JOIN dim_product p ON f.product_id = p.product_id
JOIN dim_store_location l ON f.location_id = l.location_id
WHERE l.wilayah = 'Kalimantan Selatan' -- Operasi Slice berdasarkan Wilayah
  AND p.kategori = 'Makanan'          -- Operasi Dice ditambahkan filter Kategori
GROUP BY t.tahun, t.bulan, p.nama_produk, l.kota;`}
      </pre>

      <div className="bg-accent/30 border border-border p-4 rounded-xl my-6">
        <h4 className="font-bold text-sm mb-2">
          📌 Pengumuman Penting Praktikum:
        </h4>
        <p className="text-sm text-muted-foreground m-0">
          Jangan lupa laporannya harus disertai dengan{" "}
          <b>capture (tangkapan layar)</b> setiap tahapan proses eksekusi
          query-mu di PHP MyAdmin. Tugas dikumpulkan paling lambat tanggal{" "}
          <b>15 Juni 2026</b> via link Microsoft Forms ya! Jangan sampai
          kelewat!⏰
        </p>
      </div>

      <p>
        Sampai jumpa di jurnal praktikum Data Warehouse selanjutnya! Semangat
        kodingnya! 💻🔥
      </p>
    </>
  );
};
