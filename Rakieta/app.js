const rocket = document.querySelector(".rocket")

function leftArrowPressed(key) {
    console.log("strzalka w lewo")
    let pos = rocket.offsetLeft;
    let firstpos = rocket.offsetLeft;
    rocket.style.transform = "rotate(-90deg)";
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == firstpos - 50 || rocket.offsetLeft < 50) {
            clearInterval(id);
        } else {
            pos--;
            rocket.style.left = pos + 'px';
            rocket.style.transform = "rotate(-90deg)";
        }
    }
}

function rightArrowPressed(key) {
    console.log("strzalka w prawo")
        let pos = rocket.offsetLeft;
        let firstpos = rocket.offsetLeft;
        const id = setInterval(frame, 10);
        function frame() {
            if (pos == firstpos + 50 || pos > window.innerWidth-150) {
                clearInterval(id);
            } else {
                pos++;
                rocket.style.left = pos + 'px';
                rocket.style.transform = "rotate(90deg)";
            }
        }
}

function upArrowPressed(key) {
    console.log("strzalka w gore")
    let pos = rocket.offsetTop;
    let firstpos = rocket.offsetTop;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == firstpos - 50 || rocket.offsetTop < 10) {
            clearInterval(id);
        } else {
            pos--;
            rocket.style.top = pos + 'px';
            rocket.style.transform = "rotate(0deg)";
        }
    }
}

function downArrowPressed(key) {
    console.log("strzalka w dol")
    let pos = rocket.offsetTop;
    let firstpos = rocket.offsetTop;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == firstpos + 50 || pos > window.innerHeight-10) {
            clearInterval(id);
        } else {
            pos++;
            rocket.style.top = pos + 'px';
            rocket.style.transform = "rotate(180deg)";
        }
    }
}


function fire(key) {
    console.log("strzelam")
}

function moveSelection(key) {
    switch (key) {
        case 97:
            leftArrowPressed(key);
            break;
        case 100:
            rightArrowPressed(key);
            break;
        case 119:
            upArrowPressed(key);
            break;
        case 115:
            downArrowPressed(key);
            break;
        case 32:
            fire(key)
            break;
    }
};

// wykrywanie klawisza

function uniKeyCode(event) {
    key = event.keyCode;
    return key;
}

// Program glowny

window.addEventListener('keypress', (event) =>{
    let key = uniKeyCode(event)
    moveSelection(key);
})


