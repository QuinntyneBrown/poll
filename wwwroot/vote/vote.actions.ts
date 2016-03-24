import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class VoteActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, voteService, guid) {
        super($location,voteService,dispatcher,guid,AddOrUpdateVoteAction,AllVotesAction,RemoveVoteAction,SetCurrentVoteAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateVoteSuccessAction(options.entity));

	currentVoteRemoved = () => this.dispatcher.dispatch(new CurrentVoteRemovedAction());
}


export class AddOrUpdateVoteAction { constructor(public id, public entity) { } }

export class AllVotesAction { constructor(public id, public entities) { } }

export class RemoveVoteAction { constructor(public id, public entity) { } }

export class VotesFilterAction { constructor(public id, public term) { } }

export class SetCurrentVoteAction { constructor(public entity) { } }

export class AddOrUpdateVoteSuccessAction { constructor(public entity) { } }

export class CurrentVoteRemovedAction { constructor() { } }
