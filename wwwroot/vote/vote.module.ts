require("../core/core.module");

import { VoteEditorComponent } from "./vote-editor.component";
import { VoteListComponent } from "./vote-list.component";
import { VoteComponent } from "./vote.component";
import { VotesContainerComponent } from "./votes-container.component";
import { VoteActionCreator } from "./vote.actions";
import { VoteService } from "./vote.service";
import *  as reducers from "./vote.reducers";

var app = (<any>angular.module("app.vote", [
    "app.core"    
]));

app.service("voteActionCreator",["$location","dispatcher","voteService","guid",VoteActionCreator]);
app.service("voteService",["$q","apiEndpoint","fetch",VoteService]);
app.component(VoteEditorComponent);
app.component(VoteListComponent);
app.component(VoteComponent);
app.component(VotesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
