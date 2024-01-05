
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test("initiate and update time options",() => {
  const customPath = '/reservation';
    Object.defineProperty(window, 'location', {
      value: new URL(`http://localhost${customPath}`),
    });
  render(<App />)

  const timeSelect = screen.getByTestId('time')
  fireEvent.change(screen.getByTestId('name'), {target: {value: 'Test'}})
  fireEvent.change(screen.getByTestId('guests'), {target: {value: '4'}})
  expect(timeSelect).toHaveValue('17:00');
  fireEvent.click(screen.getByText('Submit'));
  expect(timeSelect).toHaveValue('18:00');
})