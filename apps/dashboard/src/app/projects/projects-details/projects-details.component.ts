import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-projects-details',
	templateUrl: './projects-details.component.html',
	styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent implements OnInit {
	@Input() project;
	@Output() saved = new EventEmitter();
	@Output() cancelled = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}
}
