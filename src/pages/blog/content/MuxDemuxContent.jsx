import React from "react";
import { Youtube, Link as LinkIcon } from "lucide-react";

export const MuxDemuxContent = () => {
  return (
    <>
      <h4>Nama Kelompok </h4>
      <b>- Petra Juliansen Manullang - 202431127</b>
      <br />
      <b>- Muhammad Raka Ilham - 202431145 </b>

      <h2 id="pendahuluan">Pendahuluan</h2>
      <p>
        Dalam teknik digital, <b>Multiplexer (MUX)</b> dan{" "}
        <b>Demultiplexer (DEMUX)</b> dipakai untuk mengatur jalur data/sinyal.
        MUX memilih satu input dari banyak input menuju satu output, sedangkan
        DEMUX mengarahkan satu input ke salah satu output berdasarkan selektor.
      </p>

      <h2 id="mux">Multiplexer (MUX)</h2>
      <p>
        MUX adalah rangkaian kombinasi untuk memilih input dengan sinyal
        selektor <code>S</code>. Contoh paling umum: <b>2:1 MUX</b>.
      </p>

      <figure>
        <img src="/Portfolio/Mul-Demul.png" alt="Ilustrasi MUX/DEMUX" />
        <figcaption>Contoh ilustrasi</figcaption>
      </figure>

      <blockquote>
        Tips: Kalau selektor <code>S=0</code> maka output ikut input A, kalau{" "}
        <code>S=1</code> output ikut input B.
      </blockquote>

      <h3 id="mux-table">Truth Table 2:1 MUX</h3>
      <table>
        <thead>
          <tr>
            <th>S</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>A</td>
          </tr>
          <tr>
            <td>1</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>

      <h2 id="demux">Demultiplexer (DEMUX)</h2>
      <p>
        DEMUX adalah kebalikan MUX: satu input <code>D</code> diarahkan ke
        output tertentu. Contoh: <b>1:2 DEMUX</b> dengan output <code>Y0</code>{" "}
        dan <code>Y1</code>.
      </p>

      <h3 id="demux-table">Truth Table 1:2 DEMUX</h3>
      <table>
        <thead>
          <tr>
            <th>S</th>
            <th>Y0</th>
            <th>Y1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>D</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0</td>
            <td>D</td>
          </tr>
        </tbody>
      </table>

      <h2 id="perbedaan">Perbedaan</h2>
      <ul>
        <li>
          <b>MUX</b>: banyak input → 1 output
        </li>
        <li>
          <b>DEMUX</b>: 1 input → banyak output
        </li>
        <li>Selektor memilih “jalur” yang aktif.</li>
      </ul>

    </>
  );
};
