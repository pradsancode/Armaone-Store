// DATABASE PRODUK PLN
var db_PLN_Prabayar = [
    [
        "1",
        "Token 20.000",
        "Token PLN",
        " 22.000 ",
        "2147483647",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://www.pradsan.id'"
    ],
    [
        "2",
        "Token 50.000",
        "Token PLN",
        " 52.000 ",
        "2147483647",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://www.pradsan.id'"
    ],
    [
        "3",
        "Token 100.000",
        "Token PLN",
        " 102.000 ",
        "2147483647",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://www.pradsan.id'"
    ],
    [
        "4",
        "Token 200.000",
        "Token PLN",
        " 202.000 ",
        "2147483647",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://www.pradsan.id'"
    ],
    [
        "5",
        "Token 500.000",
        "Token PLN",
        " 502.000 ",
        "2147483647",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://www.pradsan.id'"
    ],
    [
        "6",
        "Token 1.000.000",
        "Token PLN",
        " 1.002.000 ",
        "2147483647",
        "PLN Prabayar",
        "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
        "'https://www.pradsan.id'"
    ]
];
    
    let PLN_prabayar = '<div class="container">';
    for (let i = 0; i < db_PLN_Prabayar.length; i++) {
      PLN_prabayar += '<div class="produk rounded shadow-sm" onclick="klik(' + db_PLN_Prabayar[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_PLN_Prabayar[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_PLN_Prabayar[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_PLN_Prabayar[i][5] + '</div></div></div>';   
    }
    PLN_prabayar += '</div>';

    var db_PLN_Pascabayar = [
        [
            "1",
            "Bayar Tagihan Listrik",
            "Pascabayar",
            " 2.500 ",
            "2147483647",
            "PLN Pascabayar",
            "Voucher isi ulang listrik (Token PLN).<br>Nomor TOKEN ada pada SN.",
            "'https://www.pradsan.id'"
        ]
    ];

    let PLN_pascabayar = '<div class="container">';
    for (let i = 0; i < db_PLN_Pascabayar.length; i++) {
      PLN_pascabayar += '<div class="produk rounded shadow-sm" onclick="klik(' + db_PLN_Pascabayar[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_PLN_Pascabayar[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_PLN_Pascabayar[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_PLN_Pascabayar[i][5] + '</div></div></div>';   
    }
    PLN_pascabayar += '</div>';