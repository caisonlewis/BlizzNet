class AboutMeEntry {
    constructor(aboutme) {
        this.aboutme = aboutme;
    }

    createEntryElement() {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("aboutme-entry"); // Use a new CSS class for styling

        let desc = document.createElement("p");
        desc.classList.add("entry-text");
        desc.textContent = this.aboutme;

       
        entryDiv.appendChild(desc);

        return entryDiv;
    }

}
document.addEventListener("DOMContentLoaded", function () {

    // doggo img
    let img = document.createElement("img");
    img.src = "/BlizzNet/websiteB/wwwroot//images/animalcrossingmusicfeels.png";
    img.alt = "A picture of a sad boi";

    // ai pfp img
    let img2 = document.createElement("img2");
    img2.src = "/BlizzNet/websiteB/wwwroot//images/imgofme.png";
    img2.alt = "ai pic of me";

    // wario img
    let img3 = document.createElement("img3");
    img3.src = "/BlizzNet/websiteB/wwwroot//images/wario.png";
    img3.alt = "wario";

    // Add CSS class for styling
    img.classList.add("profile-image");
    img2.classList.add("ai-me");
    img3.classList.add("wario");

    // Append image to container
    document.querySelector(".image-container").appendChild(img);
    document.querySelector(".image-container").appendChild(img2);
    document.querySelector(".image-container").appendChild(wario);

    const container = document.getElementById("aboutme-container");

    // Create an AboutMeEntry object properly
    const entry = new AboutMeEntry("Hi, I'm Blizz. I like playing video games and programming! This site is basically a dump bin for whatever I feel like sharing! Stick around for a while and see what kind of weird stuff I'm into!");

    // Append the created element to the container
    container.appendChild(entry.createEntryElement());
});