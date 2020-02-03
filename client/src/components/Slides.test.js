import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Slides from './Slides.jsx';

// checking if 'Slides' component gets rendered
it('renders', () => {
  shallow(<Slides />);
});

//checking if 5 slides are rendering
it("displays slides", () => {
  const wrapper = mount(<Slides />);
  expect(wrapper.find('img')).toHaveLength(5);
});
