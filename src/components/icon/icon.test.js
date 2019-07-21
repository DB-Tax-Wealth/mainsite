import { Icon } from './icon';
/* global React, create */

describe('<Icon />', () => {
  it('should render correctly', () => {
    const component = create(<Icon />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
