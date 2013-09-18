define(['backbone','collections/collection','views/view','router'], function (Backbone,Collection,View,Router) {

	var AppView = Backbone.View.extend({
		el:'body',
		initialize:function(){

			var self = this;

			this.data = new Collection();
			this.data.fetch().done(function(){

				self.render();

				App.router = new Router();
				Backbone.history.start();
			})
		},
		events:{
			'keyup':'keyUp'
		},
		keyUp:function(e){
			App.Vent.trigger('changeSlide',{ key: e.keyCode })
		},
		render:function(){

			this.view_main = new View({
				collection: this.data
			})
			this.$el.append( this.view_main.$el );
		}

	})

	return AppView
})