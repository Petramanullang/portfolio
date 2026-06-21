import React from "react";

export const Pertemuan11Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Jurnal praktikum Data Warehouse kali ini lumayan
        spesial, karena di Pertemuan 11 ini kita dapet misi buat kerja kelompok!
      </p>
      <p>
        Sebagai ketua kelompok 6, saya bareng dua anggota tim yang keren banget,
        yaitu Azka dan Alysia, dapet tugas buat mengeksekusi <i>query</i> OLAP
        (Online Analytical Processing) langsung ke <i>database</i> penjualan.
        Target kita adalah nyelesein 7 operasi utama, mulai dari Roll Up sampe
        Drill-Through.
      </p>
      <p>
        Penasaran gimana hasil eksperimen tim kita? Yuk, kita bedah kodingannya!
        🚀
      </p>
      <br />

      {/* Gambar Cover Laporan */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-11.jpeg"
        alt="Laporan Kelompok 6 OLAP"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Laporan Tugas Kelompok 6 Praktikum Data Warehouse -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="rollup-drilldown">1. Pemanasan: Roll Up & Drill Down 🔍</h2>
      <p>
        Misi pertama yang dieksekusi sama Azka dan Alysia adalah ngelakuin
        agregasi dan pemecahan data.
      </p>
      <ul>
        <li>
          <b>Roll Up:</b> Kita ngegabungin data pendapatan berdasarkan Tanggal,
          Produk, atau Lokasi. Kalau di SQL, kuncinya ada di{" "}
          <code>GROUP BY</code>.
        </li>
        <li>
          <b>Drill Down:</b> Ini kebalikannya. Kita memfilter data buat ngeliat
          detail transaksi di hari, produk, atau lokasi tertentu. Kuncinya ada
          di klausa <code>WHERE</code>.
        </li>
      </ul>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Contoh Roll Up By Tanggal
SELECT Tanggal, SUM(Pendapatan) AS Total_Pendapatan
FROM Penjualan_OLAP
GROUP BY Tanggal;

-- Contoh Drill Down By Product
SELECT *
FROM penjualan_olap
WHERE Produk = 'Produk B'
ORDER BY Produk;`}
      </pre>

      <h2 id="slice-dice">2. Memotong Kubus: Slice & Dice 🔪</h2>
      <p>
        Kalo ibarat kue, kubus data OLAP ini kita potong-potong biar dapet{" "}
        <i>insight</i> yang lebih tajam.
      </p>
      <ul>
        <li>
          <b>Slice:</b> Kita motong data cuma berdasarkan <b>satu dimensi</b>{" "}
          aja. Misalnya, cuma mau liat transaksi di 'Kota X'.
        </li>
        <li>
          <b>Dice:</b> Kita motong data pake <b>kombinasi banyak dimensi</b>{" "}
          sekaligus (Tanggal + Lokasi + Produk). Makin spesifik, datanya makin
          mengerucut!
        </li>
      </ul>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Contoh Slice By Location
SELECT *
FROM penjualan_olap
WHERE Lokasi = 'Kota X';

-- Contoh Dice Super Spesifik (Tanggal + Product + Location)
SELECT * FROM data_penjualan
WHERE tanggal = '2024/01/01' 
  AND produk = 'Produk B' 
  AND lokasi = 'Kota X';`}
      </pre>

      <h2 id="sisa-misi">
        3. Menyelesaikan Misi Tertunda (Pivot, Across, Through) 🎯
      </h2>
      <p>
        Nah, di lab kemarin kita baru sempet beres sampe tahap Dice. Tapi biar
        laporannya komplit sesuai objektif di Excel, ini dia tambahan{" "}
        <i>query</i> buat sisa misinya:
      </p>

      <h3>A. Pivot (Memutar Tabel)</h3>
      <p>
        Pivot berfungsi buat ngubah baris jadi kolom, biar gampang dibaca sama
        bos. Kita mau bikin Kota sebagai baris, dan Produk tiap bulan sebagai
        kolomnya.
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Pivot: Kota vs (Produk A & B per Bulan)
SELECT 
    Lokasi AS KOTA,
    SUM(CASE WHEN Produk = 'Produk A' AND MONTH(Tanggal) = 1 THEN Pendapatan ELSE 0 END) AS ProductA_Bulan1,
    SUM(CASE WHEN Produk = 'Produk A' AND MONTH(Tanggal) = 2 THEN Pendapatan ELSE 0 END) AS ProductA_Bulan2,
    SUM(CASE WHEN Produk = 'Produk B' AND MONTH(Tanggal) = 1 THEN Pendapatan ELSE 0 END) AS ProductB_Bulan1,
    SUM(CASE WHEN Produk = 'Produk B' AND MONTH(Tanggal) = 2 THEN Pendapatan ELSE 0 END) AS ProductB_Bulan2
FROM Penjualan_OLAP
GROUP BY Lokasi;`}
      </pre>

      <h3>B. Drill Across (Lintas Dimensi Tabel Baru)</h3>
      <p>
        Disuruh nambahin tabel dimensi <code>Stok</code> dan ngelakuin JOIN buat
        ngebandingin barang yang terjual dengan sisa stok di gudang.
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Bikin tabel bayangan dulu buat stok
-- Terus kita Drill Across (JOIN Fact Table dengan Tabel Stok)
SELECT 
    p.Tanggal,
    p.Produk,
    p.Lokasi,
    SUM(p.Pendapatan) AS Total_Pendapatan,
    s.Jumlah_Stok
FROM Penjualan_OLAP p
JOIN Dimensi_Stok s ON p.Produk = s.Produk AND p.Lokasi = s.Lokasi
GROUP BY p.Tanggal, p.Produk, p.Lokasi, s.Jumlah_Stok;`}
      </pre>

      <h3>C. Drill-Through (Menembus ke Transaksi Asli)</h3>
      <p>
        Kalau <i>Drill Down</i> cuma turun satu level, <i>Drill-Through</i> ini
        langsung nyari data dari tabel transaksi aslinya (OLTP) yang belum
        diagregasi.
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Menembus detail transaksi mentah untuk Produk B di Kota X
SELECT 
    id_transaksi,
    waktu_transaksi_detail,
    nama_kasir,
    metode_pembayaran,
    jumlah_item,
    harga_satuan,
    total_bayar
FROM db_transaksi_asli.tabel_struk
WHERE Produk = 'Produk B' AND Lokasi = 'Kota X' AND DATE(waktu_transaksi_detail) = '2024-01-01';`}
      </pre>

      <div className="bg-accent/30 border border-border p-4 rounded-xl my-6">
        <h4 className="font-bold text-sm mb-2">
          📌 Catatan Evaluasi Kelompok:
        </h4>
        <p className="text-sm text-muted-foreground m-0">
          <i>Teamwork makes the dream work!</i> Biarpun sempet terpotong durasi
          praktikumnya, tapi fondasi logika dari Roll Up sampe Dice udah bener
          banget. Tinggal implementasi Pivot yang butuh fokus lebih buat nulis
          sintaks <code>CASE WHEN</code>-nya.
        </p>
      </div>

      <p>
        Sekian laporan dari Kelompok 6! Sampai ketemu di final project Data
        Warehouse nanti ya! 💻🔥
      </p>
    </>
  );
};
