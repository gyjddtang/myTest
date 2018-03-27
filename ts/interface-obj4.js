/**
 * Created by MiliGao on 2017/12/31.
 */
function createSquare(config) {
    var newSquare = { color: 'white', area: 400 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log(createSquare({ color: 'red', width: 30, opacity: 0.5 }));