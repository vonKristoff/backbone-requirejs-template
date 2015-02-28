define(['backbone','views/single'], function (Backbone, SingleView){

	var View = Backbone.View.extend({
		tagName:'ul',
		className:'ref',
		initialize:function(){
			
			this.total = this.collection.length;
			this.renderAll();	
		},
		renderAll:function(){

			this.collection.each(this.render,this)
		},
		render:function(Model){
			
			
			var single = new SingleView({model:Model})

			this.$el.append( single.render().el )

			return this
		}
	})
	return View;
})