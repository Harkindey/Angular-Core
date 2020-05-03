import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
	@Input() projects: Project[]; // @Input means this is a property on this class that we are allowing external forces/Mechanism to basically satisfy, this particular property
	@Input() readonly = false;
	constructor() {}

	ngOnInit(): void {}
}
