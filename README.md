WELCOME TO THE FURNITURE ECOMMERCE!

The following project was built to learn about Context API and how I could use it to add some items to a cart and see a total price, such us in a normal ecommerce.

This website consists of five pages: Home, About, Products, Products Detail and Cart. To move from one to the other I used React Router.

The first two pages were not a priority in this project and they just have some basic sections. 


#PRODUCTS PAGE

This page is in charge of showing all the products of this store that can be find in an array of objects called products inside our data.js file.
Every object has all the necesary information of each product and depending on how the user chooses to see them (grid or list), a specific component will render all this data.

On the left side of the screen you can see an input that will check if the word typed by the user is included in any of the products.name property of our products array. If the input is empty all the products are shown.

Under this input you can find the rest of the filters that the user can use to find an specific product in our store. All of them store the value selected and filter the products array depending on their category, price and color properties. The color filter will not show products of that color but it correctly filters the objects or products which color property is equal to the one that the user picked. It was only a matter of not looking for furniture of that color and just learning how to filter arrays. The final button would reset the filters so all the products are shown again.

On the right side of the screen you can choose between the grid or list view of the products as well as knowing how many products were found after applying the filters. There is also some sort options that were included just to learn how to order arrays depending on their price or name.

The two components that will be in charge of the view of the products are ProductoGrilla and ProductoLista.

To finish with this page it is important to mention the deatils button that every product has. This button will take you to the Product Deails page of that object.


#PRODUCT DETAILS PAGE

This page has a gallery of the pictures of the selected project on the left and the rest of its information on the right. It in this section in which you can add a product to the cart.


#CART PAGE

The cart page uses the Context API. All the cart products are stored in an array in our state, as also the amount, total, subtotal and the methods to modify this values. All this functions dispatch an action to our reducer file who will update our state values.

If the cart products array is empty a mesage indicating this will be shown in the screen, if not, a section with every item name, price, quantity and subtotal will be displayed as well as a totals chart at the bottom of this section.















