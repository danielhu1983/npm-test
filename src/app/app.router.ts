import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main.component';
import { SearchResultComponent } from './component/search-result.component';


const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'result', component: SearchResultComponent },
	{ path: "result/:linkfield", component: SearchResultComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

