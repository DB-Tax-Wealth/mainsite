import { Main } from './main';
/* global React, create */

describe('<Main />', () => {
  it('should render correctly', () => {
    const component = create(<Main />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
