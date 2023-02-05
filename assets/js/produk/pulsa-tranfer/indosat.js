var db_indosat_tf = [
    [1, "Produk tidak tersedia", "1.000", "2.000", "Mohon maaf. Kami akan menambahkan produk segera.", "Menambah Masa Aktif Kartu", "0 hr"]
];

let indosat_tf = '<div class="konten-produk">';
for (let i = 0; i < db_indosat_tf.length; i++) {
    indosat_tf += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_indosat_tf[i][6] + ')"><div class="gambar"><img src="https://galeriimgqyu.files.wordpress.com/2023/01/stop.jpg" alt=""></div><div class="detail"><p class="nama-produk">' + db_indosat_tf[i][1] + '</p><p class="deskripsi-produk">' + db_indosat_tf[i][4] + '</p></div></div>';
}
indosat_tf += '</div>';