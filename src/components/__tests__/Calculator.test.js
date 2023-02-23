import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('test the calculator component', () => {
  test('Calculator component match snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('calculator display fired button', () => {
    render(<Calculator />);
    const show = screen.getByTestId('screen');
    const btn = screen.getAllByTestId('btn');
    fireEvent.click(btn[4]);
    expect(show).toHaveTextContent('7');
  });
});
