// // setTimeout => đếm ngược thời gian để làm 1 nhiệm vị nào đó
// /**  
//  * setTimeout(function(){})
//  * function(){}: sau t giây function thực thi
//  * t: vd 1s = 1000t
//  */

// // setTimeout(function(){
// //     console.log("line 1")
// // },3000);
// // console.log("line 2")

// /**  
//  * setInterval(function(){})
//  * function(){}: sau t giây function thực thi (theo vòng lặp)
//  * t: vd 1s = 1000t
//  */
// // let demo = setInterval(function(){
// //     console.log(" đao không vui đâu anh")
// // },2500);


// // let n = 1 
// // let bt = setInterval(function(){
// //     console.log(n)
// //     n = n + 1
// // },2200)
// //  if (n == 10){}
// //  else {clearInverval(bt)
// // }



// //seach bai tập về nhà thôi anh =))
// //mà anh nói giữ thể diện mà có giữ gì đâu =))









// //  if (n == 10){
// //  else {clearInverval(bt)
// // }




// let start = document.getElementById("start")
// let pause = document.getElementById("pause")
// let continue_btn= document.getElementById("continue")
// let count_number = document.getElementById("count_number")
// a = 0;
// let bt
// start.addEvevtLisstener("click", function () {

// })
// function click(start) {
//     setInterval(function(){
//         console.log(a)
//         // a = a + 1
//     },1000)
//     // disabled start
//     // abled    pause
// }
// function click(pause) {
//     // stop Inverval(bt)
//     // disabled pause
//     // abled    continue
// }
// function click(continued) {
//     // disabled pause
//     // abled    continued
//     //continued 
// }

// setTimeout => đếm ngược thời gian để làm 1 nhiệm vụ nào đó
/**
 * setTimeout(function(){}, t)
 * - function(){}: sau t giây thì function sẽ được thực thi
 * - t: millisecond=> VD: 3000 <=> 3s
 */

setTimeout(function () {
    console.log("Line 1");
  }, 3000);
  
  setTimeout(function () {
    console.log("Line 9");
  }, 0);
  
  console.log("Line 2");
  
  /**
   * setTimeInterval(function(){}, t)
   * - function(){}: sau mỗi t giây thì function sẽ được thực thi
   * - t: millisecond=> VD: 3000 <=> 3s
   */
  
  let clear_interval_btn = document.getElementById("clear_interval");
  
  let myInterval_demo = setInterval(function () {
    console.log("Anh Phuong daiz");
  }, 2000);
  
  clear_interval_btn.addEventListener("click", function () {
    clearInterval(myInterval_demo);
  });
   