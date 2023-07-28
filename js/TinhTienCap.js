const TIEN_HOA_DON_ND =  4.5;
const PHI_DV_DAN =  20.5;
const THUE_KENH_CC =  7.5;  

const TIEN_HOA_DON_DN =  15;
const PHI_DV_DN =  75;
const THUE_KENH_CC_DN=  50;


function tinhCap() {
    var mKH = document.getElementById("mKH").value;
    var sKN = document.getElementById("sKN").value;
    var sKCC = document.getElementById("sKCC").value;
    var loaiK = document.getElementById("loaiK").value;
    var loaiKH = document.getElementById("loaiKH").value;


    console.log(tinhTien(loaiK,loaiKH,sKCC,sKN));
    
    

}

function loaiKhach() {
    var sKN = document.getElementById("loaiKH").value;

    if (sKN == "nd") {
        cc = document.getElementById("an").style.opacity = "0";
    } else {
        cc = document.getElementById("an").style.opacity = "1";
    }
}
loaiKhach()

function tinhTien(loaiK, loaiKH, sKCC, sKN) {
    var all = 0;

    if (loaiKH == "nd" && loaiK == "cb") {
        all = TIEN_HOA_DON_ND + PHI_DV_DAN;
    } else if (loaiKH == "nd" && loaiK == "cc") {
        all = TIEN_HOA_DON_ND + PHI_DV_DAN * Number(sKCC);
    } else if (loaiKH == "dn" && loaiK == "cb" && sKN <= 10) {
        all = TIEN_HOA_DON_DN + PHI_DV_DN * Number(sKN);
    }
    else if (loaiK == "cb" && sKN > 10) {
        all = TIENCAPDOANHNGHIEP + TIENCAPDOANHNGHIEPCOBAN * 10 + (Number(sKN) - 10) * 5;
    }
    else if (loaiKH == "dn" && loaiK == "cc") {
        all = TIENCAPDOANHNGHIEP + TIENCAPDOANHNGHIEPCAOCAP * Number(sKCC);
    }
    else {
        alert("Nhap lai")
    }

    return all;
}


