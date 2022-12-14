function login() {

    let username = $("#username").val();
    let password = $("#password").val();

    let account = {
        username: username,
        password: password
    }

    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
            localStorage.setItem("token", data);
            location.href = "home.html"
            alert("Đăng nhập thành công")
        },
        error: function (err) {
            console.log(err)
            alert("Sai tài khoản hoặc mật khẩu. Vui lòng nhập lại!")
        }
    })
}
