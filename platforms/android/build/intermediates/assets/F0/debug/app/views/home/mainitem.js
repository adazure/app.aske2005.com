var animation = require("ui/animation");
var enums = require("ui/enums");
exports.loaded = function (args) {

    var data = args.object;
    var url = data.url;
    var title = data.title;
    var description = data.description;
    var index = data.index;

    // Elements

    var elImage = data.getViewById('image');
    var elTitle = data.getViewById('title');
    var elDescription = data.getViewById('description');

    elImage.src = url;
    elTitle.text = title;
    elDescription.text = description;

    var cube = enums.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1);
    
    

    elImage.animate({
        delay:index * 100,
        translate: { x: 0, y: 0 },
        opacity: .6,
        duration: 500,
        curve: cube
    }).then(function () {
        elTitle.animate({
            translate: { x: 0, y: 0 },
            duration: 200,
            curve: cube,
            opacity: 1
        }).then(function () {
            elDescription.animate({
                duration: 200,
                curve: cube,
                translate: { x: 0, y: 0 },
                opacity: 1
            });
        });
    });


}