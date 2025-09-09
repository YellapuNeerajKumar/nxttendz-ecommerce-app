Prime User credentials
   username: rahul
   password: rahul@2021
   
Non-Prime User credentials
   username: raja
   password: raja@2021
Set Up Instructions
  Click to view
  Download dependencies by running npm install
  Start up the app using npm start
  
The app must have the following functionalities
When an unauthenticated user tries to access the Cart Route, then the page should be navigated to Login Route
Following are the features to be implemented
    Feature 1
    
    When an authenticated user tries to add the same product multiple times
    The quantity of the product should be updated accordingly, and the count of the cart items in the header should be remained same
    Feature 2
    
    The total amount and number of items in the cart should be displayed in the Cart Route
    Feature 3
    
    In each cart item in the cart
    When the plus icon is clicked, then the quantity of the product should be incremented by one
    When the minus icon is clicked, then the quantity of the product should be decremented by one
    When the quantity of the product is one and the minus icon is clicked, then the respective product should be removed from the cart
    Based on the quantity of the product, the product price and the Cart Summary, i.e the total cost should be updated accordingly
    Feature 4
    
    When an authenticated user clicks on the remove button, cart item should be removed from the cart list
    Feature 5
    
    When an authenticated user clicks on the Remove All button, all the cart items should be removed from the cart and Empty Cart View should be displayed
    The CartContext has an object as a value with the following properties


