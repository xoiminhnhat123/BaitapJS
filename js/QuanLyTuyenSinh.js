const KHU__1 = 1;
const KHU__2 = 2;
const KHU__3 = 3;
const DOI__TUONG1 = 1;
const DOI__TUONG2 = 2;
const DOI__TUONG3 = 3;

function main() {
    var diemToan = document.getElementById("diemToan").value;
    var diemLy = document.getElementById("diemLy").value;
    var diemHoa = document.getElementById("diemHoa").value;
    var diemUT = document.getElementById("uuTien").value;
    var diemKV = document.getElementById("khuVuc").value;


    tinhDiem3mon(diemToan,diemLy,diemHoa);


    tinhDiemUt(diemKV,diemUT);
 

    
    ketQua(tinhDiem3mon(diemToan,diemLy,diemHoa),tinhDiemUt(diemKV,diemUT))
    
}

function tinhDiem3mon(mon1,mon2,mon3) {
    var tong3diem = 0;

    tong3diem = Number(mon1) + Number(mon2) + Number(mon3);

    return tong3diem;
}

function tinhDiemUt(kV, dT) {
    var tongUt = 0;

    tongUt = Number(kV) + Number(dT);

    return tongUt;
}

function ketQua(tong3diem, tongUt) {

    var ketQua = tong3diem + tongUt;

    if (ketQua >= 25) {
        document.getElementById("txtTong").innerHTML = "điểm của bạn được:" + ketQua + "<h1>ĐẬU!</h1>";
    } else {
        document.getElementById("txtTong").innerHTML = "điểm của bạn được:" + ketQua + "<h1>RỚT!</h1>";
    }
    return ketQua;
}
