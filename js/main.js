require(['config'], function(){

    require(['views/app'], function (AppView) {

        window.App = {
            Broadcast:_.extend({},Backbone.Events)
        };

        new AppView();
        
    })

})  