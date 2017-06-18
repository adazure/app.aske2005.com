var observable = require("data/observable");
var array = require("tns-core-modules/data/observable-array").ObservableArray;

exports.loaded = function (args) {

    args.object.bindingContext = new observable.fromObject({
        items: new array([
            {id:0, url: '~/assets/images/aboutus.png',title:"ABOUT US", description:"Kulübünüz hakkında insanların okuyacağı bir şeyler ekleyin" },
            {id:1, url: '~/assets/images/athlets.png',title:"ATHLETES", description:"Kulübünüzdeki sporcuları buradan ekleyebilirsiniz" },
            {id:2, url: '~/assets/images/photo.png',title:"PHOTO GALLERY", description:"Külübünüzü tanıtan fotoğrafları ekleyebilirsiniz" }
            
        ])
    });


}