function AutocompleteInput(attributes) {
	attributes = attributes || {};

	if (_.isUndefined(attributes.name)){
		throw new Error("AutocompleteInput: name is undefined");
	}

	if (_.isUndefined(attributes.value)) {
		throw new Error("AutocompleteInput: value is undefined");
	}

	this.name = attributes.name + "_autocomplete_input";
	this.value = attributes.value;

	this.$el = $("<input name='" + this.name + "' class='autocomplete-input' value='" + this.value + "' />");

	_.defaults(attributes, {
		onTextEntry: function() {},
		onCommandEntry: function () {}
	});

	this.onTextEntry = attributes.onTextEntry;
	this.onCommandEntry = attributes.onCommandEntry;
}