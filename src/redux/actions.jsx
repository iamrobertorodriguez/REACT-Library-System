import axios from "axios";

export const actions = {
    setIsLoading: 'SET_IS_LOADING',
    setBook: 'SET_BOOK',
    setBooks: 'SET_BOOKS',
    setCategory: 'SET_CATEGORY',
    setCategories: 'SET_CATEGORIES'
}

// API
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL
const api = `${BACKEND_URL}/api/v1/`

// HEADERS

const config = {
    headers: {Authorization: `Bearer ${ localStorage.getItem('token') }`}
}

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

// GET USER

export const getUserThunk = () => {
    return dispatch => {
        return axios
            .get(`${api}getuser/`, config)
            .then((res) => {
                localStorage.setItem('user', res.data.user.username)
            })
    }
}

// LOGIN

export const loginThunk = (data, setError) => {
    return dispatch => {
        dispatch(startLoadingScreenThunk())
        return axios
            .post(`${api}login/`, data)
            .then((res) => {
                localStorage.setItem('token', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
                setError(null)
                axios
                    .get(`${api}getuser/`, {headers: {Authorization: `Bearer ${res.data.access}`}})
                    .then((result) => {
                        localStorage.setItem('user', result.data.user.username)
                    })
            })
            .catch((err) => {
                setError(err.response.data)
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
};

// REFRESH TOKEN

export const refreshTokenThunk = () => {
    return dispatch => {
        return axios
            .post(
                `${api}token/refresh/`,
                {
                    refresh: localStorage.getItem('refresh')
                }
            )
            .then((res) => {
                localStorage.setItem('token', res.data.access)
            })
    }
}

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