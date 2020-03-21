const board = document.querySelector(".board")

let  time = null;

function start () {
    time = setInterval(function(){
    const toadd = document.createElement("div");
    toadd.classList.add("zombie")
    toadd.style.bottom = (Math.floor((Math.random() * 150) + 50)) + "px";
    let randomTime = Math.floor((Math.random() * 15) + 5);
    toadd.style.animationDuration = randomTime + "s," + " 0.8s";
    let scale1 = Math.floor((Math.random() * 2) + 1);
    toadd.style.transform = "scale(" + scale1 +")";
        toadd.addEventListener("animationend", function() {
            this.parentElement.removeChild(toadd);
        });
    board.appendChild(toadd);
    }, 2000);

}

start();