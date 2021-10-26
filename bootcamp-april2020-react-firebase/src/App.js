import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Nav, Body } from "./templates"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // statusLogin: true
    }
  }

  componentDidMount() {
    let names = ["Project 1", "Project 2"]
    let randomNames = []

    while (randomNames.length < 1) {
      console.log("loop");
      const idxRandom = Math.floor(Math.random() * names.length)
      randomNames.push(names[idxRandom])
      names.splice(idxRandom, 1)
    }
    console.log("names:", names);
    console.log("randomNames:", randomNames);
  }

  render() {
    return (
      <>
        <Router>
          <Nav />
          {/* <Body statusLogin={this.state.statusLogin} /> */}
          <Body />
        </Router>
      </>
    );
  }
}

export default App;

/**
 * App:
 *    - Nav:
 *          - Menu
 *    - Body:
 *          - List
 *          - Form
 *
 *
 *
 * Router:
 *      - BrowserRouter
 *          - Switch
 *              - Route
 *          - Link, Redirect, history (props)
 *
 *
 *
 * Latihan - Team:
 *        - Project:
 *                - Inventory System:
 *                                  - Master Produk
 *                                  - Monitoring Stok
 *                                  - Promo (Qty, %, Rp)
 *                                  - Penjualan
 *                                  - Pembelian
 *                                  - Laporan Untung Rugi
 *                - SIM:
 *                      - Pendaftaran Mahasiswa
 *                      - Penilaian Mahasiswa
 *                      - Master Dosen
 *                      - Master Jurusan
 *                      - Penerimaan Mahasiswa
 *                      - Sistem Kredit Semester
 *        - Tim 1:
 *                - Anggota: ["Alfa", "Adzka", "Fian", "Ridwan"]
 *                - Project: SIM
 *        - TIm 2:
 *                - Anggota: ["Harry", "Eko", "Dimas", "Sefrinaldi", "Jansen"]
 *                - Project: Inventory System
 *
 * Latihan - Perorang:
 *          - Forking tugas team (untuk bukan pemilik repo, untuk pemilik repo gunakan beda branch)
 *          - Rubahlah ganti page menggunakan Router
 *
 *
 * Latihan:
 *        - Simpanlah list user menggunakan Redux
 *        - Terapkan otentikasi login
 *        - Terapkan latihan diatas pada tugas sebelumnya
 *
 *
 * Latihan:
 *        - Jadikan Redux menjadi persistent
 *
 *
 * Latihan:
 *        - Buatlah BackEnd untuk tugas sebelumnya (login & list user)
 *
 *
 * REDUX:
 *      - di fetch dimanapun ketika data akan pertama kali digunakan
 *      - componentDidMount
 *
 * API:
 *     setiap component yang menggunakan
 *     - list
 *     - update (get data)
 *     - componentDidMount
 *
 * SQL:
 *    - id, name, hobby, religion
 *
 * NoSQL:
 *    - data1: id, name
 *    - data2: id, name, hobby
 *    - data3: id, name, religion
 *
 *
 * Latihan:
 *        - Buatlah aplikasi untuk Parking System
 *        - Gunakanlah firebase sebagai verifikasi login & penyimpanan data
 *        - Deploy ke netlify
 */