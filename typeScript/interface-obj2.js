/**
 * Created by MiliGao on 2017/12/31.
 */
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    else if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log(createSquare({ width: 33 }));
