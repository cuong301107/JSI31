document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.getElementById('username')
    var passwordInput = document.getElementById('password')
    var rememberCheckbox = document.getElementById('remember')
    var loginBtn = document.getElementById('btn')
    // Kiểm tra
    var savedUsername = localStorage.getItem('username')
    var savedPassword = localStorage.getItem('password')
    // Nếu có, điền vào các trường tương ứng và kiểm tra checkbox "Nhớ mật khẩu"
    if (savedUsername && savedPassword) {
        usernameInput.value = savedUsername
        passwordInput.value = savedPassword
        rememberCheckbox.checked = true
    }
    // Xử lý sự kiện khi người dùng nhấp vào nút đăng nhập
    loginBtn.addEventListener('click', function () {
        var check = checkExistedUser(usernameInput.value); // true hoặc false
        if (check) {
            var passwordExistedUserFromLocalStorage = localStorage.getItem(usernameInput.value)
            if (passwordExistedUserFromLocalStorage === passwordInput.value) {
                alert("Đăng nhập thành công, xin chào " + usernameInput.value)
            } else {
                alert("Sai Password")
            }
        } else {
            alert("Tên này chưa tồn tại")
        }
    });
    // Hàm kiểm tra người dùng đã tồn tại chưa
    function checkExistedUser(username) {
        var arrayKeyLocalStorage = Object.keys(localStorage)
        for (var i = 0; i < arrayKeyLocalStorage.length; i++) {
            if (username === arrayKeyLocalStorage[i]) {
                return true
            }
        }
        return false
    }
    // Xử lý sự kiện khi người dùng tích vào "Nhớ mật khẩu"
    rememberCheckbox.addEventListener('change', function () {
        // Nếu tích vào, lưu tài khoản và mật khẩu vào localStorage
        if (this.checked) {
            var username = usernameInput.value
            var password = passwordInput.value
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
        } else {
            // Nếu không tích vào, xóa tài khoản và mật khẩu khỏi localStorage
            localStorage.removeItem('username')
            localStorage.removeItem('password')
        }
    });
});
