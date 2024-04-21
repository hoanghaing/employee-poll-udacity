import { _saveQuestionAnswer } from '@/api/index';
import {expect, describe, it, test } from 'vitest';
describe('_saveQuestionAnswer', () => {
  it('should return true when correctly formatted data is passed to the function', async () => {

    const authedUser = 'sarahedo';
    const qid = '8xf0y6ziyjabvozdd253nd';
    const answer = 'optionOne';

    const result = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(result).toBe(true);
  });
});