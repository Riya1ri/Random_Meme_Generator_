async function meme(){
    const d = await fetch("https://meme-api.com/gimme/wholesomememes");
    const data = await d.json();

    let imgURL = data.preview[2];

    let img = document.querySelector("#img");
    img.src = imgURL;
    img.style.display = "block";
    document.querySelector("#memeName").innerText = data.title;
    console.log.data;
}