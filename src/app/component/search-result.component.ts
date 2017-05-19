import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params, DefaultUrlSerializer, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { SearchItemComponent } from './search-item.component';

import { TransporterService } from '../service/transporter.service';

@Component({
	selector: 'search-result',
	styleUrls: ['./search-box.component.css'],
	template:
	`
<div class="package-list-card">
	<ul>
		<li *ngFor="let pa of (packages)">
			<search-item #myPackage [package]=pa>
			</search-item>
		</li>
	</ul>
</div>
	`
})

export class SearchResultComponent implements OnInit {
	@ViewChildren("myPackage") myPackage: QueryList<SearchItemComponent>;
	/*@Input()
	searchKey: string;*/
	searchKey: string;
	packages: Array<any> = [];
	constructor(private _transporter: TransporterService, private _router: Router) { }

	ngOnInit() { 
		let tree: UrlTree = new DefaultUrlSerializer().parse(this._router.url);
		let g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
		let s: UrlSegment[] = g.segments;
		if (s.length !== 2) {
			return;
		}
		this.searchKey = s[1].path;
		let url: string = `https://api.npms.io/v2/search?from=0&q=${this.searchKey}&size=2`;
		this._transporter.searchNPMByURL(url)
		.subscribe((res: any) => {
			console.info(res);
			let result: any[] = res.results;
			result.forEach((item: any) => {
				this.packages.push(item);
			})
		});
	}
}