export const _ = (array: any[]) => [ ...array].sort(() => Math.random() - 0.7);


export type Question = {
    category: string;
    correct_answers:string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
};
export type QuestionState = Question & {answer: string[]};

export const getQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    // const endpoint =`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const endpoint =`https://my-json-server.typicode.com/trandinhthang/quizDB/results?_limit=${amount}&difficulty=${difficulty}`;
    const data = await (await fetch(endpoint)).json();
    const res= data.map((question: Question)=>({
        ...question,
        answers: _([...question.incorrect_answers, question.correct_answer]),
    }));
    return res;

}