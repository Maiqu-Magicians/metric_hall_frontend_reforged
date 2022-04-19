import {defineStore} from "pinia";
import {Questionare} from "../entity/Questionare";

export const questionStore = defineStore("questionStore", {
    state: () => {
        return {
            CurrentQuestionare: Questionare
        }
    },
    actions: {
        async PostQuestionare() {

        }
    }
})