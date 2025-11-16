


// const result = document.querySelector("#result");
// const img = document.querySelector("#img");
// function toss(clicked) {
//     console.log(clicked);
//     let randomFun = Math.ceil(Math.random() * 2);
//     console.log(randomFun);
//     if (randomFun === 1) {
//         img.src = "https://i.ebayimg.com/images/g/KQYAAOSwUf5hoOxr/s-l400.jpg";
        
//     }
//     else {img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8IvbK3sp0kHNUW8LuRPZ6RO-uVqPK1TGDku90bOHPCzt6fgpJtd7C8g7nHIHDufl67E&usqp=CAU";
//     }
//     // result.innerHTML = randomFun ; 
//     if ((clicked === "masjid" && randomFun === 1) || (clicked === "chand" && randomFun === 2)) {
//         console.log("you Have Won The toss"); result.innerHTML = "You Have Won The Toss";
//         return;
//     }
//     console.log("you have lost the Toss");
//     result.innerHTML = "YOU HAVE LOST THE TOSS";


// }
// // }if (randomFun === 2){




const result = document.querySelector("#result");
const img = document.querySelector("#img");

function toss(clicked) {

    let randomFun = Math.ceil(Math.random() * 2);

    // Fade-out before changing image
    img.style.opacity = 0;

    setTimeout(() => {

        // Set correct image for 1 and 2
        if (randomFun === 1) {
            img.src = "https://i.ebayimg.com/images/g/KQYAAOSwUf5hoOxr/s-l400.jpg"; // Masjid
        } else {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8IvbK3sp0kHNUW8LuRPZ6RO-uVqPK1TGDku90bOHPCzt6fgpJtd7C8g7nHIHDufl67E&usqp=CAU"; // Chand
        }

        img.style.opacity = 1; // Fade-in

    }, 200);


    // DECIDE WIN OR LOSS
    if (
        (clicked === "masjid" && randomFun === 1) ||
        (clicked === "chand" && randomFun === 2)
    ) {
        result.textContent = "🎉 You Have Won The Toss!";
        result.className = "win";
    } else {
        result.textContent = "❌ You Have Lost The Toss";
        result.className = "lose";
    }
}
