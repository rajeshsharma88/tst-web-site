
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import ContactModal from '../components/ContactModal';
import AnimatedSection from '../components/AnimatedSection';
import useSeo from '../hooks/useSeo';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === id);
    setProduct(foundProduct);

    if (foundProduct) {
      setActiveImage(foundProduct.images[0]);
      const related = PRODUCTS.filter(
        p => p.category === foundProduct.category && p.id !== foundProduct.id
      ).slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id]);

  // SEO Hook
  useSeo({
    title: product ? `${product.name} | TST Technologies` : 'Product Not Found',
    description: product ? product.short : 'The product you are looking for could not be found.',
    imageUrl: product ? product.images[0] : undefined,
    jsonLd: product ? {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: product.images[0],
      description: product.short,
      sku: product.id,
      brand: {
        '@type': 'Brand',
        name: 'TST Technologies'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        // Price is not available, so we indicate it's available on request
        availability: 'https://schema.org/InStock', 
        url: window.location.href, 
        price: '0', // Required for validation, but we can state price is on request
      }
    } : undefined,
  });

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-primary mt-4 inline-block">Back to Products</Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <AnimatedSection>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                  <div className="border rounded-lg p-4 mb-4">
                    <img src={activeImage} alt={`Main view of ${product.name}, a high-tech ${product.category} solution`} className="w-full h-auto object-contain aspect-square rounded-lg"/>
                  </div>
                  <div className="flex space-x-2">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`border-2 rounded-lg p-1 ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1} for ${product.name} ${product.category} system`} className="w-20 h-20 object-cover rounded"/>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <span className="text-primary font-semibold text-sm">{product.category}</span>
                  <h1 className="text-4xl font-bold text-secondary my-2">{product.name}</h1>
                  <p className="text-gray-600 mb-6">{product.short}</p>
                  
                  <div className="prose max-w-none text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: product.description }}></div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-4">Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm border-b py-1">
                          <span className="font-medium text-gray-800">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto text-center inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <AnimatedSection>
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedProducts.map(relatedProduct => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>
        )}
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.name}
      />
    </>
  );
};

export default ProductDetailPage;
