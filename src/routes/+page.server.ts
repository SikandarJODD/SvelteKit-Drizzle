
import { db } from "$lib/server";
import { users } from "$lib/server/schema";
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
    let allUsers = await db.select().from(users);
    return {
        allUsers
    }
};