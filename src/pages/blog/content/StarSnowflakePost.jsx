import React from "react";

export const StarSnowflakePost = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Balik lagi di seri catatan praktikum Data Warehouse.
      </p>
      <p>
        Pernah nggak sih kalian ngebayangin gimana cara ribuan data transaksi di
        supermarket disusun biar nggak pusing pas mau dicek? Nah, di dunia Data
        Warehouse, ada dua "desain" yang paling populer: <b>Star Schema</b> dan{" "}
        <b>Snowflake Schema</b>.
      </p>
      <p>Beda bentuk, beda juga nasibnya! Yuk, kita bahas tipis-tipis~ 👀</p>
      <br />

      {/* Syarat ITPLN: Wajib ada logo/gambar ITPLN */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-4.jpeg"
        alt="Star vs Snowflake Schema"
        className="rounded-xl"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Praktikum Pertemuan 4 -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          ITPLN
        </a>
      </p>

      <h2 id="star-schema">1. Star Schema: Si Bintang yang Simpel ⭐</h2>
      <p>
        Kenapa namanya <i>Star Schema</i>? Soalnya kalo digambar, tabelnya bakal
        membentuk pola bintang.
      </p>
      <ul>
        <li>
          <b>Pusatnya:</b> Ada satu tabel utama yang namanya <b>Fact Table</b>{" "}
          (Isinya data transaksi, angka-angka, atau poin penjualan).
        </li>
        <li>
          <b>Ujungnya:</b> Dikelilingi sama <b>Dimension Tables</b> (Isinya
          detail info kayak nama produk, tanggal, atau lokasi toko).
        </li>
      </ul>
      <p>
        Kelebihannya? <b>Simpel banget!</b> ⚡ Karena tabel dimensinya langsung
        nempel ke tabel fakta, proses narik datanya jadi kenceng banget. Tapi ya
        gitu, karena datanya nggak "dikecil-kecilin" (denormalisasi), bakal
        banyak data yang dobel-dobel alias boros tempat penyimpanan.
      </p>

      <h2 id="snowflake-schema">2. Snowflake Schema: Si Salju yang Rapi ❄️</h2>
      <p>
        Kalo <i>Star Schema</i> tadi dirasa kurang rapi karena banyak data
        dobel, muncullah <b>Snowflake Schema</b>.
      </p>
      <p>
        Ibarat butiran salju yang punya cabang-cabang, di sini tabel dimensinya
        "dipecah" lagi jadi tabel-tabel kecil (normalisasi).
      </p>
      <ul>
        <li>
          <b>Contohnya:</b> Kalo di Star Schema tabel "Produk" isinya semua
          info, di Snowflake tabel "Produk" bakal dipisah lagi jadi tabel
          "Kategori" dan "Supplier".
        </li>
      </ul>
      <p>
        Hasilnya? <b>Hemat tempat!</b> 💾 Datanya jadi rapi banget dan nggak ada
        yang dobel. Tapi... pas mau narik data, komputernya harus kerja lebih
        keras karena harus "nyambung-nyambungin" (<i>join</i>) banyak tabel.
        Jadi agak sedikit lebih lambat dibanding si Bintang.
      </p>

      <h2 id="perbandingan">3. Duel: Star vs Snowflake 🥊</h2>
      <p>
        Masih bingung mau pilih yang mana? Nih, perbandingannya biar gampang
        diinget:
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm text-left">
          <thead className="bg-accent/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 font-bold">Kategori</th>
              <th className="px-4 py-3 font-bold">Star Schema ⭐</th>
              <th className="px-4 py-3 font-bold">Snowflake Schema ❄️</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">Struktur</td>
              <td className="px-4 py-3">Denormalisasi (Satu lapis)</td>
              <td className="px-4 py-3">Normalisasi (Berlapis-lapis)</td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">Kecepatan Query</td>
              <td className="px-4 py-3">Wusss... Cepat! ⚡</td>
              <td className="px-4 py-3">Sedikit lebih lambat 🐢</td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">Penggunaan Storage</td>
              <td className="px-4 py-3">Boros tempat</td>
              <td className="px-4 py-3">Efisien & Irit 💰</td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">Kemudahan Pakai</td>
              <td className="px-4 py-3">Gampang banget dipahami</td>
              <td className="px-4 py-3">Lumayan kompleks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="kesimpulan">4. Jadi, Pilih yang Mana? 🤔</h2>
      <p>
        Sebenernya nggak ada yang bener atau salah. Kalo kamu butuh performa
        kenceng dan nggak masalah sama kapasitas penyimpanan, <b>Star Schema</b>{" "}
        juaranya. Tapi kalo data kamu kompleks banget dan mau ngirit{" "}
        <i>storage</i>, <b>Snowflake Schema</b> jawabannya.
      </p>
      <p>
        Intinya, pastiin desain yang kamu pilih sesuai sama kebutuhan analisis
        bos-bos nanti ya! Jangan sampe pas mau liat laporan, malah nungguin
        loading kelamaan~ 😅
      </p>
      <p>
        Gimana? Udah makin paham kan soal bedanya bintang dan salju di dunia
        data? Sampai ketemu di praktikum selanjutnya! 🚀
      </p>
    </>
  );
};
