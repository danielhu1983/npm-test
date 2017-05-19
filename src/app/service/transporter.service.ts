import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TransporterService {
	constructor(private _http: Http) {}

	searchNPMByURL(URL: string): Observable<any> {
		console.warn(URL);
		return this._http
               .get(URL)
			   .map((resData: Response) => { return resData.json(); });
	}
}