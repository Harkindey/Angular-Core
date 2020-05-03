import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	primaryColor = 'red';
	projects$;
	// Observable<Project[]>; //Project$ --> this is a project but it is a observable stream
	selectedProject: Project;
	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.getProjects();
		this.resetProject();
	}

	getProjects() {
		// this.projectsService
		// 	.all()
		// .pipe({
		// 	filter((result: any) => result.approved)
		// })
		// .subscribe((result: any) => (this.projects = result));

		this.projects$ = this.projectsService.all();
	}

	deleteProjects(project) {
		console.log(project);
		this.projectsService
			.delete(project.id)
			.subscribe(result => this.getProjects());
	}

	saveProject(project) {
		if (!project.id) {
			this.createProject(project);
		} else {
			this.updateProject(project);
		}
	}

	createProject(project) {
		this.projectsService.create(project).subscribe(result => {
			this.getProjects();
			this.resetProject();
		});
	}

	updateProject(project) {
		this.projectsService.update(project).subscribe(result => {
			this.getProjects();
			this.resetProject();
		});
	}

	selectProject(project) {
		console.log(project);
		this.selectedProject = project;
	}

	resetProject() {
		const emptyProject: Project = {
			id: null,
			title: '',
			details: '',
			percentComplete: 0,
			approved: false
		};
		this.selectProject(emptyProject);
	}

	// selectProject($event,project, echo) {
	// 	this.selectedProject = project;
	//	console.log($event, project, echo)
	// }

	cancel() {
		this.resetProject();
	}
}
