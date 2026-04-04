import React from "react";

export const ETLProcessPost = () => {
  return (
    <>
      <p>
        Wah, nggak kerasa kita udah masuk ke <b>Pertemuan 3</b> aja nih! 🚀
      </p>
      <p>
        Di materi kali ini, kita nggak cuma bahas teknis, tapi juga ngingetin
        lagi soal "aturan main" alias kontrak kuliah kita. Terus, kita bakal
        bedah rahasia dapur gimana caranya data-data yang berantakan bisa masuk
        ke dalem Data Warehouse.
      </p>
      <p>Siap? Yuk, kita bahas! 👀</p>
      <br />

      <img
        src="/Blog/Data-Warehouse/Pertemuan-3.png"
        alt="Ilustrasi ETL ITPLN"
        className="rounded-xl"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Tugas Blog Pertemuan 3 -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="aturan-kelas">1. Aturan Main Kelas Kita 📜</h2>
      <p>
        Buat yang kemaren rada ngantuk pas dengerin kontrak kuliah, nih di-
        <i>recap</i> dikit biar nggak lupa:
      </p>
      <ul>
        <li>
          <b>Metode 442:</b> Ini metode pembelajaran andalan kelas kita. Pastiin
          kalian ngikutin alurnya ya!
        </li>
        <li>
          <b>Telat? Max 20 Menit!</b> Jangan kebiasaan jam karet. Toleransi
          keterlambatan cuma 20 menit, lewat dari itu... wassalam~ 🚪
        </li>
        <li>
          <b>Tugas Bikin Blog:</b> Selama satu semester, kita ditugasin bikin{" "}
          <b>14 tulisan blog</b>. Daaan syarat mutlaknya: tiap post wajib banget
          dilampirin tanda, tulisan, atau logo <b>ITPLN</b>. (Kaya gambar di
          atas tuh!)
        </li>
      </ul>

      <h2 id="database-terstruktur">
        2. Kenapa Sih Namanya "Database Terstruktur"? 🧱
      </h2>
      <p>
        Pernah mikir nggak, kenapa database (kayak MySQL) tuh disebut
        "terstruktur"? Kenapa nggak disamain aja kayak data di media sosial yang
        bebas kita mau nge-post tulisan panjang, pendek, pake foto, atau video
        sepuasnya?
      </p>
      <p>
        Jawabannya simpel: <b>Karena formatnya udah dikunci dari awal!</b> 🔒
      </p>
      <p>
        Di database terstruktur, sebelum datanya masuk, kita harus udah nentuin
        duluan tabelnya mau kayak apa, kolomnya apa aja, dan tipe datanya
        (huruf, angka, atau tanggal). Kalo ada data yang formatnya nyeleneh dari
        aturan itu? Langsung ditolak mentah-mentah sama sistemnya!
      </p>

      <h2 id="etl-process">3. ETL: Rahasia Dapur Pengolahan Data 🍳</h2>
      <p>
        Nah, karena Data Warehouse tuh nerima data dari berbagai macem sumber,
        datanya pasti berantakan banget dong? Makanya, butuh sebuah proses
        "bersih-bersih" dan "masak-masak" yang namanya <b>ETL</b>.
      </p>
      <p>Apaan tuh ETL? Ini dia kepanjangannya:</p>

      <ul>
        <li>
          🎣 <b>Extract (Ngambil Data):</b>
          <br />
          Ini proses nyaring, ngebaca, dan nyedot data dari banyak sumber.
          Sumbernya bisa macem-macem, mulai dari database biasa (MySQL, SQL
          Server), file mentahan (Excel `.xls`, `.csv`), sampe layanan Cloud.
          Abis disedot, data ini dibikinin salinannya.
        </li>
        <li className="mt-2">
          🧼 <b>Transform (Bersih-bersih & Ngubah Format):</b>
          <br />
          Ini tahap yang paling ribet. Datanya dibersihin dari "sampah". Kalo
          ada tipe data yang salah, diubah. Kalo ada data yang dobel (duplikat)
          atau <i>typo</i>, dibuang atau dibenerin. Intinya, datanya didandanin
          biar formatnya seragam dan sesuai sama standar.
        </li>
        <li className="mt-2">
          🚚 <b>Load (Masukin ke Gudang):</b>
          <br />
          Tahap terakhir! Data yang udah bersih, wangi, dan rapi tadi akhirnya
          dimasukin (didistribusiin) ke target akhir, yaitu repositori atau Data
          Warehouse. Proses ini asiknya bisa dijalanin secara otomatis dan
          berkala pake <i>code script</i> lho!
        </li>
      </ul>

      <h2 id="dw-vs-dds">4. Data Warehouse vs DDS: Emang Beda? 📦</h2>
      <p>
        Sering denger istilah <b>DDS</b> <i>(Dimensional Data Store)</i>? Jangan
        bingung, ini perbedaannya gampang banget buat dihafal:
      </p>
      <p>Ibaratin aja sebuah toples isi biskuit.</p>
      <ul>
        <li>
          <b>Data Warehouse:</b> Adalah sebutan buat <b>biskuit + toplesnya</b>.
          Keseluruhan sistem, isinya (data), dan wadahnya.
        </li>
        <li>
          <b>DDS:</b> Adalah sebutan buat <b>toplesnya doang!</b> Kalo kita cuma
          ngomongin soal wadah atau tempat penyimpanannya aja secara fisik, nah
          itulah yang disebut DDS.
        </li>
      </ul>

      <p>
        Nah, udah kebayang kan gimana ribet tapi serunya ngolah data dari mentah
        sampe siap dianalisis bos-bos? Semangat terus ya ngerjain sisa 12 blog
        lainnya! 🔥
      </p>
    </>
  );
};
