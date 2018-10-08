import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { QuizRoutingModule } from "./quiz-routing.module";
import { QuizComponent } from "./quiz.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		QuizRoutingModule
	],
	declarations: [
		QuizComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class QuizModule { }