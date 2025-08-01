import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './filter.module.css';
import BlogSidebar from '../../components/blog/BlogSidebar';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

// Define the type for the filter state
interface FilterState {
  category: string;
  tags: string[];
}

const Workflows: React.FC = () => {
  const [filteredProduct, setFilteredProduct] = useState<FilterState>({
    category: 'colab',
    tags: ['workflows'],
  });

  const handleClick = (data: string) => {
    setFilteredProduct((prevFilter) => {
      const updatedTags = prevFilter.tags.includes(data)
        ? prevFilter.tags.filter((tag) => tag !== data) // Remove tag if exists
        : [...prevFilter.tags, data]; // Add tag if not exists

      return {
        category: 'colab-workflows',
        tags: updatedTags,
      };
    });
  };

  return (
    <Layout title="Workflows" description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div className={styles.container}>
          <div className={styles.filterContainer}>
            <BlogSidebar filterCallback={handleClick} />
          </div>
          <div className={styles.cardContainer}>
            <MarketplaceCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Workflows;
