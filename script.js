const NoBtn = document.getElementById("btn-no");
const YesBtn = document.getElementById("btn-yes");
const title = document.getElementById("title");
const height = window.innerHeight;
const width = window.innerWidth;

YesBtn.addEventListener("click", () => {
    title.innerHTML = "Так і знав &#128540;";
    YesBtn.hidden = true;
    NoBtn.hidden = true;
})

NoBtn.addEventListener("click", () => {
    const randomX = Math.floor(Math.random() * (width - 100));
    const randomY = Math.floor(Math.random() * (height - 40));
    if (!NoBtn.classList.contains("absolute")) NoBtn.classList.add("absolute");
    NoBtn.style.top = `${randomY}px`;
    NoBtn.style.left = `${randomX}px`;
})