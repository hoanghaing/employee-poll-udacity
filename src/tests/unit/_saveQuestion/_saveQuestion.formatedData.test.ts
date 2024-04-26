import { _saveQuestion } from '@/api/index';
import {expect, describe, it, test } from 'vitest';

describe('_saveQuestion function: happy case', () => {
  it('should save the question and return the formatted question object', async () => {
    const mockQuestion = {
      optionOneText: 'Option One Text',
      optionTwoText: 'Option Two Text',
      author: 'sarahedo',
    };

    // Call the _saveQuestion function with the mock question object
    const savedQuestion = await _saveQuestion(mockQuestion);
    // Expectations
    expect(savedQuestion).toBeDefined();
    expect(savedQuestion.id).toBeDefined(); // Ensure an ID is generated
    expect(savedQuestion.timestamp).toBeDefined(); // Ensure a timestamp is generated
    expect(savedQuestion.author).toBe(mockQuestion.author); // Ensure the author is correctly set
    expect(savedQuestion.optionOne).toBeDefined(); // Ensure optionOne is present
    expect(savedQuestion.optionTwo).toBeDefined(); // Ensure optionTwo is present
    expect(savedQuestion.optionOne.votes).toHaveLength(0); // Ensure optionOne votes array is empty
    expect(savedQuestion.optionOne.text).toBe(mockQuestion.optionOneText); // Ensure optionOne text is correct
    expect(savedQuestion.optionTwo.votes).toHaveLength(0); // Ensure optionTwo votes array is empty
    expect(savedQuestion.optionTwo.text).toBe(mockQuestion.optionTwoText); // Ensure optionTwo text is correct
  });
});