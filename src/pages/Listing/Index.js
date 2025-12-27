import React, { useEffect, useMemo, useState } from "react";
import "./Index.css";
import Sidebar from "../../components/sidebar/Index";
import Product from "../../components/product/Index";
import Pagination from "@mui/material/Pagination";

const ITEMS_PER_PAGE = 9;

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  /* FILTER STATE */
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  /* PAGINATION STATE */
  const [page, setPage] = useState(1);

  

  /* FETCH PRODUCTS */
  useEffect(() => {
    fetch("https://divinityimpex.com/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  /* AUTO BRAND LIST */
  const brands = useMemo(() => {
    return [...new Set(products.map(p => p.brand).filter(Boolean))];
  }, [products]);

  /* APPLY FILTERS */
  const applyFilters = () => {
    let result = [...products];

    if (selectedBrands.length) {
      result = result.filter(p =>
        selectedBrands.includes(p.brand)
      );
    }

    result = result.filter(p => {
      const price = Number(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    setFiltered(result);
    setPage(1); // 🔥 reset to first page after filtering
  };

  /* PAGINATED PRODUCTS */
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <section className="listingpage">
      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR */}
          <div className="col-sm-12 sidebarwrapper">
            <Sidebar
              brands={brands}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              applyFilters={applyFilters}
              products={products}
              setPage={setPage}
              setFiltered={setFiltered}
            />

          </div>

          {/* PRODUCTS */}
          <div className="col-sm-12 rightcontent">
            <div className="row">
              {paginatedProducts.length ? (
                paginatedProducts.map(product => (
                  <div
                    key={product.product_id}
                    className="col-md-4 productsearch"
                  >
                    <Product data={product} />
                  </div>
                ))
              ) : (
                <p className="text-center">No products found</p>
              )}
            </div>

            {/* PAGINATION */}
            {pageCount > 1 && (
              <div className="paginationsection d-flex justify-content-center mt-4">
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Listing;
