import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct } from "./redux/productSlice";
import Shope from "./pages/Shope";
import HomeProductDetails from "./pages/HomeProductDetail";
import ShopeProductDetails from "./pages/ShopeProductDetails";
import Login from "./pages/Login";
import { Container, Spinner } from "react-bootstrap";
import Register from "./pages/Register";
import CartItems from "./pages/CartItems";
import { ToastContainer } from "react-toastify";
import "./toast.css";
import UsersView from "./admin/UsersView";
import UserList from "./admin/Userlist";
import AddProduct from "./admin/AddProduct";
import ProductList from "./admin/ProductList";
import EditProduct from "./admin/EditProduct";
import UnAuthorized from "./utils/UnAuthorized";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import AddedProductDetails from "./pages/AddedProductDetails";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdite";

function App() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");

        setLoading(false);

        dispatch(setProduct(data.products));
      } catch (error) {
        console.log(error.message);
      }
      setLoading(true);
    };
    fetchProduct();
  }, []);

  const brands = [
    {
      id: 1,
      title:
        "Apple MacBook AIR M2 - (16 GB/256 GB SSD/macOS Sequoia) MC7X4HN/A",
      images:
        "https://rukminim1.flixcart.com/image/372/360/xif0q/computer/f/j/g/-original-imahfthtkkzyazkf.jpeg?q=60",
      contents:
        "TV is in the midst of a massive transformation to a conversion medium. Learn what advertisers need to know about this shift.",
      price: 32999,
      emi: "₹1,100/month",
      offerPercent: 18,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 2,
      title:
        "Apple MacBook AIR M2 - (16 GB/256 GB SSD/macOS Sequoia) MC7X4HN/A",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/f/y/-original-imahgfdfjcy6aghz.jpeg?q=70",
      contents:
        "Connected TVs are reshaping how brands reach audiences with more data-driven ad strategies.",
      price: 28999,
      emi: "₹999/month",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 3,
      title:
        "Apple MacBook AIR M2 - (16 GB/256 GB SSD/macOS Sequoia) MC7X4HN/A",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/8/4/-original-imahayjpdhdyghzh.jpeg?q=70",
      contents:
        "CTV offers better targeting, measurable results, and higher engagement compared to traditional TV.",
      price: 45999,
      emi: "₹1,599/month",
      offerPercent: 20,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 4,
      title:
        "Apple MacBook AIR M2 - (16 GB/256 GB SSD/macOS Sequoia) MC7X4HN/A",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/8/4/-original-imahayjpdhdyghzh.jpeg?q=70",
      contents:
        "CTV offers better targeting, measurable results, and higher engagement compared to traditional TV.",
      price: 45999,
      emi: "₹1,599/month",
      offerPercent: 20,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 5,
      title: "Apple iPhone 15 (Black, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      contents:
        "The iPhone 15 is a stylish and powerful smartphone that combines premium design with smooth performance.",
      price: 79999,
      emi: "₹2,666/month",
      offerPercent: 10,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 6,
      title: "Apple iPhone 15 (Pink, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
      contents:
        "First-party data is helping brands personalize TV ads like never before.",
      price: 79999,
      emi: "₹2,666/month",
      offerPercent: 10,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 7,
      title: "Apple iPhone 15 (Green, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
      contents:
        "TV is no longer just for awareness; it’s becoming a performance-driven channel.",
      price: 79999,
      emi: "₹2,666/month",
      offerPercent: 10,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 8,
      title: "Apple iPhone 17 Pro Max (Cosmic White, 512 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=70",
      contents:
        "AI helps optimize ad placements, creatives, and targeting in real time.",
      price: 159999,
      emi: "₹5,333/month",
      offerPercent: 12,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 9,
      title: "Apple iPhone 17 Pro Max (Cosmic Orange, 512 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/v/m/-original-imahft6chnx2vbuy.jpeg?q=70",
      contents:
        "OTT platforms offer premium inventory and engaged audiences for brands.",
      price: 159999,
      emi: "₹5,333/month",
      offerPercent: 12,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 10,
      title: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/m/z/-original-imahgfmxumntk7sy.jpeg?q=70",
      contents:
        "Samsung Galaxy S25 is a powerful and stylish flagship smartphone designed for top-level performance.",
      price: 129999,
      emi: "₹4,333/month",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 11,
      title: "Samsung Galaxy S24 Ultra 5G (Titanium Black, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/g/-original-imahgfmy2zgqvjmy.jpeg?q=70",
      contents:
        "Samsung Galaxy S25 delivers immersive display, advanced camera, and long battery life.",
      price: 129999,
      emi: "₹4,333/month",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 12,
      title: "Samsung Galaxy S24 Ultra 5G (Titanium Yellow, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/r/g/-original-imahgfmy4xfecrhg.jpeg?q=70",
      contents:
        "Samsung Galaxy S25 offers premium design with next-gen performance and AI features.",
      price: 129999,
      emi: "₹4,333/month",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 13,
      title: "CMF by Nothing Buds 2a, 42 dB ANC, 12.4mm Driver, Dirac...",
      images:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/v/m/-original-imahe29hekg6hgw8.jpeg?q=70",
      contents:
        "Experience immersive sound with CMF AirPods, designed for users who want premium features at an affordable price. With powerful bass, clear vocals, and advanced noise cancellation, these earbuds are perfect for music, calls, gaming, and everyday use.",
      price: 899,
      emi: "₹100 monthliy",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 14,
      title: "CMF by Nothing Buds 2a, 42 dB ANC, 12.4mm Driver, Dirac...",
      images:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/z/p/0/-original-imahe37pthfjh5jr.jpeg?q=70",
      contents:
        "Experience immersive sound with CMF AirPods, designed for users who want premium features at an affordable price. With powerful bass, clear vocals, and advanced noise cancellation, these earbuds are perfect for music, calls, gaming, and everyday use.",
      price: 899,
      emi: "₹100 monthliy",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 15,
      title: "CMF by Nothing Buds 2a, 42 dB ANC, 12.4mm Driver, Dirac...",
      images:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/e/x/-original-imahe37pyanhayeb.jpeg?q=70",
      contents:
        "Experience immersive sound with CMF AirPods, designed for users who want premium features at an affordable price. With powerful bass, clear vocals, and advanced noise cancellation, these earbuds are perfect for music, calls, gaming, and everyday use.",
      price: 899,
      emi: "₹100 monthliy",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 16,
      title: "CMF by Nothing Buds 2a, 42 dB ANC, 12.4mm Driver, Dirac...",
      images:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/h/b/v/-original-imahe29hx7dunuvp.jpeg?q=70",
      contents:
        "Experience immersive sound with CMF AirPods, designed for users who want premium features at an affordable price. With powerful bass, clear vocals, and advanced noise cancellation, these earbuds are perfect for music, calls, gaming, and everyday use.",
      price: 899,
      emi: "₹100 monthliy",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 17,
      title: "MOTOROLA g57 power 5G (Pantone Regatta, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/u/l/-original-imahhqjwyzsjyfvn.jpeg?q=70",
      contents:
        "4.420,887 Ratings & 1,119 Reviews 8 GB RAM | 128 GB ROM 17.07 cm (6.72 inch) Full HD+ Display 50MP + 8MP | 8MP Front Camera 7000 mAh Battery 6s Gen 4 Processor",
      price: 899,
      emi: "₹4500",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 18,
      title: "MOTOROLA g57 power 5G (Pantone Regatta, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/k/r/-original-imahhqjwsngwkksu.jpeg?q=70",
      contents:
        "4.420,887 Ratings & 1,119 Reviews 8 GB RAM | 128 GB ROM 17.07 cm (6.72 inch) Full HD+ Display 50MP + 8MP | 8MP Front Camera 7000 mAh Battery 6s Gen 4 Processor",
      price: 899,
      emi: "₹4500",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 19,
      title: "MOTOROLA g57 power 5G (Pantone Regatta, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/l/g/-original-imahgympttnkvw7t.jpeg?q=70",
      contents:
        "4.420,887 Ratings & 1,119 Reviews 8 GB RAM | 128 GB ROM 17.07 cm (6.72 inch) Full HD+ Display 50MP + 8MP | 8MP Front Camera 7000 mAh Battery 6s Gen 4 Processor",
      price: 899,
      emi: "₹4500",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 20,
      title: "MOTOROLA g57 power 5G (Pantone Regatta, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/a/e/-original-imahkcvgkwzd7u6p.jpeg?q=70",
      contents:
        "4.420,887 Ratings & 1,119 Reviews 8 GB RAM | 128 GB ROM 17.07 cm (6.72 inch) Full HD+ Display 50MP + 8MP | 8MP Front Camera 7000 mAh Battery 6s Gen 4 Processor",
      price: 899,
      emi: "₹4500",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 21,
      title: "Apple iPhone 15 (Green, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      contents: `
           4.62,72,694 Ratings & 9,526 Reviews
              128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
            48MP + 12MP | 12MP Front Camera
             A16 Bionic Chip, 6 Core Processor Processor
`,
      price: 899,
      emi: "1 year ₹8999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 22,
      title: "Apple iPhone 15 (Green, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70",
      contents: `
           4.62,72,694 Ratings & 9,526 Reviews
              128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
            48MP + 12MP | 12MP Front Camera
             A16 Bionic Chip, 6 Core Processor Processor
`,
      price: 899,
      emi: "1 year ₹8999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 23,
      title: "Apple iPhone 15 (Green, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
      contents: `
           4.62,72,694 Ratings & 9,526 Reviews
              128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
            48MP + 12MP | 12MP Front Camera
             A16 Bionic Chip, 6 Core Processor Processor
`,
      price: 899,
      emi: "1 year ₹8999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 24,
      title: "Apple iPhone 15 (Green, 128 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
      contents: `
           4.62,72,694 Ratings & 9,526 Reviews
              128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
            48MP + 12MP | 12MP Front Camera
             A16 Bionic Chip, 6 Core Processor Processor
`,
      price: 899,
      emi: "1 year ₹8999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 25,
      title: "Apple iPhone 16 Pro Max (Natural Titanium, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/8/-original-imahggevcrkzezzv.jpeg?q=70",
      contents: "",
      price: 899,
      emi: "₹5999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 26,
      title: "Apple iPhone 16 Pro Max (Natural Titanium, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/h/-original-imahggetkf6y67sr.jpeg?q=70",
      contents: "",
      price: 899,
      emi: "₹5999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 27,
      title: "Apple iPhone 16 Pro Max (Natural Titanium, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/8/-original-imahggevcrkzezzv.jpeg?q=70",
      contents:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/u/b/n/k-43s22m2-sony-original-imahe36uggyfpgdk.jpeg?q=70",
      price: 899,
      emi: "₹5999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 28,
      title: "Apple iPhone 16 Pro Max (Natural Titanium, 256 GB)",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/f/5/-original-imahggexm5yafhez.jpeg?q=70",
      contents: "",
      price: 899,
      emi: "₹5999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 29,
      title:
        "SONY BRAVIA 2 II 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2025 Edition",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/c/v/-original-imagvgcgp2hgxs6n.jpeg?q=70",
      contents: `
4.632,276 Ratings & 3,919 Reviews
Ultra HD (4K) | LED
Model ID: K-43S22BM2
Launch Year: 2025
Total Sound Output: 20 W
`,
      price: 99999,
      emi: "₹6999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 30,
      title:
        "SONY BRAVIA 2 II 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2025 Edition",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/o/a/s/kd-43x70l-sony-original-imah3me6qgwyu2va.jpeg?q=70",
      contents: `
4.632,276 Ratings & 3,919 Reviews
Ultra HD (4K) | LED
Model ID: K-43S22BM2
Launch Year: 2025
Total Sound Output: 20 W
`,
      price: 99999,
      emi: "₹6999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 31,
      title:
        "SONY BRAVIA 2 II 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2025 Edition",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/m/m/a/-original-imah5rgkhyeykgsj.jpeg?q=70",
      contents: `
4.632,276 Ratings & 3,919 Reviews
Ultra HD (4K) | LED
Model ID: K-43S22BM2
Launch Year: 2025
Total Sound Output: 20 W
`,
      price: 99999,
      emi: "₹6999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
    {
      id: 32,
      title:
        "SONY BRAVIA 2 II 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2025 Edition",
      images:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/u/b/n/k-43s22m2-sony-original-imahe36uggyfpgdk.jpeg?q=70",
      contents: `
4.632,276 Ratings & 3,919 Reviews
Ultra HD (4K) | LED
Model ID: K-43S22BM2
Launch Year: 2025
Total Sound Output: 20 W
`,
      price: 99999,
      emi: "₹6999",
      offerPercent: 15,
      availabilityStatus: "In Stock",
      discountPercentage: 15,
      shippingInformation: "Free Delivery",
      quantity: 1,
    },
  ];

  return (
    <>
      {loading === true ? (
        <BrowserRouter>
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar
            closeOnClick
            pauseOnHover={false}
            draggable={false}
            toastClassName="flipkart-toast"
            bodyClassName="flipkart-toast-body"
          />
          <Header setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Home brands={brands} search={search} />}/>
            <Route path="/about" element={<About />} />
            <Route path="/shope" element={<Shope />} />
            <Route path="/added-product-details/:id" element={<AddedProductDetails />} />
            <Route path="/home-product-details/:id" element={<HomeProductDetails brands={brands} />}/>
            <Route path="/shope-product-details/:id" element={<ShopeProductDetails brands={brands} />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/cart-page" element={<CartItems />} />

             {/* user edit */}
            {/* <Route path="/user-list" element={<UserList/>}/> 
           <Route path="/user-View/:id" element={<UsersView/>}/>  */}
              
              {/* un-authrized-block */}
            <Route path="/user-list" element={<ProtectedRoutes requiredRole={["admin"]}>
             <UserList/>
           </ProtectedRoutes>}/>
             <Route path="/user-View/:id" element={<ProtectedRoutes  requiredRole={["admin"]}>
              <UsersView />
            </ProtectedRoutes>} />

            <Route path="/add-product" element={<ProtectedRoutes  requiredRole={["admin","seller"]}>
              <AddProduct />
            </ProtectedRoutes>} />

            <Route path="/poroduct-list" element={<ProtectedRoutes  requiredRole={["admin","seller"]}>
              <ProductList />
            </ProtectedRoutes>} />
             

            <Route path="/edit-poroduct/:id" element={<ProtectedRoutes  requiredRole={["admin","seller"]}>
              <EditProduct />
            </ProtectedRoutes>} />
            <Route path="/Profile" element={<ProtectedRoutes>
              <Profile/>
            </ProtectedRoutes>} /> 
            <Route path="/edit-prifile/:id" element={<ProtectedRoutes>
              <ProfileEdit/>
            </ProtectedRoutes>} />     

            <Route path="/unAuthorized" element={<ProtectedRoutes>
              <UnAuthorized/>
            </ProtectedRoutes>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      ) : (
        <Container
          fluid
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <Spinner animation="border" variant="danger" />
        </Container>
      )}
    </>
  );
}
export default App;
