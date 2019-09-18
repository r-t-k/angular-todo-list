angular.module('todo', []);


angular.module('todo').value('data', {
	listItems: [],
	sessionImported: false
});


angular.module('todo').service('sessionData', function() {
	this.importSession = function () {
		let sessionData = JSON.parse(sessionStorage.getItem('todoListData'));
		console.log(sessionData);
		if (sessionData) {
			return sessionData.listItems;
		}
		else {
			return false;
		}

	};
});

function StorageController(data) {

	this.list = data.listItems;
	this.store = function () {
		sessionStorage.setItem('todoListData', JSON.stringify(data));
	};
}

angular.module('todo').component('todoStorage', {
	templateUrl: 'todo/storage.html',
	//template  : '<p>text: <strong>{{vm.test}}</strong></p>',
	controller : ['data', StorageController],
});
