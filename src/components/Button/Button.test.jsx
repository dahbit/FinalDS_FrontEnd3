import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest'; 
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly with text', () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});
