
// Bài 1 : Tính tiền lương nhân viên
// Mô hình 3 khối
/**
 * 
 * Khối 1: inputs
 * Tiền lương nhân viên : 100000 / ngày.
 * User nhập vào số ngày làm việc
 * 
 * Khối 2: Tính lương nhân viên
 * 
 * B1 : Tạo hàm tinhLuong
 *  - Khai báo biến, hằng số
 *  - Lấy thẻ id="soNgay" gán biến ngayLam
 *  - Lương nhân viên = lương 1 ngày x số ngày làm

 * B2: Gắn sự kiện (events) click cho button
 * onclick
 * 
 * Khối 3: outputs
 * Hiển thị lương nhân viên lên UI
 */

function tinhLuong(){
    // Lương ngày là một hằng số
    const luongNgay = 100000;
    var luong ;
    var ngayLam = document.getElementById("soNgay");
    luong = parseInt(ngayLam.value) * luongNgay;
    document.getElementById("txtLuong").innerHTML = "Lương nhân viên : " + luong + "<span style='vertical-align: super';>$</span>";
}

// END Bài 1 : Tính tiền lương nhân viên

// Bài 2 : Tính tiền giá trị trung bình
// Mô hình 3 khối
/**
 * 
 * Khối 1: inputs
 * User nhập vào 5 số 
 * 
 * Khối 2: Tính lương trung bình
 * Giá trị trung bình = tổng 5 số / 5
 * B1 : Tạo hàm ( function)
 *  - Khai báo biến, hằng số
 *  - Lấy thẻ id cho tùng số gán biến soThu
 *  - Tính giá trị trung bình

 * B2: Gắn sự kiện (events) click cho button
 * onclick
 * 
 * Khối 3: outputs
 * Hiển thị giá trị trung bình lên UI
 */

 function tinhGiatriTB(){
    var Tong ;
    var soThu1 = document.getElementById("soThu1");
    var soThu2 = document.getElementById("soThu2");
    var soThu3 = document.getElementById("soThu3");
    var soThu4 = document.getElementById("soThu4");
    var soThu5 = document.getElementById("soThu5");
    Tong = parseInt(soThu1.value) + parseInt(soThu2.value) + parseInt(soThu3.value) + parseInt(soThu4.value) + parseInt(soThu5.value) ;
    var giaTriTB = Tong / 5;
    document.getElementById("txtGiaTB").innerHTML = "Giá trị trung bình của 5 số : " + giaTriTB;
}

document.getElementById("btnTinhTB").onclick = tinhGiatriTB;

// Bài 3 : Quy đổi tiền
// Mô hình 3 khối
/**
 * 
 * Khối 1: inputs
 * User nhập vào số tiền USD
 * Khai báo tỷ giá
 * 
 * Khối 2: Quy đổi tiền
 * Tiền quy đổi = Số tiền USD * tỷ giá
 * B1 : Tạo hàm ( function)
 *  - Khai báo biến, hằng số
 *  - Lấy thẻ id cho soTienUSD gán biến soTienUSD
 *  - Quy đổi tỷ giá = soTienUSD * tygia

 * B2: Gắn sự kiện (events) click cho button
 * onclick
 * 
 * Khối 3: outputs
 * Hiển thị số tiền quy đổi VNĐ lên UI
 */

 function quyDoitien(){
    const tygia = 23500
    var soTienVNDquydoi ;
    var soTienUSD = document.getElementById("soTienUSD");
    soTienVNDquydoi = parseInt(soTienUSD.value) * tygia;
    document.getElementById("txtQuidoiUSD").innerHTML = "Số tiền quy đổi VNĐ  : " + soTienVNDquydoi;
}

document.getElementById("btnQuydoitien").onclick = quyDoitien;

// <!-- Bài 4 : Tính chu vi & diện tích hình chữ nhật -->
// Mô hình 3 khối
/**
 * 
 * Khối 1: inputs
 * User nhập vào chiều dài, chiều rộng hình chữ nhật
 * 
 * Khối 2: TÍnh chu vi & diện tích hình chữ nhật
 * 
 * B1 : Tạo hàm ( function)
 *  - Khai báo biến
 *  - Lấy thẻ id cho chieuDai, chieuRong gán biến chieudai, chieurong
 * - Diện tích =  chieudai * chieurong 
 * - Tính chu vi = (chieudai + chieurong) x 2
 *  

 * B2: Gắn sự kiện (events) click cho button
 * onclick
 * 
 * Khối 3: outputs
 * Hiển thị Diện tích & chu vi hình chữ nhật lên UI
 */

 function tinhDientichChuvi(){
    var chuVi;
    var dienTich ;
    var chieudai = document.getElementById("chieuDai");
    var chieurong = document.getElementById("chieuRong");
    dienTich = parseInt(chieudai.value) * parseInt(chieurong.value);
    chuVi = parseInt(chieudai.value) + parseInt(chieurong.value);
    chuVi = chuVi * 2;
    document.getElementById("txtTinhDT").innerHTML = "Diện tích : " + dienTich;
    document.getElementById("txtTinhCV").innerHTML = "Chu vi : " + chuVi;

}

document.getElementById("tinhCVDT").onclick = tinhDientichChuvi;

// <!-- Bài 5: Tính tổng 2 ký số   -->
// Mô hình 3 khối
/**
 * 
 * Khối 1: inputs
 * User nhập vào một số có 2 chữ số
 * 
 * Khối 2: Tính tổng 2 ký số
 * 
 * B1 : Tạo hàm tinhTong2kyso()
 *  - Khai báo biến
 *  - Lấy thẻ id cho so2chuso gán biến so
 *  - Lấy số so_hang_donvi chuyễn qua kiểu int
 *  - Lấy số so_hang_chuc chuyễn qua kiểu int
 *  - Tính tổng 2 ký số
 *  

 * B2: Gắn sự kiện (events) click cho button
 * onclick
 * 
 * Khối 3: outputs
 * Hiển thị Diện tích & chu vi hình chữ nhật lên UI
 */

 function tinhTong2kyso(){
    
    var so = document.getElementById("so2chuso");
    var so_hang_donvi = parseInt(so.value) % 10;
    so_hang_donvi = parseInt(so_hang_donvi);
    var so_hang_chuc = parseInt(so.value) / 10;
    so_hang_chuc = parseInt(so_hang_chuc);
    var tong2ks = so_hang_donvi + so_hang_chuc;
    document.getElementById("txtTong2KS").innerHTML = "Tổng 2 ký số : " + tong2ks;
}

document.getElementById("tinhT2ks").onclick = tinhTong2kyso;