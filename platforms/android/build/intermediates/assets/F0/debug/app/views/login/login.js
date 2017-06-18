var page, userform, loading;
var frameModule = require("ui/frame");

exports.loaded = function (args) {
    page = args.object;
    userform = page.getViewById('userform');
    loading = page.getViewById('loading');
    loading.visibility = "collapsed";
}

exports.login = function () {
    userform.visibility = "collapsed";
    loading.visibility = "visible";

    frameModule.topmost().navigate({moduleName:'./views/home/home',backstackVisible:true,clearHistory:true});
}