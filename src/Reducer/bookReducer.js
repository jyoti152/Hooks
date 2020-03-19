var i = 4;
export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'Add_Book':
            i = i + 1;
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: i

            }]
            case 'Remove_book':
                return state.filter(book=>book.id !== action.id)
            default: return state

    }
}