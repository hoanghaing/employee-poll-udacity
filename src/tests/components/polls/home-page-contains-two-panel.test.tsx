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
  // Mock your Redux state here if needed
});

test('renders login form correctly', async () => {
  const { container, debug, getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DashBoard />
      </BrowserRouter>
    </Provider>
  );
  const newQuestionsBlock = getByText('New Questions');
  const doneBlock = getByText('Done');
  expect(newQuestionsBlock).toMatchObject;
  expect(doneBlock).toMatchObject;
});
