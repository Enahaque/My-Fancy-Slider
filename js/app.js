const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
];
let imgIndex = 0;
const imgElement = document.getElementById("slider-img");

const timeSetup = setInterval(()=>{
    
    if(imgIndex >= images.length){
        imgIndex = 0;
       
    }
    const imgUrl = images[imgIndex];
    console.log(imgUrl,imgIndex);
    imgElement.setAttribute('src',imgUrl);
    imgIndex++;

} ,1000)

setInterval(() => {
    clearInterval(timeSetup);
}, 15000);


// setInterval(() => {
//     clearInterval(timeSetup)
// }, time);