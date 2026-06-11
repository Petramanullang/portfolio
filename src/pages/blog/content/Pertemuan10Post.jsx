import React from "react";

export const Pertemuan10Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Balik lagi di catatan praktikum Data Warehouse. Kali
        ini kita udah masuk ke <b>Pertemuan 10</b> dengan materi yang lumayan{" "}
        <i>mind-blowing</i>, yaitu <b>Slowly Changing Dimension (SCD)</b>!
      </p>
      <p>
        Pernah nggak kepikiran, gimana jadinya kalau data pelanggan kita
        berubah? Misalnya, ada pelanggan pindah kota atau <i>upgrade member</i>.
        Kalau datanya cuma di-<i>update</i> biasa, data riwayat di masa lalunya
        bisa hilang dong? Nah, buat ngatasin masalah ini, Data Warehouse punya
        teknik khusus yang namanya SCD.
      </p>
      <p>Yuk, kita bedah jenis-jenisnya bareng-bareng! 👀</p>
      <br />

      {/* Gambar Cover */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-10.jpeg"
        alt="Slowly Changing Dimension"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Materi Pertemuan 10: Slowly Changing Dimension -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="apa-itu-scd">1. Apa sih SCD itu? 🤔</h2>
      <p>
        Secara teori,{" "}
        <b>
          SCD adalah teknik dalam Data Warehouse untuk mengelola perubahan data
          pada tabel dimensi dari waktu ke waktu
        </b>
      </p>
      <p>Ngapain kita repot-repot pake SCD? Tujuannya penting banget:</p>
      <ul>
        <li>Memelihara integritas data historis dari masa lalu.</li>
        <li>Mendukung bos-bos buat bikin analisis tren jangka panjang.</li>
        <li>
          Memungkinkan kita ngelakuin audit perubahan data (siapa tau ada yang
          iseng ngubah data).
        </li>
      </ul>

      <h2 id="jenis-scd">2. Tiga Jurus Utama SCD 🥷</h2>
      <p>
        Ada 3 tipe atau jenis SCD yang paling sering dipake buat ngakalin data
        yang berubah-ubah. Beda tipe, beda juga cara kerjanya:
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm text-left">
          <thead className="bg-accent/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 font-bold">Jenis SCD</th>
              <th className="px-4 py-3 font-bold">Cara Kerja</th>
              <th className="px-4 py-3 font-bold">Kelebihan & Kekurangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">
                SCD Type 1 (Overwrite)
              </td>
              <td className="px-4 py-3">
                Menimpa data lama dengan data terbaru. Jadi data yang tersimpan
                cuma versi paling baru.
              </td>
              <td className="px-4 py-3">
                <b>Plus:</b> Sederhana dan hemat <i>storage</i>.
                <br />
                <b>Minus:</b> Kehilangan histori masa lalu.
              </td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">
                SCD Type 2 (Add New Record)
              </td>
              <td className="px-4 py-3">
                Setiap ada perubahan, dibikin baris (<i>record</i>) baru. Record
                lama ditutup pake <code>EndDate</code>, dan record baru dikasih
                status <code>Current = Y</code>. Wajib punya{" "}
                <i>Surrogate Key</i>!
              </td>
              <td className="px-4 py-3">
                <b>Plus:</b> Histori tersimpan super lengkap, bagus buat audit.
                <br />
                <b>Minus:</b> Bikin ukuran tabel bengkak dan <i>query</i> jadi
                rumit.
              </td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">
                SCD Type 3 (Add New Column)
              </td>
              <td className="px-4 py-3">
                Menambah kolom baru buat nyimpen data lama (misal: ada kolom{" "}
                <code>Kota_Lama</code> dan <code>Kota_Sekarang</code>).
              </td>
              <td className="px-4 py-3">
                <b>Plus:</b> Gampang diterapin dan bisa liat perubahan terakhir.
                <br />
                <b>Minus:</b> Historinya terbatas, cuma nyimpen perubahan mentok
                di 1 level sebelumnya.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="studi-kasus">
        3. Studi Kasus Praktikum: Budi Si Duta Nomaden 🏃‍♂️
      </h2>
      <p>
        Di tugas praktikum, kita dikasih satu skenario perubahan data pelanggan
        bernama Budi. Ceritanya gini:
      </p>
      <ul>
        <li>
          <b>Tahun 2023 (Awal):</b> Budi tinggal di Jakarta dengan status member
          Silver.
        </li>
        <li>
          <b>Tahun 2024:</b> Budi pindah domisili ke Bandung.
        </li>
        <li>
          <b>Tahun 2025:</b> Budi naik pangkat jadi member Gold.
        </li>
      </ul>

      <p>
        <b>Gimana penyelesaiannya? (Rekomendasi)</b>
      </p>
      <ul>
        <li>
          Untuk atribut <b>Kota</b>: Karena Budi sering pindah dan kita mungkin
          butuh data ini buat ngirim barang/promosi wilayah terakhir aja, kita
          bisa pake <b>SCD Type 3</b>. Cukup tambahin kolom{" "}
          <code>Kota_Lama</code> dan <code>Kota_Sekarang</code> biar gampang di-
          <i>tracking</i> perubahan terbarunya. Atau kalau histori
          perpindahannya nggak penting-penting banget, hajar aja pake{" "}
          <b>SCD Type 1</b> (langsung timpa).
        </li>
        <li>
          Untuk atribut <b>Status Member</b>: Wah, ini krusial! Perubahan level
          member dari Silver ke Gold sangat berpengaruh ke analisis pendapatan
          dan diskon. Makanya, atribut status wajib banget pakai{" "}
          <b>SCD Type 2</b>. Kita harus bikin baris baru tiap statusnya naik,
          lengkap dengan <code>StartDate</code> dan <code>EndDate</code>, biar
          jejak transaksinya bisa diaudit dengan sempurna.
        </li>
      </ul>

      <hr className="my-6 border-border" />
      <p>
        Kesimpulannya, merancang tabel dimensi itu nggak bisa sembarangan. Kita
        harus nentuin dari awal, mana data yang boleh ditimpa (Type 1), mana
        yang wajib direkam secara utuh (Type 2), dan mana yang cukup disimpen
        versi sebelumnya aja (Type 3).
      </p>
      <p>
        Kebayang kan pusingnya jadi <i>Data Architect</i>? 🤯 Sampai jumpa di
        jurnal praktikum berikutnya!
      </p>
    </>
  );
};
