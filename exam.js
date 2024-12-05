// var list = document.querySelectorAll("ul il")
// list.forEach(function(element) {
//     element.onclick = function() {
//         console.log(this)
//     }
// })
// var x = document.getElementById("contant")
// var y = document.createElement("h2")
// let hi = x.appendChild("h2")
// var z = document.textContent("i love you")
// document.write(hi)
// x.innerHTML = "mariam"
// var arr = [1, 2, 4, 6, 7]
// var q = [2, 3, 4, 5, 6].push(3)
// var w = [2, 3, 4, 5, 6].pop()
// var e = [2, 3, 4, 5, 6].unshift(5)
// var r = [2, 3, 4, 5, 6].shift()
// var t = [2, 3, 4, 5, 6].reverse()
// var y = [2, 3, 4, 5, 6].fill(4)
// var i = [2, 3, 4, 5, 6, ].at(1)
// var p = [2, 3, 4, 5, 6].join("-")
// var a = [2, 8, 9, 12, 34].reduce((num, acc) => acc + num, 1)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 2) {
//         continue;
//     }
//     document.write(`<h2>${arr[i]}</h2>`)


// };
// for (let key of arr) {
//     document.write(`<h2>${key}</h2>`)
// }
// ........................................
// document.write(`<h2>${a}</h2>`)
// document.write(`<h2>${w}</h2>`)
// document.write(`<h2>${e}</h2>`)
// document.write(`<h2>${r}</h2>`)
// document.write(`<h2>${t}</h2>`)
// document.write(`<h2>${y}</h2>`)
// document.write(`<h2>${i}</h2>`)
// document.write(`<h2>${p}</h2>`)
// ......................................
// var num = prompt("please enter you name")
// if (num == num) {
//     document.write(`<h2>hi in my website ya ${num}</h2>`)
// }
// var num = prompt("please entar your model")
// switch (num) {
//     case "admain":
//         document.write("hello your admain ");
//         break;
//     case "modarator":
//         document.write("hello your moderotr ");
//         break;
//     default:
//         document.write(`<h2> hello your ${num}</h2>`)}
// let car = {
//     color: "red",
//     model: [2020, 2021],
//     price: 3000000,
// }
// for (let key in car) {
//     document.write(`<h2>${key} :${car[key]} </h2>`)
// }


// // document.write(JSON.stringify(car))
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// var num = prompt("please enter your age ")
// var email = prompt("please enter your email").trim().toLowerCase()
// let user = {
//     fristname: "mariam ",
//     lastname: "ahmed",
//     email: "arwen638@gmail.com",
//     skills: ["html", "css", "javascript"],
//     active: false,
//     phonenumber: {
//         fristnumber: "01067814092",
//         secandnumber: "01008207250",

//     },
//     age: num,
//     address: {
//         egypt: "cario",
//         aua: "abou zbi"
//     },
//     // isActive: function() {
//     //     if (user.active === true) {
//     //         return " is active "

//     //     } else {
//     //         return "is not active "
//     //     }
//     // },
//     // getAge: function() {
//     //     if (user.age >= 18) {
//     //         return "avaliable"

//     //     } else {
//     //         return "sorry is not avalible"
//     //     }
//     // },
//     // isemail: function() {
//     //     if (email == user.email) {
//     //         document.write(`<h2> yes,is email</h2>`)
//     //     }
//     // },
//     // };
// }
// for (let key in user) {
//     document.write(`<h2>${key}:${user[key]}</h2>`)
// }
// document.write(`<h2>${user.isActive(),user.getAge()}</h2>`)
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// let users = {}
// users.name = "maryy"
// console.log(users.name)


// let data = new Object({
//     clas: "2/5",
// })
// console.log(data.clas);
// 
// let user = {
//     name: prompt("pease enter your name"),

//     getname: function() {
//         return `hello ${this.name}`
//     },

// }
// let user2 = Object.create(user)
// user2.name = "mariam"
// user2.age = 29;
// document.write(`<h2>${user2.getname()} age:${user2.age}</h2>`)
// document.write(`<h2>${user.getname()}</h2>`)
// 
// let a1 = {
//     num1: 1,
//     test: function() {
//         return "hello"
//     },

// };
// let a2 = {
//     num2: 2
// };
// let a3 = {
//     num3: 3
// };
// let a4 = Object.assign(a1, a2, a3)

// console.log(a4)
/////////////////////////////////////////////////
// let body = document.body;
// body.style.background = "#4444"
// console.log(body)
// let image = document.images[0];
// image.src = "902.jpg"
// console.log(image)
// let links = document.links[0]
// links.style.textDecoration = "none";

// console.log(links)
// let form = document.form;
// let x = document.getElementById("img1")
// x.src = "lo.jpg"
// x.setAttribute("alt", "mari")
// x.alt = "mohamed"

// console.log(x.alt)
//
//innerHTML
//iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
/////////////////////////////////////////////////////////
// let countainer = document.querySelector(".countiner");
// console.log(countainer.innerHTML)
// let num = Number(prompt("please enter your frist number "))
// let num2 = Number(prompt("pleas enter your scand  number "))
// let total = parseInt(num + num2)
//     // document.write(`<div class="hi">${total}</div>
//     //     <style>
//     //     .hi{
//     //     width:200px;
//     //     height:200px;
//     //     background:red;
//     //     }
//     //     </style>`)
//     //طريقه تانيه بجد تحفه 
// let x = document.getElementById("countiner")
// x.innerHTML = total
// console.log(countiner.innerHTML)

// let element = document.getElementById("sacnd");
// element.previousElementSibling.innerHTML = `<h1><i> ilove you</i> </h1>`;
// element.nextElementSibling.style.color = "red";
// console.log(element.previousElementSibling);
// console.log(element.nextElementSibling);
// element.parentElement.style.backgroundColor = "#4444"
// let t = document.body
// t.style.backgroundColor = "#5555"
// 
// 
// let countain = document.getElementById("countiner")
// countain.innerHTML = `<h2> hi in website </h2>`
// countain.style.backgroundColor = "#444";
// countain.style.color = "white";
// countain.style.padding = "10px";
// countain.style.fontStyle = "italic"
// countain.style.display = "grid"
// countain.style.justifyContent = "center";
// countain.style.removeProperty("display")

// countain.style.filter = "drop-shadow(0 0 20px rgb(178, 191, 184))"
// countain.style.borderRadius = "20px"
// let i = document.body;
// i.style.backgroundColor = "black"

// console.log(countain)
// 
// 
// let x = document.body.innerHTML = `
// <h2>hiii in my website</h2>
// <p> hello</p>
// `
// console.log(x)
// 
// let countain = document.createElement("div")
// let head = document.createElement("h2")
// let imgs = document.createElement("img")

// let contant = document.createTextNode("my name is mariam")
// head.appendChild(contant)
// imgs.src = "902.jpg"
// countain.appendChild(imgs)

// countain.appendChild(head)
// document.body.appendChild(countain)
// imgs.style.width = "200px"
// imgs.style.height = "200px"
// head.style.fontSize = "40px"
// head.style.fontFamily = " Georgia, 'Times New Roman', Times, serif";
// head.style.fontStyle = "italic"
// imgs.style.borderRadius = "50%  "
// 
// 
// 
// let names = ["mariam", "arwa", "ahmed", "ahmed", "marwan", "mohamed ", "farida", "yara", "jana", "rawan", "malak"]
// let aged = ["19years old", "29years old", "18years old", "20years old", "13 years old ", "23 years old ", "15 years old ", "22 years old ", "18years old", "30 years old "]
// let countain = document.createElement("div")
// document.body.appendChild(countain)
// countain.style.textAlign = "center"
// function element(names, aged) {
//     let card = document.createElement("div")
//     let title = document.createElement("h1")
//     let age = document.createElement("p")
//     let img = document.createElement("img")
//     img.src = "1520173149047.jpeg"
//     let titlec = document.createTextNode("my name is " + names)
//     let agec = document.createTextNode(aged)
//     title.appendChild(titlec)
//     age.appendChild(agec)
//     card.style.width = "200px"
//     card.style.backgroundColor = " #ffffff"
//     card.style.margin = "3px"
//     card.style.display = "inline-block"

//     img.style.width = "100%"
//     card.style.padding = "20px"
//     card.style.borderRadius = "20px"
//     let v = document.body;
//     v.style.backgroundColor = "black"
//     v.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
//     v.style.fontStyle = "italic"
//     card.appendChild(title)
//     card.appendChild(age)
//     card.appendChild(img)
//     countain.appendChild(card)
// }
// for (let i = 0; i < 10; i++) {
//     element(names[i], aged[i])
// }
// let btn = document.getElementById("btn")
// btn.addEventListener("click", function() {
//     document.body.style.background = "blue"
// })
// btn.addEventListener("click", function() {
//     btn.style.background = "black"
// })
// btn.addEventListener("click", function() {
//     btn.style.color = "white"
// })
// btn.onclick = function() {
//     btn.style.color = "white"


// }
// btn.onmousedown = function() {
//         btn.style.background = "red"
//     }
// btn.onclick = function() {
//     document.body.style.background = "blue"
// }
// let input = document.getElementById("hi")
// input.onkeyup = function() {
//     console.log("hello")
// }
// input.addEventListener("blur", function() {
//     this.style.boxShadow = "5px 7px 10px red "


// })
// onload = function() {
//     this.document.body.style.backgroundColor = "red"
// }
// تطبيق مشروع تحويل العمله
// let egy = document.getElementById("love")
// let usd = document.getElementById("lovee")
// usd.addEventListener("keyup", function() {
//     egy.value = usd.value * 15.3
// })
// egy.addEventListener("keyup", function() {
//         usd.value = egy.value / 15.3
//     })
// 
// 
//
// let after = document.getElementById("after")
// let ss = document.getElementById("pefore")
// let side = document.getElementById("side")
// let contant = document.getElementById("contant")
// let div = document.getElementById("div")
// div.style.width = "100%"
// div.style.height = "200px"
// div.style.backgroundColor = "red"
// after.addEventListener("click", function() {
//     div.after(contant)
// })
// ss.onclick = function() {
//     div.before(contant)
// }
// side.addEventListener("click", function() {
//     div.appendChild(contant)
// })
// document.body.style.color = "white"
// document.body.style.backgroundColor = "black";
// 
// 
// let names = document.getElementById("name");
// names.addEventListener("click", function() {
//     this.classList.toggle("see")

// })
// console.log(names.classList)
// 
// 
// navbar//
// let closel = document.getElementById("close")
// let opens = document.getElementById("open")
// let count = document.querySelector("#countain")
// closel.addEventListener("click", function() {
//     count.classList.add("hide")
//     this.classList.add("hide")
//     opens.classList.remove("hide")

// })
// opens.addEventListener("click", function() {
//     count.classList.remove("hide")
//     closel.classList.remove("hide")
//     this.classList.add("hide")

// })
// 
// 
// let btn = document.getElementById("btn")
// let inp = document.getElementById("inp")
// btn.addEventListener("click", function() {
//     this.style.backgroundColor = "#ffa"
// })
// window.onload = function() {
//         btn.click()
//     }
// 
// 
// let bodys = document.body
// let darks = document.getElementById("dark")
// let light = document.getElementById("light")
// darks.addEventListener("click", function() {
//     darks.classList.add("hide")
//     this.style.backgroundColor = "black"
//     this.style.color = "white"


//     bodys.style.backgroundColor = "black"
//     light.classList.remove("hide")
// })
// light.addEventListener("click", function() {
//     darks.classList.remove("hide")
//     bodys.style.backgroundColor = "white"
//     this.style.backgroundColor = "white"


//     light.classList.add("hide")
// })
// console.log("2" > "12")
// console.log("5" - 2)
//
// window.scrollBy({
//     left: 200,
//     top: 200

// })
// let btns = document.getElementById("btn")
// window.onscroll = function() {
//     if (scrolly >= 400) {
//         btns.style.display = "block"
//     }
// }
// let a = 10;

// function foo() {
//     console.log(a)
//     let a = 20

// }
// foo();
// 
// scroll
// let btns = document.getElementById("btn")
// window.addEventListener("scroll", function() {
//     if (this.scrollY >= 400) {
//         btns.style.display = "block"

//     } else if (this.scrollY <= 400) {
//         btns.style.display = "none"


//     } else {
//         btns.style.backgroundColor = "red"
//         btns.style.color = "white"

//     }
// })
// btns.addEventListener("click", function() {
//     scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     })
// })
// setTimeout(function() {
//     console.log("mari")
// }, 1000)
// function mari() {
//     let pizza = prompt("how many you want pizza")
//     let cola = prompt("how many you want cola")
//     let water = prompt("how many you want water")
//     let pizzam = parseFloat(20 * pizza)
//     let colam = parseFloat(5 * cola)
//     let waterm = parseFloat(1.5 * water)
//     console.log(`1:pizza =20x${pizza}=${pizzam}$`)
//     console.log(`2:cola  =5x${cola}=${colam}$`)
//     console.log(`3:water =1.5x${water}=${waterm}$`)
//     console.log(`-----------------`)
//     let totalt = parseInt(pizzam + colam + waterm)
//     console.log(`total =${totalt}$`)
//     let tax = 9.15
//     console.log(` tax =${tax}$`)
//     console.log(`-----------------`)
//     let totalc = parseFloat(`${tax+totalt}`)
//     console.log(`tatal cost =${totalc}$`)
//     console.log("thank you ")









// }
// mari()
// form
// let btns = document.getElementById("hellos")

// let btn = document.getElementById("hello")
// let frist = document.getElementById("fr")
// let scand = document.getElementById("sc")
// btn.addEventListener("click", function() {
//     let num1 = parseInt(frist.value)
//     let num2 = parseInt(scand.value)

//     let num3 = num1 + g
//     btns.innerHTML = ` the sum :${num3}`



// })
// let num1 = parseInt(prompt("please enter your grad "))
// if (num1 >= 80) {
//     document.write(`<h2> your cataguray :exlante</h2>`)
// } else if (num1 <= 70) {

//     document.write(`<h2> your cataguray : very good</h2>`)
// } else if (num1 <= 60) {

//     document.write(`<h2> your cataguray :  good</h2>`)
// } else if (num1 <= 50) {

//     document.write(`<h2> your cataguray : week </h2>`)
// } else if (num1 <= 0) {

//     document.write(`<h2> your cataguray : fail</h2>`)
// } else {
//     document.write(`<h1> the grad from 100!!</h1>
//         <style>
//         h1{
//         color:red;
//         }
//         </style>`)

// }
// let div = document.getElementById("mass")
// let imges = ["2636935038.jpg", "2636935038.jpg", "big21499093303.png", "2636935038.jpg"];
// imges.forEach((element) => {
//     let img = document.createElement("img ")
//     img.src = element
//     div.appendChild(img)

// })
// window.localStorage.color = "red";
// window.localStorage.setItem("color", "blue")
// window.localStorage.setItem("colors", "black")
// window.localStorage.setItem("colorss", "white")


// console.log(window.localStorage.key(1))

// document.body.style.backgroundColor = "blue"
// window.localStorage.clear()


// console.log(window.localStorage.color)
// 
// 
// تطبيق علي ال local storge 
// 
//<header class="container">
//<section>
// <div class="green" data-color="green"></div>
// <div class="red" data-color="red"></div>
// <div class="blue " data-color='blue'></div>
//<div class="white " data-color="white"></div>

//</section>

//</header>
//<br>

//<footer class="final">
//<footer class="finals"></footer>
//</footer> </br>

// let fr = document.querySelectorAll("div")
// let ele = document.querySelector(".finals")
// fr.forEach((div) => {
//     div.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color)
//         fr.forEach((div) => {
//             div.classList.remove("active")
//         })
//         e.currentTarget.classList.add("active")
//         window.localStorage.setItem("color", e.currentTarget.dataset.color)
//         ele.style.backgroundColor = e.currentTarget.dataset.color

//     })
// });

// حاجه تانيه خالص
let dark = document.getElementById("mariam")
let light = document.getElementById("mariams")
let cards = document.querySelector(".cards")
let carde = document.querySelector(".carde")

let cardee = document.querySelector(".cardee")

dark.addEventListener("click", function() {
    dark.classList.add("hide")
    light.classList.remove("hide")
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    cards.classList.add("play")
    carde.classList.add("play")
    cardee.classList.add("play")
    carde.style.backgroundColor = "black"
    carde.style.color = "white"
    cardee.style.backgroundColor = "black"
    cardee.style.color = "white"
    cards.style.backgroundColor = "black"
    cards.style.color = "white"
    cardee.classList.remove("nada")
    carde.classList.remove("an")
    cards.classList.remove("pan")
})
light.addEventListener("click", function() {
    light.classList.add("hide")
    dark.classList.remove("hide")
    document.body.style.color = 'black'
    cards.classList.remove("play")
    cardee.classList.remove("play")
    carde.classList.remove("play")
    cardee.classList.add("nada")
    carde.classList.add("an")
    cards.classList.add("pan")
    carde.style.backgroundColor = "white"
    carde.style.color = "black"
    cardee.style.backgroundColor = "white"
    cardee.style.color = "black"
    cards.style.backgroundColor = "white"
    cards.style.color = "black"
    document.body.style.backgroundColor = 'white'
})

let view = document.querySelector(".view")
let visit = localStorage.getItem("page-visit")
if (visit) {
    visit = parseInt(visit) + 1
    localStorage.setItem("page-visit", visit)
} else {
    visit = 1
    localStorage.setItem("page-visit", 1)
}
view.innerHTML = visit