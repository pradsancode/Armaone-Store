// PULSA TELKOMSEL REGULER
var db_telkomsel = [
    [1,"Pulsa Telkomsel","1.000","2.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [2,"Pulsa Telkomsel","2.000","3.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [3,"Pulsa Telkomsel","3.000","4.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [4,"Pulsa Telkomsel","4.000","5.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [5,"Pulsa Telkomsel","5.000","7.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [6,"Pulsa Telkomsel","6.000","8.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [7,"Pulsa Telkomsel","7.000","9.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [8,"Pulsa Telkomsel","8.000","10.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [9,"Pulsa Telkomsel","9.000","11.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [10,"Pulsa Telkomsel","10.000","12.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [11,"Pulsa Telkomsel","15.000","17.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [12,"Pulsa Telkomsel","20.000","22.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [13,"Pulsa Telkomsel","25.000","27.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [14,"Pulsa Telkomsel","30.000","32.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [15,"Pulsa Telkomsel","35.000","37.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [16,"Pulsa Telkomsel","40.000","42.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [17,"Pulsa Telkomsel","45.000","47.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [18,"Pulsa Telkomsel","50.000","52.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [19,"Pulsa Telkomsel","55.000","57.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [20,"Pulsa Telkomsel","60.000","62.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [21,"Pulsa Telkomsel","65.000","67.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [22,"Pulsa Telkomsel","70.000","72.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [23,"Pulsa Telkomsel","75.000","77.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [24,"Pulsa Telkomsel","80.000","82.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [25,"Pulsa Telkomsel","85.000","87.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [26,"Pulsa Telkomsel","90.000","92.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [27,"Pulsa Telkomsel","95.000","97.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [28,"Pulsa Telkomsel","100.000","102.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [29,"Pulsa Telkomsel","150.000","152.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [30,"Pulsa Telkomsel","200.000","203.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"]
    ]
    
    let telkomsel = '<div class="container">';
    for (let i = 0; i < db_telkomsel.length; i++) {
      telkomsel += '<div class="produk rounded shadow-sm" onclick="klik(' + db_telkomsel[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_telkomsel[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_telkomsel[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_telkomsel[i][5] + '</div></div></div>';
      
      

    }
    telkomsel += '</div>';

// PULSA INDOSAT REGULER
var db_indosat = [
    [1,"Pulsa Indosat","5.000","7.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [2,"Pulsa Indosat","10.000","12.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [3,"Pulsa Indosat","15.000","17.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [4,"Pulsa Indosat","20.000","22.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [5,"Pulsa Indosat","25.000","27.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [6,"Pulsa Indosat","30.000","32.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [7,"Pulsa Indosat","50.000","52.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [8,"Pulsa Indosat","100.000","102.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [9,"Pulsa Indosat","150.000","152.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [10,"Pulsa Indosat","200.000","202.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"]
    ]
    
    let indosat = '<div class="container">';
    for (let i = 0; i < db_indosat.length; i++) {
      indosat += '<div class="produk rounded shadow-sm" onclick="klik(' + db_indosat[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_indosat[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_indosat[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_indosat[i][5] + '</div></div></div>';
      
    }
    indosat += '</div>';


// PULSA XL & AXIS REGULER
var db_xlaxis = [
    [1,"Pulsa XL & Axis","5.000","7.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [2,"Pulsa XL & Axis","10.000","12.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [3,"Pulsa XL & Axis","15.000","17.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [4,"Pulsa XL & Axis","25.000","27.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [5,"Pulsa XL & Axis","30.000","32.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [6,"Pulsa XL & Axis","50.000","52.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [7,"Pulsa XL & Axis","100.000","102.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [8,"Pulsa XL & Axis","150.000","152.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"],
    [9,"Pulsa XL & Axis","200.000","200.000","'https://armaonestorebksp.bukaolshop.site/'","Menambah Masa Aktif Kartu","0 hr"]
    ]
    
    let xlaxis = '<div class="container">';
    for (let i = 0; i < db_xlaxis.length; i++) {
      xlaxis += '<div class="produk rounded shadow-sm" onclick="klik(' + db_xlaxis[i][7] + ')"><div class="row"><div class="col-8 nama-produk">' + db_xlaxis[i][1] + '</div><div class="col-4 kanan harga">Rp. ' + db_xlaxis[i][3] + '</div></div><div class="row"><div class="col-12 deskripsi-produk">' + db_xlaxis[i][5] + '</div></div></div>';
      
    }
    xlaxis += '</div>';