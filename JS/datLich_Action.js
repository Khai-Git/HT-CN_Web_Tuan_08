var modal_action = document.getElementById("datLich_Action")
var reset_action = document.getElementById('reset_Action')

let stt = 0

//This action can do multiple time
modal_action.onclick = function () {
    var money = 500000

    let tbl = document.getElementById('ds_BenhNhan')
    let row = tbl.insertRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    let cell4 = row.insertCell()
    let cell5 = row.insertCell()
    let cell6 = row.insertCell()
    
    stt++
    cell1.innerHTML = stt + 1

    let ma_benh_nhan = document.getElementById("ma_benh_nhan").value
    let check_mabenhnhan = /^BN-\d{5}/g
    if (ma_benh_nhan.length == 0 || !(ma_benh_nhan.match(check_mabenhnhan))) {
        alert('Chú ý nhập đúng mẫu mã bệnh nhân')
    } else {
        cell2.innerHTML = document.getElementById("ma_benh_nhan").value
    }

    let check_matkhau = /.{6}.+/g
    let mat_khau = document.getElementById('mat_khau').value
    if (mat_khau.length == 0 || !(mat_khau.match(check_matkhau))) {
        alert('Chú ý nhập đúng mẫu mật khẩu')
    } else {
        cell3.innerHTML = document.getElementById('mat_khau').value
    }

    let ngay_kham = document.getElementById('ngay_kham').value
    let check_ngaykham = /\d{4}-\d{2}-\d{2}/g
    let today = new Date()
    if (ngay_kham < today.getTime()) {
        alert("Ngày khám không hợp lệ")
    } else {
        cell4.innerHTML = ngay_kham.match(check_ngaykham)
    }

    let dv1 = document.getElementById('c1')
    let dv2 = document.getElementById('c2')
    let dv3 = document.getElementById('c3')
    var sum = 0
    if (dv1.checked == true) {
        sum = sum + money
    }
    if (dv2.checked == true) {
        sum = sum + money
    }
    if (dv3.checked == true) {
        sum = sum + money
    }
    cell5.innerHTML = sum

    // let chuyen_khoa = document.getElementById("select").value
    cell6.innerHTML = document.getElementById("select").value
}
reset_action.onclick = function () {
    document.getElementById("ma_benh_nhan").value = ""
    document.getElementById('mat_khau').value = ""
    document.getElementById('ngay_kham').value = ""
    document.getElementById('c1').checked = false
    document.getElementById('c2').checked = false
    document.getElementById('c3').checked = false
    document.getElementById("select").value = "Ngoại tổng quát"
}