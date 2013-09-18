define(['backbone'],function(Backbone){
	
	var Router = Backbone.Router.extend({

		routes:{
			'':'home'
		},
		home:function(){
			App.Vent.trigger('init');		// you can also pass an {object:true}
		}

	})
	return Router

})