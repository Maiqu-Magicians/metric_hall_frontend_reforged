export class Questionare {
    constructor(
        public readonly id:number,
        public readonly name: string,
        public readonly question: Question[]
    ) {
    }
}

export class Question {
    constructor(
        public readonly index: number,
        public readonly question: string,
        public readonly choice: { option: string, optionContent: string }[]
    ) {
    }

}
