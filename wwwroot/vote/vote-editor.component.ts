require("./vote-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/vote/vote-editor.component.html",
	styleUrls: ["wwwroot/vote/vote-editor.component.css"],
    selector: "vote-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteEditorComponent {}


