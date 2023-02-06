var db_xlaxis = [
    [
        "1",
        "XL / Axis 5.000",
        "XL / Axis Reguler",
        "6500",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-5-000-1700540'"
    ],
    [
        "2",
        "XL / Axis 10.000",
        "XL / Axis Reguler",
        "11500",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-10-000-1700545'"
    ],
    [
        "3",
        "XL / Axis 15.000",
        "XL / Axis Reguler",
        "16000",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-15-000-1700548'"
    ],
    [
        "4",
        "XL / Axis 25.000",
        "XL / Axis Reguler",
        "26000",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-25-000-1700553'"
    ],
    [
        "5",
        "XL / Axis 30.000",
        "XL / Axis Reguler",
        "31000",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-30-000-1700557'"
    ],
    [
        "6",
        "XL / Axis 50.000",
        "XL / Axis Reguler",
        "51000",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-50-000-1700558'"
    ],
    [
        "7",
        "XL / Axis 100.000",
        "XL / Axis Reguler",
        "1001000",
        "-",
        "Isi Ulang Pulsa Reguler XL / Axis",
        "'https://armaonestore.webtoko.net/produk/xl-axis-100-000-1700560'"
    ]
];

let xlaxis = '<div class="konten-produk">';
for (let i = 0; i < db_xlaxis.length; i++) {
    xlaxis += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_xlaxis[i][6] + ')"><div class="gambar"><img src="https://pradstorage.files.wordpress.com/2023/02/produk-xl-axis.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_xlaxis[i][1] + '</p><p class="deskripsi-produk">' + db_xlaxis[i][5] + '</p></div></div>';

}
xlaxis += '</div>';