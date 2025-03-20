import { users, type User, type InsertUser } from "@shared/schema";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { eq } from 'drizzle-orm';
import memorystore from 'memorystore';

// modify the interface with any CRUD methods you might need
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  sessionStore: session.Store;
}

export class MySQLStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;
  private pool: mysql.Pool;
  sessionStore: session.Store;

  constructor() {
    if (!process.env.MYSQL_HOST || !process.env.MYSQL_USER || !process.env.MYSQL_PASSWORD || !process.env.MYSQL_DATABASE) {
      throw new Error("Missing MySQL environment variables. Please check your .env file.");
    }

    try {
      this.pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });

      this.db = drizzle(this.pool);

      // Setup MySQL session store
      const MySQLSessionStore = MySQLStore(session);
      this.sessionStore = new MySQLSessionStore({
        host: process.env.MYSQL_HOST,
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        createDatabaseTable: true,
      });

      console.log("MySQL storage initialized successfully");
    } catch (error) {
      console.error("Failed to initialize MySQL storage:", error);
      throw error;
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = await this.db.select().from(users).where(eq(users.id, id));
      return result[0];
    } catch (error) {
      console.error(`Failed to get user ${id}:`, error);
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.db.select().from(users).where(eq(users.username, username));
      return result[0];
    } catch (error) {
      console.error(`Failed to get user by username ${username}:`, error);
      throw error;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = await this.db.insert(users).values(insertUser);
      return { ...insertUser, id: Number(result[0].insertId) };
    } catch (error) {
      console.error("Failed to create user:", error);
      throw error;
    }
  }
}

// Export MySQL storage as default
export const storage = new MySQLStorage();