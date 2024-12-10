import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import FormularioContacto from './contactForm';

describe('FormularioContacto', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('imprime los datos del formulario al enviarlo', () => {
    render(<FormularioContacto />);

   
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: 'Juan Pérez' }
    });
    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: 'juan@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/mensaje/i), {
      target: { value: 'Este es un mensaje de prueba.' }
    });

    
    fireEvent.click(screen.getByText(/enviar/i));

    expect(console.log).toHaveBeenCalledWith(
      "Formulario enviado con los siguientes datos:", 
      expect.objectContaining({
        nombre: 'Juan Pérez',
        correo: 'juan@example.com',
        mensaje: 'Este es un mensaje de prueba.'
      })
    );
    
  });
});
