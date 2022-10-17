let flagList = [
    {name: "Italy", url: "img.png"},
    {name: "Romania", url: "img_1.png"},
    {name: "Kazakhstan", url: "img_2.png"}
]

window.onload = function (){
    let flags = document.getElementById("flags");

    let flagsDiv = "";
    for (let flag of flagList){
        flagsDiv += '<li><img class="image" data-country="' + flag.name + '" onmouseover="showName(\'' + flag.name + '\')" onmouseout="hideName()" src="' + flag.url + '"  width="150px" alt="flag"/></li>';
    }
    console.log(flagsDiv);
    flags.innerHTML = flagsDiv;
}

function showName(flag) {
    let flagName = document.getElementById("flag-name");
    flagName.innerHTML = flag;
}

function hideName() {
    let flagName = document.getElementById("flag-name");
    flagName.innerHTML = "";
}

// $('.image').data('c')