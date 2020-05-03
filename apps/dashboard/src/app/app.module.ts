import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@workshop/material';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@workshop/ui-login';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		NxModule.forRoot(),
		BrowserAnimationsModule,
		FormsModule,
		MaterialModule,
		UiLoginModule,
		AppRoutingModule, // formerly RouterModule.forRoot([], {intialNavigation: 'enabled'})
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
