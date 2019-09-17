function AddController(data) {
	this.list = data.listItems;
	console.log(this.list);
	this.itemDesc = '';
	this.itemName = '';
	this.addItem = function () {
		var item = {name: this.itemName, desc:this.itemDesc, id: this.list.length, active: true};
		this.list.push(item);
		console.log(this.list);
	}
}
angular.module('todo').component('todoAdd', {
	templateUrl: 'todo/add.html',
	//template  : '<p>text: <strong>{{vm.test}}</strong></p>',
	controller: ['data',AddController],
	bindings  : {
		/*itemName: '&',
		itemDesc : '&',*/
	}
});
