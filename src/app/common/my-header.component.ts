import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-header',
	template:
	`
<header>
	<a href="#">
    	<div class="logo"></div>
    </a>
</header>
	`
})

export class HeaderComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}