    function searchFunction() {
        // Lấy giá trị từ ô tìm kiếm
        var searchText = document.getElementById("searchInput").value.toLowerCase()
        //  lấy giá trị từ ô input có id "searchInput",
        // chuyển đổi nó thành chữ thường (lowercase) để so sánh dễ hơn.v:
        var col4Divs = document.querySelectorAll('.col-4')
        // lấy tất cả các phần tử có class "col-4", lưu  vào  col4Divs. querySelectorAll =))))))
        // trả về một NodeList chứa tất cả các phần tử phù hợp với điều kiện.
        col4Divs.forEach(function(col4Div) {
            //.forEach():  lặp qua mỗi phần tử trong mảng div class col-4
            //lặp qua mỗi phần tử trong NodeList col4Divs, thực hiện 1 hàm cho mỗi phần tử.
            var productName = col4Div.querySelector('h4')
            // lấy phần tử con đầu tiên là thẻ <h4> trong phần tử "col-4"  đang xét.
            if (productName) {
                var name = productName.innerText.toLowerCase()
                //Lấy nội dung của phần tử <h4>, chuyển đổi thành chữ thường (lowercase).
                if (name.indexOf(searchText) > -1) {
                    col4Div.style.display = ""
                } else {
                    col4Div.style.display = "none"
                }
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.buy');
    //lấy nút nè cậu ơi :))
    // Lặp qua từng nút và thêm sự kiện click =)))
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // khi cậu click thì..... :3
            // Lấy ra thông tin của sản phẩm v: 
            var productContainer = button.parentElement;
            var Name = productContainer.querySelector('h4').innerText;
            var Price = productContainer.querySelector('p').innerText;
            var theImage = productContainer.querySelector('img').src;
        //thế là cho nó thành Name Price theImage á
        // Kiểm tra nội dung của các phần tử nè
        console.log("Product Name:", Name);
        console.log("Product Price:", Price);
        console.log("Product Image:", theImage);
        // Lưu vào localStorage
        var product = {
            name: productName,
            price: productPrice,
            image: productImage,
        };
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(product))
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
        // Chuyển sang trang giỏ hàng
        // window.location.href = 'giohang.html'
        });
    });
});

            

        


