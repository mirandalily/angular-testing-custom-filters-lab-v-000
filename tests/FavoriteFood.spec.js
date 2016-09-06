describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter favorite foods correctly', function() {
		var testList = [{
			name: 'Miranda',
			favoriteFood: 'Pizza'
		}, {
			name: 'Stuart',
			favoriteFood: 'Pasta'
		}, {
			name: 'Matt',
			favoriteFood: 'Sandwiches'
		}];

		var results = $filter('favoriteFood')(testList, 'Pizza');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Miranda')''
	});
});
