'use client';

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const sampleData = [
    {
      id: 1,
      title: "Sample Product 1",
      description: "This is a sample product description with detailed information about the item.",
      price: "$99.99",
      category: "Clothing",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      title: "Sample Product 2",
      description: "Another sample product with different features and specifications.",
      price: "$149.99",
      category: "Accessories",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      title: "Sample Product 3",
      description: "A third sample product showcasing various product details.",
      price: "$79.99",
      category: "Footwear",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      title: "Sample Product 4",
      description: "Fourth sample product with unique characteristics and benefits.",
      price: "$199.99",
      category: "Clothing",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 5,
      title: "Sample Product 5",
      description: "Fifth sample product demonstrating product variety and options.",
      price: "$129.99",
      category: "Accessories",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 6,
      title: "Sample Product 6",
      description: "Sixth sample product with comprehensive product information.",
      price: "$89.99",
      category: "Footwear",
      image: "https://via.placeholder.com/300x400"
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100%',
      padding: '2rem',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          color: '#333'
        }}>
          Sample Product Catalog
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          marginBottom: '2rem',
          color: '#666'
        }}>
          This is a Next.js 15 application that provides headers as a microfrontend
          using Contentstack CMS.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {sampleData.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '0.9rem'
              }}>
                Image Placeholder
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#888',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {item.category}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#000'
              }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

