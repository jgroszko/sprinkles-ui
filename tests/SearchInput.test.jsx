import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import SearchInput from '../src/components/SearchInput';

describe('SearchInput', () => {
  let emptySearchInputComponent;
  let emptySearchInputNode;
  const handleChange = jest.genMockFunction();
  const record = [{
    title: 'Old Man\'s War',
    author: {
      firstName: 'John',
      lastName: 'Scalzi',
    },
  }];
  const searchSettings = {
    keys: [
      'title',
      'author.firstName',
    ],
  };

  beforeEach(() => {
    emptySearchInputComponent = ReactTestUtils.renderIntoDocument(
      <SearchInput
        searchableRecords={[]}
      />,
    );
    emptySearchInputNode = ReactDOM.findDOMNode(emptySearchInputComponent.inputRef);
  });

  it('Does render a SearchInput', () => {
    expect(emptySearchInputComponent.inputRef.value).toBe('');
    expect(emptySearchInputNode.getAttribute('type')).toBe('search');
  });

  it('Does render a disabled search input', () => {
    const searchInputComponent = ReactTestUtils.renderIntoDocument(
      <SearchInput
        enabled={false}
        searchableRecords={[]}
      />,
    );
    const searchInputNode = ReactDOM.findDOMNode(searchInputComponent.inputRef);

    expect(searchInputNode.disabled).toBe(true);
  });
  it('Does merge search settings with defaults', () => {
    const searchInputComponent = ReactTestUtils.renderIntoDocument(
      <SearchInput
        searchableRecords={[]}
        searchSettings={searchSettings}
      />,
    );

    expect(searchInputComponent.state.combinedSearchSettings.keys).toEqual(searchSettings.keys);
  });
  it('Does trigger a change event on search', () => {
    const searchInputComponent = ReactTestUtils.renderIntoDocument(
      <SearchInput
        onChange={handleChange}
        searchableRecords={record}
        searchSettings={searchSettings}
      />,
    );
    const searchInputNode = ReactDOM.findDOMNode(searchInputComponent.inputRef);
    searchInputNode.value = 'zoo';
    ReactTestUtils.Simulate.change(searchInputNode);

    expect(handleChange).toBeCalledWith({
      value: 'zoo',
      searchResults: [],
    });
  });

  it('Returns search results', () => {
    const searchInputComponent = ReactTestUtils.renderIntoDocument(
      <SearchInput
        onChange={handleChange}
        searchableRecords={record}
        searchSettings={searchSettings}
      />,
    );
    const searchInputNode = ReactDOM.findDOMNode(searchInputComponent.inputRef);
    searchInputNode.value = 'Old';
    ReactTestUtils.Simulate.change(searchInputNode);

    expect(searchInputComponent.state.searchResults).toEqual(record);
  });

  it('Does show a clear search box option when value is entered', () => {
    emptySearchInputComponent.setState({
      value: 'foo',
    });
    const clearSearchNode = ReactDOM.findDOMNode(emptySearchInputComponent.clearSearchRef);

    expect(clearSearchNode.style.visibility).toEqual('visible');
  });

  it('Does remove value on clear state', () => {
    emptySearchInputComponent.setState({
      value: 'foo',
    });
    const clearSearchNode = ReactDOM.findDOMNode(emptySearchInputComponent.clearSearchRef);
    ReactTestUtils.Simulate.click(clearSearchNode);

    expect(emptySearchInputComponent.state.value).toEqual('');
    expect(emptySearchInputComponent.state.isFocused).toEqual(false);
    expect(clearSearchNode.style.visibility).toEqual('hidden');
  });

  it('Does clear search results on clear state', () => {
    const searchInputComponent = ReactTestUtils.renderIntoDocument(
      <SearchInput
        onChange={handleChange}
        searchableRecords={record}
        searchSettings={searchSettings}
      />,
    );

    const searchInputNode = ReactDOM.findDOMNode(searchInputComponent.inputRef);
    searchInputNode.value = 'Old';
    ReactTestUtils.Simulate.change(searchInputNode);

    const clearSearchNode = ReactDOM.findDOMNode(searchInputComponent.clearSearchRef);
    ReactTestUtils.Simulate.click(clearSearchNode);

    expect(searchInputComponent.state.searchResults).toEqual([]);
  });
});
