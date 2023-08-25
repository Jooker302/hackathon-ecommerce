import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  price: varchar("price", { length: 255 }).notNull(),
});

export type CartType = InferModel<typeof cartTable>

export const db = drizzle(sql)
