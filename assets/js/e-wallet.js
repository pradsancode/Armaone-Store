// DANA
var db_DANA = [
    [
        "1",
        "DANA 20.000",
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
    
    let DANA = '<div class="container">';
    for (let i = 0; i < db_DANA.length; i++) {
      DANA += '<div class="produk rounded shadow-sm" onclick="klik(' + db_DANA[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_DANA[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_DANA[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_DANA[i][5] + '</div></div></div>';   
    }
    DANA += '</div>';

    // LINKAJA
var db_LinkAja = [
    [
        "1",
        "LinkAja 20.000",
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
    
    let LinkAja = '<div class="container">';
    for (let i = 0; i < db_LinkAja.length; i++) {
      LinkAja += '<div class="produk rounded shadow-sm" onclick="klik(' + db_LinkAja[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_LinkAja[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_LinkAja[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_LinkAja[i][5] + '</div></div></div>';   
    }
    LinkAja += '</div>';

    var db_ShopeePay = [
        [
            "1",
            "ShopeePay 20.000",
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
        
        let ShopeePay = '<div class="container">';
        for (let i = 0; i < db_ShopeePay.length; i++) {
          ShopeePay += '<div class="produk rounded shadow-sm" onclick="klik(' + db_ShopeePay[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_ShopeePay[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_ShopeePay[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_ShopeePay[i][5] + '</div></div></div>';   
        }
        ShopeePay += '</div>';

        var db_GOPAY = [
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
            
            let GOPAY = '<div class="container">';
            for (let i = 0; i < db_GOPAY.length; i++) {
              GOPAY += '<div class="produk rounded shadow-sm" onclick="klik(' + db_GOPAY[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_GOPAY[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_GOPAY[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_GOPAY[i][5] + '</div></div></div>';   
            }
            GOPAY += '</div>';


            var db_OVO = [
                [
                    "1",
                    "OVO 20.000",
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
                
                let OVO = '<div class="container">';
                for (let i = 0; i < db_OVO.length; i++) {
                  OVO += '<div class="produk rounded shadow-sm" onclick="klik(' + db_OVO[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_OVO[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_OVO[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_OVO[i][5] + '</div></div></div>';   
                }
                OVO += '</div>';