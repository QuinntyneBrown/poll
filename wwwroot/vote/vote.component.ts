require("./vote.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { VoteActionCreator } from "./vote.actions";

@Component({
    templateUrl: "wwwroot/vote/vote.component.html",
	styleUrls: ["wwwroot/vote/vote.component.css"],
    selector: "vote",
    providers: ["voteActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent {
    constructor(private voteActionCreator: VoteActionCreator) { }
  
}
