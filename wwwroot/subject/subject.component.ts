require("./subject.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { SubjectActionCreator } from "./subject.actions";

@Component({
    templateUrl: "wwwroot/subject/subject.component.html",
	styleUrls: ["wwwroot/subject/subject.component.css"],
    selector: "subject",
    providers: ["subjectActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectComponent {
    constructor(private subjectActionCreator: SubjectActionCreator) { }
  
}
