/* global React, create */
import { Screen } from './screen';
import { StaticRouter } from 'react-router-dom';

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
