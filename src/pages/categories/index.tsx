import React from 'react';
import CategoryList from '@Components/CategoryList';

import { categoryData } from '@Modules/index';

const Categories: React.FC<categoryData> = ({ categories }) => {
  return (
    <div>
      <h2>カテゴリー</h2>
      <section>
        <ul>
          {categories.map((category: string, id: number) => (
            <li key={id}>
              <CategoryList category={category} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Categories;
