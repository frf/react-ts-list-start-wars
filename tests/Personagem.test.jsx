import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Personagem} from '../../components';

Enzyme.configure({ adapter: new Adapter() });

test('should have \'\' initialValue by default', () => {
  const pesonagen = shallow(<Personagem />);
  expect(pesonagen.prop('value')).toBe('');
});


