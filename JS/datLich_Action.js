var modal_action = document.getElementById("datLich_Action")


modal_action.onclick = function () {
    let check_mabenhnhan = /^BN-\d{5}/g
    let ma_benh_nhan = document.getElementById("ma_benh_nhan").value
    var x = ""
    var stt = 1
    var money = 500000
    if (ma_benh_nhan.length != 0) {
        // document.getElementById("list").innerHTML = "<td>" + ma_benh_nhan.match(check_mabenhnhan) + "</td>"
        x = x + "<td>" + ma_benh_nhan.match(check_mabenhnhan) + "</td>"
    }

    let check_matkhau = /.{6}.+/g
    let mat_khau = document.getElementById('mat_khau').value
    if (mat_khau.length != 0) {
        // document.getElementById("list").innerHTML = "<td> " + mat_khau.match(check_matkhau) + " </td>"
        x = x + "<td>" + mat_khau.match(check_matkhau) + "</td>"
    }

    let ngay_kham = document.getElementById('ngay_kham').value
    let today = new Date()
    if (ngay_kham < today.getTime()) {
        alert("Ngày khám không hợp lệ")
    } else {
        x = x + "<td>" + ngay_kham + "</td>"
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
    x = x + "<td>" + sum + "</td>"

    let chuyen_khoa = document.getElementById("select").value
    x = x + "<td>" + chuyen_khoa + "</td>"

    document.getElementById("list").innerHTML = (stt + 1) + x

    document.getElementById("ma_benh_nhan").innerHTML = ""
    document.getElementById('mat_khau').innerHTML = ""
    document.getElementById("datLich_Action").addEventListener("click", function(event){
        event.preventDefault()
    })
}