import {
        Wishlist_ADD_ITEM,
        Wishlist_REMOVE_ITEM,

    } from '../constants/WishlistConstants'



export const WishlistReducer = (state = { WishlistItems: [] }, action) => {
        switch (action.type) {
                case Wishlist_ADD_ITEM:
                    const item = action.payload
                    const existItem = state.WishlistItems.find(x => x.product === item.product)

                    if (existItem) {
                        return {
                            ...state,
                            WishlistItems: state.WishlistItems.map(x =>
                                x.product === existItem.product ? item : x)
                        }

                    } else {
                        return {
                            ...state,
                            WishlistItems: [...state.WishlistItems, item]
                        }
                    }

                case Wishlist_REMOVE_ITEM:
                    return {
                        ...state,
                        WishlistItems: state.WishlistItems.filter(x => x.product !== action.payload)
                    }



                default:
                    return state
            }
        }
