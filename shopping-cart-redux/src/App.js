import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

function App() {
    return (
        <div className="hidden-sn animated deep-purple-skin">
            <div>
                <Header/>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer/>
                        <MessageContainer/>
                        <CartContainer/>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
