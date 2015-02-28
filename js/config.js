require.config({
  baseUrl: 'js',
  paths: {
    jquery:    '../bower_components/jquery/dist/jquery',
    backbone:  '../bower_components/backbone/backbone',
    underscore:'../bower_components/underscore/underscore',
    handlebars:'../bower_components/handlebars/handlebars',
    storage:   '../bower_components/backbone.localStorage/backbone.localStorage',
    text:      '../bower_components/requirejs-text/text'
  },
  shim: {
    backbone:{
      deps:['underscore','jquery'],
      exports:'Backbone'
    }
  }
});