import { expect, describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import HeaderLayout from '@/layouts/HeaderLayout';
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

test('Snapshot: navigation bar', async () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <HeaderLayout />
      </BrowserRouter>
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
