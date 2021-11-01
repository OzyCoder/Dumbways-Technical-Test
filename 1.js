var password = prompt("Buat Password Anda", "Password Anda Harus Kuat");
if (password.length < 8) {
  alert("Password setidaknya harus lebih dari 8 karakter");
}
if (password.search(/[a-z]/) < 0) {
  alert("Password setidaknya terdapat huruf kecil");
}
if (password.search(/[0-9]/) < 0) {
  alert("Password setidaknya terdapat angka");
}
if (password.search(/[A-Z]/) < 0) {
  alert("Password setidaknya terdapat huruf kapital");
}
if (password.search(/[!@#\$%\^&\*]/) < 0) {
  alert("Password setidaknya terdapat karakter spesial");
} else {
  alert("Password Anda Kuat");
}
