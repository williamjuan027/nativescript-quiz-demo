import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ScoreRoutingModule } from "./score-routing.module";
import { ScoreComponent } from "./score.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		ScoreRoutingModule
	],
	declarations: [
		ScoreComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ScoreModule { }