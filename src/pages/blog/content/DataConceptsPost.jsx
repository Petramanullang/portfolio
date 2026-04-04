import React from "react";

export const DataConceptsPost = () => {
  return (
    <>
      <p>
        Pernah denger istilah <b>Database</b>, <b>Data Warehouse</b>, sama{" "}
        <b>Dataset</b>?
      </p>
      <p>
        Kebanyakan orang tuh sering banget kebolak-balik nyebutnya. Padahal...
        ketiganya ini beda jauhhh! Beda fungsi, beda cara kerja, dan beda juga
        siapa yang makenya.
      </p>
      <p>Yuk, kita bedah bareng-bareng materi Pertemuan 2 ini! 👀</p>
      <br />

      <img
        src="/Blog/Data-Warehouse/Pertemuan-2.png"
        alt="Ilustrasi Data"
        className="rounded-xl"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Catetan ringkas Pertemuan 2 nih -{" "}
        <a
          href="http://www.itpln.ac.id"
          className="text-primary hover:underline"
        >
          ITPLN
        </a>
      </p>

      <h2 id="target-pengguna">1. Target Pengguna: Siapa yang Pake? 🧑‍💻</h2>
      <ul>
        <li>
          <b>Database:</b> Ibarat buku catatan harian kasir. Yang make ya para{" "}
          <b>operator</b> buat nyatet transaksi tiap hari. Kerjaan utamanya
          muter-muter di CRUD (<i>Create, Read, Update, Delete</i>). Tambah
          data, edit, hapus, gitu aja terus~
        </li>
        <li>
          <b>Data Warehouse:</b> Kalo ini mah mainannya para bos! 😎 Dirancang
          khusus buat <b>top-level management</b> (kayak Manajer atau CEO) yang
          butuh liat "gambaran besar" alias analisis data level dewa buat
          nentuin strategi perusahaan ke depannya.
        </li>
      </ul>

      <h2 id="redundansi">2. Redundansi: Boleh Ada Data Dobel Nggak? 👯</h2>
      <p>Nah, aturan main nyimpen datanya beda banget nih...</p>
      <ul>
        <li>
          <b>Database:</b> Dilarang keras ada data dobel! 🚫 Tingkat
          redundansinya <b>sangat rendah</b>. Data tuh bener-bener dipress pake
          proses normalisasi yang ketat banget biar rapi jali.
        </li>
        <li>
          <b>Data Warehouse:</b> Justru kebalikannya! Redundansinya{" "}
          <b>tinggi</b> banget. Datanya sengaja ditumpuk-tumpuk dari berbagai
          sumber dan <i>gak dinormalisasi</i> (nyimpen sejarah data dari zaman
          baheula). Kenapa? Biar pas bos mau nganalisis, loading-nya wusss...
          cepet banget! ⚡
        </li>
      </ul>

      <h2 id="frekuensi-akses">
        3. Frekuensi Akses: Sering Diotak-atik Nggak? ⏱️
      </h2>
      <ul>
        <li>
          <b>Database:</b> Sibuk banget! Frekuensi aksesnya{" "}
          <b>supeeeer tinggi</b>. Tiap detik ada aja data yang di-update,
          diedit, atau dihapus secara <i>real-time</i>.
        </li>
        <li>
          <b>Data Warehouse:</b> Agak selow. Frekuensi aksesnya cuma{" "}
          <b>sedang sampe rendah</b>. Soalnya, orang yang masuk ke sini cuma
          boleh <i>read</i> (baca) dan <i>append</i> (nambahin riwayat baru).
          Pantang hukumnya buat ngehapus data yang udah masuk! 🛑
        </li>
      </ul>

      <h2 id="istilah">4. Beda Nama Kolom & Baris 🏷️</h2>
      <p>
        Gara-gara akar ilmunya beda, cara mereka nyebut "baris" sama "kolom"
        juga ikutan beda lho. Jangan sampe salah sebut pas ujian ya! 🤫
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm text-left">
          <thead className="bg-accent/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 font-bold">Konsep</th>
              <th className="px-4 py-3 font-bold">Istilah Baris (Row)</th>
              <th className="px-4 py-3 font-bold">Istilah Kolom (Column)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">Database</td>
              <td className="px-4 py-3">Tuple</td>
              <td className="px-4 py-3">Field</td>
            </tr>
            <tr className="bg-background">
              <td className="px-4 py-3 font-semibold">
                Data Warehouse / Dataset
              </td>
              <td className="px-4 py-3">Observation, Cases, atau Sample</td>
              <td className="px-4 py-3">Atribut (Attribute)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="tujuan">5. Terus, Ngapain Bikin Data Warehouse? 🤔</h2>
      <p>
        Mungkin kalian mikir...{" "}
        <i>
          "Kan udah punya Database, ngapain sih perusahaan repot-repot (dan
          keluar duit banyak) buat bikin Data Warehouse segala?"
        </i>
      </p>
      <p>Jawabannya:</p>
      <ul>
        <li>
          <b>Akses gampang:</b> Bikin info perusahaan gampang diakses nyebrang
          dari satu departemen ke departemen lain.
        </li>
        <li>
          <b>Super aman:</b> Ngejaga banget keamanan data sejarah perusahaan
          yang berharga.
        </li>
        <li>
          <b>Anti Miskom:</b> Bikin data yang dipake se-perusahaan tuh sama rata
          (konsisten).
        </li>
        <li>
          <b>Data-Driven!</b> Ini yang paling penting. Bikin bos-bos bisa
          nentuin kebijakan masa depan berdasarkan bukti dan analisis tren
          sejarah, bukan cuma nebak-nebak buah manggis! 🔮
        </li>
      </ul>

      <p>
        Jadiii, kebayang kan bedanya? Sekarang, kalian udah selangkah lebih jago
        buat ngerti dunia per-data-an! 🚀
      </p>
    </>
  );
};
