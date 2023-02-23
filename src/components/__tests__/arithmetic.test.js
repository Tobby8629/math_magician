import renderer from 'react-test-renderer';
import Arithemetic from '../Arithemetic';

test('Arithmetic component match snapshot', () => {
  const tree = renderer.create(<Arithemetic />).toJSON;
  expect(tree).toMatchSnapshot();
});
