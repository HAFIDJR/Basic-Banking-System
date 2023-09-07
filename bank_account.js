let saldo = 0;
let statusInput = true;

function tambahSaldo() {
    let tambahSaldo = prompt("Tambah Saldo");
    if (Number(tambahSaldo)) {
        saldo += Number(tambahSaldo);
        alert(`Saldo Kamu Sekarang : ${saldo}`);
    } else {
        alert("Input harus berupa Angka");
    }
}

function kurangiSaldo() {
    let kurangiSaldo = prompt("Kurangi Saldo");
    if (Number(kurangiSaldo) > saldo) {
        alert("Kurangi Saldo  Gagal (Lebih Besar dari Saldo)");
        alert(`Saldo Kamu Sekarang : ${saldo}`);
        return;
    }
    if (Number(kurangiSaldo)) {
        saldo -= Number(kurangiSaldo);
        alert(`Saldo Kamu Sekarang : ${saldo}`);
    } else {
        alert("Input harus berupa Angka");
    }
}

do {
    tambahSaldo();
    kurangiSaldo();
    if (confirm("Ingin Menghitung Lagi ?")) {
        statusInput = true;
    } else {
        statusInput = false;
    }
} while (statusInput);
