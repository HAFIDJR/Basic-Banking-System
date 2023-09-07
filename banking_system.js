let saldo = 0;
let statusInput = true;
class BankAccount {
  static database = [];
  constructor() {
    this.username = null;
    this.password = null;
    this.saldo = 0;
  }

  register(username, password) {
    return new Promise((resolve, reject) => {
      let user = BankAccount.database.filter((v) => {
        return v.username == username;
      });

      if (user.length) {
        return reject("username sudah dipakai!");
      }

      BankAccount.database.push({
        username: username,
        password: password,
        saldo: 0,
      });

      resolve("user berhasil didaftarkan!");
    });
  }

  login(username, passowrd) {
    return new Promise((resolve, reject) => {
      let user = BankAccount.database.filter((v) => {
        return v.username == username;
      });
      if (!user.length) {
        return reject("Username tidak ditemukan");
      }
      if (user[0].password != passowrd) {
        return reject("Password tidak sesuai");
      }
      this.username = username;
      this.password = passowrd;
      this.saldo = user[0].saldo;
      return resolve("Login Berhasil");
    });
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      if (this.username == null || this.password == null) {
        reject("harap login atau register terlebih dahulu");
      }
      if (amount < 0 || !amount) {
        reject("input saldo tidak valid");
      }
      alert("Sedang Mengitputkan Saldo ......");
      setTimeout(() => {
        this.saldo += amount;
        let user = BankAccount.database.filter((v) => {
          return v.username == this.username;
        });
        user[0].saldo = this.saldo;
        resolve("Berhasil Menambahkan Saldo");
      }, 5000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      if (this.username == null || this.password == null) {
        reject("harap login atau register terlebih dahulu");
      }
      if (amount < 0 || typeof amount != "number" || !amount) {
        reject("input saldo tidak valid");
      }
      alert("Menambahkan Menarik Saldo .....");
      setTimeout(() => {
        this.saldo -= amount;
        let user = BankAccount.database.filter((v) => {
          return v.username == this.username;
        });
        user[0].saldo = this.saldo;
        resolve("Berhasil Witdraw Saldo");
      }, 5000);
    });
  }
}

async function main() {
  try {
    // register and Login user
    const user1 = new BankAccount();
    console.log(await user1.register("jokowi", "hn10d2001"));
    console.log(await user1.login("jokowi", "hn10d2001"));

    do {
      let valueInput =
        prompt(`Hello ${user1.username},Selamat Datang di Bank Kami
      1.Tambahkan Dana
      2.Tarik Dana
      3.Exit
  `);

      if (valueInput == 1) {
        let inputDeposit = prompt("Masukkan Jumplah Nominal");
        alert(await user1.deposit(Number(inputDeposit)));
        alert("Saldo Anda " + user1.saldo);
      }
      if (valueInput == 2) {
        let inputWidraw = prompt("Masukkan Jumplah Nominal");
        alert(await user1.withdraw(Number(inputWidraw)));
        alert("Saldo Anda " + user1.saldo);
      }
      if (valueInput == 3) {
        return;
      }
      if (confirm("Ingin Menghitung Lagi ?")) {
        statusInput = true;
      } else {
        statusInput = false;
      }
    } while (statusInput);
  } catch (error) {
    alert(error);
  }
}
main();
