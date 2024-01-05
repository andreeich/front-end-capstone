
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../services/BookingAPI';
import BookingPage from '../pages/BookingPage';
// test("initiate and update time options",() => {
//   const customPath = '/reservation';
//     Object.defineProperty(window, 'location', {
//       value: new URL(`http://localhost${customPath}`),
//     });
//   render(<Router><App /></Router>)

//   const timeSelect = screen.getByTestId('time')
//   fireEvent.change(screen.getByTestId('name'), {target: {value: 'Test'}})
//   fireEvent.change(screen.getByTestId('guests'), {target: {value: '4'}})
//   fireEvent.change(screen.getByTestId('date'), {target: {value: '2024-01-04'}})
//   expect(timeSelect).toHaveValue('14:00');s
//   fireEvent.click(screen.getByText('Submit'));
//   expect(timeSelect).toHaveValue('15:00');
// })

test("fetchAPI function", () => {
  fetchAPI('2024-01-01').then(data => {
    expect(data).toMatchObject(['10:00', '11:00', '12:00']);
  })
  fetchAPI('2024-01-14').then(data => {
    expect(data).toMatchObject(['14:00', '15:00', '16:00']);
  })
  fetchAPI('2024-01-19').then(data => {
    expect(data).toMatchObject(['10:00', '11:00', '12:00']);
  })
})

test("submitAPI function", () => {
  fetchAPI('2024-01-01', '10:00').then(data => {
    expect(data).toBeTruthy();
  })
  fetchAPI('2024-01-14', '14:00').then(data => {
    expect(data).toBeTruthy();
  })
  fetchAPI('2024-01-19', '10:00').then(data => {
    expect(data).toBeTruthy();
  })
})

test("BookingPage date and times init", async () => {
  render(<BookingPage date={'2024-01-05'} times={['10:00']}/>)
  await waitFor(() => {
    expect(screen.getByTestId('time')).toHaveValue('10:00')
    expect(screen.getByTestId('date')).toHaveValue('2024-01-05')
  })
})