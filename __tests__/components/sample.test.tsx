import React from 'react';
import renderer from 'react-test-renderer';
import SampleComponent from '../../src/components/SampleComponent/index';
import { render } from '@testing-library/react-native';

describe('Sample Componenet Test Suit:', () => {
  test('Renders Correctly and Create Snapshot', () => {
    const tree = renderer.create(<SampleComponent text="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Get Text Component with `Test` and Check It Exist', () => {
    const { getByText } = render(<SampleComponent text="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
});
