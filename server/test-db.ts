import mysql from "mysql2/promise";
import { storage } from "./storage";
import { drizzle } from "drizzle-orm/mysql2";
import { users } from "@shared/schema";

async function testDatabaseConnection() {
  console.log("Testing database connection...");
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    console.log("✓ Successfully connected to MySQL database");

    // Test if users table exists
    const [rows] = await connection.execute("SHOW TABLES LIKE 'users'");
    if (Array.isArray(rows) && rows.length > 0) {
      console.log("✓ Users table exists");
      
      // Test if we can query the users table
      const [users] = await connection.execute("SELECT * FROM users LIMIT 1");
      console.log("✓ Successfully queried users table");
      console.log(`Found ${Array.isArray(users) ? users.length : 0} user(s)`);
    } else {
      console.error("✕ Users table does not exist");
    }

    await connection.end();
  } catch (error) {
    console.error("Database connection test failed:");
    console.error(error);
    process.exit(1);
  }
}

// Run the test
testDatabaseConnection();
