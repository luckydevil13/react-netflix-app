const initialState = {
  searchResults: [],
  film: {},
  fetchError: false,
  searchBy: 'title',
  sortBy: 'rating'
};

export default function netflixstate(state = initialState, action) {
  console.log(action);
  if (action.type === 'SEARCH_DONE') {
    return Object.assign({}, state, {
      searchResults: action.payload,
      fetchError: false
    });
  } else if (action.type === 'SEARCH_FILM_DONE') {
    return Object.assign({}, state, {
      film: action.payload,
      fetchError: false
    });
  } else if (action.type === 'SEARCH_FAILED') {
    return Object.assign({}, state, { fetchError: true, searchResults: [] });
  } else if (action.type === 'SEARCH_BY') {
    return Object.assign({}, state, {
      searchBy: action.payload
    });
  } else if (action.type === 'SORT_BY') {
    return Object.assign({}, state, {
      sortBy: action.payload,
      searchResults: [...state.searchResults.sort((a, b) => b[action.payload] - a[action.payload])]
    });
  }

  return state;
}
