import React, { useEffect, useMemo, useState } from "react";
import "./Index.css";
import Sidebar from "../../components/sidebar/Index";
import Product from "../../components/product/Index";
import Pagination from "@mui/material/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import FadeLoader from "../../components/loader/Index";

const ITEMS_PER_PAGE = 6;

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [params] = useSearchParams();
  const prebrand = params.get("brand") || "all";
  const precategory = params.get("category") || "all";

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://divinityimpex.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        const activeProducts = data.filter(
          (p) =>
            p.status?.toLowerCase() === "active" &&
            p.category?.toLowerCase() !== "combo"
        );
        setProducts(activeProducts);
        setFiltered(activeProducts);
      })
      .catch(() => {
        setProducts([]);
        setFiltered([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const brands = useMemo(() => {
    return [...new Set(products.map((p) => p.brand).filter(Boolean))];
  }, [products]);

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category).filter(Boolean))];
  }, [products]);

  const applyFilters = () => {
    let result = [...products];

    if (selectedBrands.length) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => {
      const price = Number(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    setFiltered(result);
    setPage(1);
  };

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const activeFilterSummary = useMemo(() => {
    const parts = [];
    if (prebrand && prebrand !== "all") parts.push(`Brand: ${prebrand}`);
    if (precategory && precategory !== "all") {
      try {
        parts.push(`Category: ${decodeURIComponent(precategory)}`);
      } catch {
        parts.push(`Category: ${precategory}`);
      }
    }
    return parts;
  }, [prebrand, precategory]);

  return (
    <section className="listingpage products-page">
      <div className="products-page__shell container-fluid">
        <header className="products-page__hero">
          <nav className="products-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="products-page__crumb-sep" aria-hidden="true">
              /
            </span>
            <span className="products-page__crumb-current">Shop</span>
          </nav>
          <div className="products-page__hero-row">
            <div>
              <p className="products-page__eyebrow">Catalog</p>
              <h1 className="products-page__title">All products</h1>
              <p className="products-page__subtitle">
                Filter by brand, category, and price — same quality formulas,
                faster to find what you need.
              </p>
              {activeFilterSummary.length > 0 && (
                <p className="products-page__url-filters">
                  {activeFilterSummary.join(" · ")}
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="row products-page__layout">
          <aside className="col-12 sidebarwrapper products-page__aside">
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
          </aside>

          <div className="col-12 rightcontent products-page__main">
            <div className="products-toolbar">
              <p className="products-toolbar__count">
                {loading ? (
                  <span className="products-toolbar__skeleton" />
                ) : (
                  <>
                    <strong>{filtered.length}</strong>
                    <span>
                      {filtered.length === 1 ? " product" : " products"}
                    </span>
                  </>
                )}
              </p>
              <div className="products-toolbar__meta">
                Page {page}
                {pageCount > 1 ? ` of ${pageCount}` : ""}
              </div>
            </div>

            <div className="row products-page__grid">
              {loading ? (
                <div className="col-12 products-page__loader">
                  <FadeLoader />
                </div>
              ) : paginatedProducts.length ? (
                paginatedProducts.map((product) => (
                  <div
                    key={product.product_id}
                    className="col-6 col-md-4 productsearch products-page__cell"
                  >
                    <div className="image-loader-wrapper">
                      <Product data={product} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 products-page__empty">
                  <h2 className="products-page__empty-title">No matches</h2>
                  <p className="products-page__empty-text">
                    Nothing fits those filters yet. Try widening the price range
                    or clearing brand / category selections.
                  </p>
                  <Link to="/products" className="products-page__empty-cta">
                    Reset catalog view
                  </Link>
                </div>
              )}
            </div>

            {!loading && pageCount > 1 && (
              <div className="products-pagination">
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                  shape="rounded"
                  siblingCount={1}
                  boundaryCount={1}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      fontWeight: 600,
                      borderRadius: "12px",
                    },
                    "& .Mui-selected": {
                      background:
                        "linear-gradient(135deg, #052a4a 0%, #e86222 100%) !important",
                      color: "#fff !important",
                    },
                  }}
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
