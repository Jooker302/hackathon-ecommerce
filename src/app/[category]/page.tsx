import { useEffect, useState } from 'react';
import { client } from '@/lib/sanityClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  _id: string;
}

interface ProductProps {
  params: {
    category: string;
  };
}

const Product = ({ params }: ProductProps) => {
  const { category } = params;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch<Product[]>(`
          *[_type=="product" && (${category} == 'all' || category == ${category})]{
            name,
            price,
            image,
            category,
            _id
          }
        `);
        setProducts(res);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p className="text-2xl font-semibold p-6 capitalize">{category} Products</p>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-lg shadow-md p-4 text-center">
              <img src={product.image} alt={product.name} className="mx-auto h-40 w-40 object-contain mb-2" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500 mb-1 capitalize">Category: {product.category}</p>
              <p className="text-gray-500 mb-2">Price: RS{product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
