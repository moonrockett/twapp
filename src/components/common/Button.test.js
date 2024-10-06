import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';
import theme from '../../styles/theme';

const renderWithTheme = (ui, { theme, ...options } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = renderWithTheme(<Button>Click me</Button>, { theme });
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = renderWithTheme(<Button onClick={handleClick}>Click me</Button>, { theme });
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});