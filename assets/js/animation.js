function box_anim(){
    anime({
        targets: '.box .polymorph',
        points: [
            { value: [
                    '300 250, 500 250, 500 450, 300 450',
                    '250 250, 600 250, 500 400, 300 450'] },
            { value: '300 250, 500 250, 500 450, 300 450' },
            { value: '300 250, 450 300, 500 400, 300 450' },
            { value: '250 250, 600 250, 500 400, 350 350' },
            { value: '300 250, 500 250, 500 450, 300 450' },
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true,
    });
}