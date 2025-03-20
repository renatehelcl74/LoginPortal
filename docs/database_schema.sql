-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create admin user
-- Password: 'passord' 
-- The password is hashed using scrypt with a random salt
INSERT INTO users (username, password) VALUES (
    'admin',
    '7975306e936141052658fe1dc1f9d2c39125e4cf2ee3578a8b2d6b6da81ff0acdbe7ba96ab43f3a6262d54ed0c56b07303d797ba3538a18c7b79c8bdd756cf89.fc23b1fcb3117d02427653ea35c504af'
);
