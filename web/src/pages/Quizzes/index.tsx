import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Filter } from 'react-feather';

import { QUIZZES, TriviaCategories, Quiz } from '../../shared/quizzes';

import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import QuizCard from '../../components/QuizCard';

import { Content, FilterForm } from './styles';

export default function Quizzes () {
  const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
  const [selectedCategory, setSelectedCategory] = useState('none');
  const [selectedType, setSelectedType] = useState('none');
  const [selectedDifficulty, setSelectedDifficulty] = useState('none');
  const [showFilter, setShowFilter] = useState(false);

  function handleCategorySelection (event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(event.target.value);
  }

  function handleTypeSelection (event: ChangeEvent<HTMLSelectElement>) {
    setSelectedType(event.target.value);
  }

  function handleDifficultySelection (event: ChangeEvent<HTMLSelectElement>) {
    setSelectedDifficulty(event.target.value);
  }

  function handleSearch (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let filteredQuizzes = QUIZZES;

    if (selectedCategory !== 'none') {
      filteredQuizzes = filteredQuizzes.filter(quiz => quiz.category.id === selectedCategory);
    }

    if (selectedType !== 'none') {
      filteredQuizzes = filteredQuizzes.filter(quiz => quiz.type === selectedType);
    }

    if (selectedDifficulty !== 'none') {
      filteredQuizzes = filteredQuizzes.filter(quiz => quiz.difficulty === selectedDifficulty);
    }

    setQuizzes(filteredQuizzes);
    setShowFilter(false);
  }

  function toggleFilter () {
    setShowFilter(!showFilter);
  }

  return (
    <>
      <Header />
      <Content>
        <button className="filter" onClick={toggleFilter}><Filter /></button>
        {
          showFilter &&
          <FilterForm onSubmit={handleSearch}>
            <fieldset>
              <label htmlFor="category">Category</label>
              <select name="category" id="category" value={selectedCategory} onChange={handleCategorySelection}>
                <option value="none">Select a category</option>
                {
                  TriviaCategories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                }
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="type">Type</label>
              <select name="type" id="type" value={selectedType} onChange={handleTypeSelection}>
                <option value="none">Select a type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True or False</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="difficulty">Difficulty</label>
              <select name="difficulty" id="difficulty" value={selectedDifficulty} onChange={handleDifficultySelection}>
                <option value="none">Select a difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </fieldset>

            <button type="submit">Search quizzes</button>
          </FilterForm>
        }
        <div>
          { quizzes.map(quiz => <QuizCard key={quiz.id} {...quiz} />) }
        </div>
      </Content>
      <Navigator active={0} />
    </>
  );
}