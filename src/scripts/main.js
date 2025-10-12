document.addEventListener('DOMContentLoaded', function(){

    setTimeout(() => {
        const movieSection = document.querySelector('.movie');
        const bgImage = document.querySelector('.movie__bg');

        const videoBg = document.createElement('video');
        videoBg.src = './src/videos/BigBangTrailer.mp4';
        videoBg.autoplay = true;
        videoBg.loop = true;
        videoBg.muted = true;
        videoBg.playsInline = true;
        videoBg.classList.add('movie__bg');
        videoBg.style.position = 'absolute';
        videoBg.style.top = 0;
        videoBg.style.left = 0;
        videoBg.style.width = '100%';
        videoBg.style.height = '100%';
        videoBg.style.objectFit = 'cover';
        videoBg.style.zIndex = 0;
        videoBg.style.opacity = 0;
        videoBg.style.transition = 'opacity 1s ease-in-out';

        if (bgImage){
            bgImage.remove()
        }

        const overlay = document.querySelector('movie__overlay');
        if(overlay){
            movieSection.insertBefore(videoBg, overlay);
        } else {
            movieSection.prepend(videoBg)
        }

        if (bgImage){
            bgImage.style.transition = 'opacity 1s ease-in-out';
            bgImage.style.opacity = 0;
            setTimeout(() => bgImage.remove(), 1000)
        }

        requestAnimationFrame(() => {
            videoBg.style.opacity = 1;
        })
    }, 5000)
})