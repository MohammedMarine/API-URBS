CREATE DATABASE USERS;
\c USERS;

CREATE TABLE ADD (
  code_wishlist VARCHAR(42),
  code_product VARCHAR(42),
  PRIMARY KEY (code_wishlist, code_product)
);

CREATE TABLE CART (
  code_cart VARCHAR(42),
  code_user VARCHAR(42),
  PRIMARY KEY (code_cart)
);

CREATE TABLE ORDER (
  code_order VARCHAR(42),
  date VARCHAR(42),
  paymentmethod VARCHAR(42),
  code_cart VARCHAR(42),
  PRIMARY KEY (code_order)
);

CREATE TABLE POSSESS (
  code_cart VARCHAR(42),
  code_product VARCHAR(42),
  PRIMARY KEY (code_cart, code_product)
);

CREATE TABLE PRODUCT (
  code_product VARCHAR(42),
  name VARCHAR(42),
  color VARCHAR(42),
  size VARCHAR(42),
  price VARCHAR(42),
  PRIMARY KEY (code_product)
);

CREATE TABLE USER (
  code_user VARCHAR(42),
  firstname VARCHAR(42),
  lastname VARCHAR(42),
  email VARCHAR(42),
  password VARCHAR(42),
  address VARCHAR(42),
  zipcode VARCHAR(42),
  code_order VARCHAR(42),
  PRIMARY KEY (code_user)
);

CREATE TABLE WISHLIST (
  code_wishlist VARCHAR(42),
  name VARCHAR(42),
  date VARCHAR(42),
  code_user VARCHAR(42),
  PRIMARY KEY (code_wishlist)
);

ALTER TABLE ADD ADD FOREIGN KEY (code_product) REFERENCES PRODUCT (code_product);
ALTER TABLE ADD ADD FOREIGN KEY (code_wishlist) REFERENCES WISHLIST (code_wishlist);
ALTER TABLE CART ADD FOREIGN KEY (code_user) REFERENCES USER (code_user);
ALTER TABLE ORDER ADD FOREIGN KEY (code_cart) REFERENCES CART (code_cart);
ALTER TABLE POSSESS ADD FOREIGN KEY (code_product) REFERENCES PRODUCT (code_product);
ALTER TABLE POSSESS ADD FOREIGN KEY (code_cart) REFERENCES CART (code_cart);
ALTER TABLE USER ADD FOREIGN KEY (code_order) REFERENCES ORDER (code_order);
ALTER TABLE WISHLIST ADD FOREIGN KEY (code_user) REFERENCES USER (code_user);