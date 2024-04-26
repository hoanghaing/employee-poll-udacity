import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { expect, describe, it, test } from 'vitest';
import Login from '@/pages/Login/Login'; // Import the component to be tested
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore({
  user: {
    id: '',
    name: '',
    avatarURL: ''
  }
});
describe('Login: change event -> change username', () => {
  it('should handle fireEvent.change event', () => {

    const { getByPlaceholderText  } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const inputElement = getByPlaceholderText ('username'); // Adjust this selector based on your component

    // // Simulate change event
    fireEvent.change(inputElement, { target: { value: 'This text is change...' } });

    // // Assert that the input value has changed
    expect(inputElement.value).toBe('This text is change...');
    // expect(inputElement.value).toBe('This text is change...??');
  });
});