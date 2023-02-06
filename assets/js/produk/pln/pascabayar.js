var db_PLN_Pascabayar = [
    [
        "1",
        "Bayar Tagihan listrik",
        "Listrik",
        "0",
        "PLN Pascabayar",
        "Bayar tagihan rekening listrik PLN<br>",
        "'https://armaonestore.webtoko.net/produk/bayar-tagihan-listrik-1660440'"
    ]
];

let PLN_pascabayar = '<div class="konten-produk">';
for (let i = 0; i < db_PLN_Pascabayar.length; i++) {
    PLN_pascabayar += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_PLN_Pascabayar[i][6] + ')"><div class="gambar"><img src="https://galeriimgqyu.files.wordpress.com/2023/01/pajang-pascabayar.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_PLN_Pascabayar[i][1] + '</p><p class="deskripsi-produk">' + db_PLN_Pascabayar[i][5] + '</p></div></div>';
}
PLN_pascabayar += '</div>';