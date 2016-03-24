require("./vote-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/vote/vote-list.component.html",
	styleUrls: ["wwwroot/vote/vote-list.component.css"],
    selector: "vote-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteListComponent {
    constructor() { }     
}
