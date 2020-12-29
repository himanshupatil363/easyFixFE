import React from 'react';
import Search from '../components/categories/search';
import Cat from '../components/categories/cat'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Categories() {
  return (
    <div className="Categories">
      <Navbar />
      <Search />
      <Cat />
      <Footer />
    </div>
  );
}
export default Categories;