import { expect, describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import HeaderLayout from '@/layouts/HeaderLayout';
import Leaderboard from '@/pages/Leaderboard/Leaderboard';
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

test('Snapshot: renders leaderboard', async () => {
  const { debug, container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <HeaderLayout>
          <Leaderboard />
        </HeaderLayout>
      </BrowserRouter>
    </Provider>
  );
  // debug();
  expect(container.firstChild).toMatchSnapshot();
});
