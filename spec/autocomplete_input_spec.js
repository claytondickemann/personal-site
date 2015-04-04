describe("AutocompleteInput", function() {
	var subject;
	var name;
	var value;
	var onTextEntrySpy;
	var onCommandEntrySpy;
	beforeEach(function() {
		name = "test";
		value = "test value";
		onTextEntrySpy =  sinon.spy();
		onCommandEntrySpy = sinon.spy();
		subject = new AutocompleteInput({
			name: name,
			value: value,
			onTextEntry: onTextEntrySpy,
			onCommandEntry: onCommandEntrySpy
		});
	});

	it ("requires a name attribute", function () {
		expect(function() {
			new AutocompleteInput({ value: value});
		}).to.throw("AutocompleteInput: name is undefined");
	});

	it ("requires a value", function() {
		expect( function() {
			new AutocompleteInput ({name: name});
		}).to.throw("AutocompleteInput: value is undefined");
	});

	it("has a name with'_autocomplete_input' appended", function() {
		expect(subject.name).to.equal(name + "_autocomplete_input");
	});

	it("has a value", function() {
		expect(subject.value).to.equal(value);
	});

	it("has an element", function() {
	  expect(subject.$el).to.exist;
	  expect(subject.$el).to.have.class("autocomplete-input");
	  expect(subject.$el).to.have.attr("name", name + "_autocomplete_input");
	  expect(subject.$el).to.have.attr("value", value);
	});

	it("accepts a callback for command entry", function() {
		expect(subject.onCommandEntry).to.equal(onCommandEntrySpy);
	});

	describe("default callbacks", function() {
		beforeEach(function() {
			subject = new AutocompleteInput({
				name: name,
				value: value
			});
		});

		it("has a default onTextEntry handler", function() {
			expect(subject.onTextEntry).to.be.a("function");
		});

		it("has a default onCommandEntry handler", function() {
			expect(subject.onCommandEntry).to.be.a("function");
		});
	})
});