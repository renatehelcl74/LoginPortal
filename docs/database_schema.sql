-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    bio TEXT,
    location VARCHAR(255),
    avatar_url VARCHAR(255),
    website VARCHAR(255),
    linkedin VARCHAR(255),
    instagram VARCHAR(255),
    facebook VARCHAR(255),
    soundcloud VARCHAR(255),
    snapchat VARCHAR(255),
    github VARCHAR(255),
    theme VARCHAR(20) DEFAULT 'system'
);

-- Create admin user
-- Password: 'passord' 
-- The password is hashed using scrypt with a random salt
INSERT INTO users (username, password) VALUES (
    'admin',
    '7975306e936141052658fe1dc1f9d2c39125e4cf2ee3578a8b2d6b6da81ff0acdbe7ba96ab43f3a6262d54ed0c56b07303d797ba3538a18c7b79c8bdd756cf89.fc23b1fcb3117d02427653ea35c504af'
);