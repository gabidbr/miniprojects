let postObjects = [
    {
        name: "Gabi",
        title: "Afaceri",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"
    },
    {
        name: "Iustin",
        title: "Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"
    },
    {
        name: "Denisa",
        title: "Matematica",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"
    },
    {
        name: "Daria",
        title: "Razboi",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam distinctio ducimus laborum mollitia sunt? A atque dolor eos laborum odio sed ullam? Blanditiisconsequatur harum iusto nisi odio ut vel?"
    }
]
let postsDiv = "";

function getPosts() {
    setTimeout(() => {
        postObjects.forEach((post, index) => {
            postsDiv += '<li><div class="card"><i class="fa-solid fa-user fa-2x"></i><h1 class="post-name">' + post.name + '</h1>'
                + "<h2>" + post.title + "</h2>"
                + "<p><span>" + post.description + "</span></p></div></li>"
        })
        document.getElementById("post-list").innerHTML = postsDiv;
    }, 500);
}

function createPost() {
    setTimeout(() => {
        let post = {
            name: document.getElementById("post-name").value,
            title: document.getElementById("post-title").value,
            description: document.getElementById("post-description").value
        }
        let postDiv = '<li><div class="card"><i class="fa-solid fa-user fa-2x"></i><h1 class="post-name">' + post.name + '</h1>'
            + "<h2>" + post.title + "</h2>"
            + "<p><span>" + post.description + "</span></p></div></li>";
        postsDiv=postDiv+ postsDiv;

        document.getElementById("post-list").innerHTML = postsDiv;
    }, 1000);
}

function regeneratePosts(){
        createPost();
}


getPosts();