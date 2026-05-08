import React, { useState, useRef, useEffect } from "react";

export default function CarChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Welcome to AutoDrive! Ask about pricing, financing, SUVs, or test drives.",
        },
    ]);

    const messagesEndRef = useRef(null);

    // Auto Scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    // Toggle Chat
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Bot Reply Logic
    const getBotReply = (msg) => {
        const text = msg.toLowerCase();

        if (text.includes("price")) {
            return "🚘 Our latest car models start from $24,999.";
        }

        if (text.includes("finance")) {
            return "💳 We offer flexible financing plans with low monthly payments.";
        }

        if (text.includes("suv")) {
            return "🚙 We have luxury, family, and off-road SUVs available.";
        }

        if (text.includes("test drive")) {
            return "📅 You can schedule a free test drive today.";
        }

        if (text.includes("hello") || text.includes("hi")) {
            return "👋 Hello! How can I help you today?";
        }

        return "✅ Thank you for contacting AutoDrive!";
    };

    // Send Message
    const sendMessage = () => {
        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message,
        };

        setMessages((prev) => [...prev, userMessage]);

        const currentMessage = message;

        setMessage("");

        setTimeout(() => {
            const botMessage = {
                sender: "bot",
                text: getBotReply(currentMessage),
            };

            setMessages((prev) => [...prev, botMessage]);
        }, 700);
    };

    // Enter Key
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={toggleChat}
                style={styles.chatButton}
            >
                🚗
            </button>

            {/* Chat Container */}
            {isOpen && (
                <div style={styles.chatContainer}>

                    {/* Header */}
                    <div style={styles.header}>
                        <span>Car Assistant</span>

                        <button
                            onClick={toggleChat}
                            style={styles.closeButton}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Messages */}
                    <div style={styles.messagesContainer}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.message,
                                    ...(msg.sender === "user"
                                        ? styles.userMessage
                                        : styles.botMessage),
                                }}
                            >
                                {msg.text}
                            </div>
                        ))}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={styles.input}
                        />

                        <button
                            onClick={sendMessage}
                            style={styles.sendButton}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

const styles = {
    chatButton: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        border: "none",
        background: "linear-gradient(135deg,#111,#d60000)",
        color: "#fff",
        fontSize: "30px",
        cursor: "pointer",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        zIndex: 1000,
    },

    chatContainer: {
        position: "fixed",
        bottom: "100px",
        right: "20px",
        width: "350px",
        height: "500px",
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
    },

    header: {
        background: "linear-gradient(135deg,#111,#d60000)",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "18px",
    },

    closeButton: {
        background: "transparent",
        border: "none",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
    },

    messagesContainer: {
        flex: 1,
        padding: "15px",
        overflowY: "auto",
        background: "#fafafa",
    },

    message: {
        padding: "12px",
        borderRadius: "12px",
        marginBottom: "12px",
        maxWidth: "80%",
        lineHeight: "1.5",
        fontSize: "14px",
    },

    botMessage: {
        background: "#e4e4e4",
        color: "#111",
    },

    userMessage: {
        background: "#d60000",
        color: "#fff",
        marginLeft: "auto",
    },

    inputContainer: {
        display: "flex",
        borderTop: "1px solid #ddd",
    },

    input: {
        flex: 1,
        padding: "15px",
        border: "none",
        outline: "none",
        fontSize: "14px",
    },

    sendButton: {
        background: "#d60000",
        color: "#fff",
        border: "none",
        padding: "0 20px",
        cursor: "pointer",
    },
};