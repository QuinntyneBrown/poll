require("../core/core.module");

import { SubjectEditorComponent } from "./subject-editor.component";
import { SubjectListComponent } from "./subject-list.component";
import { SubjectComponent } from "./subject.component";
import { SubjectsContainerComponent } from "./subjects-container.component";
import { SubjectActionCreator } from "./subject.actions";
import { SubjectService } from "./subject.service";
import *  as reducers from "./subject.reducers";

var app = (<any>angular.module("app.subject", [
    "app.core"    
]));

app.service("subjectActionCreator",["$location","dispatcher","subjectService","guid",SubjectActionCreator]);
app.service("subjectService",["$q","apiEndpoint","fetch",SubjectService]);
app.component(SubjectEditorComponent);
app.component(SubjectListComponent);
app.component(SubjectComponent);
app.component(SubjectsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
