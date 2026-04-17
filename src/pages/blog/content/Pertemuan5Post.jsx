import React from "react";

export const Pertemuan5Post = () => {
  return (
    <>
      <p>Halo semuanya! 👋 Balik lagi sama jurnal praktikum Data Warehouse.</p>
      <p>
        Kalo di pertemuan kemaren kita udah kenalan sama bentuk luar dari{" "}
        <b>Star Schema</b> dan <b>Snowflake Schema</b>, di Pertemuan 5 ini kita
        bakal ngebedah "dalemannya". Buat kita yang lagi ngegas di semester 4,
        materi ini emang mulai seru karena kita bakal ngomongin rahasia kenapa
        query bisa cepet atau lambat pake konsep <b>Normalisasi</b>!
      </p>
      <p>Yuk, kita bongkar satu-satu! 🕵️‍♂️</p>
      <br />

      {/* Syarat ITPLN: Wajib ada logo/gambar ITPLN */}
      <img
        src="/Blog/Data-Warehouse/Data-Warehouse-5.png"
        alt="Star vs Snowflake Schema Normalization"
        className="rounded-xl"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Praktikum Data Warehouse -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="star-schema-normalisasi">
        1. Star Schema: Sengaja "Ngelanggar" Aturan 🌟
      </h2>
      <p>
        Di dunia database, ada aturan ketat yang namanya Normalisasi (1NF, 2NF,
        3NF). Nah, uniknya si Star Schema ini agak "pemberontak"[cite: 50].
      </p>
      <ul>
        <li>
          <b>Tabel Fakta (Fact Table):</b> Anak baik. Tabel fakta kayak{" "}
          <code>fact_sales_order_item</code> ini udah dinormalisasi sampe level
          3NF[cite: 51]. Semua kolom non-key bergantung sepenuhnya sama{" "}
          <i>composite primary key</i>-nya, dan gak ada yang saling bergantung
          (dependensi transitif)[cite: 52, 53].
        </li>
        <li>
          <b>Tabel Dimensi (Dimension Table):</b> Nah, ini dia si pemberontak!
          Tabel dimensi sengaja <b>didenormalisasi</b> (cuma mentok di
          2NF)[cite: 50, 55]. Tujuannya? Biar pas dipanggil (query), mesin nggak
          usah repot-repot nyambungin banyak tabel, jadi performa bacanya
          wusss... cepet banget! [cite: 50]
        </li>
      </ul>
      <p>
        Tapi ya gitu, karena cuma 2NF, dia ngelanggar aturan 3NF karena banyak{" "}
        <b>dependensi transitif</b>[cite: 59]. Contohnya di{" "}
        <code>dim_branch</code>, kolom <code>division</code> bergantung ke{" "}
        <code>region</code>, bukan langsung ke Primary Key-nya[cite: 66].
      </p>

      <h2 id="snowflake-schema-normalisasi">
        2. Snowflake Schema: Si Paling Disiplin ❄️
      </h2>
      <p>
        Kalo Star Schema sengaja ngelanggar aturan, <b>Snowflake Schema</b> ini
        tipe anak rajin yang taat hukum. Semua tabelnya, baik Fakta maupun
        Dimensi, <b>wajib lulus ujian 3NF</b>[cite: 69, 74, 77, 80].
      </p>
      <p>
        Gimana cara ngilangin dependensi transitifnya? Ya dengan dipecah-pecah!
        [cite: 78, 81]
      </p>
      <ul>
        <li>
          Tabel <code>product</code> dipecah jadi <code>product</code> dan{" "}
          <code>product_group</code>[cite: 74, 76].
        </li>
        <li>
          Tabel <code>customer</code> nyimpen alamat kota doang, terus
          dihubungin ke tabel <code>town</code>, dan tabel <code>town</code>{" "}
          dihubungin lagi ke <code>state</code>[cite: 77, 78].
        </li>
        <li>
          Tabel cabang (<code>store</code>) juga sama, dipecah berjenjang dari{" "}
          <code>store</code> ➔ <code>region</code> ➔ <code>division</code>[cite:
          80, 81].
        </li>
      </ul>
      <p>
        Hasilnya? Data jadi super rapi dan ukurannya hemat karena nggak ada data
        dobel[cite: 79]. Tapi ya gitu, kalo mau nyari info lengkap, sistem harus
        nge-<i>join</i> banyak tabel sekaligus.
      </p>

      <h2 id="tugas-praktikum">3. Misi Praktikum Kali Ini 🎯</h2>
      <p>
        Di praktikum Pertemuan 5 ini, ada dua misi utama yang harus kita
        selesain:
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm text-left">
          <thead className="bg-accent/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 font-bold">Misi</th>
              <th className="px-4 py-3 font-bold">Deskripsi Tugas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">
                Memperbaiki Snowflake Schema
              </td>
              <td className="px-4 py-3">
                Kita harus benerin relasi antar tabel! <code>order_id</code>{" "}
                dari <code>sales_order_header</code> nggak boleh dikirim
                sembarangan kemana-mana[cite: 84]. Terus, ID dari{" "}
                <code>sales_order_detail</code> harus dimasukin ke{" "}
                <code>sales_order_header</code> sebagai <i>foreign key</i> (bisa
                dicek di script <code>dw_d_prak1_snowflake.sql</code>)[cite: 84,
                85].
              </td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">
                Latihan Star Schema (Pinjam Buku)
              </td>
              <td className="px-4 py-3">
                Kita juga praktek bikin Star Schema buat sistem
                Perpustakaan[cite: 88]. Ada satu tabel fakta (
                <code>fact_pinjam_buku</code>) [cite: 100], yang dikelilingin 4
                tabel dimensi: Penulis, Buku, Peminjam, dan Waktu Pinjam (script{" "}
                <code>dw_d_quiz1_star.sql</code>)[cite: 89, 94, 106, 110, 114].
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Udah makin kelihatan kan bedanya? Desain skema data ini emang ngajarin
        kita soal <i>trade-off</i>: mau milih performa kenceng tapi boros memori
        (Star), atau milih rapi dan hemat memori tapi <i>query</i>-nya butuh{" "}
        <i>effort</i> lebih (Snowflake).
      </p>
      <p>Sampai jumpa di jurnal praktikum minggu depan! 🚀</p>
    </>
  );
};
