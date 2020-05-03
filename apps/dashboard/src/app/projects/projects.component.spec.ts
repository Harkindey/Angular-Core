import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@workshop/material';

import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsComponent } from './projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, DebugElement } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', () => {
	//Create my local test memebers
	let component: ProjectsComponent;
	let fixture: ComponentFixture<ProjectsComponent>; // holds component ypu want to test
	let de: DebugElement;
	let projectsService: ProjectsService;

	const mockProjectsService = {
		// MOCK YOUR SELF OUT
	};

	const emptyProject: Project = {
		id: null,
		title: '',
		details: '',
		percentComplete: 0,
		approved: false
	};

	// Instantiate Test Bed
	beforeEach(() => {
		fixture = TestBed.configureTestingModule({
			declarations: [
				ProjectsComponent,
				ProjectsListComponent,
				ProjectsDetailsComponent
			],
			providers: [{ provide: ProjectsService, useValue: mockProjectsService }],
			imports: [
				MaterialModule,
				FormsModule,
				HttpClientModule,
				BrowserAnimationsModule
			]
		}).createComponent(ProjectsComponent); // Instantiate the fixture

		// Get THE compnent instance
		component = fixture.componentInstance;
		// Get the debug element aka the element the component lives on
		de = fixture.debugElement;
		// GET service instance
		projectsService = de.injector.get(ProjectsService);
		// manually force change detection
		fixture.detectChanges();
	});

	it('should have a primary color of red', () => {
		expect(component.primaryColor).toBe('green');
	});

	it('should select a project', () => {
		component.selectProject(emptyProject);
		expect(component.selectProject).toBe(emptyProject);
	});

	it('should display primaryColor', () => {
		const h1 = de.query(By.css('h1'));
		expect(h1.nativeElement.innerText).toBe('green'); //should fail
	});

	it('should update h1 to new primaryColor', () => {
		const h1 = de.query(By.css('h1'));
		component.primaryColor = 'black';
		fixture.detectChanges(); // update dom den test , just like rerender in react testing
		expect(h1.nativeElement.innerText).toBe('black');
	});
});
