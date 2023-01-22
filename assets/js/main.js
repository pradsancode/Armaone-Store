//PLN
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

//ALL
function klik(link) {
    var NomorTujuan = document.getElementById('nomor-tujuan').value;

    if (NomorTujuan == "") {
        alert("Masukan Nomor Tujuan terlebih dahulu")
    }
    else {
        window.location = link + '?catatan=' + NomorTujuan;
    }
}