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
    const imageContainer = document.querySelector(".image-container");

    // Array of image sources
    const imageSources = [
        "/BlizzNet/websiteB/wwwroot/images/sadboi.png",
        "/BlizzNet/websiteB/wwwroot/images/sad-rolling-cat.gif",
        "/BlizzNet/websiteB/wwwroot/images/blastoise-water.gif"
    ];

    // Loop through image sources and add them 
    imageSources.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "cool pix";
        img.classList.add("profile-image");
        imageContainer.appendChild(img);
    });

    const container = document.getElementById("aboutme-container");

    // Create an AboutMeEntry object properly
    const entry = new AboutMeEntry("Hello. I like playing video games. This site is basically a bunch of random stuff that makes me happy. ;) ");

    // Append the created element to the container
    container.appendChild(entry.createEntryElement());
});
