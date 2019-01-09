# nativescript-quiz-demo

![mock ups](https://github.com/williamjuan027/nativescript-quiz-demo/blob/master/mockup/ns_quiz.png)

Link to playground - https://play.nativescript.org/?template=play-ng&id=LhwHnA

![gif](https://github.com/williamjuan027/nativescript-quiz-demo/blob/master/gif/ns-quiz.gif)

### How it works
The demo uses the list of categories and questions in `app/core/questions.json` to populate the quiz data on the app and `application-settings` to store last quiz score and last quiz date.

### Categories and Questions
List of Categories and Questions can be found in `app/core/questions.json`

You can use this list to add, remove, or edit the list of categories and questions following the format:
```
{
        "title": "PROGRAMMING", "quizDate": "20 October", "lastScore": "70%", "backgroundColor": "#250046", "image": "~/images/programming.png",
        "questions": [
        { "question": "Programming question 1", "options": ["one", "two", "three", "four"], "correctAnswerIndex": 0 },
        { "question": "Programming question 2", "options": ["one", "two", "three", "four"], "correctAnswerIndex": 0 },
        { "question": "Programming question 3", "options": ["one", "two", "three", "four"], "correctAnswerIndex": 0 },
        { "question": "Programming question 4", "options": ["one", "two", "three", "four"], "correctAnswerIndex": 0 },
        { "question": "Programming question 5", "options": ["one", "two", "three", "four"], "correctAnswerIndex": 0 }
    ]
}
```
* <b>title:</b> category title displayed on the home page
* <b>quizDate:</b> leave empty (the value will be stored in app settings after first attempt)
* <b>lastScore:</b> leave empty (the value will be stored in app settings after first attempt)
* <b>color:</b> color of all the text in the card
* <b>backgroundColor:</b> background color of the card
* <b>image:</b> an absolute path to the image to be displayed on the card (leave empty if no image)

* <b>questions:</b> list of questions for the category
* <b>question:</b> question to be displayed
* <b>options:</b> list of options for the question
* <b>correctAnswerIndex:</b> index of the correct option (0 - 3)



