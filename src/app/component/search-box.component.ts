import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs';

import { PackageSearchInfo, PackageItem } from '../model/package.model';
import { TransporterService } from '../service/transporter.service';

@Component({
	selector: 'search-box',
	styleUrls: ['./search-box.component.css'],
	template:
	`
<div class="search">
	<div>
		<span>
			<input #searchBox id="search-box" (keyup)="search(searchBox.value)" name = "name" [(ngModel)]="inputstring" #name="ngModel"/>
		</span>
		<span>
			<button isSubmit="false" (click)="onSearch()">Search</button>
		</span>
	</div>
	<div>
		<div *ngFor="let package of packages | async"
			class="search-result" >
		<span>{{package.value}}</span>
		<span>{{package.data?.description}}</span>
		</div>
	</div>
</div>
	`
})

export class SearchBoxComponent implements OnInit {
	@Output() searchstring: EventEmitter<string> = new EventEmitter();

	packages: Observable<PackageItem[]>;
	searchTerms: Subject<string> = new Subject<string>();
	private inputstring: string = '';
	constructor(private _transporter: TransporterService,
				private _router: Router) { }

	ngOnInit() { 
		this.setObs();
	}

	search(term: string): void {
		this.searchTerms.next(term);
	}

	onSearch() {
		if (!this.inputstring) {
			return;
		}
		this.packages = Observable.of<PackageItem[]>([]);
		this.setObs();
		this.searchstring.emit(this.inputstring);
		this._router.navigate([`/result/${this.inputstring}`]);
	}

	private setObs(): void {
		this.packages = 
		this.searchTerms.debounceTime(300)
			.filter(data => data.trim().length > 0)
			.distinctUntilChanged()
			.switchMap((data: string) => {
				console.warn('test');
				let URL: string = `https://ac.cnstrc.com/autocomplete/${data}?autocomplete_key=CD06z4gVeqSXRiDL2ZNK&&query=${data}`;
				return this._transporter.searchNPMByURL(URL)
				.map((res: any) => {
					console.error(res.sections.packages);
					return res.sections.packages.concat(res.sections.standard);
				});
			});
	}
}