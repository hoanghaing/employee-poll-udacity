import { expect, describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import DashBoard from '@/pages/DashBoard/DashBoard';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  user: {
    id: '',
    name: '',
    avatarURL: ''
  }
});

test('Homepage: contains two panel, default: New questions', async () => {
  const { container, debug, getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DashBoard />
      </BrowserRouter>
    </Provider>
  );
  const newQuestionsBlock = getByText('New Questions');
  expect(newQuestionsBlock).toMatchObject;
});
