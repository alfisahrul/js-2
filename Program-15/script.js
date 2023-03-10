function Mahasiswa(nama, npm, email, jurusan) {
  this.nama = nama;
  this.npm = npm;
  this.email = email;
  this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa(
  "Alfisahrul",
  50419486,
  "alfin@gmail.com",
  "Teknik Informatika"
);
console.log(mhs4);
