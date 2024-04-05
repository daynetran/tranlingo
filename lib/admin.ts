"use server"

import { auth } from "@clerk/nextjs"

const allowedIds = [
    "user_2eQBD60lbUnta23LvzTGL8LqTUr"
]

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return allowedIds.indexOf(userId) !== -1
}
