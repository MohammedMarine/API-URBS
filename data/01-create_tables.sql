-- -----------------------------------------------------
-- Schemas urbs
-- -----------------------------------------------------

-- Note 1 : We name all tables as: singular/ lower case/ english

-- Note 2 : All tables contain a created_at field with the creating date of a record,
-- and a updated_at field with the updating date of a record

BEGIN;
--starting point of a transaction (A group of SQL statements that makes them dependent on each other.)
--if at least one fails, then all are invalidated

--we make sur all tables are deleted before to create them
--NOTE!!! DO NOT LAUNCH THIS SCRIPT ON PROD!!!
DROP TABLE IF EXISTS "cart",
"order",
"product",
"user",
"wishlist",
"product_wishlist",
"cart_product";

--Note 4: PG: we use text rather than varchar
--Note 5: Prefere to use  GENERATED ...

-- -----------------------------------------------------
-- Table "cart"
-- -----------------------------------------------------
CREATE TABLE "cart" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" INTEGER NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- we can not refer to id from user as this table does not exist yet. We gonna add it at the en of this scrip.

-- -----------------------------------------------------
-- Table "order"
-- -----------------------------------------------------
CREATE TABLE "order" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "paymentMethod" TEXT NOT NULL,
  "cart_id" INTEGER NOT NULL REFERENCES "cart"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "product"
-- -----------------------------------------------------
CREATE TABLE "product" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "price" INTEGER NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "app_user"
-- -----------------------------------------------------
CREATE TABLE "user" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "firstname" TEXT NULL,
  "lastname" TEXT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "address" TEXT NULL,
  "streetnumber" INTEGER NULL,
  "zipcode" INTEGER NULL,
  "city" TEXT NULL,
  "country" TEXT NULL,
  "phonenumber" INTEGER NULL,
  "order_id" INTEGER NULL REFERENCES "order"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "wishlist"
-- -----------------------------------------------------
CREATE TABLE "wishlist" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NULL,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "product_wishlist"
-- -----------------------------------------------------
CREATE TABLE "product_wishlist" (
    "product_id" INTEGER NOT NULL REFERENCES "product"("id"),
    "wishlist_id" INTEGER NOT NULL REFERENCES "wishlist"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    PRIMARY KEY (product_id, wishlist_id)
);

-- -----------------------------------------------------
-- Table "cart_product"
-- -----------------------------------------------------
CREATE TABLE "cart_product" (
    "cart_id" INTEGER NOT NULL REFERENCES "cart"("id") ON DELETE CASCADE,
    "product_id" INTEGER NOT NULL REFERENCES "product"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    PRIMARY KEY (cart_id, product_id)
);

ALTER TABLE "cart" ADD FOREIGN KEY (user_id) REFERENCES "user"("id");

COMMIT; -- end