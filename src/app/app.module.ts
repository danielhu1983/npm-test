import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/my-header.component';
import { MainComponent } from './component/main.component';
import { SearchResultComponent } from './component/search-result.component';
import { SearchBoxComponent } from './component/search-box.component';
import { SearchItemComponent } from './component/search-item.component';
import { AppRoutingModule } from './app.router';
import { TransporterService } from './service/transporter.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		SearchResultComponent,
		SearchBoxComponent,
		SearchItemComponent
	],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		TransporterService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
