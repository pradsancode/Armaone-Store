var db_telkomsel = [
    [
        "1",
        "Telkomsel 5.000",
        "Telkomsel Reguler",
        "6000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-5-000-1700476'"
    ],
    [
        "2",
        "Telkomsel 10.000",
        "Telkomsel Reguler",
        "11000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-10-000-1700499'"
    ],
    [
        "3",
        "Telkomsel 15.000",
        "Telkomsel Reguler",
        "16000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-15-000-1700500'"
    ],
    [
        "4",
        "Telkomsel 20.000",
        "Telkomsel Reguler",
        "21000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-20-000-1700504'"
    ],
    [
        "5",
        "Telkomsel 25.000",
        "Telkomsel Reguler",
        "26000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-25-000-1700507'"
    ],
    [
        "6",
        "Telkomsel 30.000",
        "Telkomsel Reguler",
        "31000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-30-000-1700508'"
    ],
    [
        "7",
        "Telkomsel 35.000",
        "Telkomsel Reguler",
        "36000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-35-000-1700509'"
    ],
    [
        "8",
        "Telkomsel 40.000",
        "Telkomsel Reguler",
        "41000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-40-000-1700510'"
    ],
    [
        "9",
        "Telkomsel 45.000",
        "Telkomsel Reguler",
        "46000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-45-000-1700512'"
    ],
    [
        "10",
        "Telkomsel 50.000",
        "Telkomsel Reguler",
        "51000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-50-000-1700514'"
    ],
    [
        "11",
        "Telkomsel 55.000",
        "Telkomsel Reguler",
        "56000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-55-000-1700515'"
    ],
    [
        "12",
        "Telkomsel 60.000",
        "Telkomsel Reguler",
        "61000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-60-000-1700516'"
    ],
    [
        "13",
        "Telkomsel 65.000",
        "Telkomsel Reguler",
        "66000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-65-000-1700517'"
    ],
    [
        "14",
        "Telkomsel 70.000",
        "Telkomsel Reguler",
        "71000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-70-000-1700519'"
    ],
    [
        "15",
        "Telkomsel 75.000",
        "Telkomsel Reguler",
        "76000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-75-000-1700520'"
    ],
    [
        "16",
        "Telkomsel 80.000",
        "Telkomsel Reguler",
        "81000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-80-000-1700521'"
    ],
    [
        "17",
        "Telkomsel 85.000",
        "Telkomsel Reguler",
        "86000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-85-000-1700525'"
    ],
    [
        "18",
        "Telkomsel 90.000",
        "Telkomsel Reguler",
        "91000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-90-000-1700529'"
    ],
    [
        "19",
        "Telkomsel 95.000",
        "Telkomsel Reguler",
        "96000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-95-000-1700530'"
    ],
    [
        "20",
        "Telkomsel 100.000",
        "Telkomsel Reguler",
        "101000",
        "-",
        "Isi Ulang Pulsa Reguler Telkomsel",
        "'https://armaonestore.webtoko.net/produk/telkomsel-100-000-1700532'"
    ]
];

let telkomsel = '<div class="konten-produk">';
for (let i = 0; i < db_telkomsel.length; i++) {
    telkomsel += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_telkomsel[i][6] + ')"><div class="gambar"><img src="https://pradstorage.files.wordpress.com/2023/02/produk-telkomsel.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_telkomsel[i][1] + '</p><p class="deskripsi-produk">' + db_telkomsel[i][5] + '</p></div></div>';
}
telkomsel += '</div>';