import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchPipe, RedFontDirective, ResourceService, Resource } from '../shared/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    pipes: [SearchPipe],
    providers: [ResourceService],
    templateUrl: 'resource-detail.tmpl.html' 
})
export class ResourceDetailComponent {

    private properties : any;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private router: Router, 
                private resourceService: ResourceService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.resourceService.getResourceById(id).then(resource => {
                let obj = resource.json();
                let map = Object.keys(obj).map(key => ( { key : key, value : obj[key] } ));
                this.properties = map;
            });
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
