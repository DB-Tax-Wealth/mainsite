import { Root } from './root';
/* global React, create */

describe('<Root />', () => {
  it('should render correctly', () => {
    const component = create(<Root />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
