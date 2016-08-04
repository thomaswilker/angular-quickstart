import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchPipe, RedFontDirective, ResourceService, Resource } from '../shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    pipes: [SearchPipe],
    providers: [ResourceService],
    moduleId: module.id,
    directives : [ROUTER_DIRECTIVES],
    templateUrl : 'resource-list.tmpl.html'
})
export class ResourceListComponent {

    resources$;
    input$ = new Subject();

    onSelect(resource : Resource) {
        this.router.navigate(['/resource', resource.id]);
    }

    constructor(private resourceService: ResourceService, private route: ActivatedRoute, private router: Router) {
        const term$ = this.input$.map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value);
        const clear$ = term$.filter(term => term.length < 3);
        const results$ = term$.debounceTime(100).filter(t => t.length > 2).switchMap(t => this.resourceService.getResources(t));
        this.resources$ = Observable.merge(clear$.mapTo([]), results$).startWith([]);
    }

}
