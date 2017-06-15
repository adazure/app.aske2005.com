var observable = require("data/observable");

exports.loaded = function (args) {

    args.object.bindingContext = new observable.fromObject({
        items: [
            { url: '~/assets/images/athlets.png' },
            { url: '~/assets/images/athlets.png' },
            { url: '~/assets/images/athlets.png' }

        ]
    });


}