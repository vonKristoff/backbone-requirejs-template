require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone:'../bower_components/backbone/backbone',
        underscore:'../bower_components/underscore/underscore',
        Handlebars:'../bower_components/handlebars/handlebars',
        storage:'../bower_components/backbone.localStorage/backbone.localStorage',
        text:'../bower_components/requirejs-text/text'
    },
    shim: {
        backbone:{
            deps:['underscore','jquery'],
            exports:'Backbone'
        },
        Handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['views/app'], function (AppView) {

    window.App = {
        Broadcast:_.extend({},Backbone.Events)
    };

    new AppView();
    
})  