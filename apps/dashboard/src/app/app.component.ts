import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild('sidenav') localSideNav;
	// query the DOM, find sidenav and assgn it to localSideNav

	title = 'Angular Core Workshop';

	toggle(sidenav) {
		//or sidenav.toggle()
		this.localSideNav.toggle();
	}
}
