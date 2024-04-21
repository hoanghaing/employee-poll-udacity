import { expect, describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Login from '@/pages/Login/Login';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  // Mock your Redux state here if needed
});

test('renders login form correctly', async () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
