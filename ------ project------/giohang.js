document.addEventListener('DOMContentLoaded', function() {
    var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

    if (cartProduct) {
// Hiển thị thông tin 
        var gioHangDiv = document.querySelector('.giohang');
        var sanphamDiv = document.createElement('div');
        sanphamDiv.classList.add('sanpham');
        sanphamDiv.innerHTML = `
            <img src="${cartProduct.image}">
            <h4>${cartProduct.name}</h4>
            <p>${cartProduct.price}</p>
            <button onclick="removeFromCart()">Xóa</button>
        `;
        gioHangDiv.appendChild(sanphamDiv);
    }
});

//xóa
function removeFromCart() {
    localStorage.removeItem('cartProduct');
    window.location.reload(); 
}
function buy() {
    localStorage.removeItem('cartProduct');
    window.location.reload(); 
    alert("Cảm ơn bạn đã mua sản phẩm!!!")
}
 