var trumpet = require('trumpet');
var hexify = function () {
    var tr = trumpet();

    tr.selectAll('.hex', function (step) {
        var hexX = step.getAttribute('data-hex-x');
        var hexY = step.getAttribute('data-hex-y');
        var hexScale = Math.pow(3, (step.getAttribute('data-hex-scale') || 1) - 1);
        var hexSize = step.getAttribute('data-hex-size') * hexScale;
        var hexHeight = Math.sqrt(3) / 2 * hexSize;
        step.setAttribute('data-scale', hexScale);
        step.setAttribute('data-x', Math.floor(hexX * hexSize * 3 / 2));
        step.setAttribute('data-y', Math.floor(hexHeight * (hexY * 2 - Math.abs(hexX % 2))));
    });
    return tr;
};
module.exports = hexify;
