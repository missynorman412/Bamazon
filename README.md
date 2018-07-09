# Bamazon
Bamazon is a node based MySQL application. Its purpose is to allow a user to select a product number from a list of products, and a quantity. It checks the database to see if the quantity the user selected is available, and if it is available, it processes the order, deducts the quantity ordered from the database and gives the user a total price.

To execute the program, on the node command line, enter 'node bamazonCustomer.js'
![bamazon1](https://user-images.githubusercontent.com/25428778/42420919-259ad22e-829b-11e8-8255-903c61ba3937.PNG)

You will get a list of products and a prompt to enter a product number.

![image](https://user-images.githubusercontent.com/25428778/42420950-7e410ec0-829b-11e8-8cf5-f2d6cb3e6858.png)

When you enter a product number, it will ask you how many of this item you want to purchase.
![image](https://user-images.githubusercontent.com/25428778/42420968-bf087d8a-829b-11e8-9d24-0a4488447470.png)
Upon entering the quantity, the program will check the database to see if that quantity is available. If the quantity is available, it will process the order, deduct the quantity from the product quantity in the database, and give the user a total of the purchase price.
![bamazon4](https://user-images.githubusercontent.com/25428778/42421010-7158f398-829c-11e8-948d-7bb65ef3024c.PNG)
Following shows the quantity deduction from the MySQL table:
If there is not enough quantity in stock, the program notifies the user.



