import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Resource {
	id : number;
	name : string;
}


@Injectable()
export class ResourceService {
	
	private api = 'https://www.openlearnware.de/olw-rest-db/api';
	private resourceListUrl = this.api + '/resource-overview/filter/index/all?pick=id&pick=name';
	private resourceDetailUrl = this.api + '/resource-detailview/index/';

	constructor(private http: Http) {

	}

	getResourceById(id : number) : any {
		return this.http.get(this.resourceDetailUrl + id).toPromise();
	}

	getResources(term : string = '') : Observable<Resource[]> {
		return this.http.get(this.resourceListUrl+`&query=${term}`).map(this.extractResourceNames).catch(this.handleError);
	}

	private extractResourceNames(res) {
		return res.json().map(r => ({ id : r.id, name : r.name }) ) || [];
	}

	private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    // We'd also dig deeper into the error to get a better message
	    let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error(errMsg); // log to console instead
	    return Observable.throw(errMsg);
  	}
}

