define(['backbone'], function (Backbone){

	var Model = Backbone.Model.extend({
		defaults:{
			title:'default',
			type:'note'
		}
	})
	return Model;
})