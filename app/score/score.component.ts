import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
	selector: "Score",
	moduleId: module.id,
	templateUrl: "./score.component.html",
	styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

	score: number;

	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.score = params['score'];
		})
	}

	navigateToHome() {
		this.routerExtensions.navigate(["/home"], { clearHistory: true });
	}
}