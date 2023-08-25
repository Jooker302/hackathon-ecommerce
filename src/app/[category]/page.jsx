
import { client } from "@/lib/sanityClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddtoCart";
import toast, { Toaster } from 'react-hot-toast';

// Product {
//     name;
//     price;
//     image;
//     category;
//     _id;
// }

const Product = async ({ params }) => {
  const { category } = params;

  const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
            name,
            price,
            image,
            category,
            _id
        }`);
    return res;
  };

  const fetchData = async () => {
    const data = await getProductData();
    let filteredData;
    if (category != "all") {
      filteredData = data.filter((product) => product.category === category);
    } else {
      filteredData = data;
    }
    // console.log(filteredData)
    return filteredData;
  };

  // const renderProducts = async () => {
  const filteredProducts = await fetchData();

 

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p className="text-2xl font-semibold p-6 capitalize">
          {category} Products
        </p>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-40 w-40 object-contain mb-2"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500 mb-1 capitalize">
                Category: {product.category}
              </p>
              <p className="text-gray-500 mb-2">Price: ${product.price}</p>
              
              <AddToCartButton product={product}/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
  // };

  // return (
  //     <>
  //         {renderProducts()}
  //     </>
  // );
};

export default Product;
