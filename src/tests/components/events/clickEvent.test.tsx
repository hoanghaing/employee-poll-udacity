import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { expect, describe, it, test, vi } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from '@/pages/DashBoard/DashBoard'; // Import the component to be tested
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore({
  user: {
    id: '',
    name: '',
    avatarURL: ''
  }
});
global.fetch = vi.fn();
describe('DashBoard Component: fireEvent.click', () => {
  it('DashBoard: click event -> click toggle dashboard mode button', async () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DashBoard />
        </BrowserRouter>
      </Provider>
    );
    const toggleButton = getByRole('checkbox'); // Adjust the text to match your login button
    fireEvent.click(toggleButton);
    // when you click toggle, switch to Done list -> so it must has Done text in DOM
    const doneText = getByText('Done'); // true
    // const doneText = getByText('Donezz'); // false
    expect(doneText).toMatchObject;
  });
});
