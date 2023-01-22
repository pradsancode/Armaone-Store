// DATABASE PRODUK PLN
var db_PLN_Prabayar = [
    [
        1,
        "Token 20.000",
        "Token PLN",
        "21.000",
        2147483647,
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.com/produk/token-20-000-1632025'"
    ],
    [
        2,
        "Token 50.000",
        "Token PLN",
        "51.000",
        2147483647,
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.com/produk/token-50-000-1632044'"
    ],
    [
        3,
        "Token 100.000",
        "Token PLN",
        "101.000",
        2147483647,
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.com/produk/token-100-000-1632048'"
    ],
    [
        4,
        "Token 200.000",
        "Token PLN",
        "201.000",
        2147483647,
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.com/produk/token-200-000-1632050'"
    ],
    [
        5,
        "Token 500.000",
        "Token PLN",
        "501.000",
        2147483647,
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.com/produk/token-500-000-1632054'"
    ],
    [
        6,
        "Token 1.000.000",
        "Token PLN",
        "1.001.000",
        2147483647,
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.com/produk/token-1-000-000-1632059'"
    ]
];

let PLN_prabayar = '<div class="container">';
for (let i = 0; i < db_PLN_Prabayar.length; i++) {
    PLN_prabayar += '<div class="produk rounded shadow-sm" onclick="klik(' + db_PLN_Prabayar[i][7] + ')"><div class="row"><div class="col-6 nama-produk">' + db_PLN_Prabayar[i][1] + '</div><div class="col-6 kanan harga">Rp. ' + db_PLN_Prabayar[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_PLN_Prabayar[i][5] + '</div></div></div>';
}
PLN_prabayar += '</div>';

var db_PLN_Pascabayar = [
    [
        1,
        "Bayar Tagihan listrik",
        "Listrik",
        0,
        2147483647,
        "PLN Pascabayar",
        "Bayar tagihan rekening listrik PLN<br>",
        "'https://armaonestore.com/produk/bayar-tagihan-listrik-1660440'"
    ]
];

let PLN_pascabayar = '<div class="container">';
for (let i = 0; i < db_PLN_Pascabayar.length; i++) {
    PLN_pascabayar += '<div class="produk rounded shadow-sm" onclick="klik(' + db_PLN_Pascabayar[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_PLN_Pascabayar[i][1] + '</div><div class="col-4 kanan harga" id="harga">Rp. ' + db_PLN_Pascabayar[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_PLN_Pascabayar[i][5] + '</div></div></div>';
}
PLN_pascabayar += '</div>';