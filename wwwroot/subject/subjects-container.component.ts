require("./subjects-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./subject.actions";
import { pluck } from "../core/pluck";
import { Subject } from "./subject.model";

@Component({
    routes: ["/admin/subjects","/admin/subject/edit/:subjectId"],
    templateUrl: "wwwroot/subject/subjects-container.component.html",
    styleUrls: ["wwwroot/subject/subjects-container.component.css"],
    selector: "subjects-container",
    providers: ["$location","$routeParams","subjectActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "subjectActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, subjectActionCreator: actions.SubjectActionCreator) => {
    var subjectId = $route.current.params.subjectId;
    var promises = [invokeAsync(subjectActionCreator.all)];
    if (subjectId) { promises.push(invokeAsync({ action: subjectActionCreator.getById, params: { id: subjectId } })) };
    return $q.all(promises);
}])
export class SubjectsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private subjectActionCreator: actions.SubjectActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.subjects;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentSubjectAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/subjects");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentSubjectAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/subject/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveSubjectAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["subjectId"]), items: this.entities }) as Subject;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/subjects"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["subjectId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["subjectId"]), items: this.entities }) as Subject;
        } else {
            this.entity = new Subject();
        }
    }

    edit = entity => this.subjectActionCreator.edit(entity);
    remove = entity => this.subjectActionCreator.remove(entity);
    create = entity => this.subjectActionCreator.create();
    addOrUpdate = options => this.subjectActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
