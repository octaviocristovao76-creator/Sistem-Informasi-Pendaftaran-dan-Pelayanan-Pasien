// =========================
// DATA PASIEN
// =========================

let dataPasien = [
    {
        nik: "5301012000010001",
        nama: "Richardo",
        telepon: "081234567890",
        email: "richardo@gmail.com"
    },
    {
        nik: "5301012000010002",
        nama: "Octavio",
        telepon: "081298765432",
        email: "octavio@gmail.com"
    }
];


// =========================
// MENAMPILKAN DATA PASIEN
// =========================

function tampilkanPasien() {

    const tabel = document.getElementById("tabelPasien");

    if (!tabel) {
        return;
    }

    tabel.innerHTML = "";

    dataPasien.forEach(function(pasien, index) {

        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${pasien.nik}</td>
                <td>${pasien.nama}</td>
                <td>${pasien.telepon}</td>
                <td>${pasien.email}</td>

                <td>
                    <button
                        class="edit-button"
                        onclick="editPasien(${index})">
                        Edit
                    </button>

                    <button
                        class="delete-button"
                        onclick="hapusPasien(${index})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("totalPasien").textContent =
        dataPasien.length;
}


// =========================
// TAMBAH PASIEN
// =========================

function tambahPasien() {

    const nik = prompt("Masukkan NIK:");

    if (!nik) {
        return;
    }

    const nama = prompt("Masukkan nama pasien:");

    if (!nama) {
        return;
    }

    const telepon = prompt("Masukkan nomor telepon:");

    if (!telepon) {
        return;
    }

    const email = prompt("Masukkan email:");

    if (!email) {
        return;
    }

    dataPasien.push({
        nik: nik,
        nama: nama,
        telepon: telepon,
        email: email
    });

    tampilkanPasien();
}


// =========================
// EDIT PASIEN
// =========================

function editPasien(index) {

    const pasien = dataPasien[index];

    const namaBaru = prompt(
        "Ubah nama pasien:",
        pasien.nama
    );

    if (namaBaru) {
        pasien.nama = namaBaru;
    }

    const teleponBaru = prompt(
        "Ubah nomor telepon:",
        pasien.telepon
    );

    if (teleponBaru) {
        pasien.telepon = teleponBaru;
    }

    const emailBaru = prompt(
        "Ubah email:",
        pasien.email
    );

    if (emailBaru) {
        pasien.email = emailBaru;
    }

    tampilkanPasien();
}


// =========================
// HAPUS PASIEN
// =========================

function hapusPasien(index) {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus data pasien?"
    );

    if (konfirmasi) {

        dataPasien.splice(index, 1);

        tampilkanPasien();
    }
}


// =========================
// DATA PENDAFTARAN
// =========================

let dataPendaftaran = [
    {
        id: "PD001",
        nama: "Richardo",
        tanggal: "2026-10-04",
        pelayanan: "Pemeriksaan Umum",
        status: "Menunggu"
    },
    {
        id: "PD002",
        nama: "Octavio",
        tanggal: "2026-10-04",
        pelayanan: "Konsultasi Dokter",
        status: "Selesai"
    }
];


// =========================
// MENAMPILKAN PENDAFTARAN
// =========================

function tampilkanPendaftaran() {

    const tabel =
        document.getElementById("tabelPendaftaran");

    if (!tabel) {
        return;
    }

    tabel.innerHTML = "";

    dataPendaftaran.forEach(function(data, index) {

        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${data.id}</td>
                <td>${data.nama}</td>
                <td>${data.tanggal}</td>
                <td>${data.pelayanan}</td>
                <td>${data.status}</td>

                <td>
                    <button
                        class="edit-button"
                        onclick="editPendaftaran(${index})">
                        Edit
                    </button>

                    <button
                        class="delete-button"
                        onclick="hapusPendaftaran(${index})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("totalPendaftaran").textContent =
        dataPendaftaran.length;
}


// =========================
// TAMBAH PENDAFTARAN
// =========================

function tambahPendaftaran() {

    const id = "PD" +
        String(dataPendaftaran.length + 1).padStart(3, "0");

    const nama = prompt("Masukkan nama pasien:");

    if (!nama) {
        return;
    }

    const tanggal = prompt(
        "Masukkan tanggal (YYYY-MM-DD):"
    );

    if (!tanggal) {
        return;
    }

    const pelayanan = prompt(
        "Masukkan jenis pelayanan:"
    );

    if (!pelayanan) {
        return;
    }

    dataPendaftaran.push({

        id: id,
        nama: nama,
        tanggal: tanggal,
        pelayanan: pelayanan,
        status: "Menunggu"

    });

    tampilkanPendaftaran();
}


// =========================
// EDIT PENDAFTARAN
// =========================

function editPendaftaran(index) {

    const data = dataPendaftaran[index];

    const namaBaru = prompt(
        "Ubah nama pasien:",
        data.nama
    );

    if (namaBaru) {
        data.nama = namaBaru;
    }

    const tanggalBaru = prompt(
        "Ubah tanggal:",
        data.tanggal
    );

    if (tanggalBaru) {
        data.tanggal = tanggalBaru;
    }

    const pelayananBaru = prompt(
        "Ubah pelayanan:",
        data.pelayanan
    );

    if (pelayananBaru) {
        data.pelayanan = pelayananBaru;
    }

    const statusBaru = prompt(
        "Ubah status (Menunggu/Selesai):",
        data.status
    );

    if (statusBaru) {
        data.status = statusBaru;
    }

    tampilkanPendaftaran();
}


// =========================
// HAPUS PENDAFTARAN
// =========================

function hapusPendaftaran(index) {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus data pendaftaran?"
    );

    if (konfirmasi) {

        dataPendaftaran.splice(index, 1);

        tampilkanPendaftaran();
    }
}


// =========================
// JALANKAN SAAT HALAMAN DIBUKA
// =========================

document.addEventListener("DOMContentLoaded", function() {

    tampilkanPasien();

    tampilkanPendaftaran();

});