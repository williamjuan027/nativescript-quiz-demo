import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getNumber } from "tns-core-modules/application-settings";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    categories: any[] = [
        {
            title: "PROGRAMMING", quizDate: "20 October", lastScore: "70%", backgroundColor: "#250046", image: "~/images/programming.png",
            questions: [
                { question: 'Programming question 1', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 0 },
                { question: 'Programming question 2', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 1 },
                { question: 'Programming question 3', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 2 },
                { question: 'Programming question 4', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 3 },
                { question: 'Programming question 5', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 2 }
            ]
        },
        {
            title: "NETWORKING", quizDate: "3 December", lastScore: "10%", backgroundColor: "#0D0735", image: "~/images/networking.png",
            questions: [
                { question: 'Networking question 1', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 0 },
                { question: 'Networking question 2', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 1 },
                { question: 'Networking question 3', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 2 }
            ]
        },
        {
            title: "SECURITY", footer: "10", headerText: "First", footerText: "4", quizDate: "12 December", lastScore: "100%", backgroundColor: "#020046", image: "~/images/security.png",
            questions: [
                { question: 'Security question 1', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 0 },
                { question: 'Security question 2', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 1 },
                { question: 'Security question 3', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 2 },
                { question: 'Security question 4', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 3 },
                { question: 'Security question 5', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 1 },
                { question: 'Security question 6', options: ['one', 'two', 'three', 'four'], correctAnswerIndex: 2 },
            ]
        }
    ]

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.initializeScore();
    }

    initializeScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
        }
    }

    navigateToQuiz(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        console.log("navigationExtras: " + JSON.stringify(navigationExtras));
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    }
}
