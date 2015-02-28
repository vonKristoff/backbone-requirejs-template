define(['backbone','models/model'], function (Backbone, Model){

	var ModelCollection = Backbone.Collection.extend({
		model: Model,
		url:'custom.json'
	})
	return ModelCollection;
})