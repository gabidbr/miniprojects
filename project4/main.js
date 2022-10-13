window.onload = function (){
    let flags = document.getElementById("flags");
    let flagList = [
        {name: "Italy", url: "img.png"},
        {name: "Romania", url: "img_1.png"},
        {name: "Kazakhstan", url: "img_2.png"}
    ]
    let flagsDiv = "";
    for (let flag of flagList){
        flagsDiv += "<li><img onmouseover='showName(this)' src='" +flag.url+"' width='150px'  alt='flag'/></li>"
    }
    console.log(flagsDiv);
    flags.innerHTML = flagsDiv;
}

function showName(x) {
    let flagName = document.getElementById("flag-name");

}
