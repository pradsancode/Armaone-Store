var db_indosat = [
    [
        "1",
        "Indosat 5.000",
        "Indosat Reguler",
        "6855",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 5.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-5-000-1604376'"
    ],
    [
        "2",
        "Indosat 10.000",
        "Indosat Reguler",
        "11855",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 10.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-10-000-1604377'"
    ],
    [
        "3",
        "Indosat 15.000",
        "Indosat Reguler",
        "15935",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 15.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-15-000-1604380'"
    ],
    [
        "4",
        "indosat 20.000",
        "Indosat Reguler",
        "20865",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 20.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-20-000-1604381'"
    ],
    [
        "5",
        "Indosat 25.000",
        "Indosat Reguler",
        "25790",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 25.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-25-000-1604382'"
    ],
    [
        "6",
        "Indosat 30.000",
        "Indosat Reguler",
        "30585",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 30.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-30-000-1604384'"
    ],
    [
        "7",
        "Indosat 50.000",
        "Indosat Reguler",
        "49940",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 50.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-50-000-1604385'"
    ],
    [
        "8",
        "Indosat 100.000",
        "Indosat Reguler",
        "97720",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 100.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-100-000-1604386'"
    ],
    [
        "9",
        "Indosat 150.000",
        "Indosat Reguler",
        "143725",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 150.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-150-000-1604388'"
    ],
    [
        "10",
        "Indosat 200.000",
        "Indosat Reguler",
        "186225",
        "Isi Ulang (TopUp) Pulsa Indosat",
        "- Menambah pulsa sejumlah 200.000<br>- Menambah masa aktif kartu<br>",
        "'https://armaonestore.com/produk/indosat-200-000-1604390'"
    ]
];

let indosat = '<div class="konten-produk">';
for (let i = 0; i < db_indosat.length; i++) {
    indosat += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_indosat[i][6] + ')"><div class="gambar"><img src="https://galeriimgqyu.files.wordpress.com/2023/01/pajang-indosat.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_indosat[i][1] + '</p><p class="deskripsi-produk">' + db_indosat[i][4] + '</p></div></div>';
}
indosat += '</div>';