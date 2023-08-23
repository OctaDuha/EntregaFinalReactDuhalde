const products = [
  {
    id: "1",
    name: "Pelota de futbol",
    price: 10000,
    category: "Deporte",
    img: "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-1200x1200.jpg",
    stock: 50,
    description: "Pelota Futbol Classic Qatar 2022 Nº 5 Certificada Fifa",
  },
  {
    id: "2",
    name: "Guantes de arquero de futbol",
    price: 5000,
    category: "Deporte",
    img: "https://http2.mlstatic.com/D_NQ_NP_608901-MLA32720369291_102019-O.webp",
    stock: 40,
    description: "Guante Arquero Attrakt Solid Reusch Futbol Profesional",
  },
  {
    id: "3",
    name: "Botines de futbol",
    price: 15000,
    category: "Deporte",
    img: "https://kavak.com.ar/wp-content/uploads/32171ND-BOTIN-KAPPA-STADIUM-TG-ENT-NEG-DA-A.jpg",
    stock: 60,
    description: "Botines De Futbol Kappa Victory Fg Negro",
  },
];

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsInCategory = products.filter(
        (prod) => prod.category === category
      );
      resolve(productsInCategory);
    }, 500);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
