const TIENCAPDAN =  4.5;
const TIENCAPDANCOBAN =  20.5;
const TIENCAPDANCAOCAP =  7.5;  
const TIENCAPDOANHNGHIEP =  15;
const TIENCAPDOANHNGHIEPCOBAN =  75;
const TIENCAPDOANHNGHIEPCAOCAP=  50;


function tinhCap() {
    var mKH = document.getElementById("mKH").value;
    var sKN = document.getElementById("sKN").value;
    var sKCC = document.getElementById("sKCC").value;
    var loaiK = document.getElementById("loaiK").value;
    var loaiKH = document.getElementById("loaiKH").value;


    console.log(tinhTien(loaiK,loaiKH,sKCC,sKN));

}

tinhCap()
function loaiKhach() {
    var sKN = document.getElementById("loaiKH").value;

    if (sKN == "nd") {
        cc = document.getElementById("an").style.opacity = "0";
    }else{
        cc = document.getElementById("an").style.opacity = "1";
    }
}
loaiKhach()

function tinhTien(loaiK,loaiKH,sKCC,sKN) {
    var all = 0;

    if (loaiKH == "nd" && loaiK == "cb") {
        all = TIENCAPDAN + TIENCAPDANCOBAN ;
    } else if(loaiKH == "nd" && loaiK == "cc") {
        all = TIENCAPDAN + TIENCAPDANCAOCAP * Number(sKCC);
    }else if(loaiKH == "dn" && loaiK == "cb" && sKN <= 10 ) {
        all = TIENCAPDOANHNGHIEP + TIENCAPDOANHNGHIEPCOBAN*Number(sKN);
    }
    else if(loaiK == "cb" && sKN > 10) {
        all = TIENCAPDOANHNGHIEP + TIENCAPDOANHNGHIEPCOBAN*10 + (Number(sKN)-10)*5 ;
    }
    else if(loaiKH == "dn" && loaiK == "cc") {
        all = TIENCAPDOANHNGHIEP + TIENCAPDOANHNGHIEPCAOCAP * Number(sKCC);
    }
    else{
        alert("Nhap lai")
    }
    
    return all;
}