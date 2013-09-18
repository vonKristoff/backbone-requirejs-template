define(['backbone','models/model'], function (Backbone, Model){

	var ModelCollection = Backbone.Collection.extend({
		model: Model,
		url:'*.json'
	})
	return ModelCollection;
})