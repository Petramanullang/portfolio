import React from "react";

export const Pertemuan12Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Selamat datang di jurnal praktikum Data Warehouse
        Pertemuan 12!
      </p>
      <p>
        Setelah berminggu-minggu kita pusing berjibaku dengan <i>query</i> SQL,
        skema Star/Snowflake, sampai OLAP Cube, sekarang saatnya kita melihat
        "Gambaran Besarnya" (<i>Big Picture</i>). Di tugas individu kali ini,
        saya mengeksplorasi gimana sih teknologi Data Warehouse ini bener-bener
        dipake di dunia nyata.
      </p>
      <p>
        Ternyata, dari urusan minjem duit, ngebor minyak, sampe milih film di
        Netflix, semuanya pake Data Warehouse! Yuk, kita bedah satu-satu
        penerapannya di 5 sektor industri! 🚀
      </p>
      <br />

      {/* Gambar Cover Laporan */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-12.jpeg"
        alt="Laporan Tugas Individu Data Warehouse"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Laporan Tugas Individu Praktikum Data Warehouse -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="sektor-keuangan">
        1. Sektor Keuangan: Mengendus Kredit Macet 💸
      </h2>
      <p>
        Studi kasus pertama datang dari PT. XYZ, sebuah perusahaan Fintech P2P
        Lending yang ngasih modal ke UMKM. Masalah utama mereka? Banyak yang
        ngutang tapi telat bayar (kredit macet)!
      </p>
      <ul>
        <li>
          <b>Solusi DW:</b> Mereka ngebangun Data Mart khusus pake pendekatan
          skema <i>galaxy</i> untuk misahin data pencairan pinjaman dan data
          pembayaran angsuran.
        </li>
        <li>
          <b>Hasilnya:</b> Data tersebut dibikin jadi <i>dashboard</i> Business
          Intelligence (BI) interaktif untuk mantau performa keterlambatan
          bayar.
        </li>
        <li>
          <b>Kecerdasan Buatan:</b> Nggak cuma itu, data historisnya dipake buat
          ngelatih model Machine Learning (Random Forest dan ARIMA) untuk
          memprediksi probabilitas nasabah gagal bayar di masa depan! Arsitektur
          jenius ini juga sangat cocok buat diadopsi sama bank konvensional.
        </li>
      </ul>

      <h2 id="sektor-industri">
        2. Sektor Industri Migas: Jaga Alat Biar Nggak Meledak 🛢️
      </h2>
      <p>
        Di sektor hulu (<i>Upstream</i>) minyak dan gas, PT Pertamina Hulu Rokan
        punya PR besar ngejaga fasilitas permukaan yang udah pada tua (
        <i>aging surface facilities</i>) biar tetep aman dan efisien.
      </p>
      <ul>
        <li>
          <b>Solusi DW:</b> Mereka ngebangun DW sentral yang nyedot data dari
          sensor alat berat, sistem pemeliharaan (CMMS), dan Big Data.
        </li>
        <li>
          <b>Integrasi Super:</b> DW ini disambungin ke hilir (pengolahan bahan
          jadi), analisis data SPBU, sampe ke sistem ERP buat ngurus gaji
          pegawai.
        </li>
        <li>
          <b>Hasilnya:</b> Direksi bisa ngambil keputusan prediktif super cepet
          lewat <i>Decision Support Centre (DSC)</i>.
        </li>
      </ul>

      <h2 id="sektor-pemerintahan">
        3. Sektor Pemerintahan: Basmi Korupsi & Data Silo 🏛️
      </h2>
      <p>
        Pemerintah Kabupaten Lamongan mau nerapin <i>agile governance</i>, tapi
        masalahnya tiap dinas (SKPD/OPD) punya sistem data sendiri-sendiri
        (fragmentasi). Kalo datanya misah, koordinasi jadi lambat.
      </p>
      <ul>
        <li>
          <b>Solusi DW:</b> Membangun gudang data pusat sebagai{" "}
          <i>Single Source of Truth</i> (sumber kebenaran tunggal) yang
          ngumpulin semua data dinas.
        </li>
        <li>
          <b>Transparansi:</b> Data ini diintegrasiin sama sistem e-Procurement
          buat ngevaluasi vendor secara objektif, neken risiko korupsi, dan
          mencegah <i>mark-up</i> harga.
        </li>
        <li>
          <b>Hasilnya:</b> Bupati bisa langsung ngecek{" "}
          <i>real-time monitoring dashboards</i> buat liat realisasi anggaran
          tanpa harus nunggu laporan manual akhir bulan.
        </li>
      </ul>

      <h2 id="sektor-transportasi">
        4. Sektor Transportasi: Robot Penjaga Gudang KAI 🚂
      </h2>
      <p>
        PT Kereta Api Indonesia (DAOP 1 Jakarta) butuh cara biar stok barang IT
        (kayak kabel atau modem) nggak numpuk di gudang, tapi juga nggak boleh
        sampe kehabisan pas dibutuhin.
      </p>
      <ul>
        <li>
          <b>Solusi DW:</b> Mensentralisasi data inventaris dan log kerusakan ke
          dalam Data Warehouse.
        </li>
        <li>
          <b>Sistem Pakar:</b> Data historis ini diolah pake{" "}
          <i>Expert System</i> dengan logika <i>Backward Chaining</i>.
        </li>
        <li>
          <b>Hasilnya:</b> Kalau sistem liat riwayat Kabel RJ 45 Cat 6 sering
          dipake, dia otomatis ngeluarin perintah "Sediakan Barang". Kalo modem
          jarang dipake, sistem bakal bilang "Tidak Sediakan Barang". Keren kan?
          Komputer yang mikir sendiri!
        </li>
      </ul>

      <h2 id="sektor-marketing">
        5. Sektor Marketing: Kenapa Netflix Tahu Selera Kamu? 🎬
      </h2>
      <p>
        Terakhir, penerapan DW berbasis Cloud Computing di dunia{" "}
        <i>Marketing</i>.
      </p>
      <ul>
        <li>
          <b>Netflix:</b> Mereka ngumpulin triliunan data klik dan riwayat
          tontonan kamu ke dalam <i>Cloud Data Warehouse</i>. Data ini diproses{" "}
          <i>real-time</i> buat ngasilin mesin rekomendasi super personal (
          <i>Personalized Recommendation Engine</i>) biar kamu nggak berhenti
          langganan.
        </li>
        <li>
          <b>Walmart / E-Commerce:</b> Mereka ngegabungin data penjualan toko
          fisik dan aplikasi <i>mobile</i>. Pas permintaan suatu barang lagi
          tinggi, sistem Business Intelligence (BI) mereka bakal langsung naikin
          harga atau ngirim promo kilat secara otomatis (<i>Dynamic Pricing</i>
          ).
        </li>
      </ul>

      <hr className="my-6 border-border" />
      <p>
        Wah, gila banget ya! Ternyata <i>query</i> dan tabel yang kita pelajari
        susah-susah di lab itu adalah tulang punggung dari perusahaan-perusahaan
        raksasa untuk mencetak miliaran dolar dan melayani jutaan orang.
      </p>
      <p>
        Semoga laporan individu ini bisa ngebuka wawasan kita semua. Sampai
        jumpa di proyek akhir Data Warehouse! 💻🔥
      </p>
    </>
  );
};
