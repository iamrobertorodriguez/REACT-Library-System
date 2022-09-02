import axios from "axios";

export const actions = {
    setIsLoading: 'SET_IS_LOADING',
    setBook: 'SET_BOOK',
    setBooks: 'SET_BOOKS',
    setCategory: 'SET_CATEGORY',
    setCategories: 'SET_CATEGORIES'
}

// API

const api = 'https://iamrobertorodriguez-librarysys.herokuapp.com/api/v1/'

// HEADERS

const getConfig = (  ) => ({
    headers: { Authorization: `Bearer ${ localStorage.getItem( 'token' ) }` }
})

// LOADING SCREEN

export const setIsLoading = ( isLoading ) => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const startLoadingScreenThunk = (  ) => {
    return dispatch => {
        dispatch(setIsLoading( true ) )
    }
};

export const endLoadingScreenThunk = (  ) => {
    return dispatch => {
        dispatch(setIsLoading( false ) )
    }
};

// GET ALL BOOKS

export const setBooks = ( books ) => ({
    type: actions.setBooks,
    payload: books
})

export const getBooksThunk = (  ) => {
    return dispatch => {
        dispatch(startLoadingScreenThunk())
        return axios
        .get(`${api}catalog/`)
        .then((res) => {
            dispatch(setBooks(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally((  ) => {
            const endLoadingScreen = (  ) => {
                dispatch(endLoadingScreenThunk())
                }
                setTimeout(
                    endLoadingScreen,
                    1000
                    )
                })
    }
}

// SEARCH BOOKS

export const searchBooksThunk = (slug) => {
    return dispatch => {
        dispatch(startLoadingScreenThunk())
        return axios
        .get(`${api}catalog/?search=${slug}`)
        .then((res) => {
            dispatch(setBooks(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally((  ) => {
            const endLoadingScreen = (  ) => {
                dispatch(endLoadingScreenThunk())
                }
                setTimeout(
                    endLoadingScreen,
                    1000
                    )
                })
    }
}

// RETRIEVE BOOK

export const setBook = ( book ) => ({
    type: actions.setBook,
    payload: book
})

export const getBookThunk = (i, setAvaliableItems, setDescription, setCategory, setLocation) => {
    return dispatch => {
        dispatch(startLoadingScreenThunk())
        return axios
            .get(`${api}catalog/${i}/`)
            .then((res) => {
                dispatch(setBook(res.data))
                setAvaliableItems(res.data.items)
                setDescription(res.data.description)
                setCategory(res.data.category)
                setLocation(res.data.location)
                axios
                    .get(`${api}categories/${res.data.category.id}/`)
                    .then((response) => {
                        dispatch(setBooks(response.data.books))
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
            .finally((  ) => {
                const endLoadingScreen = (  ) => {
                    dispatch(endLoadingScreenThunk())
                }
                setTimeout(
                    endLoadingScreen,
                    1000
                )
            })
    }
}

// CATEGORIES

export const setCategory = ( category ) => ({
    type: actions.setCategory,
    payload: category
})

export const getCategoryThunk = ( i ) => {
    return dispatch => {
        dispatch(startLoadingScreenThunk())
        return axios
        .get(`${api}categories/${i}/`)
        .then((res) => {
            dispatch(setCategory(res.data))
            dispatch(setBooks(res.data.books))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally((  ) => {
            const endLoadingScreen = (  ) => {
                dispatch(endLoadingScreenThunk())
                }
                setTimeout(
                    endLoadingScreen,
                    1000
                    )
                })
    }
}

export const setCategories = ( categories ) => ({
    type: actions.setCategories,
    payload: categories
})

export const getCategoriesThunk = (  ) => {
    return dispatch => {
        dispatch(startLoadingScreenThunk())
        return axios
        .get(`${api}categories/`)
        .then((res) => {
            dispatch(setCategories(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally((  ) => {
            const endLoadingScreen = (  ) => {
                dispatch(endLoadingScreenThunk())
                }
                setTimeout(
                    endLoadingScreen,
                    1000
                    )
                })
    }
}