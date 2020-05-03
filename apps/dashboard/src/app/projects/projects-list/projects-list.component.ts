import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
	@Input() projects: Project[]; // @Input means this is a property on this class that we are allowing external forces/Mechanism to basically satisfy, this particular property
	@Input() readonly = false;
	@Output() selected = new EventEmitter();
	@Output() deleted = new EventEmitter();
}
