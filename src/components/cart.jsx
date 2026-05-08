import React, { useState } from "react";

export default function CarStore() {
    // Car Products
    const products = [
        {
            id: 1,
            name: "BMW X5",
            price: 65000,
            image:
                "https://images.unsplash.com/photo-1555215695-3004980ad54e",
        },
        {
            id: 2,
            name: "Mercedes C-Class",
            price: 58000,
            image:
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        },
        {
            id: 3,
            name: "Audi Q7",
            price: 72000,
            image:
                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        },
    ];

    // Cart State
    const [cart, setCart] = useState([]);

    // Add To Cart
    const addToCart = (product) => {
        const existingItem = cart.find(
            (item) => item.id === product.id
        );

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    // Remove From Cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Increase Quantity
    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    // Decrease Quantity
    const decreaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            item.quantity > 1
                                ? item.quantity - 1
                                : 1,
                    }
                    : item
            )
        );
    };

    // Total Price
    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <div style={styles.container}>

            {/* Product Section */}
            <div style={styles.productsSection}>
                <h1 style={styles.heading}>
                    🚗 Car Store
                </h1>

                <div style={styles.productsGrid}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={styles.card}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={styles.image}
                            />

                            <h2>{product.name}</h2>

                            <p>
                                ${product.price.toLocaleString()}
                            </p>

                            <button
                                style={styles.addButton}
                                onClick={() =>
                                    addToCart(product)
                                }
                            >
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Section */}
            <div style={styles.cartSection}>
                <h2>🛒 Shopping Cart</h2>

                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                style={styles.cartItem}
                            >
                                <div>
                                    <h4>{item.name}</h4>

                                    <p>
                                        $
                                        {item.price.toLocaleString()}
                                    </p>
                                </div>

                                <div style={styles.qtyContainer}>
                                    <button
                                        style={styles.qtyBtn}
                                        onClick={() =>
                                            decreaseQty(item.id)
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        style={styles.qtyBtn}
                                        onClick={() =>
                                            increaseQty(item.id)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    style={styles.removeBtn}
                                    onClick={() =>
                                        removeFromCart(item.id)
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <h3 style={styles.total}>
                            Total: $
                            {totalPrice.toLocaleString()}
                        </h3>
                    </>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        padding: "30px",
        background: "#f4f4f4",
        minHeight: "100vh",
    },

    productsSection: {
        flex: 2,
    },

    heading: {
        marginBottom: "20px",
    },

    productsGrid: {
        display: "grid",
        gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
    },

    card: {
        background: "#fff",
        padding: "15px",
        borderRadius: "15px",
        boxShadow:
            "0 5px 15px rgba(0,0,0,0.1)",
        textAlign: "center",
    },

    image: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "10px",
    },

    addButton: {
        marginTop: "10px",
        padding: "10px 15px",
        background: "#d60000",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },

    cartSection: {
        flex: 1,
        background: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow:
            "0 5px 15px rgba(0,0,0,0.1)",
        minWidth: "300px",
        height: "fit-content",
    },

    cartItem: {
        borderBottom: "1px solid #ddd",
        paddingBottom: "15px",
        marginBottom: "15px",
    },

    qtyContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin: "10px 0",
    },

    qtyBtn: {
        width: "30px",
        height: "30px",
        border: "none",
        background: "#111",
        color: "#fff",
        cursor: "pointer",
        borderRadius: "5px",
    },

    removeBtn: {
        background: "#ff0000",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
    },

    total: {
        marginTop: "20px",
        color: "#d60000",
    },
};