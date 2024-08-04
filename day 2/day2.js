// function checkBranch(X) {
//     if (X == 1) {
//         return "nhánh 1"
//     }
//     if (X == 2) {
//         return "nhánh 2"
//     }
//     else {
//         console.log ("không thỏa mãn")
//     }
// }

// let h1_name = document.getElementById("name");
// console.log(h1_name.innerText)
// // line1[0].style.color="red" 
// let line1 = document.getElementsByClassName("line1")
// console.log(line1.innerText)
// let line2 = document.getElementsByClassName("line2")
// console.log(line2.innerText)

// let newBox = ducument.createElement("div")

// newBox.style.height= "500px";
// newBox.style.width= "500px";
// newBox.innerText =  <u></u>
// let boxContent = document.createElement("div")
// let id

const id = 1;
const productName = "chair";
const price = "26$";
const status = "còn hàng";
const productType = "Shirt";

const idElement = document.createElement('p');
idElement.innerHTML = `ID: ${id}`;

const productNameElement = document.createElement('p');
productNameElement.innerHTML = `tên sản phẩm: <b>${productName}</b>`;

const priceElement = document.createElement('p');
priceElement.innerHTML = `giá tiền: <b>${price}</b>`;

const statusElement = document.createElement('p');
statusElement.innerHTML = `trạng thái hàng: <b>${status}</b>`;

const productTypeElement = document.createElement('p');
productTypeElement.innerHTML = `lọai sản phẩm: <b>${productType}</b>`;

const boxContentDiv = document.querySelector('.box_content');

boxContentDiv.appendChild(idElement);
boxContentDiv.appendChild(productNameElement);
boxContentDiv.appendChild(priceElement);
boxContentDiv.appendChild(statusElement);
boxContentDiv.appendChild(productTypeElement);


