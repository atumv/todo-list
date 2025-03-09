import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/__mocks__/matchMedia';
import '@/__mocks__/fetch';
import App from '@app/App';

describe('App', () => {
  it('fetches todos on load', async () => {
    render(<App />);
    const todoItems = await screen.findAllByTestId('listitem');
    expect(todoItems).not.toHaveLength(0);
  });

  it('adds a new todo', async () => {
    render(<App />);
    const input = screen.getByTestId('addInput');
    const button = screen.getByTestId('addButton');
    const text = 'Cook dinner';
    fireEvent.change(input, { target: { value: text } });
    fireEvent.click(button);
    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it('changes todo', async () => {
    render(<App />);
    const todoTitle = screen.getByTestId('todoTitle');
    const todoDescription = screen.getByTestId('todoDescription');
    const todoStatus = screen.getByTestId('todoStatus');
    const saveButton = screen.getByTestId('saveButton');
    const newText = 'Buy milk';
    const newDescription = 'Go to the store and buy some milk.';
    const newStatus = 'Выполнена';
    fireEvent.change(todoTitle, { target: { value: newText } });
    fireEvent.change(todoDescription, { target: { value: newDescription } });
    fireEvent.change(todoStatus, newStatus);
    fireEvent.click(saveButton);
    expect(await screen.findByText(newText)).toBeInTheDocument();
    expect(await screen.findByText(newDescription)).toBeInTheDocument();
  });

  it('removes todo', async () => {
    render(<App />);
    const addInput = screen.getByTestId('addInput');
    const addButton = screen.getByTestId('addButton');
    const text = 'Write a letter';
    fireEvent.change(addInput, { target: { value: text } });
    fireEvent.click(addButton);
    const removeButton = await screen.findAllByTestId('removeButton');
    fireEvent.click(removeButton[0]);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
