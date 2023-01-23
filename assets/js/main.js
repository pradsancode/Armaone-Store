function TampilSeluler() {
    var Nomor_HP = document.getElementById('nomor-tujuan').value;
    var Prefix = Nomor_HP.slice(0, 4);
    
    if (Prefix == 0811 || Prefix == 0812 || Prefix == 0813 || Prefix == 0821 || Prefix == 0822 || Prefix == 0823 || Prefix == 0851 || Prefix == 0852 || Prefix == 0853) {
        document.getElementById('operator-seluler').value = 'TELKOMSEL';
        document.getElementById('produk-telkomsel').innerHTML = telkomsel;
    }
    else if (Prefix == 0814 || Prefix == 0815 || Prefix == 0816 || Prefix == 0855 || Prefix == 0856 || Prefix == 0857 || Prefix == 0858) {
        document.getElementById('operator-seluler').value = 'INDOSAT';
        document.getElementById('produk-indosat').innerHTML = indosat;
    }
    else if (Prefix == 0817 || Prefix == 0818 || Prefix == 0819 || Prefix == 0859 || Prefix == 0877 || Prefix == 0878) {
        document.getElementById('operator-seluler').value = 'XL';
        document.getElementById('produk-xl').innerHTML = xlaxis;
    }
    else if (Prefix == 0831 || Prefix == 0832 || Prefix == 0833 || Prefix == 0838) {
        document.getElementById('operator-seluler').value = 'AXIS';
        document.getElementById('produk-axis').innerHTML = xlaxis;
    }
    else {
      document.getElementById('operator-seluler').value = "Tidak Dikenal";
      document.getElementById("produk-telkomsel").innerHTML = "";
      document.getElementById("produk-indosat").innerHTML = "";
      document.getElementById("produk-xl").innerHTML = "";
      document.getElementById("produk-axis").innerHTML = "";   
    }
  }

  function tampilPLNAwal() {
    document.getElementById('btn-prabayar').classList.add('btn-success');
    document.getElementById('btn-prabayar').classList.remove('btn-light');
    document.getElementById('produk-pln-prabayar').innerHTML = PLN_prabayar;
  }

  function tampilPLNPra() {
    document.getElementById('btn-prabayar').classList.add('btn-success');
    document.getElementById('btn-prabayar').classList.remove('btn-light');
    document.getElementById('btn-pascabayar').classList.add('btn-light');
    document.getElementById('btn-pascabayar').classList.remove('btn-success');
    document.getElementById('produk-pln-prabayar').innerHTML = PLN_prabayar;
    document.getElementById('produk-pln-pascabayar').innerHTML = "";
  }

  function tampilPLNPasca() {
    document.getElementById('btn-prabayar').classList.add('btn-light');
    document.getElementById('btn-prabayar').classList.remove('btn-success');
    document.getElementById('btn-pascabayar').classList.add('btn-success');
    document.getElementById('btn-pascabayar').classList.remove('btn-light');
    document.getElementById('produk-pln-prabayar').innerHTML = "";
    document.getElementById('produk-pln-pascabayar').innerHTML = PLN_pascabayar;
  }

  function tampileWallet() {
    var EWALLET = document.getElementById('pilih-ewallet').value;

    if (EWALLET == 'dana') {
      document.getElementById('produk-dana').innerHTML = DANA;
      document.getElementById('produk-linkaja').innerHTML = "";
      document.getElementById('produk-ovo').innerHTML = "";
      document.getElementById('produk-shopeepay').innerHTML = "";
      document.getElementById('produk-gopay').innerHTML = "";
    }

    else if (EWALLET == 'linkaja') {
      document.getElementById('produk-linkaja').innerHTML = LinkAja;
      document.getElementById('produk-dana').innerHTML = "";
      document.getElementById('produk-ovo').innerHTML = "";
      document.getElementById('produk-gopay').innerHTML = "";
      document.getElementById('produk-shopeepay').innerHTML = "";
    }

    else if (EWALLET == 'ovo') {
      document.getElementById('produk-linkaja').innerHTML = "";
      document.getElementById('produk-dana').innerHTML = "";
      document.getElementById('produk-ovo').innerHTML = OVO;
      document.getElementById('produk-gopay').innerHTML = "";
      document.getElementById('produk-shopeepay').innerHTML = "";
    }

    else if (EWALLET == 'gopay') {
      document.getElementById('produk-linkaja').innerHTML = "";
      document.getElementById('produk-dana').innerHTML = "";
      document.getElementById('produk-gopay').innerHTML = GOPAY;
      document.getElementById('produk-ovo').innerHTML = "";
      document.getElementById('produk-shopeepay').innerHTML = "";
    }

    else if (EWALLET == 'shopeepay') {
      document.getElementById('produk-linkaja').innerHTML = "";
      document.getElementById('produk-dana').innerHTML = "";
      document.getElementById('produk-shopeepay').innerHTML = ShopeePay;
      document.getElementById('produk-ovo').innerHTML = "";
      document.getElementById('produk-gopay').innerHTML = "";
    }

    else {
      document.getElementById('produk-linkaja').innerHTML = "";
      document.getElementById('produk-dana').innerHTML = "";
      document.getElementById('produk-shopeepay').innerHTML = "";
      document.getElementById('produk-gopay').innerHTML = "";
      document.getElementById('produk-ovo').innerHTML = "";
    }
  }

  function klik(link) {
    var NomorTujuan = document.getElementById('nomor-tujuan').value;

    if (NomorTujuan == "") {
      alert("Masukan Nomor Tujuan terlebih dahulu")
    }
    else {
    window.location = link + '?catatan='+ NomorTujuan;
    }
  }