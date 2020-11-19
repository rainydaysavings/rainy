function anim() {
    const element = document.querySelector('.text-animation');
    const lettersHtml = element.textContent.replace(/\S/g, '<span class="letter">$&</span>');
    element.innerHTML = `<div class="letters">${lettersHtml}</div><span class="cursor"></span>`;
    element.style.display = 'block';

    const letters = Array.from(element.querySelectorAll('.letter'));
    const TYPE_AFTER_MS = 2_000;
    const JUMP_AFTER_MS = 250;

    const blink = anime({
        targets: '.text-animation .cursor',
        loop: true,
        duration: 750,
        opacity: [
            {value: [1, 1]},
            {value: [0, 0]}
        ],
    });

    anime.timeline()
        .add({
            targets: '.text-animation .cursor',
            translateX: letters.map((letter, i) =>
                ({value: letter.offsetLeft + letter.offsetWidth, duration: 1, delay: i === 0 ? 0 : JUMP_AFTER_MS}))
        }, TYPE_AFTER_MS)
        .add({
            targets: '.text-animation .letter',
            opacity: [0, 1],
            duration: 1,
            delay: anime.stagger(JUMP_AFTER_MS),
            changeBegin: () => {
                blink.reset();
                blink.pause();
            },
            changeComplete: () => {
                blink.restart();
            }
        }, TYPE_AFTER_MS)
}