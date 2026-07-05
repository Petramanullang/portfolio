import React from "react";

export const Pertemuan15Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Selamat datang di jurnal praktikum Data Warehouse
        Pertemuan 15!
      </p>
      <p>
        Pernah kebayang nggak, gimana nasib data <i>customer</i> di{" "}
        <i>database</i> raksasa kalau mereka tiba-tiba pindah rumah atau naik
        level <i>membership</i>? Kalau datanya cuma di-<i>update</i> biasa, data
        riwayat belanja mereka di kota sebelumnya bisa lenyap tak berbekas!
      </p>
      <p>
        Nah, di sinilah sang penyelamat bernama{" "}
        <b>Slowly Changing Dimension (SCD)</b> beraksi. Yuk, kita bedah
        jurus-jurus SCD pakai studi kasus pelanggan bernama Budi! 🚀
      </p>
      <br />

      {/* Gambar Cover */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-15.jpeg"
        alt="Praktikum Slowly Changing Dimension"
        className="rounded-xl border border-border"
      />

      <h2 id="apa-itu-scd">1. Apa itu SCD? 🤔</h2>
      <p>
        SCD adalah teknik dalam Data Warehouse untuk mengelola perubahan data
        pada tabel dimensi dari waktu ke waktu. Data dimensi itu sifatnya nggak
        kaku dan bisa berubah[cite: 290]. SCD punya beberapa tipe untuk nentuin
        gimana perubahan tersebut harus disimpan di dalam Data Warehouse[cite:
        290].
      </p>

      <h2 id="studi-kasus">2. Studi Kasus: Budi Si Pelanggan Dinamis 🏃‍♂️</h2>
      <p>
        Kita punya data awal pelanggan di tahun 2023: <b>Budi</b> tinggal di{" "}
        <b>Jakarta</b> dengan status <b>Silver</b>[cite: 484, 485]. Lalu terjadi
        perubahan:
      </p>
      <ul>
        <li>
          <b>Tahun 2024:</b> Budi pindah domisili ke Bandung[cite: 486, 487].
        </li>
        <li>
          <b>Tahun 2025:</b> Status Budi naik dari Silver ke Gold[cite: 488].
        </li>
      </ul>
      <p>
        Gimana cara kita ngakalin <i>database</i>-nya? Kita punya 3 opsi!
      </p>

      <h2 id="scd-type-1">3. SCD Type 1: Timpa Saja! (Overwrite) ✏️</h2>
      <p>
        SCD Type 1 bekerja dengan cara menimpa data lama dengan data terbaru
        secara langsung[cite: 293, 319]. Kalau Budi pindah ke Bandung, tulisan
        Jakarta langsung dihapus dan diganti Bandung.
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- UPDATE Data Kota Budi menggunakan SCD Type 1
UPDATE dim_customer_type1 
SET Kota = 'Bandung' 
WHERE CustomerID = 'C001';`}
      </pre>
      <ul>
        <li>
          <b>Kelebihan:</b> Sangat mudah diterapkan dan menghemat kapasitas
          penyimpanan[cite: 350, 351, 672].
        </li>
        <li>
          <b>Kekurangan:</b> Kita kehilangan histori masa lalu[cite: 354, 674].
          Kita nggak akan pernah tahu kalau Budi pernah tinggal di Jakarta.
        </li>
      </ul>

      <h2 id="scd-type-2">
        4. SCD Type 2: Bikin Baris Baru (Add New Record) ➕
      </h2>
      <p>
        SCD Type 2 sangat peduli dengan sejarah. Saat data berubah, sistem tidak
        menimpa data lama, melainkan menambah baris (<i>record</i>) baru[cite:
        296, 297]. Baris lama akan ditandai dengan tanggal kadaluarsa (
        <i>EndDate</i>) dan flag tidak aktif[cite: 365, 367, 368, 369].
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- 1. Tutup status aktif baris lama Budi (Jakarta)
UPDATE dim_customer_type2
SET EndDate = '2024-01-01', CurrentFlag = 'N'
WHERE CustomerID = 'C001' AND CurrentFlag = 'Y';

-- 2. Buat baris baru untuk Budi (Bandung)
INSERT INTO dim_customer_type2 
(CustomerID, Nama, Kota, Status_Member, StartDate, EndDate, CurrentFlag)
VALUES 
('C001', 'Budi', 'Bandung', 'Silver', '2024-01-02', '9999-12-31', 'Y');`}
      </pre>
      <ul>
        <li>
          <b>Kelebihan:</b> Histori perubahan tersimpan super lengkap, sangat
          bagus untuk analisis jangka panjang dan audit[cite: 322, 383, 386,
          734].
        </li>
        <li>
          <b>Kekurangan:</b> Ukuran <i>database</i> membengkak dengan cepat dan{" "}
          <i>query</i> menjadi sangat rumit karena jumlah baris yang
          banyak[cite: 384, 390, 736].
        </li>
      </ul>

      <h2 id="scd-type-3">
        5. SCD Type 3: Tambah Kolom Histori (Add New Column) 🏷️
      </h2>
      <p>
        Jalan tengahnya adalah SCD Type 3. Alih-alih bikin baris baru, teknik
        ini menambah kolom khusus untuk menyimpan data sebelumnya[cite: 303,
        304, 318].
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono my-4 text-left">
        {`-- UPDATE perpindahan kota menggunakan SCD Type 3
UPDATE dim_customer_type3
SET Kota_Lama = Kota_Sekarang,
    Kota_Sekarang = 'Bandung'
WHERE CustomerID = 'C001';`}
      </pre>
      <ul>
        <li>
          <b>Kelebihan:</b> Membaca datanya sangat gampang karena perbandingan
          data lama dan baru berada di satu baris yang sama[cite: 424, 801].
        </li>
        <li>
          <b>Kekurangan:</b> Historinya sangat terbatas[cite: 324, 427]. Jika
          Budi pindah lagi ke Surabaya, riwayat tentang Jakarta akan hilang
          secara permanen karena tergeser oleh Bandung.
        </li>
      </ul>

      <div className="bg-accent/30 border border-border p-4 rounded-xl my-6">
        <h4 className="font-bold text-sm mb-2">📌 Kesimpulan & Rekomendasi</h4>
        <p className="text-sm text-muted-foreground m-0">
          Sebagai <i>Data Architect</i>, kita harus bijak memilih. Untuk{" "}
          <b>Status Member</b>, wajib hukumnya menggunakan <b>SCD Type 2</b>{" "}
          agar tren perilaku belanja pelanggan dari masa ke masa bisa dianalisis
          secara mendalam[cite: 582, 583]. Namun untuk <b>Kota</b>, jika hanya
          sekadar untuk keperluan diskon wilayah terakhir, <b>SCD Type 3</b>{" "}
          (atau bahkan Type 1) sudah cukup memadai[cite: 580].
        </p>
      </div>

      <p>
        Sekian jurnal praktikum bedah Data Warehouse minggu ini. Merancang{" "}
        <i>database</i> ternyata butuh insting detektif juga ya! Sampai jumpa di
        jurnal selanjutnya! 💻🔥
      </p>
    </>
  );
};
