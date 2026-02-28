import { useRef } from "react";
import "./FeaturedMultiCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeaturedMultiCarousel() {
  const scrollRef = useRef(null);

  const CarouselItems = [
     
      { image: "https://i.ytimg.com/vi/6ByRw-D1JKw/maxresdefault.jpg" },
    {image:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1766143644096/zip/img/pc/vivo-x300-in-halo-pink.png",},
    {image:"https://image01.realme.net/general/20260105/176761051378741350ed3fe914cf58a9237209a787382.jpg.webp?width=2624&height=1206&size=2025863&filename=1.jpg",},
    { image: "https://pbs.twimg.com/media/EktjkXTVkAAXrg1.jpg" },
     { image: "https://pbs.twimg.com/media/EtXrMiLVgAA-sIT.jpg" },
    { image: "https://i.ytimg.com/vi/btSnuY3cPPI/maxresdefault.jpg" },
        { image: "https://pbs.twimg.com/media/FMG8q2XaMAIcGGi.jpg" },
      { image: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/afaqs/media/media_files/2025/06/20/vivo_suhana-2025-06-20-15-32-15.png" },
    { image: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/03/1709531514204-photoutils.com_.jpg?ssl=1&quality=80&w=f" },
     { image: "https://i.ytimg.com/vi/vpyZAL3Yz7I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwHimwabcgx6L1nuG2U6YgB-y4yg" },

  
  

   
  ];

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  
  return (
    <div className="horizontal-carousel-container">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        <FaChevronLeft />
      </button>

      <Col className="horizontal-scroll" ref={scrollRef}>
        {CarouselItems.map((item,index) => (
          <Col className="banner-card" key={index}>
           <Link to={"/shope"}>
            <Image className="object-fit-contain p-1" src={item.image} alt="banner" />
           </Link>
          </Col>
        ))}
      </Col>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default FeaturedMultiCarousel;
