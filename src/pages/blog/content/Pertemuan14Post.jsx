import React from "react";

export const Pertemuan14Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Selamat datang di jurnal praktikum Data Warehouse
        Pertemuan 14!
      </p>
      <p>
        Kalau di Pertemuan 9 kemarin kita cuma membahas teori tentang OLAP
        (Online Analytical Processing) dan bentuk kubusnya, di pertemuan kali
        ini kita langsung turun ke medan perang! Yap, kita <i>full</i> praktikum
        mengeksekusi operasi-operasi OLAP menggunakan <i>query</i> SQL.
      </p>
      <p>
        Mulai dari nyiapin data mentah sampai memutar tabel pake Pivot, yuk kita
        bedah kodingannya bareng-bareng! 🚀
      </p>
      <br />

      {/* Gambar Cover */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-14.jpeg"
        alt="Praktikum OLAP SQL"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Praktikum Data Warehouse: Eksekusi SQL OLAP -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="persiapan-data">1. Persiapan Data (Data Setup) 🛠️</h2>
      <p>
        Sebelum bisa ngutak-ngatik data, pastinya kita harus bikin tabel fakta
        sederhana dulu dan ngisi datanya. Di praktikum ini kita bikin tabel{" "}
        <code>Penjualan_OLAP</code> yang isinya dimensi Tanggal, Produk, Lokasi,
        dan nilai Pendapatan.
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- Membuat struktur tabel
CREATE TABLE Penjualan_OLAP (
    Tanggal DATE,
    Produk VARCHAR(50),
    Lokasi VARCHAR(50),
    Pendapatan INT
);

-- Memasukkan data simulasi (Januari & Februari 2024)
INSERT INTO Penjualan_OLAP (Tanggal, Produk, Lokasi, Pendapatan) VALUES
('2024-01-01', 'Produk A', 'Kota X', 1000),
('2024-01-01', 'Produk A', 'Kota Y', 1500),
('2024-01-01', 'Produk B', 'Kota X', 2000),
('2024-01-01', 'Produk B', 'Kota Y', 1200),
('2024-02-01', 'Produk A', 'Kota X', 1200),
('2024-02-01', 'Produk A', 'Kota Y', 1800),
('2024-02-01', 'Produk B', 'Kota X', 2100),
('2024-02-01', 'Produk B', 'Kota Y', 1300);`}
      </pre>

      <h2 id="agregasi-rincian">
        2. Agregasi dan Rincian: Roll Up & Drill Down 🔍
      </h2>
      <p>
        Operasi pertama adalah <b>Roll Up</b> (meringkas data) dan{" "}
        <b>Drill Down</b> (merinci data). Saat kita me-<i>Roll Up</i>{" "}
        berdasarkan Produk, dimensi tanggal dan lokasi akan diabaikan sehingga
        kita dapat total pendapatan murni per produk.
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- ROLL UP: Menjumlahkan total pendapatan per Produk
SELECT Produk, SUM(Pendapatan) AS Total_Pendapatan
FROM Penjualan_OLAP
GROUP BY Produk;

-- DRILL DOWN: Melihat rincian penjualan spesifik untuk Produk A
SELECT Tanggal, Lokasi, Pendapatan
FROM Penjualan_OLAP
WHERE Produk = 'Produk A'
ORDER BY Tanggal;`}
      </pre>

      <h2 id="potong-kubus">3. Memotong Kubus Data: Slice & Dice 🔪</h2>
      <p>
        Untuk mengambil sudut pandang data tertentu, kita pakai <b>Slice</b>{" "}
        (memotong satu dimensi) dan <b>Dice</b> (memotong dua atau lebih dimensi
        sekaligus untuk bikin sub-kubus baru).
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- SLICE: Memotong data hanya untuk dimensi Lokasi = 'Kota X'
SELECT Tanggal, Produk, Pendapatan
FROM Penjualan_OLAP
WHERE Lokasi = 'Kota X';

-- DICE: Memfilter data secara spesifik pada dimensi Produk DAN Lokasi
SELECT Tanggal, Produk, Lokasi, Pendapatan
FROM Penjualan_OLAP
WHERE Produk = 'Produk B' AND Lokasi = 'Kota Y';`}
      </pre>

      <h2 id="pivot-across">4. Level Lanjut: Pivot & Drill Across 🌪️</h2>
      <p>
        Ini dia bagian yang paling menantang. <b>Pivot</b> digunakan untuk
        memutar orientasi tabel (baris jadi kolom), sangat berguna buat bikin
        laporan perbandingan. Sedangkan <b>Drill Across</b> dipakai untuk
        membandingkan dua tabel fakta yang berbeda (misal: Aktual vs Target)
        dengan menyatukan dimensi yang sama (Conformed Dimension).
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- PIVOT: Mengubah orientasi baris 'Lokasi' menjadi kolom
SELECT Tanggal, Produk,
       SUM(CASE WHEN Lokasi = 'Kota X' THEN Pendapatan ELSE 0 END) AS Pendapatan_Kota_X,
       SUM(CASE WHEN Lokasi = 'Kota Y' THEN Pendapatan ELSE 0 END) AS Pendapatan_Kota_Y
FROM Penjualan_OLAP
GROUP BY Tanggal, Produk;`}
      </pre>

      <p>
        Untuk <i>Drill Across</i>, kita butuh tabel target penjualan dulu:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- DRILL ACROSS: Persiapan Tabel Target
CREATE TABLE Target_Penjualan_OLAP (
    Tanggal DATE,
    Produk VARCHAR(50),
    Target_Pendapatan INT
);

INSERT INTO Target_Penjualan_OLAP (Tanggal, Produk, Target_Pendapatan) VALUES
('2024-01-01', 'Produk A', 2200),
('2024-01-01', 'Produk B', 3500),
('2024-02-01', 'Produk A', 2500),
('2024-02-01', 'Produk B', 4000);

-- Query Drill Across (Membandingkan Aktual vs Target menggunakan FULL OUTER JOIN)
WITH Aktual_Pendapatan AS (
    SELECT Tanggal, Produk, SUM(Pendapatan) AS Total_Aktual
    FROM Penjualan_OLAP
    GROUP BY Tanggal, Produk
),
Target_Pendapatan AS (
    SELECT Tanggal, Produk, SUM(Target_Pendapatan) AS Total_Target
    FROM Target_Penjualan_OLAP
    GROUP BY Tanggal, Produk
)
SELECT 
    COALESCE(a.Tanggal, t.Tanggal) AS Tanggal,
    COALESCE(a.Produk, t.Produk) AS Produk,
    COALESCE(a.Total_Aktual, 0) AS Total_Aktual,
    COALESCE(t.Total_Target, 0) AS Total_Target,
    (COALESCE(a.Total_Aktual, 0) - COALESCE(t.Total_Target, 0)) AS Selisih
FROM Aktual_Pendapatan a
FULL OUTER JOIN Target_Pendapatan t 
    ON a.Tanggal = t.Tanggal AND a.Produk = t.Produk
ORDER BY Tanggal, Produk;`}
      </pre>

      <h2 id="drill-through">5. Menembus Batas: Drill Through 🕳️</h2>
      <p>
        Operasi terakhir adalah <b>Drill Through</b>. Kalau <i>Drill Down</i>{" "}
        cuma turun satu level di dalam Data Warehouse, <i>Drill Through</i> ini
        tembus langsung ke akar rumput! Kita mengambil data mentah dari database
        transaksional (OLTP) yang membentuk nilai agregasi di Data Warehouse.
      </p>
      <p>
        Misalnya, kita melihat ada total pendapatan 2000 dari 'Produk B' di
        'Kota X' pada tanggal '2024-01-01'. Bos nanya,{" "}
        <i>"Ini 2000 dapet dari transaksi mana aja?"</i> Nah, kita pakai{" "}
        <i>Drill Through</i>:
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- DRILL THROUGH: Simulasi menembus ke tabel OLTP (Sistem Kasir)
-- Asumsi kita memiliki tabel transaksi mentah bernama 'Transaksi_Penjualan_Detail'

SELECT 
    ID_Transaksi, 
    Waktu_Transaksi, 
    Nama_Kasir, 
    Produk, 
    Lokasi, 
    Qty_Beli, 
    Harga_Satuan, 
    Total_Harga
FROM Transaksi_Penjualan_Detail
WHERE Produk = 'Produk B' 
  AND Lokasi = 'Kota X' 
  AND DATE(Waktu_Transaksi) = '2024-01-01';

/* Output bayangannya (hasilnya bukan 1 baris agregasi 2000, melainkan rincian struk):
ID_TRX | Waktu_Transaksi     | Kasir  | Produk   | Lokasi | Qty | Harga | Total
TRX001 | 2024-01-01 08:30:00 | Andi   | Produk B | Kota X | 1   | 1000  | 1000
TRX002 | 2024-01-01 14:15:00 | Budi   | Produk B | Kota X | 1   | 1000  | 1000
*/`}
      </pre>

      <div className="bg-accent/30 border border-border p-4 rounded-xl my-6">
        <h4 className="font-bold text-sm mb-2">📌 Kesimpulan Praktikum</h4>
        <p className="text-sm text-muted-foreground m-0">
          Dengan menguasai operasi OLAP lewat SQL ini, kita bisa mengubah data
          transaksi mentah yang menumpuk menjadi <i>insight</i> laporan bisnis
          yang siap disajikan ke manajemen. Mantap!
        </p>
      </div>

      <p>
        Sekian keseruan praktikum kita "ngobok-ngobok" kubus data OLAP pakai
        SQL. Sampai jumpa di jurnal selanjutnya! 💻🔥
      </p>
    </>
  );
};
