import { ContactBar } from './contact-bar';
/* global React, create */

describe('<ContactBar />', () => {
  it('should render correctly', () => {
    const component = create(<ContactBar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
