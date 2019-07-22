import { Main } from './main';
import { StaticRouter } from 'react-router-dom';
/* global React, create */

describe('<Main />', () => {
  it('should render correctly', () => {
    const component = create(
      <StaticRouter>
        <Main />
      </StaticRouter>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
