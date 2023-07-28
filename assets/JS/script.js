let log = new Log(document.querySelector('.log'));

let char = new Ninja(`${'Ninja'}`);
let monster = new KingZombie();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();

