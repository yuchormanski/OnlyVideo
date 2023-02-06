window.addEventListener("load", load);

function load() {
    const regex = /https:\/\/www\.youtube\.com\/watch\?v=(?<source>[A-Za-z0-9_\-]+)/g;
    const inputs = document.querySelector('.input-link');
    const inputLink = document.getElementById('youtube-link');
    const playerPanel = document.getElementById('playHere');
    const info = document.getElementById('info');
    const resOption = document.getElementById('select-resolution');
    resOption.addEventListener('change', playVideo);

    function playVideo(e) {

        let theWidth = null;
        let theHeight = null;
        if (resOption.value === '426') {
            theWidth = '426';
            theHeight = '240';
            window.resizeTo(520,300);
        } else if (resOption.value === '640') {
            theWidth = '640';
            theHeight = '360';
        } else if (resOption.value === '854') {
            theWidth = '854';
            theHeight = '480';
        } else if (resOption.value === '1280') {
            theWidth = '1280';
            theHeight = '720';
        } else if (resOption.value === '1920') {
            theWidth = '1920';
            theHeight = '1080';
        }

        const videoCode = regex.exec(inputLink.value)[1]
        const embedLink = `https://www.youtube.com/embed/${videoCode}/?controls=1`
        console.log(embedLink);
        const videoFrame = document.createElement('iframe');
        videoFrame.src = embedLink;
        videoFrame.width = theWidth;
        videoFrame.height = theHeight;
        let panelWidth = Number(theWidth) + 2;
        videoFrame.allowFullscreen = true;
        playerPanel.appendChild(videoFrame);
        playerPanel.style.width = `${theWidth}px`;
        playerPanel.style.margin = '0 auto';
        
        inputs.style.display = 'none';
        info.style.display = 'none';
    }
}
