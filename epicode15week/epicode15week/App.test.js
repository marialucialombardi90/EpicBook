import { render, screen } from '@testing-library/react';
import App from './App'


test('il componente welcome è montato correttamente', () => {
    render(<App />)

    const welcomeComponent = screen.getByText(/welcome/i);

    expect(welcomeComponent).toBeInTheDocument();
})

test('all the books contiene 150 libri', () => {
    render(<App />);

    const book = screen.getAllByTestId("card-img");

    expect(book).toHaveLength(150);
})

