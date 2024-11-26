const colorText = document.getElementById("colorText");
let rgb;

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return rgb = `rgb(${r}, ${g}, ${b})`;
}

const changeBackgroundColor = () => {
    document.body.style.backgroundColor = randomColor();
    document.body.style.color = "white";
    colorText.innerHTML = rgb;

    if(document.body.style.backgroundColor == "white") document.body.style.color = "black";
}

const bodyBackChangeKeyUp = (e) => {
    if(e.key == "Enter") setInterval(changeBackgroundColor, 1000);
}