const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

    e.preventDefault();

    const tujuan = document.querySelector(
        this.getAttribute("href")
    );

    if(tujuan){
        tujuan.scrollIntoView({
            behavior: "smooth"
        });
    }

});

});