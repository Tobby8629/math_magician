import renderer from 'react-test-renderer';
import Home from '../Home';

test('home component match snapshot', () => {
  const tree = renderer.create(<Home />).toJSON;
  expect(tree).toMatchSnapshot();
});
