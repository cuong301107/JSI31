let username = document.getElementById("username");
username.value = "";
let password = document.getElementById("password");
let register_btn = document.getElementById("register");

let array_key_localStorage = Object.keys(localStorage); // get All Key from localStorage

function checkExistedUser(username) {
  for (let i = 0; i < array_key_localStorage.length; i++) {
    if (username == array_key_localStorage[i]) {
      return true;
    }
  }

  return false;
}

register_btn.addEventListener("click", function () {
  let checkValidateInput = is_Input_Fill(username.value, password.value);
  let checkUser = checkExistedUser(username.value);

  if (checkValidateInput == true) {
    if (checkUser == true) {
      alert("Tên khoàn này đã tồn tại, vui lòng thử tên đăng nhập khác");
    } else {
      localStorage.setItem(username.value, password.value);
      username.value = "";
      password.value = "";
      alert("Đăng ký tài khoản thành công");

      location.href = "./login.html";
    }
  }
});
function is_Input_Fill(username, password) {
  if (username == "" && password == "") {
    alert("Bạn đang thiếu cả Key và value");
    return false;
  } else if (password == "") {
    alert("Thiếu value");
    return false;
  } else if (username == "") {
    alert("Thiếu Key");
    return false;
  }
  return true;
}

let text = "nsjkdfnskdjfn";
let newText = text.toUpperCase();
console.log(newText);

// console.log(t);
