var db_telkomsel_tf = [
    [1, "Produk tidak tersedia", "1.000", "2.000", "Mohon maaf. Kami akan menambahkan produk segera.", "Menambah Masa Aktif Kartu", "0 hr"]
];

let telkomsel_tf = '<div class="konten-produk">';
for (let i = 0; i < db_telkomsel_tf.length; i++) {
    telkomsel_tf += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_telkomsel_tf[i][6] + ')"><div class="gambar"><img src="https://galeriimgqyu.files.wordpress.com/2023/01/stop.jpg" alt=""></div><div class="detail"><p class="nama-produk">' + db_telkomsel_tf[i][1] + '</p><p class="deskripsi-produk">' + db_telkomsel_tf[i][4] + '</p></div></div>';
}
telkomsel_tf += '</div>';