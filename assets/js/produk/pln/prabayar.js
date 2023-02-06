var db_PLN_Prabayar = [
    [
        "1",
        "Token 20.000",
        "Token PLN",
        "21000",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.webtoko.net/produk/token-20-000-1632025'"
    ],
    [
        "2",
        "Token 50.000",
        "Token PLN",
        "51000",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.webtoko.net/produk/token-50-000-1632044'"
    ],
    [
        "3",
        "Token 100.000",
        "Token PLN",
        "101000",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.webtoko.net/produk/token-100-000-1632048'"
    ],
    [
        "4",
        "Token 200.000",
        "Token PLN",
        "201000",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.webtoko.net/produk/token-200-000-1632050'"
    ],
    [
        "5",
        "Token 500.000",
        "Token PLN",
        "501000",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.webtoko.net/produk/token-500-000-1632054'"
    ],
    [
        "6",
        "Token 1.000.000",
        "Token PLN",
        "1001000",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://armaonestore.webtoko.net/produk/token-1-000-000-1632059'"
    ]
];

let PLN_prabayar = '<div class="konten-produk">';
for (let i = 0; i < db_PLN_Prabayar.length; i++) {
    PLN_prabayar += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_PLN_Prabayar[i][6] + ')"><div class="gambar"><img src="https://galeriimgqyu.files.wordpress.com/2023/01/token.jpg" alt=""></div><div class="detail"><p class="nama-produk">' + db_PLN_Prabayar[i][1] + '</p><p class="deskripsi-produk">' + db_PLN_Prabayar[i][5] + '</p></div></div>';
}
PLN_prabayar += '</div>';