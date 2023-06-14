export class Question {
    private _id: number;
    private _questionText: string;
    private _answerOptions: string[];
    private _correctAnswer: string;

    constructor() {
        this._id = 0;
        this._questionText = "";
        this._answerOptions = [""];
        this._correctAnswer = "";
    }

    public get Id(): number {
        return this._id;
    }

    public set Id(value: number) {
        this._id = value;
    }

    public get QuestionText(): string {
        return this._questionText;
    }

    public set QuestionText(value: string) {
        this._questionText = value;
    }

    public get AnswerOptions(): string[] {
        return this._answerOptions;
    }

    public set AnswerOptions(value: string[]) {
        this._answerOptions = value;
    }

    public get CorrectAnswer(): string {
        return this._correctAnswer;
    }

    public set CorrectAnswer(value: string) {
        this._correctAnswer = value;
    }
}