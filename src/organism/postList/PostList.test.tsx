import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';

test('renders post list with placeholders', () => {
  render(<PostList />);
  const headerElement = screen.getByText(/Post list/i);
  const linkElement = screen.getAllByTestId(/placeholder/i);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toHaveLength(10);
});
