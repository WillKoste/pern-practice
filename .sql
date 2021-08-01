create table products (
	id serial primary key,
	name text not null,
	image text,
	description text,
	brand text,
	category varchar(100),
	price float not null,
	countInStock int not null,
	rating float,
	numReviews int,
	created_at date default now(),
	timestamp time default current_time
)
create table users (
	id serial primary key,
	name text not null,
	email text not null unique,
	password text not null,
	isAdmin bool default false not null,
	created_at date default now(),
	timestamp time default current_time
);
create table reviews (
	id serial primary key,
	name text not null,
	rating float not null,
	comment text,
	author_id int references users(id),
	product_id int references products(id),
	created_at date default now(),
	timestamp time default current_time
);
create table paymentresults (
	id serial primary key,
	payment_id text,
	status text,
	update_time text,
	email_address text
);
create table orders (
	id serial primary key,
	user_id int references users(id),
	order_item_id int references orderitems(id),
	shipping_address_id int references shippingaddresses(id),
	payment_method text not null,
	payment_result int references paymentresults(id),
	tax_price float not null default 0.0,
	shipping_price float not null default 0.0,
	total_price float not null default 0.0,
	is_paid bool not null default false,
	paid_date date,
	is_delivered bool not null default false,
	delivered_date date,
	created_at date default now(),
	timestamp time default current_time
);
create table shippingaddresses (
	id serial primary key,
	address text not null,
	city text not null,
	postal_code text not null,
	country text not null,
	user_id int references users(id)
);
create table orderitems (
	id serial primary key,
	name text not null,
	qty int not null,
	image text not null,
	price float not null,
	transaction_number int,
	product_id int references products(id)
);
select * from users;
select * from orders;
select * from orderitems o
select * from shippingaddresses s
select * from paymentresults p
insert into products
(name, image, description, brand, category, price, countinstock, rating, numreviews, user_id)
values ('Amazon Echo', '/images/alexa.jpg', 'I can turn on/off your lights and shit.', 'Amazon', 'Smart Home', 39.99, 820, 4.5, 951, 1)
insert into users (name, email, password) values ('Kitty Koste', 'kittykoste@gmail.com', '123456')
insert into orders (transaction_number, shipping_address_id, payment_method, tax_price, shipping_price, total_price, is_paid)
values ('88aa028d-4b21-4fa1-ad04-35d368f1da8f', 13, 'TestCoin', 7.89, 10.00, 50.81, true);
alter table shippingaddresses add column id serial primary key;
alter table products alter column image set default '/images/placeholder.png';
alter table products alter column user_id set not null;
alter table products add column user_id int references users(id)
alter table shippingaddresses add column user_id int references users(id)
alter table orderitems drop column user_id
alter table orderitems add column bing text;
alter table orderitems drop column bing;
alter table orderitems add column transaction_number text;
alter table orders add column transaction_number text;
alter table shippingaddresses add column id serial primary key;
alter table paymentresults
	add column created_at date
	default now();
alter table paymentresults
	add column timestamp time
	default current_time;
alter table orderitems add column transaction_number text;
alter table orderitems drop column transaction_number;
alter table users
	add column created_at date
	default now();
alter table users
	add column timestamp time
	default current_time;
alter table orders
	add column transaction_number text;
alter table orders
	drop column user_id
	
alter table orders
	add column items_price float
select  p.id product_id, u.id user_id, p.user_id product_user_id, p."name", p.price from users u inner join products p on p.user_id = u.id where p.user_id = 4;
-- LIKE VS. ILIKE --
select * from products p where brand like '%Apple%'		-- LETTER CASE MATTERS
select * from products p where brand ilike '%apple%'		-- LETTER CASE DOESN'T MATTER
-- CREATE SHIPPING ADDRESS QUERY --
insert into shippingaddresses (address, city, postal_code, country, user_id) values ('1010 Tenten st', 'Uganda', '45621', 'Idaho', 5)
select * from shippingaddresses s
-- CREATE ORDER ITEM QUERY --
insert into orderitems (name, qty, image, price, product_id) values ('2006 Keyblade BoatSport', 3, '/images/boat.jpg', 15000.99, 3);
select * from orderitems o;
-- SELECTING SHIPPING INFO FOR CREATE ORDER QUERY --
select u.id users_id, u.name, s.user_id shipping_address_user_id, s.address, s.id shippingaddress_id from users u
	inner join shippingaddresses s
	on u.id = s.user_id
	inner join orders o2
	on s.id = o2.shipping_address_id
-- SELECT ORDERITEMS INFO FOR CREATE ORDER QUERY --
select p.id products_id, p."name" product_name, p.price, o.transaction_number, o.id order_item_id from products p
	inner join orderitems o
	on p.id = o.product_id
	inner join orders o2
	on o2.id = o.transaction_number
	where transaction_number = '6a781402-659d-4632-b531-410a8372ce37'
	
	
-- SELECT ORDER ITEMS BY TRANSACTION NUMBER IN ORDER QUERY --
select * from orderitems o
	inner join orders o2
	on o.transaction_number = o2.transaction_number
	where o.transaction_number = '5d47d663-ca26-4e01-95cd-8e612469b381'
	and o.name ilike '%b%'
	
	
--	
select u.id users_id, u.name, s.user_id shipping_address_user_id, s.id shippingaddress_id, o2.transaction_number from users u
	inner join shippingaddresses s
	on u.id = s.user_id
	inner join orders o2
	on s.id = o2.shipping_address_id
--	
	
	select u.id users_id, u.name, u.isadmin, s.user_id shipping_address_user_id, s.id shippingaddress_id, o2.transaction_number from users u inner join shippingaddresses s on u.id = s.user_id inner join orders o2 on s.id = o2.shipping_address_id where o2.transaction_number = '5d47d663-ca26-4e01-95cd-8e612469b381'
select * from users u
	inner join shippingaddresses s
	on s.user_id = u.id
	where s.id = 9
select * from users u;
select * from products p;
update users set "name" = 'Billie Joe' where email = 'singsong@gmail.com';
--delete from orderitems where transaction_number = 'fd8f2a1a-48b6-4c05-a012-37331100d357'
--delete from orders where id > 2 and id < 9;
--update products set user_id = 5;
--update users set title = 'Doobies Post' where creatorid = 5;
--update orderitems set transaction_number = 5421 where id = 12;
--delete from products where id = 12;
--delete from orderitems;
--delete from shippingaddresses where user_id = 12;
--truncate table products, users restart identity cascade;