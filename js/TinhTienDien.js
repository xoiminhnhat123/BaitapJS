const TIENDIEN1 = 500;
const TIENDIEN2 = 650;
const TIENDIEN3 = 850;
const TIENDIEN4 = 1100;
const TIENDIEN5 = 1300;



function tinhtiendien() {
    var soDien = document.getElementById("soDien").value;

    tinhDien(soDien);

    document.getElementById("txtTinhDien").innerHTML = "<br> Tổng tiền điện tháng này: " + tinhDien(soDien).toLocaleString() + " VNĐ";

    // console.log(ten,dC,soDien);

}

function tinhDien(tongTien) {
    var all = 0;

    if (tongTien < 50) {
        all = tongTien * 500;
    } else if (tongTien < 100) {
        all = (tongTien - 50) * 650 + TIENDIEN1 * 50;
    } else if (tongTien < 200) {
        all = (tongTien - 100) * 850 + TIENDIEN1 * 50 + TIENDIEN2 * 50;
    } else if (tongTien < 350) {
        all = (tongTien - 200) * 1100 + TIENDIEN1 * 50 + TIENDIEN2 * 50 + TIENDIEN3 * 100;
    } else if (tongTien > 350) {
        all = (tongTien - 350) * 1300 + TIENDIEN1 * 50 + TIENDIEN2 * 50 + TIENDIEN3 * 100 + TIENDIEN4 * 150;
    }

    return all;
}