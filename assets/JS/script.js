let char = new Ninja(`${"Ninja"} ${"Eli-samma"}`);
let monster = new Orche();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);

stage.start();

