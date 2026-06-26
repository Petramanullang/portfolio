import React from "react";

export const Pertemuan13Post = () => {
  return (
    <>
      <p>
        Halo semuanya! 👋 Selamat datang di jurnal Pertemuan 13! Kali ini
        suasana kelas sedikit berbeda karena kita kedatangan tamu spesial untuk
        sesi <b>Kuliah Praktisi</b>.
      </p>
      <p>
        Di sesi ini, kita nggak cuma bahas teori di atas kertas, tapi langsung
        membedah bagaimana implementasi Data Warehouse di dunia nyata, khususnya
        dalam ranah manajemen Sumber Daya Manusia (HR). Plus, ada "bocoran"
        materi yang bakal keluar di UAS nanti loh!
      </p>
      <p>
        Yuk, kita <i>review</i> catatannya bareng-bareng! 🚀
      </p>
      <br />

      {/* Gambar Cover Laporan */}
      <img
        src="/Blog/Data-Warehouse/Pertemuan-13.1.jpeg"
        alt="Kuliah Praktisi HRIS & ETL"
        className="rounded-xl border border-border"
      />
      <img
        src="/Blog/Data-Warehouse/Pertemuan-13.2.jpeg"
        alt="Kuliah Praktisi HRIS & ETL"
        className="rounded-xl border border-border"
      />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Catatan Kuliah Praktisi Data Warehouse - Institut Teknologi PLN
      </p>

      <h2 id="dw-dalam-hris">1. Peran Data Warehouse dalam HRIS 🏢</h2>
      <p>
        Sebelum masuk ke sistem, kita harus kenalan dulu sama dua istilah
        penting di dunia HR:
      </p>
      <ul>
        <li>
          <b>HRI (Human Resource Integration):</b> Konsep menyatukan berbagai
          elemen data karyawan.
        </li>
        <li>
          <b>HRIS (Human Resource Information System):</b> Gabungan antara
          manajemen SDM dengan Teknologi Informasi. Singkatnya, ini adalah{" "}
          <i>software</i> yang dipakai HRD buat ngurusin kita nanti kalau udah
          kerja!
        </li>
      </ul>

      <p>
        <b>
          Terus, apa bedanya Database (DB) biasa sama Data Warehouse (DW) di
          HRIS?
        </b>
      </p>
      <p>
        Ibaratnya, <b>DB</b> itu sekumpulan data berskala kecil (misal: data
        absensi harian). Sedangkan <b>DW</b> adalah sekumpulan <i>database</i>{" "}
        yang buanyaaak banget. DW menarik data dari berbagai DB kecil itu untuk
        dijadikan satu gudang raksasa.
      </p>

      <p>
        Berkat Data Warehouse, HRIS modern bisa punya 5 fitur utama yang super
        canggih:
      </p>
      <ol>
        <li>
          <b>Database Terpusat:</b> Semua data dari berbagai divisi ngumpul di
          satu tempat.
        </li>
        <li>
          <b>Manajemen Absensi:</b> Lacak jam masuk/pulang dan cuti secara
          sistematis.
        </li>
        <li>
          <b>Penggajian (Payroll):</b> Ngitung gaji otomatis tanpa takut salah
          ketik.
        </li>
        <li>
          <b>Portal Mandiri (Self-Service):</b> Karyawan bisa <i>request</i>{" "}
          cuti atau slip gaji sendiri lewat aplikasi.
        </li>
        <li>
          <b>Manajemen Kerja:</b> Memantau tugas dan <i>progress</i>{" "}
          masing-masing karyawan.
        </li>
      </ol>

      <h2 id="kpi-dilema">
        2. Dilema Dunia Kerja: Terlambat Tapi Performa Bagus? 🤔
      </h2>
      <p>
        Praktisi kita juga ngelempar satu pertanyaan yang <i>mind-blowing</i>:{" "}
        <b>
          "Gimana kalau ada karyawan yang sering masuk terlambat, tapi performa
          kerjanya selalu bagus?"
        </b>
      </p>
      <p>
        Jawabannya balik lagi ke alat ukur yang namanya{" "}
        <b>KPI (Key Performance Indicator)</b>. KPI ini diukur dari apa?
        Jawabannya:{" "}
        <b>Tergantung Head Dept (Kepala Departemen) masing-masing!</b>
      </p>
      <p>
        Kalau kamu kerja sebagai IT dan bos kamu lebih mementingkan hasil akhir
        (SLA/SLE terpenuhi, <i>codingan</i> kelar, <i>bug</i> teratasi) daripada
        sekadar jam kehadiran, maka nilai KPI kamu akan tetap aman. Penilaian
        ini (PE / <i>Performance Evaluation</i>) biasanya didasarkan pada
        tingkat <b>Kompetensi</b> dan <b>Knowledge</b> seputar bidang yang kamu
        ambil.
      </p>

      <h2 id="bocoran-uas-etl">3. Kisi-kisi UAS: Konsep ETL 🚨</h2>
      <p>
        Nah, ini dia bagian paling penting dari catatan praktisi hari ini.
        Beliau menekankan konsep arsitektur data yang{" "}
        <b>FIX BAKAL MASUK UAS!</b> Yaitu konsep <b>ETL</b>:
      </p>
      <div className="bg-accent/30 border border-border p-4 rounded-xl my-4">
        <ul className="m-0">
          <li>
            <b>E - Extract:</b> Proses narik data mentah dari berbagai sumber{" "}
            <i>database</i> kecil.
          </li>
          <li>
            <b>T - Transform:</b> Proses membersihkan, merapikan, dan menyamakan
            format data tersebut.
          </li>
          <li>
            <b>L - Load / Destination:</b> Proses memuat atau memindahkan data
            yang udah rapi tadi ke destinasi akhirnya, yaitu Data Warehouse.
          </li>
        </ul>
      </div>

      <p>
        Pastikan kalian hafal dan paham gimana alur ETL ini bekerja ya, terutama
        kalau disuruh ngejelasin hubungannya dengan pengumpulan data absensi
        karyawan di sistem HRIS.
      </p>
      <p>Semoga catatannya bermanfaat dan sukses buat UAS-nya nanti! 🔥</p>
    </>
  );
};
