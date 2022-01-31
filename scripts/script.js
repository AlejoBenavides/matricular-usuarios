const video1 = document.getElementById("video1")
video1.addEventListener("click", () => {
    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")
    let img2a = document.getElementById("img2a")
    img1.style.display="none"
    img2.style.display="block"
    img2a.style.display="block"
    
})

const img2a = document.getElementById("img2a")
img2a.addEventListener("click", () => {
    let video1 = document.getElementById("video1")
    let video2 = document.getElementById("video2")
    let img2a = document.getElementById("img2a")
    let img2 = document.getElementById("img2")
    let img3 = document.getElementById("img3")
    let img3a = document.getElementById("img3a")
    video1.style.display="none"
    video2.style.display="block"
    img2a.style.display="none"
    img2.style.display="none"
    arrow2.style.display="none"
    img3.style.display="block"
    img3a.style.display="block"
    video1.pause()
    video2.play()
})

const img3a = document.getElementById("img3a")
img3a.addEventListener("click", () => {
    let video2 = document.getElementById("video2")
    let video3 = document.getElementById("video3")
    let img3a = document.getElementById("img3a")
    let img3 = document.getElementById("img3")
    let img4 = document.getElementById("img4")
    let img4a = document.getElementById("img4a")
    video2.style.display="none"
    video3.style.display="block"
    img3a.style.display="none"
    img3.style.display="none"
    arrow3.style.display="none"
    img4.style.display="block"
    img4a.style.display="block"
    video2.pause()
    video3.play();
})

const img4a = document.getElementById("img4a")
img4a.addEventListener("click", () => {
    let video3 = document.getElementById("video3")
    let video4 = document.getElementById("video4")
    let img4a = document.getElementById("img4a")
    let img4 = document.getElementById("img4")
    let img5 = document.getElementById("img5")
    let img5a = document.getElementById("img5a")
    let inputImg5 = document.getElementById("input-img5")
    video3.style.display="none"
    video4.style.display="block"
    img4a.style.display="none"
    img4.style.display="none"
    arrow4.style.display="none"
    img5.style.display="block"
    img5a.style.display="block"
    inputImg5.style.display="block"
    video3.pause()
    video4.play();
})


const img5a = document.getElementById("img5a")
img5a.addEventListener("click", () => {
    let video4 = document.getElementById("video4")
    let video5 = document.getElementById("video5")
    let img5a = document.getElementById("img5a")
    let img5 = document.getElementById("img5")
    let img6 = document.getElementById("img6")
    let img6a = document.getElementById("img6a")
    let inputImg5 = document.getElementById("input-img5")
    let inputImg6a = document.getElementById("input-img6a")
    let inputImg6b = document.getElementById("input-img6b")
    let inputImg6c = document.getElementById("input-img6c")
    let inputImg6d = document.getElementById("input-img6d")
    let inputImg6e = document.getElementById("input-img6e")
    let inputImg6f = document.getElementById("input-img6f")
    video4.style.display="none"
    video5.style.display="block"
    img5a.style.display="none"
    img5.style.display="none"
    arrow5.style.display="none"
    img6.style.display="block"
    img6a.style.display="block"
    inputImg5.style.display="none"
    inputImg6a.style.display="block"
    inputImg6b.style.display="block"
    inputImg6c.style.display="block"
    inputImg6d.style.display="block"
    inputImg6e.style.display="block"
    inputImg6f.style.display="block"
    video4.pause()
    video5.play();
})

const img6a = document.getElementById("img6a")
img6a.addEventListener("click", () => {
    let video5 = document.getElementById("video5")
    let video6 = document.getElementById("video6")
    let img6 = document.getElementById("img6")
    let img6a = document.getElementById("img6a")
    let img7 = document.getElementById("img7")
    let inputImg6a = document.getElementById("input-img6a")
    let inputImg6b = document.getElementById("input-img6b")
    let inputImg6c = document.getElementById("input-img6c")
    let inputImg6d = document.getElementById("input-img6d")
    let inputImg6e = document.getElementById("input-img6e")
    let inputImg6f = document.getElementById("input-img6f")
    let btnStart = document.getElementById("btn-start")
    video5.style.display="none"
    video6.style.display="block"
    img6.style.display="none"
    img6a.style.display="none"
    inputImg6a.style.display="none"
    inputImg6b.style.display="none"
    inputImg6c.style.display="none"
    inputImg6d.style.display="none"
    inputImg6e.style.display="none"
    inputImg6f.style.display="none"
    img7.style.display="block"
    btnStart.style.display="block"
    video5.pause()
    video6.play();
})

const btnStart = document.getElementById("btn-start")
btnStart.addEventListener("click", () => {
    location.reload();
})