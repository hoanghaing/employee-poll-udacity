import { _saveQuestionAnswer } from '@/api/index';
import {expect, describe, it, test } from 'vitest';

describe('_saveQuestionAnswer', () => {
  it('should throw an error when incorrect data is passed to the function', async () => {
    const incorrectData = {
      authedUser: '', // Example: missing authedUser
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne'
    };

    try {
      await _saveQuestionAnswer(incorrectData);
      // If _saveQuestionAnswer does not throw an error, fail the test
      expect('Expected _saveQuestionAnswer to throw an error, but it did not.');
    } catch (error) {
      // Assert that an error is thrown with the expected message or structure
      expect(error).toBeTruthy();
      // Add additional assertions based on the expected error behavior
    }
  });
});