describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all of the vowels') function() {
		var results = $filter('removeAllVowels')('hellothere');

		expect(results).toEqual('hllthr')
	});

});
