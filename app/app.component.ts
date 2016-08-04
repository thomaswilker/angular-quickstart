import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'templates/main.html'
})
export class AppComponent { 
	
	title = 'Tour of Heroes';
  	
	constructor() {
		
	}

}

