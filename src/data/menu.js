export const MENU_DATA = [
  {
    id: "crepas",
    categoria: "Crepas",
    productos: [
      {
        id: "c1",
        nombre: "Crepa con Nutella + Banano",
        precio: 8000,
        descripcion: "Crepa artesanal rellena de generosa crema Nutella y banano fresco en rodajas.",
        imagen: "/imagenes/crepa-nutella-banano.jpg",
        permiteToppings: true
      },
      {
        id: "c2",
        nombre: "Crepa con Nutella + Fresas",
        precio: 8000,
        descripcion: "Crepa clásica rellena de crema Nutella con trozos de fresa natural.",
        imagen: "/imagenes/crepa-nutella-fresa.jpg",
        permiteToppings: true
      },
      {
        id: "c3",
        nombre: "Crepa Tentación Nutella + Fresas + Banano + Oreo",
        precio: 12000,
        descripcion: "Combinación explosiva de Nutella, fresas, banano y galleta Oreo triturada.",
        imagen: "/imagenes/crepa-tentacion.jpg",
        permiteToppings: true
      },
      {
        id: "c4",
        nombre: "Crepa Especial Nutella + Fresas + Helado + Toppings",
        precio: 15000,
        descripcion: "Nuestra creación estrella servida con bola de helado, fresas, Nutella y toppings mixtos.",
        imagen: "/imagenes/crepa-especial.jpg",
        permiteToppings: true
      },
      {
        id: "c5",
        nombre: "Crepa de Pollo",
        precio: 13000,
        descripcion: "Opción salada servida con pollo desmechado suave en salsa cremosa especial y queso fundido.",
        imagen: "/imagenes/crepa-pollo.jpg",
        permiteToppings: false
      }
    ]
  },
  {
    id: "waffles",
    categoria: "Waffles",
    productos: [
      {
        id: "w1",
        nombre: "Waffle Fresa (Nutella + Fresas)",
        precio: 10000,
        descripcion: "Waffle crocante por fuera y suave por dentro, bañado en Nutella y coronado con fresas.",
        imagen: "/imagenes/waffle-fresa.jpg",
        permiteToppings: true
      },
      {
        id: "w2",
        nombre: "Waffle Frutal",
        precio: 12000,
        descripcion: "Mezcla tropical de fresas, banano, duraznos en almíbar e hilos de chocolate.",
        imagen: "/imagenes/waffle-frutal.jpg",
        permiteToppings: true
      },
      {
        id: "w3",
        nombre: "Waffle Especial (Nutella + Frutas + Helado + Toppings)",
        precio: 15000,
        descripcion: "Servido con helado de vainilla, variabilidad de frutas frescas, Nutella y selección de toppings.",
        imagen: "/imagenes/waffle-fresa-helado.jpg",
        permiteToppings: true
      },
      {
        id: "w4",
        nombre: "Waffle RANCHERO",
        precio: 18000,
        descripcion: "Preparación salada abundante con ingredientes rancheros y queso derretido.",
        imagen: "/imagenes/waffle-ranchero.jpg",
        permiteToppings: false
      }
    ]
  },
  {
    id: "sandwich",
    categoria: "Sándwich",
    productos: [
      {
        id: "s1",
        nombre: "Sándwich Clásico",
        precio: 7000,
        descripcion: "Jamón seleccionado, doble queso derretido y nuestra salsa especial de la casa.",
        imagen: "/imagenes/sandwich-clasico.jpg",
        permiteToppings: false
      },
      {
        id: "s2",
        nombre: "Sándwich Pollo",
        precio: 12500,
        descripcion: "Pollo desmechado sazonado, queso, maíz dulce y salsa especial en pan dorado al grill.",
        imagen: "/imagenes/sandwich-pollo.jpg",
        permiteToppings: false
      }
    ]
  },
  {
    id: "bebidas",
    categoria: "Bebidas",
    productos: [
      {
        id: "b1",
        nombre: "Milo Frío",
        precio: 7000,
        descripcion: "Bebida batida de Milo frío extremadamente cremosa con lluvia de Milo en polvo.",
        imagen: "/imagenes/milo-frio.jpg",
        permiteToppings: false
      },
      {
        id: "b2",
        nombre: "Malteada de Fresa",
        precio: 10000,
        descripcion: "Malteada tradicional espesa a base de helado de fresa y crema batida.",
        imagen: "/imagenes/malteada-fresa.jpg",
        permiteToppings: false
      },
      {
        id: "b3",
        nombre: "Sodas Saborizadas",
        precio: 12000,
        descripcion: "Soda refrescante preparada con concentrado de frutos rojos, maracuyá o mango.",
        imagen: "/imagenes/sodas.jpg",
        permiteToppings: false
      },
      {
        id: "b4",
        nombre: "Coca Cola",
        precio: 4000,
        descripcion: "Presentación personal helada.",
        imagen: "/imagenes/cocacola.jpg",
        permiteToppings: false
      }
    ]
  }
];

export const TOPPINGS_EXTRA = [
  { id: "t1", nombre: "Bola de Helado", precio: 3000 },
  { id: "t2", nombre: "Porción de Fresas", precio: 2000 },
  { id: "t3", nombre: "Porción de Banano", precio: 1500 },
  { id: "t4", nombre: "Galleta Oreo extra", precio: 1500 },
  { id: "t5", nombre: "Nutella extra", precio: 2500 }
];

export const INFORMACION_NEGOCIO = {
  nombre: "Antojarte",
  whatsapp: "573226102915",
  instagram: "antojarte_oficial",
  direccion: "Calle Principal #12-34",
  horarioApertura: 14, // 2:00 PM
  horarioCierre: 22   // 10:00 PM
};