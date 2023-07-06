-- ----------------------------------------
-- DB :  "urbs"
-- ----------------------------------------

BEGIN;

INSERT INTO "product" ("id", "name", "color", "size", "price") VALUES
(1, 'L-Écrin', 'Blacksheep', 13, 89),
(2, 'L-Écrin', 'Blueduck', 13, 89),
(3, 'L-Écrin', 'Redvelvet', 13, 89),
(4, 'L-Écrin', 'Blacksheep', 15, 129),
(5, 'L-Écrin', 'Blueduck', 15, 129),
(6, 'L-Écrin', 'Redvelvet', 15, 129);

INSERT INTO "user" ("id", "firstname", "lastname", "address", "streetnumber", "zipcode", "email", "password") VALUES
(1, 'Steevie', 'Wonder',  'Musician Street', 20, 7519, 'steevie@wonder.com', '$2a$10$3T0mYlCAAJBjbhlSthc2SeuKbzfmWlRvdtNPI4ynPt1UKrBd8q12C'),
(2, 'Michelle', 'Obama', 'White House Street', 4, 8245, 'michelle@obama.com', '$2a$10$Cdj848De7ETFB/mE/PTipOW2QYEQif77d.VI/v6B3FI2.4pQMJ/kO');

COMMIT;

--Note: PG, when using IDENTITY BY DEFAULT in place of ALWAYS, does not update the id incrementation,
--that's why we have to update the current value of each sequences by selecting the id max of each table once seeding is completed.
BEGIN;

SELECT setval('product_id_seq', (SELECT MAX(id) from "product"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;

