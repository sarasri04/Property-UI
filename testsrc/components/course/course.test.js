import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Course from './Course';

describe('<Course />', () => {
  test('it should mount', () => {
    render(<Course />);
    
    const course = screen.getByTestId('Course');

    expect(course).toBeInTheDocument();
  });
});