// get, post, put, delete
fetch("url").then()

//khi fetch 1 đường link có sẽ trả về cho chúng ta 1 promise 
// để sử í promise phải dùng hàm .then()

function hello() {
    console.log("chào")
}
// ES6 biến thể arrow cảu function
// const print = (name) => "my name is" + name
// const print = (name) => {
//     return "my name is" + name
// }

const myPromise  = new Promise(function (resolve,reject){
    let name = "cường" 
    if (name == "phương"){
        resolve("chuẩn cường r")
    } else {
        reject(" not cường, m là ai ")
    }
})

// để xử lí trường hợp promise thành công, dùng .then ()
// để xử lý thất bại: catch()
//cách 1
MyPromise
.then((data) => {
    console.log(data)
})
// đường link https://picsum.photos/200/300 trả về url ảnh bất kỳ

fetch("https://picsum.photos/200/300").then((data) => {
    img[1].src = data.url
})
fetch("https://picsum.photos/200/300").then((data) => {
    img[2].src = data.url
})

let img = doccument.querySelectorAll("img")
fetch("https://picsum.photos/200/300").then((data) => {
    img[0].src = data.url
})
//cách 2
async function excute() {
    try {
        const dataImage = await "https://picsum.photos/200/300"
    console.log(dataImage)
    } catch (err) {
        console.log(err)
    }
}
// execute()
// fetch 

// Async/await -  dùng để sử lí promise, await để sử lý trường hợp resolve của promise,
// dùng try catch để xử lí trường hợp của reject
// khi dùng await thì phải để trong function và finction của async



