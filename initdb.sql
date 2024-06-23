CREATE DATABASE IF NOT EXISTS insiderDB;
USE insiderDB;

CREATE TABLE IF NOT EXISTS Branches (
    branch_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    full_address VARCHAR(255) NOT NULL,
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    phone VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS User_Roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    usernumber VARCHAR(50) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES User_Roles(role_id)
);

CREATE TABLE IF NOT EXISTS Access_Logs (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    branch_id INT NOT NULL,
    access_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (branch_id) REFERENCES Branches(branch_id)
);

INSERT INTO User_Roles (role_name) VALUES ('Owner'), ('Employee'), ('Customer');

INSERT INTO Branches (name, full_address, latitude, longitude, phone) VALUES
('Branch 1', '123 Main St, Cityville', 40.712776, -74.005974, '432-565-7001'),
('Branch 2', '456 Oak St, Townsville', 34.052235, -118.243683, '234-567-8901'),
('Branch 3', '789 Pine St, Villageville', 41.878113, -87.629799, '345-678-9012'),
('Branch 4', '101 Maple St, Hamletville', 29.760427, -95.369804, '456-789-0123'),
('Branch 5', '202 Birch St, Metropolis', 37.774929, -122.419418, '567-890-1234');

INSERT INTO Users (usernumber, username, email, password, role_id) VALUES
('U001', 'John Doe', 'john.doe@example.com', 'password123', (SELECT role_id FROM User_Roles WHERE role_name = 'Owner')),
('U002', 'Jane Smith', 'jane.smith@example.com', 'password123', (SELECT role_id FROM User_Roles WHERE role_name = 'Employee')),
('U003', 'Alice Johnson', 'alice.johnson@example.com', 'password123', (SELECT role_id FROM User_Roles WHERE role_name = 'Customer')),
('U004', 'Bob Brown', 'bob.brown@example.com', 'password123', (SELECT role_id FROM User_Roles WHERE role_name = 'Employee')),
('U005', 'Carol White', 'carol.white@example.com', 'password123', (SELECT role_id FROM User_Roles WHERE role_name = 'Customer'));

INSERT INTO Access_Logs (user_id, branch_id) VALUES
((SELECT user_id FROM Users WHERE username = 'John Doe'), (SELECT branch_id FROM Branches WHERE name = 'Branch 1')),
((SELECT user_id FROM Users WHERE username = 'Jane Smith'), (SELECT branch_id FROM Branches WHERE name = 'Branch 2')),
((SELECT user_id FROM Users WHERE username = 'Alice Johnson'), (SELECT branch_id FROM Branches WHERE name = 'Branch 3')),
((SELECT user_id FROM Users WHERE username = 'Bob Brown'), (SELECT branch_id FROM Branches WHERE name = 'Branch 1')),
((SELECT user_id FROM Users WHERE username = 'Carol White'), (SELECT branch_id FROM Branches WHERE name = 'Branch 2'));