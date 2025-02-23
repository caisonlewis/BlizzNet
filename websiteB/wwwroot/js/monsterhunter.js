document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("mh-container");

    // Create a wrapper div for styling
    const videoWrapper = document.createElement("div");
    videoWrapper.classList.add("video-wrapper");

    // Embed the Monster Hunter video
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube.com/embed/e3kwowSkT-8?si=fBlDLirflWcLFeFD";
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    // Add iframe to wrapper and container
    videoWrapper.appendChild(iframe);
    container.appendChild(videoWrapper);
});
