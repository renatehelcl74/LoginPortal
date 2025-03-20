import { mysqlTable, text, int, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  bio: text("bio"),
  location: varchar("location", { length: 255 }),
  avatarUrl: varchar("avatar_url", { length: 255 }),
  website: varchar("website", { length: 255 }),
  // Social media links
  linkedin: varchar("linkedin", { length: 255 }),
  instagram: varchar("instagram", { length: 255 }),
  facebook: varchar("facebook", { length: 255 }),
  soundcloud: varchar("soundcloud", { length: 255 }),
  snapchat: varchar("snapchat", { length: 255 }),
  github: varchar("github", { length: 255 }),
  // Theme preference
  theme: varchar("theme", { length: 20 }).default("system"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// New schema for profile updates
export const updateProfileSchema = createInsertSchema(users)
  .pick({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    bio: true,
    location: true,
    avatarUrl: true,
    website: true,
    linkedin: true,
    instagram: true,
    facebook: true,
    soundcloud: true,
    snapchat: true,
    github: true,
  })
  .partial();

export const updateThemeSchema = createInsertSchema(users)
  .pick({
    theme: true,
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type UpdateProfile = z.infer<typeof updateProfileSchema>;
export type User = typeof users.$inferSelect;