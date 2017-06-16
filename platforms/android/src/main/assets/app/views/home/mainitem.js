exports.loaded = function(args){

    var data = args.object;
    var url = data.url;
    var title = data.title;
    var description = data.description;

    console.log(title);
    // Elements

    var elImage = data.getViewById('image');
    var elTitle = data.getViewById('title');
    var elDescription = data.getViewById('description');

    elImage.src = url;
    elTitle.text = title;
    elDescription.text = description;

}