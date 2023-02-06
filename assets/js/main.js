//function rubah(angka) {
  //var reverse = angka.toString().split('').reverse().join(''),
    //ribuan = reverse.match(/\d{1,3}/g);
  //ribuan = ribuan.join('.').split('').reverse().join('');
  //return ribuan;
//}
//document.getElementById("saldo_user").innerText = rubah(document.getElementById("saldo_user").textContent);

function beli(link) {
  var NomorTujuan = document.getElementById('nomor-tujuan').value;

  if (NomorTujuan == "") {
      alert("Masukan Nomor Tujuan terlebih dahulu")
  }
  else {
      window.location = link + '?catatan=' + NomorTujuan;
  }
}