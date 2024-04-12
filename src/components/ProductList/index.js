import React, { useState } from 'react';
import Product from "../Product";
import './index.css'; 

const ProductList = () => {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

  const addToCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const menuItems = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        price: 129,
        description: "Classic Italian pasta dish with bacon, eggs, and Parmesan cheese.",
        image: "https://w0.peakpx.com/wallpaper/1000/106/HD-wallpaper-food-spaghetti-pasta.jpg"
      },
      {
        id: 2,
        name: "Margherita Pizza",
        price: 872,
        description: "Traditional pizza topped with tomato sauce, fresh mozzarella, and basil leaves.",
        image: "https://media.istockphoto.com/id/1280329631/photo/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-wooden-cutting-board-close-up.jpg?s=612x612&w=0&k=20&c=CFDDjavIC5l8Zska16UZRZDXDwd47fwmRsUNzY0Ym6o="
      },
      {
        id: 3,
        name: "Grilled Salmon",
        price: 1247,
        description: "Fresh Atlantic salmon grilled to perfection, served with steamed vegetables.",
        image: "https://c4.wallpaperflare.com/wallpaper/206/557/163/fish-grilled-salmon-food-salmon-wallpaper-preview.jpg"
      },
      {
        id: 4,
        name: "Chicken Alfredo",
        price: 996,
        description: "Creamy pasta dish with grilled chicken, Parmesan cheese, and Alfredo sauce.",
        image: "https://media.istockphoto.com/id/506916161/photo/homemade-fettucini-aflredo-pasta.jpg?s=612x612&w=0&k=20&c=Pa3dwlsqnPfOKgldMXuHVy5Aqmtbp8wThbj6V_4u5us="
      },
      {
        id: 5,
        name: "Caesar Salad",
        price: 110,
        description: "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
        image: "https://wallpapercave.com/wp/wp3063126.jpg"
      },
      {
        id: 6,
        name: "Double Layer Cheese Burger",
        price: 627,
        description: "Juicy beef patty topped with lettuce, tomato, onion, and pickles, served with fries.",
        image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/16:9/w_3743,h_2105,c_limit/Smashburger-recipe-120219.jpg"
      },
      {
        id: 7,
        name: "Mushroom Risotto",
        price: 283,
        description: "Creamy Italian rice dish cooked with mushrooms, garlic, and Parmesan cheese.",
        image: "https://t4.ftcdn.net/jpg/06/13/90/07/360_F_613900733_WdWNVwUqfhKRejG3pbkMZMyFhzPy3Gtg.jpg"
      },
      {
        id: 8,
        name: "Tiramisu",
        price: 371,
        description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvmKhq_eHpIZBQDHAR7mNxwpvveuLTltIcA&usqp=CAU"
      },
      {
        id: 9,
        name: "Fish and Chips",
        price: 521,
        description: "Crispy battered fish fillets served with golden fries and tartar sauce.",
        image: "https://e0.pxfuel.com/wallpapers/928/148/desktop-wallpaper-fish-and-chips.jpg"
      },
      {
        id: 10,
        name: "Veg Stroganoff",
        price: 239,
        description: "Tender beef strips cooked in a creamy mushroom sauce, served over egg noodles.",
        image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Mushroom_Storgonoff_Recipe.jpg"
    },
    {
        id: 11,
        name: "Chicken Tikka Masala",
        price: 669,
        description: "Grilled chicken cooked in a rich, creamy tomato sauce, flavored with Indian spices.",
        image: "https://media.istockphoto.com/id/579767430/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=EjeRH4r3w9qQ2WELp5qkqkUh1HbJJwRcFNNv1suOtvM="
    },
    {
        id: 12,
        name: "Sushi Platter",
        price: 1199,
        description: "Assorted sushi rolls including California, tuna, salmon, and shrimp tempura rolls.",
        image: "https://w0.peakpx.com/wallpaper/521/1024/HD-wallpaper-sushi-california-sushi-japanese-food-japanese-dishes-sushi-on-a-plate.jpg"
    },
    {
      id: 13,
      name: "Vegetable Pad Thai",
      price: 399,
      description: "Stir-fried rice noodles with mixed vegetables, tofu, peanuts, and Pad Thai sauce.",
      image: "https://pacificspice.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Vegetable-Pad-Thai0675-1080x675.jpg"
  },
  {
      id: 14,
      name: "BBQ Ribs",
      price: 999,
      description: "Slow-cooked pork ribs basted in BBQ sauce, served with coleslaw and fries.",
      image: "https://c1.wallpaperflare.com/preview/96/574/527/spare-ribs-grill-bbq-barbecue.jpg"
  },
  {
      id: 15,
      name: "Vegetable Pizza",
      price: 399,
      description: "Pizza topped with assorted vegetables such as bell peppers, onions, mushrooms, and olives.",
      image: "https://i.pinimg.com/originals/05/96/8f/05968fd6b0425906786df14a7e3a3ac9.jpg"
  },
  {
      id: 16,
      name: "Chicken Tacos",
      price: 289,
      description: "Soft corn tortillas filled with seasoned ground beef, lettuce, cheese, and salsa.",
      image: "https://w0.peakpx.com/wallpaper/357/658/HD-wallpaper-food-taco.jpg"
  },
  {
      id: 17,
      name: "Cheese Platter",
      price: 169,
      description: "Assortment of cheeses including cheddar, brie, gouda, and blue cheese, served with crackers and grapes.",
      image: "https://c4.wallpaperflare.com/wallpaper/327/924/935/food-pasta-macaroni-and-cheese-wallpaper-preview.jpg"
  },
  {
      id: 18,
      name: "Pancakes",
      price: 189,
      description: "Fluffy pancakes served with butter, maple syrup, and fresh berries.",
      image: "https://c4.wallpaperflare.com/wallpaper/319/719/694/pancakes-4k-ultra-high-definition-wallpaper-preview.jpg"
  }
  ];
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
};

const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
);

const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredMenuItems.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

const totalAmount = cart.reduce((total, item) => {
    const product = menuItems.find((product) => product.id === item.id);
    return total + (product.price * item.quantity);
  }, 0);

    return (
        <div>
            <h1 className='heading'>Menu</h1>
            <input
                    className='search-option'
                    type="text"
                    placeholder="Search for a dish..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />   
            <div className="app">       
                <div className="product-list">
                    {currentItems.map((product) => (
                        <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        addToCart={addToCart}
                        />
                    ))}
                 </div>
                <div className="cart">
                  <div className='carthead'>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', margin: '4px'}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJC7kKqyRbWeovo4MavhP87lOd1cMr81IsuA&usqp=CAU" alt="Cart Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                        <h2>Cart</h2>
                    </div>   
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                            {item.quantity} x {menuItems.find((product) => product.id === item.id).name}
                            <button className='removebutton' onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                        </ul> 
                    )}
                    <p>Total: ₹{totalAmount.toFixed(2)}</p>
                    <a href="/checkout">
                          <button className='checkoutbutton'>Check out</button>
                    </a>
                 </div>
              </div>
              <ul className="pagination">
                {Array.from({ length: Math.ceil(filteredMenuItems.length / itemsPerPage) }).map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button onClick={() => paginate(index + 1)} className="page-link">
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;