import { App } from './app';
/* global React, create */

describe('<App />', () => {
  it('should render correctly', () => {
    const component = create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
