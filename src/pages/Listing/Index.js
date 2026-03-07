import React, { useEffect, useMemo, useState } from "react";
import "./Index.css";
import Sidebar from "../../components/sidebar/Index";
import Product from "../../components/product/Index";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";
import FadeLoader from "../../components/loader/Index";

const ITEMS_PER_PAGE = 9;

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [params] = useSearchParams();
  const prebrand = params.get("brand") || "all";
  const precategory = params.get("category") || "all";

  /* FILTER STATE */
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  /* PAGINATION STATE */
  const [page, setPage] = useState(1);



  /* FETCH PRODUCTS */
  useEffect(() => {
    fetch("https://divinityimpex.com/api/products")
      .then(res => res.json())
      .then(data => {
        const activeProducts = data.filter(
          p => p.status?.toLowerCase() === "active" &&
            p.category?.toLowerCase() !== "combo"
        );

        setProducts(activeProducts);
        setFiltered(activeProducts);
      });
  }, []);

  /* AUTO BRAND LIST */
  const brands = useMemo(() => {
    return [...new Set(products.map(p => p.brand).filter(Boolean))];
  }, [products]);

  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.category).filter(Boolean))];
  }, [products]);

  // console.log(categories);
  // console.log(precategory);

  /* APPLY FILTERS */
  const applyFilters = () => {
    let result = [...products];

    if (selectedBrands.length) {
      result = result.filter(p =>
        selectedBrands.includes(p.brand)
      );
    }

    if (selectedCategories.length) {
      result = result.filter(p =>
        selectedCategories.includes(p.category)
      );
    }

    result = result.filter(p => {
      const price = Number(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    setFiltered(result);
    setPage(1);
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
              categories={categories}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              applyFilters={applyFilters}
              products={products}
              setPage={setPage}
              setFiltered={setFiltered}
              prebrand={prebrand}
              precategory={precategory}
            />

          </div>

          {/* PRODUCTS */}
          <div className="col-sm-12 rightcontent">
            <div className="row">
              {paginatedProducts.length ? (
                paginatedProducts.map(product => (
                  <div
                    key={product.product_id}
                    className="col-md-4 col-6 productsearch"
                  >
                    <div className="image-loader-wrapper">
                      <Product data={product} />
                    </div>
                  </div>
                ))
              ) : (
                <FadeLoader />
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
