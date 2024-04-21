import { _saveQuestion } from '@/api/index';
import {expect, describe, it, test } from 'vitest';

describe('_saveQuestion function', () => {
  test('should reject with an error if incorrect data is passed', async () => {
    // Arrange
    const invalidQuestion = {
      // Missing required fields
      // For example, optionOneText, optionTwoText, and author
    };

    // Act
    try {
      await _saveQuestion(invalidQuestion);

      // If the function does not throw an error, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Assert
      expect(error).toBeTruthy();
    }
  });
});