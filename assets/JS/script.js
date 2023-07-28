let log = new Log(document.querySelector('.log'));

let char = new Ninja();
let monster = new Orche();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();

