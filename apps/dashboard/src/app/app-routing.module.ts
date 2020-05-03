import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: './home/home.module#HomeModule'
		//  () =>
		// import('./home/home.module').then(mod => {
		// 	return mod.HomeModule;
		// })
	},
	{
		path: 'projects',
		loadChildren: () =>
			import('./projects/projects.module').then(mod => {
				return mod.ProjectsModule;
			})
	},
	{
		path: 'customers',
		loadChildren: () =>
			import('./customers/customers.module').then(mod => {
				return mod.CustomersModule;
			})
	},
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' } // "" --> root route
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
