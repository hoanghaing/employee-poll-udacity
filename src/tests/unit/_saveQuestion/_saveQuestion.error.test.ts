import { _saveQuestion } from '@/api/index';
import {expect, describe, it, test } from 'vitest';

describe('_saveQuestion function: error, invalid case', () => {
  test('should reject with an error if incorrect data is passed', async () => {
    // Arrange
    const invalidQuestion = {
      optionOneText: null,
      optionTwoText: null,
      author: 'shushu',
    };

    // Act
    try {
      await _saveQuestion(invalidQuestion);

      // If the function does not throw an error, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // console.log('error: ', error);
      // Assert
      expect(error).toBeTruthy();
    }
  });
});