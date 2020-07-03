export interface Category {
  id: string;
  name: string;
}

export interface Quiz {
  id: number;
  category: Category;
  type: "multiple" | "boolean";
  difficulty?: "easy" | "medium" | "hard";
}

export const TriviaCategories: Category[] = [
  {
    id: "9",
    name: "General Knowledge"
  },
  {
    id: "11",
    name: "Film"
  },
  {
    id: "12",
    name: "Music"
  },
  {
    id: "15",
    name: "Video Games"
  },
  {
    id: "17",
    name: "Science & Nature"
  },
  {
    id: "22",
    name: "Geography"
  },
  {
    id: "23",
    name: "History"
  },
];

export const QUIZZES: Quiz[] = [
  {
    id: 0,
    category: TriviaCategories[0],
    type: "multiple",
    difficulty: "easy"
  },
  {
    id: 1,
    category: TriviaCategories[0],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 2,
    category: TriviaCategories[0],
    type: "multiple",
    difficulty: "hard"
  },
  {
    id: 3,
    category: TriviaCategories[0],
    type: "boolean"
  },
  {
    id: 4,
    category: TriviaCategories[1],
    type: "multiple",
    difficulty: "easy"
  },
  {
    id: 5,
    category: TriviaCategories[1],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 6,
    category: TriviaCategories[1],
    type: "boolean"
  },
  {
    id: 7,
    category: TriviaCategories[2],
    type: "multiple",
    difficulty: "easy"
  },
  {
    id: 8,
    category: TriviaCategories[2],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 9,
    category: TriviaCategories[2],
    type: "multiple",
    difficulty: "hard"
  },
  {
    id: 10,
    category: TriviaCategories[2],
    type: "boolean"
  },
  {
    id: 11,
    category: TriviaCategories[3],
    type: "multiple",
    difficulty: "easy"
  },
  {
    id: 12,
    category: TriviaCategories[3],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 13,
    category: TriviaCategories[3],
    type: "multiple",
    difficulty: "hard"
  },
  {
    id: 14,
    category: TriviaCategories[3],
    type: "boolean"
  },
  {
    id: 15,
    category: TriviaCategories[4],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 16,
    category: TriviaCategories[4],
    type: "multiple",
    difficulty: "hard"
  },
  {
    id: 17,
    category: TriviaCategories[4],
    type: "boolean"
  },
  {
    id: 18,
    category: TriviaCategories[5],
    type: "multiple",
    difficulty: "easy"
  },
  {
    id: 19,
    category: TriviaCategories[5],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 20,
    category: TriviaCategories[5],
    type: "multiple",
    difficulty: "hard"
  },
  {
    id: 21,
    category: TriviaCategories[5],
    type: "boolean"
  },
  {
    id: 22,
    category: TriviaCategories[6],
    type: "multiple",
    difficulty: "medium"
  },
  {
    id: 23,
    category: TriviaCategories[6],
    type: "multiple",
    difficulty: "hard"
  },
  {
    id: 24,
    category: TriviaCategories[6],
    type: "boolean"
  },
];