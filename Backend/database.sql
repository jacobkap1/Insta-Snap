Create Extension If not Exists "uuis-ossp";

Create DATABASE DB;

-- Users: ID (primary key), username, email, password, timestamp

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
    id uuid  PRIMARY KEY DEFAULT uuid_generate_v4() ,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from users;

INSERT INTO users (username, email, password) VALUES ('bob_jones', 'bob@example.com', 'hashed_password_4');

--psql -U postgres
--\c DB
--\dt
