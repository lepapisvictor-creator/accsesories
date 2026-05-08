import React from 'react'

const Carousel = () => {
  return (
    <section class="row">
      <div class="col-md-12">
        {/* <!-- a division containing carousel content  -->  */}
        <div class="carousel slide " id="mycarousel" data-bs-ride="carousel">
          {/* <!-- division containing images  -->  */}
          <div class="carousel-inner">
            {/* <!-- div with image 1 -->  */}
            <div class="carousel-item active">
              <img src="images/slide5.jpeg" alt="slide5" width={700} style={{ height: "500px", objectFit: "fill" }} />
            </div>
            {/* <!-- div with image 2 -->  */}
            <div class="carousel-item">
              <img src="images/slide6.jpeg" alt="slide6" width={700} style={{ height: "500px", objectFit: "fill" }} />
            </div>
            {/* <!-- div with image 3 -->  */}
            <div class="carousel-item">
              <img src="images/slide7.jpg" alt="slide7" width={700} style={{ height: "500px", objectFit: "fill" }} />
            </div>
            {/* <!-- div with image 4 -->  */}
            <div class="carousel-item">
              <img src="images/slide8.jpg" alt="slide8" width={700} style={{ height: "500px", objectFit: "fill" }} />
            </div>
          </div>
          {/* <!-- previous control -->  */}
          <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark"></span>
          </a>
          {/* <!-- next control  -->  */}
          <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Carousel