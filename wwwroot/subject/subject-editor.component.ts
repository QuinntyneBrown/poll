require("./subject-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/subject/subject-editor.component.html",
	styleUrls: ["wwwroot/subject/subject-editor.component.css"],
    selector: "subject-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectEditorComponent {}


