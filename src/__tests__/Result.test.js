import React from 'react';
import { shallow } from 'enzyme';
import { Results } from '../pages/Result';

describe('testing App Component', () => {
  const wrapper = shallow(<Results />);
  const wrapperInstance = wrapper.instance();

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('return correctly the search username', () => {
    expect(wrapperInstance.getLocationSearch('?user=raywam')).toBe('raywam');
  });

  it('return correctly the stargazers order desc', () => {
    const noSortMock = [
      { id: 0, stargazers_count: 2 },
      { id: 1, stargazers_count: 1 },
      { id: 2, stargazers_count: 3 },
    ];

    const sortMock = [
      { id: 2, stargazers_count: 3 },
      { id: 0, stargazers_count: 2 },
      { id: 1, stargazers_count: 1 },
    ]

    expect(wrapperInstance.orderByStargazers(noSortMock)).toEqual(sortMock);
  });
});
