import React from "react";

export const Pertemuan6Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Lanjut lagi nih di jurnal praktikum Data Warehouse
        Pertemuan 6.
      </p>
      <p>
        Kalo di pertemuan sebelumnya kita udah belajar teorinya, hari ini kita
        dapet misi buat latihan pembuatan Snowflake Schema secara langsung. Kita
        bakal ngelanjutin kasus peminjaman buku dari kuis sebelumnya, tapi
        sekarang skemanya kita "pecah" biar makin rapi! ❄️
      </p>
      <p>Penasaran gimana jadinya? Yuk, kita bedah! 👀</p>
      <br />

      {/* Syarat ITPLN: Wajib ada logo/gambar ITPLN */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-6.jpeg"
        alt="Skema Snowflake Peminjaman Buku"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Praktikum Data Warehouse Pertemuan 6 -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="bedah-skema">1. Dari Bintang Jadi Salju 🌟 ➔ ❄️</h2>
      <p>
        Di skema yang baru ini, pusat datanya tetep ada di tabel{" "}
        <code>fact_pinjam_buku</code>. Tapi, perhatiin deh tabel dimensinya.
      </p>
      <p>
        Kalo di Star Schema semua info numpuk di satu tabel dimensi, sekarang
        tabel <code>dimensi_buku</code> kita normalisasi lagi! Cabangnya mekar
        ke dua tabel baru, yaitu:
      </p>
      <ul>
        <li>
          <b>
            <code>dimensi_kategori</code>
          </b>
          : Khusus buat nyimpen data kategori buku.
        </li>
        <li>
          <b>
            <code>dimensi_penerbit</code>
          </b>
          : Khusus buat nyimpen detail siapa yang nerbitin bukunya.
        </li>
      </ul>
      <p>Hasilnya? Data jadi nggak ada yang dobel sama sekali. Rapi jali! ✨</p>

      <h2 id="aturan-emas">
        2. Aturan Emas Snowflake: Pantang Sentuh Fact Table! 🛑
      </h2>
      <p>
        Pas lagi nyusun skema ini, ada satu <i>quotes</i> penting dari asisten
        lab yang pantang banget buat dilanggar:
      </p>
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
        "Untuk bentuk nya sendiri itu tidak masalah, selama tabel dimensi
        turunannya tidak terhubung langsung dengan tabel fact."
      </blockquote>
      <p>
        <b>Maksudnya gimana tuh?</b>
      </p>
      <p>
        Gini, tabel turunan (kayak <code>dimensi_kategori</code> dan{" "}
        <code>dimensi_penerbit</code>) itu cuma boleh nyambung ke tabel induknya
        (<code>dimensi_buku</code>). Mereka <b>dilarang keras</b> punya jalur
        relasi langsung ke <code>fact_pinjam_buku</code>. Kalo sampe nyambung
        langsung ke Fact Table, ya namanya bukan Snowflake Schema lagi dong! 😅
      </p>

      <h2 id="uji-coba-join">3. Uji Coba Skema Pake JOIN 🔍</h2>
      <p>
        Nah, teori doang mah kurang afdol kalo nggak dites pake kodingan. Di
        praktikum ini, kita mengeksekusi beberapa <i>script</i> SQL buat
        ngebangun skemanya, kayak <code>dw_d_quiz2_snowflake.sql</code> dan{" "}
        <code>dimensi_buku.sql</code>.
      </p>
      <p>
        Abis itu, kita ngelakuin pengecekan codingan praktikum dengan JOIN.
        Tujuannya buat ngebuktiin, biarpun tabelnya udah dipecah-pecah
        berjenjang, kita tetep bisa narik datanya jadi satu kesatuan yang utuh.
        Kita ngejalanin <i>query</i> yang ada di file{" "}
        <code>QUERY TABLE SNOWFLAKE.txt</code> dan ngebandinginnya sama{" "}
        <code>QUERY JOIN DATA QUIZ STAR.txt</code>.
      </p>
      <p>
        Dan... berhasil! Biarpun <i>query</i>-nya jadi kelihatan agak panjang
        karena harus nge-<i>join</i> banyak tabel, tapi <i>database</i> kita
        sekarang jadi jauh lebih efisien dan <i>storage-friendly</i>! 💾
      </p>

      <p>
        Gimana? Seru kan main pecah-pecahan tabel? Sampai jumpa di catatan
        praktikum minggu depan ya! 🚀
      </p>
    </>
  );
};
