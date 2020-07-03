export interface Question {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export interface QuestionParams {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}