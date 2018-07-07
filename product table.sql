create table bamazon.products (
 item_id int unique auto_increment primary key,
 product_name varchar(125),
 department_name varchar(75),
 price decimal,
 stock_quantity int(4));