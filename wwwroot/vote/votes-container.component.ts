require("./votes-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./vote.actions";
import { pluck } from "../core/pluck";
import { Vote } from "./vote.model";

@Component({
    routes: ["/admin/votes","/admin/vote/edit/:voteId"],
    templateUrl: "wwwroot/vote/votes-container.component.html",
    styleUrls: ["wwwroot/vote/votes-container.component.css"],
    selector: "votes-container",
    providers: ["$location","$routeParams","voteActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "voteActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, voteActionCreator: actions.VoteActionCreator) => {
    var voteId = $route.current.params.voteId;
    var promises = [invokeAsync(voteActionCreator.all)];
    if (voteId) { promises.push(invokeAsync({ action: voteActionCreator.getById, params: { id: voteId } })) };
    return $q.all(promises);
}])
export class VotesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private voteActionCreator: actions.VoteActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.votes;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentVoteAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/votes");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentVoteAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/vote/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveVoteAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["voteId"]), items: this.entities }) as Vote;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/votes"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["voteId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["voteId"]), items: this.entities }) as Vote;
        } else {
            this.entity = new Vote();
        }
    }

    edit = entity => this.voteActionCreator.edit(entity);
    remove = entity => this.voteActionCreator.remove(entity);
    create = entity => this.voteActionCreator.create();
    addOrUpdate = options => this.voteActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
