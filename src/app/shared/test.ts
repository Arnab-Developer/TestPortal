import { Question } from "./question";

export class Test {
    private _id: number;    
    private _name: string;    
    private _passMark: number;    
    private _questions: Question[];    

    constructor() {
        this._id = 0;
        this._name = "";
        this._passMark = 0;
        this._questions = [new Question()];
    }

    public get Id(): number {
        return this._id;
    }

    public set Id(value: number) {
        this._id = value;
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(value: string) {
        this._name = value;
    }

    public get PassMark(): number {
        return this._passMark;
    }

    public set PassMark(value: number) {
        this._passMark = value;
    }

    public get Questions(): Question[] {
        return this._questions;
    }

    public set Questions(value: Question[]) {
        this._questions = value;
    }
}