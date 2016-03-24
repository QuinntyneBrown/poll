require("./subject-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/subject/subject-list.component.html",
	styleUrls: ["wwwroot/subject/subject-list.component.css"],
    selector: "subject-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectListComponent {
    constructor() { }     
}
