import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    quote: text('quote')
});