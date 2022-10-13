window.onload = function (){
    let postList = document.getElementById("post-list");
    let postObjects = [
        {name: "Gabi", title: "Afaceri", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"},
        {name: "Iustin", title: "Business", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"},
        {name: "Denisa", title: "Matematica", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"},
        {name: "Daria", title: "Razboi", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"}
    ]
    let postsDiv = "";
    for (let post of postObjects){
        postsDiv += "<li><div class='card'><i class=\"fa-solid fa-user fa-2x\"></i>" +
            "<h1 class='post-name'>"+post.name+"</h1>"
            +"<h2>"+post.title+"</h2>"
            +"<p><span>"+post.description +"</span></p></div></li>"
    }
    console.log(postsDiv);
    postList.innerHTML = postsDiv;
    console.log(postList);
}

