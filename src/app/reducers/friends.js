/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import {ADD_FRIEND,STAR_FRIEND,DELETE_FRIEND} from "../constants/friendsActionType.js"

const initialState = {
  friends: [0, 1, 2, 3, 4],
  friendsById: [
    {
      id: 0,
      name: 'Notorious B.I.G.'
    },
    {
      id: 1,
      name: 'Tupac Shakur'
    },
    {
      id: 2,
      name: 'Dr. Dre'
    },
    {
      id: 3,
      name: 'Big Pun'
    },
    {
      id: 4,
      name: 'Rakim'
    }
  ]
};

// Reducer
export default function reducer(state = initialState,action){
  switch (action.type) {
    case ADD_FRIEND: {
      const len = state.friends.length ? state.friends.length : 1;
      const newId = (state.friends[len - 1] + 1) || 0;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
          {
            id: newId,
            name: action.name
          }
        ]
      };
    }

    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((id) => id !== action.id),
        friendsById: state.friendsById.filter((friend) => friend.id !== action.id)
      };

    case STAR_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.map((friend) => {
          if (friend.id !== action.id) {
            return friend;
          }

          return Object.assign({}, friend, {
            starred: !friend.starred
          });
        })
      };

    default:
      return state;
  }
}

