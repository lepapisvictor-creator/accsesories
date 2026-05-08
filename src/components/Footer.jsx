import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* <!-- footer section -->  */}
            <section class="row bg-success p-4">
                {/* <!-- child 1 -->  */}
                <div class="col-md-4">
                    <h2 class="text-white text-center">About us</h2>
                    <p class="text-white">This project is a modern car advertising web application designed to showcase vehicles, attract customers, and improve online car sales. The platform allows users to browse different car models, view prices, and interact with features such as a chatbot and shopping cart.</p>
                </div>
                {/* <!-- child 2 -->  */}
                <div class="col-md-4">
                    <h2 class="text-center text-white">Contact us</h2>
                    <form action="">
                        <input type="email" placeholder="enter your email" class="form-control" /> <br /><br />
                        <textarea name="" id="" class="form-control" placeholder="leave a comment"></textarea> <br /><br />
                        <input type="submit" value="Send message" class="btn btn-outline-danger" />
                    </form>
                </div>

                {/* <!-- child 3 -->  */}
                <div class="col-md-4">
                    <h2 class="text-center text-white">Stay connected</h2>
                    <a href="https://facebook.com">
                        <img src="images/fb.png" alt="fb" />
                    </a>
                    <a href="https:instagram.com">
                        <img src="images/in.png" alt="ig" />
                    </a>
                    <a href="https:x.com">
                        <img src="images/x.png" alt="x" />
                    </a>
                    <p class="text-center text-white">Velocity motors constantly posts information concerning its
                        business in the above platforms.</p>
                </div>
            </section>



        </div>
    )
}


export default Footer 
