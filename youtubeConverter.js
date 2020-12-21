const btnMp4 = document.querySelector(".btn4Nav1");
const btnMp3 = document.querySelector(".btn3Nav1");
const convertBtn = document.querySelector(".mainIBtn");
const urlOutput = document.querySelector(".mainI");


// convert button styling
btnMp3.addEventListener("click",()=>{
    convertBtn.value = "Convert to mp3";
    convertBtn.style.backgroundColor = "black";
    convertBtn.style.color = "red";
    convertBtn.addEventListener("mouseover",()=>{
        convertBtn.style.color = "white";
    })
    convertBtn.addEventListener("mouseleave",()=>{
        convertBtn.style.color = "red";
    })

})
btnMp4.addEventListener("click",()=>{
    convertBtn.value = "Convert to mp4";
    convertBtn.style.backgroundColor = "red";
    convertBtn.style.color = "black";
    convertBtn.addEventListener("mouseover",()=>{
        convertBtn.style.color = "white";
    })
    convertBtn.addEventListener("mouseleave",()=>{
        convertBtn.style.color = "black";
    })
})


// reload when download has been finished
// function reload(){
//     window.location.reload();
// }


convertBtn.addEventListener("click",()=>{
    if(convertBtn.value === "Convert to mp4"){
        if(urlOutput.value == ""){
            alert("Please paste the link adress.")
        }
        else if(urlOutput.value.indexOf("https://www.youtube.com/") == -1){
            alert("Your link adress is wrong, please paste the right link.")
        }
        else{
            console.log(`Url: ${urlOutput.value}`);
            sendUrl(urlOutput.value);
        }
    }
    else if(convertBtn.value === "Convert to mp3"){
        if(urlOutput.value == ""){
            alert("Please paste the link adress.")
        }
        else if(urlOutput.value.indexOf("https://www.youtube.com/") == -1){
            alert("Your link adress is wrong, please paste the right link.")
        }
        else{
            console.log(`Url: ${urlOutput.value}`);
            sendUrl2(urlOutput.value);
        }
    }
})


// if convert to mp4
function sendUrl(url){
    return window.location.href = `http://localhost:3000/converToMp4?URL=${url}`;
}

// if convert to mp3
function sendUrl2(url){
    return window.location.href = `http://localhost:3000/converToMp3?URL=${url}`;
}


