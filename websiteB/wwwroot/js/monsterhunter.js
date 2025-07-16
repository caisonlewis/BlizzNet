document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("mh-container");

    //// Create a wrapper div for styling
    //const videoWrapper = document.createElement("div");
    //videoWrapper.classList.add("video-wrapper");

    //// Embed the Monster Hunter video
    //const iframe = document.createElement("iframe");
    //iframe.width = "560";
    //iframe.height = "315";
    //iframe.src = "https://www.youtube.com/embed/e3kwowSkT-8?si=fBlDLirflWcLFeFD";
    //iframe.title = "YouTube video player";
    //iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    //iframe.referrerPolicy = "strict-origin-when-cross-origin";
    //iframe.allowFullscreen = true;

    //// Add iframe to wrapper and container
    //videoWrapper.appendChild(iframe);
    //container.appendChild(videoWrapper);


    // Array of image sources
    const imageSources = [
        "/images/MH/hrbuild3.jpg",
        "/images/MH/hrbuild2.jpg",
        "/images/MH/hrbuild1.jpg",
        "/images/MH/build1.jpg",
        "/images/MH/build2.jpg",
    ];

    // Loop through image sources and create img elements
    imageSources.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "build pictures";
        img.classList.add("mh-image");
        container.appendChild(img);
    });
});
