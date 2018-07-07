var mysql = require("mysql");
var inquirer = require("inquirer");

//set up connection variable
var connection = mysql.createConnection({
    host: "localhost",

    // set up port
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    //the database is bamazon
    database: "bamazon"

});
//now we are going to connect

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    selectProducts();
});

//functions
function validation(value) {
    var thisVal = Number.isInteger(parseFloat(value));
    var curVal = Math.sign(value);

    if (thisVal && (curVal === 1)) {
        return true;

    } else {
        return 'Enter a non-zero integer.'
    }
}

function displayInventory(){
    query = "SELECT * FROM products";
    connection.query(query, function(err, data){
        if (err) throw err;
        console.log('Existing Inventory: ');

    
    })}


function selectProducts() {
    console.log("Selecting all products...\n");
    var query = "SELECT item_id, product_name, price FROM products";
    console.log(query);
    connection.query(query, function (error, response) {
        if (error) throw error;
        // Log all results of the SELECT statement
        console.log(response);
        //After the products are listed, prompt the user for the ID of the product they want to purchase
        // function which prompts the user for what action they should take
        inquirer.prompt([
            {
                type: "input",
                name: "item_id",
                message: "What is the ID of the item you would like to buy?",
                validate: validation
            },
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to purchase?",
                validate: validation
            }
        ]).then(function (input) {
            var item = input.item_id;
            var quantity = input.quantity;
            //set up database string
            var query = "SELECT * FROM bamazon.products WHERE ?";
            //query db
            connection.query(query, { item_id: item }, function (err, data) {
                if (err) throw err;
                //if array is empty, an invalid item id has been selected
                if (data.length === 0) {
                    console.log("Error, invalid item number");
                    displayInventory();
                } else {
                    ////figure out if the quantity is positive
                    var productData = data[0];
                    if (quantity <= productData.stock_quantity) {
                        console.log("Quantity selected is in stock.");

                        //update db
                        var updateDBQuery = 'UPDATE bamazon.products SET stock_quantity = ' + (productData.stock_quantity - quantity) + " WHERE + " + item + " = item_id";
                        connection.query(updateDBQuery, function (err, date) {
                            if (err) throw err;
                            console.log("Your order has been placed.");
                            console.log("Your total is $" + productData.price * quantity);
                            connection.end();

                        })
                    } else {
                        console.log("There is not enough product in stock.");
                        console.log("Please reorder.");
                        displayInventory();
                    }
                }
            })
        })
    })
}