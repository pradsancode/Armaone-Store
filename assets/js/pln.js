function tampilPLNAwal() {
    document.getElementById('btn-prabayar').classList.add('btn-danger');
    document.getElementById('btn-prabayar').classList.remove('btn-light');
    document.getElementById('produk-pln-prabayar').innerHTML = PLN_prabayar;
}

function tampilPLNPra() {
    document.getElementById('btn-prabayar').classList.add('btn-danger');
    document.getElementById('btn-prabayar').classList.remove('btn-light');
    document.getElementById('btn-pascabayar').classList.add('btn-light');
    document.getElementById('btn-pascabayar').classList.remove('btn-danger');
    document.getElementById('produk-pln-prabayar').innerHTML = PLN_prabayar;
    document.getElementById('produk-pln-pascabayar').innerHTML = "";
}

function tampilPLNPasca() {
    document.getElementById('btn-prabayar').classList.add('btn-light');
    document.getElementById('btn-prabayar').classList.remove('btn-danger');
    document.getElementById('btn-pascabayar').classList.add('btn-danger');
    document.getElementById('btn-pascabayar').classList.remove('btn-light');
    document.getElementById('produk-pln-prabayar').innerHTML = "";
    document.getElementById('produk-pln-pascabayar').innerHTML = PLN_pascabayar;
}