import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'search-item',
	styleUrls: ['./search-item.component.css'],
	template:
`
<div class="package-table-card">
	<ul *ngIf="package">
		<li>{{package?.package?.name}}</li>
		<li>{{package?.package?.date | date:'mediumDate'}}</li>
		<li>{{package?.package?.description}}</li>
		<li>{{package?.package?.version}}</li>
	</ul>
</div>
<br/>
`
})

export class SearchItemComponent implements OnInit {
	@Input()
	package: any = null;

	constructor() { }

	ngOnInit() { 
		console.warn(this.package);
	}
}