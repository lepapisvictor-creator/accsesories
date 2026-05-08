import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [user, setUser] = useState(null);


    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        setUser(loggedUser);
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content --> */}
                <nav class="navbar navbar-expand-md bg-secondary">
                    <a href="/" class="navbar-brand textwhite">Prime Stores</a>
                    <div class="navbar-nav">
                        <a href="/" className='nav-link'>home</a>
                        <a href="/getproducts" className='nav-link'>Get products</a>

                    {user ?(
                        <>
                        <span className='nav-link'>welcome {user.username}</span>
                        <button onClick={logout} className='btn  btn-danger'>
                            logout
                        </button>
                        </>
                    ) : (
                        
                        <>
                            <a href="/signin" class="nav-link">Signin</a>
                            <a href="/signup" class="nav-link">Signup</a>
                            </>

                    )}     
                       
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar