function ListController(data, sessionData) {
	var session = sessionData.importSession();
	console.log(session);
if(session !== false){
	data.listItems = session;
}
	this.list = data.listItems;

}

angular.module('todo').component('todoList', {
	templateUrl: 'todo/list.html',
	//template  : '<p>text: <strong>{{vm.test}}</strong></p>',
	controller : ['data','sessionData', ListController],
	bindings   : {
		items: '&',
		title: '@',
	}
});

function EditController(data) {
	this.list = data.listItems;
	this.clicked = true;
	this.itemName = '';
	this.itemDesc = '';
	this.toggle = function () {
		switch (this.clicked) {
			case true:
				this.clicked = false;
				break;
			case false:
				this.clicked = true;
				break;
		}
	};
	this.save = function () {
		var id = this.list[this.itemId].id;
		this.list[this.itemId] = {name: this.itemName, desc: this.itemDesc, id: id, active: true }
	}
}
angular.module('todo').component('todoEdit', {
	templateUrl: 'todo/edit.html',
	//template  : '<p>text: <strong>{{vm.test}}</strong></p>',
	controller : ['data', EditController],
	bindings   : {
		itemId: '@',
	}
});
function DeleteController(data) {
	this.list = data.listItems;
	this.clicked = true;
	this.toggle = function () {
		switch (this.clicked) {
			case true:
				this.clicked = false;
				break;
			case false:
				this.clicked = true;
				break;
		}
	};
	this.delete = function () {
		this.list[this.itemId].active = false;
	}
}

angular.module('todo').component('todoDelete', {
	templateUrl: 'todo/delete.html',
	//template  : '<p>text: <strong>{{vm.test}}</strong></p>',
	controller : ['data', DeleteController],
	bindings   : {
		itemId: '@',
	}
});
