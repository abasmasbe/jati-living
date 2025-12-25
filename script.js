
/* ===============================
   HELPER
================================ */
function toThumb(src) {
  const file = src.split("/").pop();
  const dot = file.lastIndexOf(".");
  const name = file.substring(0, dot);
  const ext = file.substring(dot);
  return `thumb/${name}-400${ext}`;
}


const PRODUCTS = [

  {
    id: "alder-cabinet",
    title: "Alder Cabinet",
	category: "cabinet",   
    price: "IDR 8.550.000",
    images: [
      "img/alder-cabinet-1.jpg",
      "img/alder-cabinet-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Rattan",
		"Hardware: Slowmotion",
      "Size: W 220 x D 55 x H 85 cm",
      "Pre Order",
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "lois-sofa",
    title: "Lois Sofa",
	category: "sofa",
    price: "IDR 12.450.000",
    images: [
      "img/loiss-sofa-1.jpg",
      "img/loiss-sofa-2.jpg",
      "img/loiss-sofa-3.jpg"
    ],
    specs: [
	  	"Material: Solid Teak Wood, Fabric",
      "Size: W 300 x D 79 x H 96 cm",
      "Pre Order",
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "bed-frame-4drawer",
    title: "Bed Frame 4 Drawer",
	category: "bed",
    price: "IDR 6.850.000",
    images: [
      "img/bed-frame-4drawer-1.jpg",
      "img/bed-frame-4drawer-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Rattan",
		"Hardware: Push Open",
      "Size: W 180 x D 200 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "kura-cabinet",
    title: "Kura Cabinet",
	category: "cabinet",
    price: "IDR 4.300.000",
    images: [
      "img/kura-cabinet-1.jpg",
      "img/kura-cabinet-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Rattan",
		"Hardware: Slowmotion",
      "Size: W 140 x D 45 x H 90 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "mini-cabinet",
    title: "Mini Cabinet",
	category: "cabinet",
    price: "IDR 1.850.000",
    images: [
      "img/mini-cabinet-1.jpg",
      "img/mini-cabinet-2.jpg",
      "img/mini-cabinet-3.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood",
    "Hardware Slowmotion",
      "Size: W 50 x D 40 x H 55 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "gruvy-chair",
    title: "Gruvy Chair",
	category: "chair",
    price: "IDR 2.450.000",
    images: [
      "img/gruvy-chair-1.jpg",
      "img/gruvy-chair-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Plywood, Fabric, Veneer Teak Wood",
      "Size: W 57 x D 54 x H 68 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "sila-bar-stool",
    title: "Sila Bar Stool",
	category: "chair",
    price: "IDR 1.650.000",
    images: [
      "img/sila-bar-stools-1.jpg",
      "img/sila-bar-stools-2.jpg",
      "img/sila-bar-stools-3.jpg"
    ],
    specs: [
		"Material: Metal, Fabric Vorta Boucle",
      "Size: W 60 x D 46 x H 115 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "maciza-bed-frame",
    title: "Maciza Bed Frame",
	category: "bed",
    price: "IDR 4.200.000",
    images: [
      "img/maciza-bed-frame-1.jpg",
      "img/maciza-bed-frame-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Rattan",
      "Size: W 160 x D 200 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "chaise-arm-chair",
    title: "Chaise Arm Chair",
	category: "chair",
    price: "IDR 1.950.000",
    images: [
      "img/chaise-arm-chair-1.jpg",
      "img/chaise-arm-chair-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Fabric",
      "Size: W 60 x D 65 x H 80 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "sillas-chair",
    title: "Sillas Chair",
	category: "chair",
    price: "IDR 1.600.000",
    images: [
      "img/sillas-chair-1.jpg",
      "img/sillas-chair-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood, Oscar",
      "Size: W 55 x D 60 x H 80 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "wooden-door",
    title: "Wooden Door",
	category: "door",
    price: "IDR 11.650.000",
    images: [
      "img/wooden-door-1.jpg",
      "img/wooden-door-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood",
      "Size: W 120 x H 250 x T 6 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "santos-dining-table",
    title: "Santos Dining Table",
	category: "table",
    price: "IDR 3.300.000",
    images: [
      "img/santos-dining-table-1.jpg",
      "img/santos-dining-table-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood",
      "Size: W 150 x D 70 x H 75 x T 6 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "abingdon-dining-table",
    title: "Abingdon Dining Table",
	category: "table",
    price: "IDR 3.650.000",
    images: [
      "img/abingdon-dining-table-1.jpg",
      "img/abingdon-dining-table-2.jpg"
    ],
    specs: [
		"Material: Teak Wood",
      "Size: W 150 x D 70 x H 75 x T 3 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "danish-set-dining",
    title: "Danish Set Dining Table",
	category: "table",
    price: "IDR 7.100.000",
    images: [
      "img/danish-dining-table-1.jpg",
      "img/danish-dining-table-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood",
      "Table Size: W 160 x D 80 x H 75 x T 3 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "japandi-coffee-table",
    title: "Japandi Coffee Table",
	category: "table",
    price: "IDR 3.350.000",
    images: [
      "img/japandi-coffee-table-1.jpg",
      "img/japandi-coffee-table-2.jpg"
    ],
    specs: [
		"Material: Solid Teak Wood",
      "Dimension: 80 x T 8 cm",
      "Pre Order",
    //   "Note: Optional Color"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },


    {
    id: "wishman-chair",
    title: "Wishman Chair",
    category: "chair",
    price: "IDR 850.000",
    images: [
      "img/wishman-chair-1.jpg",
      "img/wishman-chair-2.jpg"
    ],
    specs: [
      "Material: Solid Teak Wood",
      "Dimension: W 45 x H 95 cm",
      "Pre Order"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "loly-cabinet",
    title: "Loly Cabinet",
    category: "cabinet",
    price: "IDR 3.650.000",
    images: [
      "img/loly-cabinet-1.jpg",
      "img/loly-cabinet-2.jpg"
    ],
    specs: [
      "Material: Teak Wood, Rattan Square",
      "Hardware: Slowmotion",
      "Size: W 120 x D 45 x H 80 cm",
      "Pre Order"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "vintage-padel-chair",
    title: "Vintage Padel Chair",
    category: "chair",
    price: "IDR 1.450.000",
    images: [
      "img/vintage-padel-chair-1.jpg",
      "img/vintage-padel-chair-2.jpg"
    ],
    specs: [
      "Material: Solid Teak Wood, Fabric",
      "Size: W 63 x D 53 x H 95 cm",
      "Open Request Logo",
      "Pre Order"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "treatment-padel-chair",
    title: "Treatment Padel Chair",
    category: "chair",
    price: "IDR 1.450.000",
    images: [
      "img/treatment-padel-chair-1.jpg",
      "img/treatment-padel-chair-2.jpg"
    ],
    specs: [
      "Material: Solid Teak Wood, Fabric",
      "Size: W 63 x D 53 x H 95 cm",
      "Open Request Logo",
      "Pre Order"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "peanut-set-dining-table",
    title: "Peanut Set Dining Table",
    category: "table",
    price: "IDR 7.650.000",
    images: [
      "img/peanut-dining-table-1.jpg",
      "img/peanut-dining-table-2.jpg"
    ],
    specs: [
      "Material: Solid Teak Wood, Rattan, Fabric",
      "Set: 6 chairs + Table",
      "Table Size: W 200 x D 90 x H 75 cm",
      "Pre Order"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
    id: "receptionist-table",
    title: "Receptionist Table",
    category: "table",
    price: "IDR 10.700.000",
    images: [
      "img/receptionist-table-1.jpg",
      "img/receptionist-table-2.jpg"
    ],
    specs: [
      "Material: Solid Teak Wood",
      "Hardware: Slowmotion",
      "Size: W 150 x D 100 / D 40 x H 100 cm",
      "Pre Order"
    ],
    colors: [{ cls: "optional-colour", name: "Optional Colour" }]
  },

  {
  id: "zwart-cabinet-rattan",
  title: "Zwart Cabinet Rattan",
  category: "cabinet",
  price: "IDR 4.400.000",
  images: [
    "img/zwart-cabinet-rattan-1.jpg",
    "img/zwart-cabinet-rattan-2.jpg",
    "img/zwart-cabinet-rattan-3.jpg"
  ],
  specs: [
    "Material: Solid Teak Wood, Rattan",
    "Size: W 150 x D 40 x H 65 cm",
    "Pre Order"
  ],
  colors: [{ cls: "optional-colour", name: "Optional Colour" }]
},

{
  id: "wabize-sofa",
  title: "Wabize Sofa",
  category: "sofa",
  price: "IDR 9.600.000",
  images: [
    "img/wabize-sofa-1.jpg",
    "img/wabize-sofa-2.jpg"
  ],
  specs: [
    "Material: Teak Wood, Fabric",
    "Size: W 300 x D 80 x H 90 cm",
    "Pre Order"
  ],
  colors: [{ cls: "optional-colour", name: "Optional Colour" }]
},



];



/* ===============================
   CATEGORY + FILTER BUTTONS
================================ */
const categories = [
  { id: "all", label: "All" },
  { id: "cabinet", label: "Cabinet" },
  { id: "sofa", label: "Sofa" },
  { id: "chair", label: "Chair" },
  { id: "table", label: "Table" },
  { id: "bed", label: "Bed" },
  { id: "door", label: "Door" }
];

const filterWrap = document.getElementById("productFilters");

if (filterWrap) {
  categories.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.textContent = c.label;
    btn.dataset.cat = c.id;
    if (i === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      document.querySelectorAll(".product-filters button")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(c.id);
    });

    filterWrap.appendChild(btn);
  });
}

/* ===============================
   GRID RENDER + HOVER ROTATION
================================ */
function renderProducts(cat = "all") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = "";

  PRODUCTS
    .filter(p => cat === "all" || p.category === cat)
    .forEach(product => {
      const card = document.createElement("div");
      card.className = "product";
      card.addEventListener("click", () => openProduct(product.id));

      card.innerHTML = `
        <div class="product-image">
          <img class="top" src="${toThumb(product.images[0])}">
          <span class="grid-watermark">Jati Living</span>
        </div>
        <h3>${product.title}</h3>
        <p class="price">${product.price}</p>
      `;

      grid.appendChild(card);

      // hover image rotation
      if (product.images.length > 1) {
        const img = card.querySelector(".top");
        let index = 0;
        let timer = null;

        card.addEventListener("mouseenter", () => {
          timer = setInterval(() => {
            index = (index + 1) % product.images.length;
            img.src = toThumb(product.images[index]);
          }, 900);
        });

        card.addEventListener("mouseleave", () => {
          clearInterval(timer);
          timer = null;
          index = 0;
          img.src = toThumb(product.images[0]);
        });
      }
    });
}

// initial load
renderProducts();

/* ===============================
   HEADER RANDOM IMAGE
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");
  if (!header || !PRODUCTS.length) return;

  const randomProduct =
    PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

  header.style.backgroundImage =
    `url('${toThumb(randomProduct.images[0])}')`;
  header.style.backgroundSize = "cover";
  header.style.backgroundPosition = "center";
});

/* ===============================
   MODAL
================================ */
function openProduct(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const mainImg = document.getElementById("modalMainImg");
  const thumbs = document.getElementById("modalThumbs");

  mainImg.src = product.images[0];

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalPrice").innerText = product.price;

  const specsWrap = document.getElementById("modalSpecs");
  if (specsWrap) {
    specsWrap.innerHTML = product.specs
      .map(s => `<p>${s}</p>`)
      .join("");
  }

  // thumbnails
  thumbs.innerHTML = "";
  product.images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = toThumb(src);
    if (i === 0) img.classList.add("active");

    img.addEventListener("click", () => {
      mainImg.src = src;
      document.querySelectorAll("#modalThumbs img")
        .forEach(t => t.classList.remove("active"));
      img.classList.add("active");
    });

    thumbs.appendChild(img);
  });

  // colors
  const colors = document.getElementById("modalColors");
  if (colors) {
    colors.innerHTML = "";
    product.colors.forEach(c => {
      colors.innerHTML += `
        <div class="color-sample ${c.cls}"></div>
        <span>${c.name}</span>
      `;
    });
  }

  const wa = document.getElementById("modalWA");
  if (wa) {
    wa.href =
      `https://wa.me/6287764967645?text=Halo, Saya tertarik dengan ${product.title}`;
  }

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "";
}

/* ===============================
   GLOBAL CLOSE
================================ */
window.addEventListener("click", e => {
  const modal = document.getElementById("productModal");
  if (e.target === modal) closeModal("productModal");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal("productModal");
});

document.addEventListener("DOMContentLoaded", () => {
const header = document.getElementById("mainHeader");
if (!header || !PRODUCTS.length) return;

let index = 0;

// set background awal
header.style.backgroundImage = `url('${toThumb(PRODUCTS[0].images[0])}')`;

setInterval(() => {
  index = (index + 1) % PRODUCTS.length;
  header.style.backgroundImage =
    `url('${toThumb(PRODUCTS[index].images[0])}')`;
}, 2000); // 2000 ms = 2 detik
});
