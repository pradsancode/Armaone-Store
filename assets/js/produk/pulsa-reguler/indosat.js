var db_indosat = [
    [
        "1",
        "Indosat 5.000",
        "Indosat Reguler",
        "6500",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-5-000-1700563'"
    ],
    [
        "2",
        "Indosat 10.000",
        "Indosat Reguler",
        "11500",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-10-000-1700565'"
    ],
    [
        "3",
        "Indosat 15.000",
        "Indosat Reguler",
        "16000",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-15-000-1700567'"
    ],
    [
        "4",
        "Indosat 20.000",
        "Indosat Reguler",
        "21000",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-20-000-1700568'"
    ],
    [
        "5",
        "Indosat 25.000",
        "Indosat Reguler",
        "26000",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-25-000-1700570'"
    ],
    [
        "6",
        "Indosat 30.000",
        "Indosat Reguler",
        "31000",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-30-000-1700571'"
    ],
    [
        "7",
        "Indosat 50.000",
        "Indosat Reguler",
        "51000",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-50-000-1700572'"
    ],
    [
        "8",
        "Indosat 100.000",
        "Indosat Reguler",
        "101000",
        "-",
        "Isi Ulang Pulsa Reguler Indosat",
        "'https://armaonestore.webtoko.net/produk/indosat-100-000-1700573'"
    ]
];

let indosat = '<div class="konten-produk">';
for (let i = 0; i < db_indosat.length; i++) {
    indosat += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_indosat[i][6] + ')"><div class="gambar"><img src="https://pradstorage.files.wordpress.com/2023/02/produk-indosat.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_indosat[i][1] + '</p><p class="deskripsi-produk">' + db_indosat[i][5] + '</p></div></div>';
}
indosat += '</div>';