import React, { useEffect } from "react";
import "./Index.css";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SoapIcon from "@mui/icons-material/Soap";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import banner from "../../assets/images/banner/daily-banner.png";

const Sidebar = ({
  brands,
  categories,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  applyFilters,
  products,
  setPage,
  setFiltered,
  prebrand,
  precategory
}) => {

  useEffect(() => {
    let filtered = [...products];

    // BRAND PARAM
    if (prebrand && prebrand !== "all" && brands.includes(prebrand)) {
      setSelectedBrands([prebrand]);
      filtered = filtered.filter((p) => p.brand === prebrand);
    }

    // CATEGORY PARAM
    if (precategory && precategory !== "all" && categories.includes(precategory)) {
      setSelectedCategories([precategory]);
      filtered = filtered.filter((p) => p.category === precategory);
    }

    // PRICE FILTER
    filtered = filtered.filter(
      (p) =>
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
    );

    setFiltered(filtered);
    setPage(1);

  }, [prebrand, precategory, brands, categories, products]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  /* CLEAR FILTERS */
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, 500]);
    setFiltered(products);
    setPage(1);
  };

  return (
    <div className="sidebar">

      {/* CATEGORY / BRAND */}
      <div className="card border-0 shadow width-auto">
        <h3 className="quicksand">Brands</h3>

        <div className="catlist">
          {brands.map((brand) => (
            <div
              key={brand}
              className="catitem d-flex align-items-center justify-content-between mb-2"
              onClick={() => toggleBrand(brand)}
            >
              <div className="info d-flex align-items-center">
                <span className="img">
                  {brand === "TITAN CORE"
                    ? <FitnessCenterOutlinedIcon />
                    : <SoapIcon />}
                </span>
                <h4 className="mb-0 ms-3 quicksand">
                  {brand}
                </h4>
              </div>

              <Checkbox
                checked={selectedBrands.includes(brand)}
                sx={{
                  color: "#d4af37",
                  "&.Mui-checked": { color: "#d4af37" }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="card border-0 shadow mt-4">
        <h3 className="quicksand">Product Category</h3>

        <div className="catlist">
          {categories.map((cat) => (
            <div
              key={cat}
              className="catitem d-flex align-items-center justify-content-between mb-2"
              onClick={() => toggleCategory(cat)}
            >
              <div className="info d-flex align-items-center">
                <span className="img">
                </span>

                <h4 className="mb-0 ms-3 quicksand">
                  {cat}
                </h4>
              </div>

              <Checkbox
                checked={selectedCategories.includes(cat)}
                sx={{
                  color: "#d4af37",
                  "&.Mui-checked": { color: "#d4af37" }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PRICE FILTER */}
      <div className="card border-0 shadow mt-4">
        <h3 className="quicksand">Filter By Price</h3>

        <Slider
          value={priceRange}
          onChange={(e, val) => setPriceRange(val)}
          valueLabelDisplay="auto"
          min={0}
          max={500}
          step={10}
          sx={{ color: "#E2CA78" }}
        />

        <div className="d-flex pt-2 pb-2 pricerange">
          <span>
            From: <strong className="text-g">{priceRange[0]} AED</strong>
          </span>
          <span className="priceright">
            To: <strong className="text-g">{priceRange[1]} AED</strong>
          </span>
        </div>

        <div className="d-flex flex-column">
          <Button className="btn btn-g" onClick={applyFilters}>
            <FilterAltIcon /> Filter
          </Button>
          {/* CLEAR FILTER BUTTON */}
          <div className="text-center mt-2">
            <button
              className="btn btn-g"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* <img src={banner} className="w-100 h-100 listing-banner" /> */}
    </div>
  );
};

export default Sidebar;
