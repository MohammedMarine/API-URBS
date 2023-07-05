-- Adding a role to user table

ALTER TABLE "user" ADD COLUMN "role" TEXT DEFAULT 'user';

INSERT INTO "user" ("email", "password", "role") VALUES
('admin@urbs.com', '$2a$12$d0zl06F1oqQuJhXX/V.R1.ih3AhoYFSjyFnIdy9XhtwjABTwKJTdu', 'admin'); --pw adminurbs