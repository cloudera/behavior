/*
---
name: Element.Data.Specs
description: n/a
requires: [Behavior/Element.Data]
provides: [Element.Data.Specs]
...
*/

(function(){
	var target = new Element('div', {
		'data-filters': 'Test1 Test2',
		'data-json':'{"foo": "bar", "nine": 9, "arr": [1, 2, 3]}'
	});


	describe('Element.Data', function(){

		it('should get a data property from an element', function(){
			expect(target.getData('filters')).toBe('Test1 Test2');
		});

		it('should set a data property on an element', function(){
			target.setData('foo', 'bar');
			expect(target.getData('foo')).toBe('bar');
		});

		it('should read a property as JSON', function(){
			var json = target.getJSONData('json');
			expect(json.foo).toBe('bar');
			expect(json.nine).toBe(9);
			expect(json.arr).toEqual([1,2,3]);
		});

		it('should set a property as JSON', function(){
			target.setJSONData('json2', {
				foo: 'bar', nine: 9, arr: [1,2,3]
			});
			var json = target.getJSONData('json2');
			expect(json.foo).toBe('bar');
			expect(json.nine).toBe(9);
			expect(json.arr).toEqual([1,2,3]);
		});

		it('should return null for a non-defined property', function(){
			expect(target.getData('baz')).toBeNull();
		});

	});

})();