/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import {ADD_FRIEND,STAR_FRIEND,DELETE_FRIEND} from "../constants/friendsActionType.js"

export function addFriend(name: string) {
    return {
        type: ADD_FRIEND,
        name
    };
}

export function deleteFriend(id: number) {
    return {
        type: DELETE_FRIEND,
        id
    };
}

export function starFriend(id: number) {
    return {
        type: STAR_FRIEND,
        id
    };
}