import React, { useState, useEffect } from "react";
import "./Index.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import FadeLoader from "../../components/loader/Index";
import Rating from "@mui/material/Rating";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Button from "@mui/material/Button";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AddToCartButton from "../../components/addcartbutton/Index";

const Details = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productImage, setproductImage] = useState(null);
  const [productKey, setproductKey] = useState(0);
  const [quantity, setquantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  // 🔥 Combo Selection State
  const [comboSelections, setComboSelections] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  // 🔥 Handle Selection
  const handleVariantChange = (id, value) => {
    setComboSelections((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const generateComboName = () => {
    const selectedProducts = Object.values(comboSelections)
      .map((pid) =>
        allProducts.find((p) => String(p.product_id) === String(pid)),
      )
      .filter(Boolean);

    if (selectedProducts.length === 0) return product.name;

    return `${product.name} - ${selectedProducts
      .map((p) => p.name)
      .join(" + ")}`;
  };

  useEffect(() => {
    fetch("https://divinityimpex.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        const activeProducts = data.filter((p) => p.status === "active");
        setAllProducts(activeProducts);
      })
      .catch((err) => console.error("Products API Error:", err));
  }, []);

  useEffect(() => {
    fetch(`https://divinityimpex.com/api/product?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setproductImage(data.data.thumbnail_url);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!product) return;

    const filtered = allProducts.filter(
      (p) =>
        p.category === product.category && p.product_id !== product.product_id,
    );

    setSimilarProducts(filtered.slice(0, 8)); // show max 8
  }, [product, allProducts]);

  useEffect(() => {
    if (!product) return;
    const imgs =
      Array.isArray(product.images_json) && product.images_json.length > 0
        ? product.images_json
        : [product.image || product.thumbnail_url].filter(Boolean);
    setproductKey(0);
    setproductImage(product.thumbnail_url || imgs[0] || null);
  }, [product?.product_id]);

  const handleBuyNow = async () => {
    try {
      if (isCombo && Object.values(comboSelections).length === 0) {
        alert("Please select all combo options");
        return;
      }

      let comboProductId = product?.product_id; // default normal product id

      if (isCombo) {
        const response = await fetch(
          "https://divinityimpex.com/api/create-combo-products.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              products: Object.values(comboSelections),
              combo_name: generateComboName(),
            }),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to create combo product");
        }

        const data = await response.json();

        if (!data.success || !data.product_id) {
          throw new Error("Invalid response from server");
        }

        comboProductId = data.product_id; // ✅ UPDATE HERE
      }

      navigate("/checkout", {
        state: {
          product: {
            ...(product || {}),
            name: isCombo ? generateComboName() : product?.name,
            product_id: comboProductId,
          },
        },
      });
    } catch (error) {
      console.log("Buy Now Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const onThumbnailClick = (img, key) => {
    setproductImage(img);
    setproductKey(key);
  };

  if (loading) return <FadeLoader />;

  const isCombo = product?.category?.toLowerCase() === "combo";

  const comboProducts = isCombo
    ? [
        {
          id: "main",
          name: product?.name?.toLowerCase().includes("true gain")
            ? "💪 True Gain (Mass Gainer)"
            : "🥤 Whey Protein",
          variants: allProducts.filter(
            (p) =>
              (product?.name?.toLowerCase().includes("true gain")
                ? p.name.toLowerCase().includes("true gain")
                : p.name.toLowerCase().includes("whey protein")) &&
              p.category.toLowerCase() !== "combo",
          ),
        },
        {
          id: "preworkout",
          name: "⚡ Pre Workout",
          variants: allProducts.filter(
            (p) =>
              p.name.toLowerCase().includes("pre workout") &&
              p.category.toLowerCase() !== "combo",
          ),
        },
        {
          id: "creatine",
          name: "Creatine Monohydrate",
          variants: allProducts.filter(
            (p) =>
              p.name.toLowerCase().includes("creatine") &&
              p.category.toLowerCase() !== "combo",
          ),
        },
        {
          id: "bcaa",
          name: "🔥 Branched Chain Amino Acids",
          variants: allProducts.filter(
            (p) =>
              p.name.toLowerCase().includes("branched") &&
              p.category.toLowerCase() !== "combo",
          ),
        },
      ]
    : [];

  const discount =
    product.old_price && product.old_price > product.price
      ? Math.round(
          ((product.old_price - product.price) / product.old_price) * 100,
        )
      : 0;

  const galleryImages =
    Array.isArray(product?.images_json) && product.images_json.length > 0
      ? product.images_json
      : [product?.image || product?.thumbnail_url].filter(Boolean);

  const formatDescription = (html) => {
    if (!html) return "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const headings = doc.querySelectorAll("h3");

    headings.forEach((heading) => {
      if (heading.innerText.toLowerCase().includes("ingredient")) {
        const nextElement = heading.nextElementSibling;

        if (nextElement && nextElement.tagName === "P") {
          const items = nextElement.innerText.split(",");

          const ul = document.createElement("ul");

          items.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                                <span class="ingredient-icon">✓</span>
                                ${item.trim()}
                            `;
            ul.appendChild(li);
          });

          nextElement.replaceWith(ul);
        }
      }
    });

    return doc.body.innerHTML;
  };

  return (
    <section className="detailspage modern-details pdp-page">
      <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
        <div className="container-fluid pdp-breadcrumb__inner">
          <ol className="breadcrumb breadcrumb2 pdp-breadcrumb__list">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="breadcrumb-item breadactive" aria-current="page">
              {product.name?.length > 48
                ? `${product.name.slice(0, 48)}…`
                : product.name}
            </li>
          </ol>
        </div>
      </nav>

      <div className="container mw-85 pdp-container">
        <div className="row g-4 pdp-main-row">
          <div className="col-12 col-lg-5 pdp-gallery-col">
            <div className="pdp-gallery-card">
              {isCombo ? (
                <div className="productzoom combo-zoom pdp-main-zoom">
                  {discount > 0 && (
                    <div className="modern-discount pdp-discount-badge">
                      {discount}% off
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="combo-img pdp-combo-img"
                  />
                </div>
              ) : (
                <div className="image-gallery-wrapper pdp-gallery">
                  {galleryImages.length > 1 && (
                    <div className="zoomslider vertical-slider pdp-thumbs">
                      <div className="thumb-prev" aria-hidden="true">
                        ▲
                      </div>
                      <Swiper
                        modules={[Navigation]}
                        navigation={{
                          nextEl: ".thumb-next",
                          prevEl: ".thumb-prev",
                        }}
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={10}
                        breakpoints={{
                          0: {
                            direction: "horizontal",
                            slidesPerView: 4,
                          },
                          768: {
                            direction: "vertical",
                            slidesPerView: 4,
                          },
                        }}
                        className="product-thumb-swiper"
                      >
                        {galleryImages.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div
                              className={`slider-item pdp-thumb-item ${productKey === index ? "thumbactive" : ""}`}
                              onMouseEnter={() => onThumbnailClick(img, index)}
                              onClick={() => onThumbnailClick(img, index)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  onThumbnailClick(img, index);
                                }
                              }}
                            >
                              <img src={img} alt="" />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="thumb-next" aria-hidden="true">
                        ▼
                      </div>
                    </div>
                  )}

                  <div className="productzoom pdp-main-zoom">
                    {discount > 0 && (
                      <div className="modern-discount pdp-discount-badge">
                        {discount}% off
                      </div>
                    )}
                    <div className="zoom-wrapper pdp-zoom-wrapper">
                      <Zoom>
                        <img
                          src={productImage || galleryImages[0]}
                          alt={product.name}
                          className="pdp-main-img"
                        />
                      </Zoom>
                      <span className="zoom-tooltip">Click to zoom</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-lg-7 pdp-buy-col">
            <div className="pdp-buy-card productinfo">
              <p className="pdp-eyebrow">Official store</p>
              <h1 className="product-title pdp-title">{product.name}</h1>

              {product?.description && (
                <p className="short-desc pdp-subtitle">{product.description}</p>
              )}

              <div className="meta-badges pdp-badges">
                <span className="brand-badge">{product.brand}</span>
                <span className="category-badge">{product.category}</span>
                {product.quantity > 0 ? (
                  <span className="stock in-stock">In stock</span>
                ) : (
                  <span className="stock out-stock">Out of stock</span>
                )}
              </div>

              <div className="pdp-rating-row d-flex align-items-center flex-wrap gap-2 mb-2">
                <Rating value={4.5} precision={0.5} readOnly />
                <span className="pdp-rating-text">4.5 · Trusted quality</span>
              </div>

              <div className="modern-price-section pdp-price-block">
                <div className="pdp-price-main">
                  <span className="modern-price pdp-price">{product.price}</span>
                  <span className="pdp-currency">AED</span>
                </div>
                {product.old_price && (
                  <div className="pdp-price-secondary">
                    <span className="modern-oldprice pdp-mrp">
                      MRP {product.old_price} AED
                    </span>
                    {discount > 0 && (
                      <span className="pdp-save-pill">{discount}% off</span>
                    )}
                  </div>
                )}
              </div>

              <ul className="pdp-trust-list" aria-label="Purchase benefits">
                <li>Secure checkout</li>
                <li>Fast dispatch</li>
                <li>Authentic product</li>
              </ul>

              {product?.additional_info && (
                <div className="ingredients-preview pdp-ingredients-preview">
                  <h3 className="pdp-side-heading">Key highlights</h3>
                  <div
                    className="ingredients-content"
                    dangerouslySetInnerHTML={{
                      __html: formatDescription(product.additional_info),
                    }}
                  />
                </div>
              )}

              <div className="freeShakerDetail pdp-offer-chip">
                Free shaker on eligible orders
              </div>

              <div className="pdp-spec-row">
                <span className="pdp-spec-label">
                  {product.category === "Fish Oil"
                    ? "Capsules"
                    : "Net weight"}
                </span>
                <span className="pdp-spec-value">{product.net_wt}</span>
              </div>

              {isCombo && (
                <div className="combo-options pdp-combo-options">
                  <h3 className="pdp-side-heading">Build your combo</h3>
                  {comboProducts.map((item) => (
                    <div key={item.id} className="combo-item mb-3">
                      <label className="fw-medium pdp-combo-label">{item.name}</label>
                      <select
                        className="form-select pdp-combo-select"
                        value={comboSelections[item.id] || ""}
                        onChange={(e) =>
                          handleVariantChange(item.id, e.target.value)
                        }
                      >
                        <option value="">Select option</option>
                        {item.variants.map((variant) => (
                          <option
                            key={variant.product_id}
                            value={variant.product_id}
                          >
                            {variant.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              )}

              <div className="buysection pdp-buysection" id="pdp-buy">
                <div className="addcartsection modern-cart pdp-actions">
                  <div className="quantity-box pdp-qty">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => quantity > 1 && setquantity(quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      readOnly
                      aria-label="Quantity"
                    />
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() =>
                        quantity < product.quantity &&
                        setquantity(quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <Button className="buy-btn pdp-buy-now" onClick={handleBuyNow}>
                    <FlashOnIcon /> Buy now
                  </Button>

                  <AddToCartButton
                    product={{
                      ...product,
                      name: isCombo ? generateComboName() : product.name,
                    }}
                    qty={quantity}
                    isCombo={isCombo}
                    comboSelections={comboSelections}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar products */}

        <div className="similar-products pdp-similar">
          {similarProducts.length > 0 && (
            <div className="similar-header pdp-similar-header">
              <p className="pdp-similar-eyebrow">You may also like</p>
              <h3 className="pdp-similar-title">Similar products</h3>
              <p className="pdp-similar-sub">
                More from the same category, curated for your stack.
              </p>
            </div>
          )}

          <div className="similar-grid">
            {similarProducts.map((item) => (
              <Link
                to={`/product/details/${item.product_id}`}
                className="similar-card"
                key={item.product_id}
              >
                <div className="similar-img-wrapper">
                  {item.old_price && item.old_price > item.price && (
                    <span className="similar-discount">
                      {Math.round(
                        ((item.old_price - item.price) / item.old_price) * 100,
                      )}
                      % OFF
                    </span>
                  )}

                  <img src={item.thumbnail_url || item.image} alt={item.name} />
                </div>

                <div className="similar-info">
                  <h5 className="similar-name">{item.name}</h5>

                  <div className="similar-price-wrap">
                    <span className="similar-price">{item.price} AED</span>

                    {item.old_price && (
                      <span className="similar-old">{item.old_price} AED</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MODERN TABS SECTION */}
        <div className="modern-tabs pdp-tabs">
          <div className="tab-buttons">
            <button
              className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>

            <button
              className={activeTab === "additional" ? "active" : ""}
              onClick={() => setActiveTab("additional")}
            >
              Ingredients
            </button>

            <button
              className={activeTab === "shipping" ? "active" : ""}
              onClick={() => setActiveTab("shipping")}
            >
              Shipping
            </button>
          </div>

          <div className="tab-content-modern">
            {activeTab === "description" && (
              <div
                className="full-description"
                dangerouslySetInnerHTML={{
                  __html: product.full_description || "<p>No description available.</p>",
                }}
              />
            )}

            {activeTab === "additional" && (
              <div
                className="description-content"
                dangerouslySetInnerHTML={{
                  __html: product.additional_info
                    ? formatDescription(product.additional_info)
                    : "<p>No ingredients list available.</p>",
                }}
              />
            )}

            {activeTab === "shipping" && (
              <div
                className="pdp-shipping-tab"
                dangerouslySetInnerHTML={{
                  __html: product.shipping_info || "<p>Shipping information not available.</p>",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
