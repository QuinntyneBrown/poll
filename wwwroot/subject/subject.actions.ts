import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class SubjectActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, subjectService, guid) {
        super($location,subjectService,dispatcher,guid,AddOrUpdateSubjectAction,AllSubjectsAction,RemoveSubjectAction,SetCurrentSubjectAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateSubjectSuccessAction(options.entity));

	currentSubjectRemoved = () => this.dispatcher.dispatch(new CurrentSubjectRemovedAction());
}


export class AddOrUpdateSubjectAction { constructor(public id, public entity) { } }

export class AllSubjectsAction { constructor(public id, public entities) { } }

export class RemoveSubjectAction { constructor(public id, public entity) { } }

export class SubjectsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSubjectAction { constructor(public entity) { } }

export class AddOrUpdateSubjectSuccessAction { constructor(public entity) { } }

export class CurrentSubjectRemovedAction { constructor() { } }
