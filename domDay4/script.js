
// let h1 = document.querySelector("#heading")

// let a = 45

// console.log(a)


// let h1 = document.querySelector("#heading")

// h1.textContent = "abc"

// console.log(h1)


// let box = document.querySelector(".box")
// box.style.height = "200px"
// box.style.width ="200px"
// box.style.backgroundColor = "orange"
// box.style.borderRadius = "20px"
// console.log(box)



// let box = document.querySelector(".box")


// let h1 = document.createElement("h1")
// h1.innerText = "hello "
// box.appendChild(h1)


// let body = document.querySelector("body")

// for(let i = 0 ; i < 10 ; i++){
//     let box = document.createElement("div")
// box.className = "box"
// body.appendChild(box)

// let h1 = document.createElement("h1")
// h1.textContent = "Name : abc"
// box.appendChild(h1)

// let h2 = document.createElement("h2")
// h2.textContent = "Course : frontend"

// box.appendChild(h2)

// }


let body = document.querySelector("body")


let card = document.createElement("div")
card.className = "card"
body.appendChild(card)


let h1 = document.createElement("h1")
h1.textContent = "Product : Mobile"
card.appendChild(h1)


let h2 = document.createElement("h2")
h2.textContent = "Spacification : 8Gb Ram 256Gb storage"
card.appendChild(h2)

let h3 = document.createElement("h3")
h3.textContent=  "Price : 25000"
card.appendChild(h3)