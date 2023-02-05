function TampilSeluler() {
  var Nomor_HP = document.getElementById('nomor-tujuan').value;
  var Prefix = Nomor_HP.slice(0, 4);

  if (Prefix == 0811 || Prefix == 0812 || Prefix == 0813 || Prefix == 0821 || Prefix == 0822 || Prefix == 0823 || Prefix == 0851 || Prefix == 0852 || Prefix == 0853) {
      document.getElementById('produk-telkomsel').innerHTML = telkomsel;
      document.getElementById('produk-telkomsel-tf').innerHTML = telkomsel_tf;
  }
  else if (Prefix == 0814 || Prefix == 0815 || Prefix == 0816 || Prefix == 0855 || Prefix == 0856 || Prefix == 0857 || Prefix == 0858) {
      document.getElementById('produk-indosat').innerHTML = indosat;
      document.getElementById('produk-indosat-tf').innerHTML = indosat_tf;
  }
  else if (Prefix == 0817 || Prefix == 0818 || Prefix == 0819 || Prefix == 0859 || Prefix == 0877 || Prefix == 0878) {
      document.getElementById('produk-xl').innerHTML = xlaxis;
      document.getElementById('produk-xl-tf').innerHTML = xlaxis_tf;
  }
  else if (Prefix == 0831 || Prefix == 0832 || Prefix == 0833 || Prefix == 0838) {
      document.getElementById('produk-axis').innerHTML = xlaxis;
      document.getElementById('produk-axis-tf').innerHTML = xlaxis_tf;
  }
  else {
      document.getElementById("produk-telkomsel").innerHTML = "";
      document.getElementById("produk-indosat").innerHTML = "";
      document.getElementById("produk-xl").innerHTML = "";
      document.getElementById("produk-axis").innerHTML = "";
      document.getElementById("produk-telkomsel-tf").innerHTML = "";
      document.getElementById("produk-indosat-tf").innerHTML = "";
      document.getElementById("produk-xl-tf").innerHTML = "";
      document.getElementById("produk-axis-tf").innerHTML = "";
  }
}

function tampilReguler() {
  document.getElementById('btn-reguler').classList.add('btn-danger');
  document.getElementById('btn-reguler').classList.remove('btn-light');
  document.getElementById('btn-tranfer').classList.add('btn-light');
  document.getElementById('btn-tranfer').classList.remove('btn-danger');
  document.getElementById('pulsa-tranfer').classList.add('d-none');
  document.getElementById('pulsa-reguler').classList.remove('d-none');
}

function tampilTranfer() {
  document.getElementById('btn-reguler').classList.add('btn-light');
  document.getElementById('btn-reguler').classList.remove('btn-danger');
  document.getElementById('btn-tranfer').classList.add('btn-danger');
  document.getElementById('btn-tranfer').classList.remove('btn-light');
  document.getElementById('pulsa-tranfer').classList.remove('d-none');
  document.getElementById('pulsa-reguler').classList.add('d-none');
}