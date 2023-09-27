import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropertiesDetails from './PropertiesDetails';

describe('<PropertiesDetails />', () => {
  test('it should mount', () => {
    render(<PropertiesDetails />);
    
    const propertiesDetails = screen.getByTestId('PropertiesDetails');

    expect(propertiesDetails).toBeInTheDocument();
  });
});