/* global React, create */
import { StaticRouter } from 'react-router-dom';
import { Screen } from './screen';

describe('<Screen />', () => {
  it('should render correctly', () => {
    const component = create(
      <StaticRouter>
        <Screen />
      </StaticRouter>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
