import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  X, 
  MessageCircle, 
  Search, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Phone, 
  Sparkles, 
  Share2, 
  Check, 
  Heart,
  Utensils,
  Coffee,
  IceCream,
  Info
} from 'lucide-react';

const MENU_DATA = [
  {
    id: 'crepas',
    name: 'Crepas',
    icon: '🥞',
    items: [
      {
        id: 'c1',
        name: 'Crepa con Nutella + banano',
        description: 'Deliciosa crepa artesanal rellena de abundante Nutella y rodajas de banano fresco.',
        price: 8000,
        category: 'crepas',
        type: 'dulce',
        popular: false,
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'c2',
        name: 'Crepa con Nutella + fresas',
        description: 'Crepa recién hecha cargada con Nutella cremosa y fresas maduras seleccionadas.',
        price: 8000,
        category: 'crepas',
        type: 'dulce',
        popular: true,
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'c3',
        name: 'Crepa Tentación',
        description: 'Nutella + fresas + banano + galleta Oreo troceada. La favorita de la casa.',
        price: 12000,
        category: 'crepas',
        type: 'dulce',
        popular: true,
        image: '/imagenes/crepa-tentacion.jpg'
      },
      {
        id: 'c4',
        name: 'Crepa Especial',
        description: 'Nutella + fresas + bola de helado a elección + toppings variados y lluvia de chocolate.',
        price: 15000,
        category: 'crepas',
        type: 'dulce',
        popular: false,
        image: '/imagenes/crepa-especial.jpg'
      },
      {
        id: 'c5',
        name: 'Crepa de pollo',
        description: 'Crepa salada dorada rellena de pollo jugoso en salsa especial de la casa y queso fundido.',
        price: 13000,
        category: 'crepas',
        type: 'salado',
        popular: false,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'waffles',
    name: 'Waffles',
    icon: '🧇',
    items: [
      {
        id: 'w1',
        name: 'Waffle Fresa',
        description: 'Waffle crocante por fuera y suave por dentro, bañado en Nutella y coronado con fresas.',
        price: 10000,
        category: 'waffles',
        type: 'dulce',
        popular: false,
        image: '/imagenes/waffle-fresa.jpg'
      },
      {
        id: 'w2',
        name: 'Waffle Frutal',
        description: 'Combinación fresca de fresas, banano, duraznos jugosos y sirope de chocolate.',
        price: 12000,
        category: 'waffles',
        type: 'dulce',
        popular: false,
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'w3',
        name: 'Waffle Especial',
        description: 'Nutella + selección completa de frutas + helado cremoso + toppings crujientes.',
        price: 15000,
        category: 'waffles',
        type: 'dulce',
        popular: true,
        image: '/imagenes/waffle-especial.jpg'
      },
      {
        id: 'w4',
        name: 'Waffle RANCHERO',
        description: 'Preparación salada premium con queso gratinado, tocineta, maíz dulce y salsa ranchera.',
        price: 18000,
        category: 'waffles',
        type: 'salado',
        popular: true,
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'sandwich',
    name: 'Sándwich',
    icon: '🥪',
    items: [
      {
        id: 's1',
        name: 'Sándwich Clásico',
        description: 'Pan artesanal tostado con doble jamón, queso mozzarella derretido y salsa especial Antojarte.',
        price: 7000,
        category: 'sandwich',
        type: 'salado',
        popular: false,
        image: '/imagenes/sandwich-clasico.jpg'
      },
      {
        id: 's2',
        name: 'Sándwich Pollo',
        description: 'Pollo desmechado sazonado, abundante queso mozzarella, maíz tierno y nuestra salsa especial.',
        price: 12500,
        category: 'sandwich',
        type: 'salado',
        popular: true,
        image: 'https://images.unsplash.com/photo-1475090169767-40ea83188966?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    icon: '🥤',
    items: [
      {
        id: 'b1',
        name: 'Milo frío',
        description: 'Refrescante Milo batido con leche bien fría y lluvia de chocolate por encima.',
        price: 7000,
        category: 'bebidas',
        type: 'dulce',
        popular: true,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'b2',
        name: 'Malteada de fresa',
        description: 'Cremosa malteada artesanal elaborada con helado de fresa y chantilly.',
        price: 10000,
        category: 'bebidas',
        type: 'dulce',
        popular: false,
        image: '/imagenes/malteada-fresa.jpg'
      },
      {
        id: 'b3',
        name: 'Sodas saborizadas',
        description: 'Soda refrescante con sirope frutal a elección (Maracuyá, Frutos Rojos o Litchi) y hielo.',
        price: 12000,
        category: 'bebidas',
        type: 'dulce',
        popular: true,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'b4',
        name: 'Coca Cola',
        description: 'Bebida gaseosa en presentación personal helada.',
        price: 4000,
        category: 'bebidas',
        type: 'salado',
        popular: false,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

const EXTRA_TOPPINGS = [
  { id: 't1', name: 'Bola de helado extra', price: 3000 },
  { id: 't2', name: 'Queso mozzarella extra', price: 2500 },
  { id: 't3', name: 'Adición de Nutella', price: 3000 },
  { id: 't4', name: 'Topping de Oreo troceada', price: 2000 },
  { id: 't5', name: 'Porción extra de fresas', price: 2500 }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [flavorFilter, setFlavorFilter] = useState('todos'); // 'todos', 'dulce', 'salado'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cart & Item Customization state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [itemNote, setItemNote] = useState('');

  // Checkout Form State
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('domicilio'); // 'domicilio', 'llevar', 'mesa'
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('nequi'); // 'nequi', 'efectivo', 'daviplata'

  // Toast / Feedback State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  // Filter products based on search, category and flavor
  const filteredProducts = useMemo(() => {
    let allItems = MENU_DATA.flatMap(cat => cat.items);

    if (selectedCategory !== 'todos') {
      allItems = allItems.filter(item => item.category === selectedCategory);
    }

    if (flavorFilter !== 'todos') {
      allItems = allItems.filter(item => item.type === flavorFilter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      allItems = allItems.filter(
        item => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
      );
    }

    return allItems;
  }, [selectedCategory, flavorFilter, searchQuery]);

  // Open customization modal
  const handleOpenCustomize = (product) => {
    setCustomizingItem(product);
    setItemQuantity(1);
    setSelectedToppings([]);
    setItemNote('');
  };

  // Toggle topping in modal
  const handleToggleTopping = (topping) => {
    if (selectedToppings.some(t => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter(t => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  // Calculate modal item unit price
  const customizationUnitPrice = useMemo(() => {
    if (!customizingItem) return 0;
    const toppingsTotal = selectedToppings.reduce((sum, t) => sum + t.price, 0);
    return customizingItem.price + toppingsTotal;
  }, [customizingItem, selectedToppings]);

  // Add customized item to cart
  const handleAddToCart = () => {
    if (!customizingItem) return;

    const cartItemId = `${customizingItem.id}-${selectedToppings.map(t => t.id).sort().join('-')}-${itemNote.trim()}`;

    const existingIndex = cart.findIndex(i => i.cartItemId === cartItemId);

    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += itemQuantity;
      setCart(updatedCart);
    } else {
      const newItem = {
        cartItemId,
        id: customizingItem.id,
        name: customizingItem.name,
        basePrice: customizingItem.price,
        unitPrice: customizationUnitPrice,
        quantity: itemQuantity,
        toppings: selectedToppings,
        note: itemNote.trim(),
        image: customizingItem.image
      };
      setCart([...cart, newItem]);
    }

    triggerToast(`¡${customizingItem.name} agregado al carrito!`);
    setCustomizingItem(null);
  };

  // Cart operations
  const updateCartQuantity = (cartItemId, delta) => {
    const updated = cart.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);
    setCart(updated);
  };

  const removeCartItem = (cartItemId) => {
    setCart(cart.filter(item => item.cartItemId !== cartItemId));
    triggerToast('Producto eliminado');
  };

  // Cart Subtotal
  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  }, [cart]);

  const cartItemsCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // Format currency in COP
  const formatCOP = (amount) => {
    return `$${amount.toLocaleString('es-CO')}`;
  };

  const handleSendWhatsAppOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    if (!customerName.trim()) {
      alert('Por favor ingresa tu nombre para el pedido.');
      return;
    }

    if (orderType === 'domicilio' && !address.trim()) {
      alert('Por favor ingresa la dirección de entrega.');
      return;
    }

    if (orderType === 'mesa' && !tableNumber.trim()) {
      alert('Por favor ingresa el número de mesa.');
      return;
    }

    let text = `✨ *NUEVO PEDIDO - ANTOJARTE* ✨\n`;
    text += `-----------------------------------\n`;
    text += `👤 *Cliente:* ${customerName.trim()}\n`;
    text += `📍 *Modalidad:* ${orderType === 'domicilio' ? 'Domicilio 🛵' : orderType === 'llevar' ? 'Para Llevar 🛍️' : `En Mesa 🍽️ (Mesa ${tableNumber})`}\n`;
    
    if (orderType === 'domicilio') {
      text += `🏠 *Dirección:* ${address.trim()}\n`;
    }
    
    text += `💳 *Método de pago:* ${paymentMethod.toUpperCase()}\n`;
    text += `-----------------------------------\n\n`;
    text += `🛒 *DETALLE DEL PEDIDO:*\n`;

    cart.forEach((item, index) => {
      const itemSubtotal = item.unitPrice * item.quantity;
      text += `${index + 1}. *${item.quantity}x ${item.name}* (${formatCOP(itemSubtotal)})\n`;
      
      if (item.toppings && item.toppings.length > 0) {
        text += `   + Toppings: ${item.toppings.map(t => t.name).join(', ')}\n`;
      }
      if (item.note) {
        text += `   📝 *Nota:* _${item.note}_\n`;
      }
      text += `\n`;
    });

    text += `-----------------------------------\n`;
    text += `💰 *TOTAL A PAGAR:* *${formatCOP(cartTotal)}*\n`;
    text += `-----------------------------------\n`;
    text += `¡Gracias por tu preferencia! ❤️`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/573226102915?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-gray-800 font-sans pb-28">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-[#7B1832] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-rose-300">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Top Header / Hero Banner */}
      <header className="bg-gradient-to-br from-[#7B1832] via-[#5c1024] to-[#420b19] text-white pt-8 pb-12 px-4 shadow-xl relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Logo Container */}
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full mb-3 border border-white/20 shadow-inner">
            <div className="bg-white text-[#7B1832] rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-2xl shadow-lg border-2 border-amber-300">
              A
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-serif text-amber-100 drop-shadow-md">
            Antojarte
          </h1>
          <p className="text-rose-200 text-sm sm:text-base mt-1 font-medium tracking-wide">
            Crepas • Waffles • Sándwiches • Bebidas
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs sm:text-sm text-rose-100 font-light">
            <a 
              href="https://wa.me/573226102915" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>+57 322 610 2915</span>
            </a>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Abierto hoy: 2:00 PM - 10:00 PM</span>
            </div>
          </div>

          <div className="mt-4 text-amber-200 text-xs italic font-serif">
            ¡Gracias por tu preferencia! 💕
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 -mt-6 relative z-20">
        
        {/* Search & Flavor Filters Card */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-amber-100/80 mb-6 space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar crepas, waffles, bebidas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7B1832]/30 focus:border-[#7B1832] transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Flavor Filter Pills (Dulcitos vs Salados) */}
          <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Antojo:</span>
            <div className="flex gap-1.5 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => setFlavorFilter('todos')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition ${
                  flavorFilter === 'todos' 
                    ? 'bg-[#7B1832] text-white shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFlavorFilter('dulce')}
                className={`px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition ${
                  flavorFilter === 'dulce' 
                    ? 'bg-[#7B1832] text-white shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>🍓 Dulce</span>
              </button>
              <button
                onClick={() => setFlavorFilter('salado')}
                className={`px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition ${
                  flavorFilter === 'salado' 
                    ? 'bg-[#7B1832] text-white shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>🧀 Salado</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        {}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar scroll-smooth">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`flex-shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-sm ${
              selectedCategory === 'todos'
                ? 'bg-[#7B1832] text-white ring-2 ring-[#7B1832] ring-offset-2'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span>✨</span>
            <span>Todos los antojos</span>
          </button>

          {MENU_DATA.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#7B1832] text-white ring-2 ring-[#7B1832] ring-offset-2'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid / Listing */}
        {}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-stone-200 my-8">
            <Utensils className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-700">No encontramos opciones</h3>
            <p className="text-stone-500 text-sm mt-1">Intenta cambiar los filtros de búsqueda o categoría.</p>
            <button 
              onClick={() => { setSelectedCategory('todos'); setFlavorFilter('todos'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#7B1832] text-white text-xs font-bold rounded-xl shadow hover:bg-[#5c1024] transition"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-amber-100 flex gap-4 relative overflow-hidden group"
              >
                {/* Popular Tag */}
                {product.popular && (
                  <span className="absolute top-2 right-2 bg-amber-100 text-[#7B1832] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" /> Popular
                  </span>
                )}

                {/* Product Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-xs text-white text-[10px] px-1.5 py-0.5 rounded">
                    {product.type === 'dulce' ? '🍓 Dulce' : '🧀 Salado'}
                  </span>
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between pr-2">
                  <div>
                    <h3 className="font-bold text-base text-stone-800 leading-snug group-hover:text-[#7B1832] transition">
                      {product.name}
                    </h3>
                    <p className="text-stone-500 text-xs mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#7B1832] font-black text-base sm:text-lg">
                      {formatCOP(product.price)}
                    </span>

                    <button
                      onClick={() => handleOpenCustomize(product)}
                      className="bg-[#7B1832] hover:bg-[#5c1024] active:scale-95 text-white p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm transition"
                      aria-label={`Añadir ${product.name}`}
                    >
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Pedir</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      {/* Item Customization Modal */}
      {}
      {customizingItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
          <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-amber-100">
            
            {/* Modal Header */}
            <div className="relative h-44 sm:h-48 w-full bg-stone-100">
              <img 
                src={customizingItem.image} 
                alt={customizingItem.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setCustomizingItem(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-xs transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-300">
                  {customizingItem.category}
                </span>
                <h2 className="text-xl font-bold">{customizingItem.name}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
              <p className="text-stone-600 text-sm leading-relaxed">
                {customizingItem.description}
              </p>

              {/* Extra Toppings Section */}
              <div>
                <h4 className="font-bold text-stone-800 text-sm mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>¿Deseas adiciones o toppings extra?</span>
                </h4>

                <div className="space-y-2">
                  {EXTRA_TOPPINGS.map(topping => {
                    const isSelected = selectedToppings.some(t => t.id === topping.id);
                    return (
                      <div 
                        key={topping.id}
                        onClick={() => handleToggleTopping(topping)}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                          isSelected 
                            ? 'border-[#7B1832] bg-rose-50/50 text-[#7B1832]' 
                            : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-[#7B1832] border-[#7B1832] text-white' : 'border-stone-300'}`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{topping.name}</span>
                        </div>
                        <span className="text-xs font-bold text-stone-600">
                          +{formatCOP(topping.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Note */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Notas especiales (opcional):
                </label>
                <input 
                  type="text"
                  placeholder="Ej: Sin fresas, extra salsa, bien tostado..."
                  value={itemNote}
                  onChange={(e) => setItemNote(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-xl bg-stone-50 focus:outline-none focus:ring-1 focus:ring-[#7B1832]"
                />
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="font-bold text-sm text-stone-800">Cantidad:</span>
                <div className="flex items-center gap-3 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
                  <button 
                    onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                    className="w-8 h-8 rounded-xl bg-white shadow-xs text-stone-700 font-bold flex items-center justify-center hover:bg-stone-200 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-extrabold text-base w-6 text-center text-stone-800">
                    {itemQuantity}
                  </span>
                  <button 
                    onClick={() => setItemQuantity(itemQuantity + 1)}
                    className="w-8 h-8 rounded-xl bg-white shadow-xs text-stone-700 font-bold flex items-center justify-center hover:bg-stone-200 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer / Add Button */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] text-stone-500 uppercase font-bold">Total producto</p>
                <p className="text-xl font-black text-[#7B1832]">
                  {formatCOP(customizationUnitPrice * itemQuantity)}
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#7B1832] hover:bg-[#5c1024] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Agregar al Pedido</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Persistent Floating Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 inset-x-4 max-w-lg mx-auto z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#7B1832] hover:bg-[#5c1024] text-white rounded-2xl p-4 shadow-2xl border border-amber-300/40 flex items-center justify-between transition-transform active:scale-[0.99] group"
          >
            <div className="flex items-center gap-3">
              <div className="bg-amber-400 text-[#7B1832] font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shadow">
                {cartItemsCount}
              </div>
              <div className="text-left">
                <p className="text-xs text-rose-200 font-medium">Ver mi pedido</p>
                <p className="text-base font-extrabold">{formatCOP(cartTotal)}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm font-bold bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 group-hover:bg-white/20 transition">
              <span>Continuar</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Cart Drawer / Slide-Over Modal */}
      {}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-slideLeft">
            
            {/* Cart Header */}
            <div className="p-4 bg-[#7B1832] text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <h2 className="font-bold text-lg">Tu Pedido en Antojarte</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-stone-500">
                  <ShoppingBag className="w-12 h-12 mx-auto text-stone-300 mb-2" />
                  <p className="font-bold text-stone-700">Tu carrito está vacío</p>
                  <p className="text-xs mt-1">¡Agrega tus antojos favoritos del menú!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div 
                        key={item.cartItemId} 
                        className="bg-stone-50 rounded-2xl p-3 border border-stone-200 flex gap-3 relative"
                      >
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 rounded-xl object-cover bg-stone-200"
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start pr-6">
                            <h4 className="font-bold text-sm text-stone-800">{item.name}</h4>
                          </div>

                          {item.toppings && item.toppings.length > 0 && (
                            <p className="text-[11px] text-stone-500 mt-0.5">
                              Toppings: {item.toppings.map(t => t.name).join(', ')}
                            </p>
                          )}

                          {item.note && (
                            <p className="text-[11px] italic text-amber-800 mt-0.5 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/50 inline-block">
                              Nota: "{item.note}"
                            </p>
                          )}

                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-sm text-[#7B1832]">
                              {formatCOP(item.unitPrice * item.quantity)}
                            </span>

                            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-stone-200">
                              <button 
                                onClick={() => updateCartQuantity(item.cartItemId, -1)}
                                className="text-stone-600 hover:text-red-600"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateCartQuantity(item.cartItemId, 1)}
                                className="text-stone-600 hover:text-green-600"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <button 
                          onClick={() => removeCartItem(item.cartItemId)}
                          className="absolute top-3 right-3 text-stone-400 hover:text-red-500 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handleSendWhatsAppOrder} className="mt-6 pt-4 border-t border-stone-200 space-y-4">
                    <h3 className="font-bold text-stone-800 text-sm flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-[#7B1832]" />
                      <span>Datos para la Entrega</span>
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Tu Nombre *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ej: María Camila"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-xl bg-stone-50 focus:outline-none focus:ring-1 focus:ring-[#7B1832]"
                      />
                    </div>

                    {/* Order Type Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Modalidad de Pedido</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType('domicilio')}
                          className={`py-2 text-xs font-bold rounded-xl border transition ${
                            orderType === 'domicilio' 
                              ? 'bg-[#7B1832] text-white border-[#7B1832]' 
                              : 'bg-stone-50 border-stone-200 text-stone-700'
                          }`}
                        >
                          🛵 Domicilio
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('llevar')}
                          className={`py-2 text-xs font-bold rounded-xl border transition ${
                            orderType === 'llevar' 
                              ? 'bg-[#7B1832] text-white border-[#7B1832]' 
                              : 'bg-stone-50 border-stone-200 text-stone-700'
                          }`}
                        >
                          🛍️ Llevar
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('mesa')}
                          className={`py-2 text-xs font-bold rounded-xl border transition ${
                            orderType === 'mesa' 
                              ? 'bg-[#7B1832] text-white border-[#7B1832]' 
                              : 'bg-stone-50 border-stone-200 text-stone-700'
                          }`}
                        >
                          🍽️ En Mesa
                        </button>
                      </div>
                    </div>

                    {orderType === 'domicilio' && (
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">Dirección Completa *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Calle / Carrera, Barrio, Apto o detalles"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-xl bg-stone-50 focus:outline-none focus:ring-1 focus:ring-[#7B1832]"
                        />
                      </div>
                    )}

                    {orderType === 'mesa' && (
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">Número de Mesa *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Ej: Mesa 4"
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-xl bg-stone-50 focus:outline-none focus:ring-1 focus:ring-[#7B1832]"
                        />
                      </div>
                    )}

                    {/* Payment Method */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Método de Pago Preferido</label>
                      <select 
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-xl bg-stone-50 focus:outline-none focus:ring-1 focus:ring-[#7B1832]"
                      >
                        <option value="nequi">Nequi</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="daviplata">Daviplata</option>
                        <option value="transferencia">Bancolombia / Transferencia</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-extrabold text-sm shadow-lg transition flex items-center justify-center gap-2 mt-4"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Enviar Pedido por WhatsApp</span>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Cart Summary Footer */}
            {cart.length > 0 && (
              <div className="p-4 bg-stone-50 border-t border-stone-200">
                <div className="flex justify-between items-center text-sm font-semibold text-stone-600 mb-1">
                  <span>Subtotal:</span>
                  <span>{formatCOP(cartTotal)}</span>
                </div>
                <div className="flex justify-between items-center text-base font-black text-stone-900">
                  <span>Total a Pagar:</span>
                  <span className="text-[#7B1832] text-xl">{formatCOP(cartTotal)}</span>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Business Info Footer */}
      {}
      <footer className="mt-16 bg-[#420b19] text-rose-100 py-10 px-4 border-t-4 border-amber-400">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-black text-xl font-serif">
              <div className="bg-white text-[#7B1832] rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span>Antojarte</span>
            </div>
            <p className="text-xs text-rose-200 mt-2 leading-relaxed">
              Especialistas en crepas, waffles artesanales, sándwiches gourmet y bebidas frías preparadas al instante con los mejores ingredientes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-amber-200">Contacto y Pedidos</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+57 322 610 2915</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Envíos locales a domicilio y servicio en mesa</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Lunes a Domingo: 2:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-amber-200">Garantía de Sabor</h4>
            <p className="text-xs text-rose-200 leading-relaxed">
              Todos nuestros productos son preparados en el momento para asegurar la mayor frescura, sabor y textura crocante.
            </p>
            <div className="mt-4 pt-3 border-t border-rose-900/60 text-[11px] text-rose-300 italic">
              ¡Gracias por tu preferencia! ❤️
            </div>
          </div>

        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-rose-900/50 text-center text-[11px] text-rose-300/80">
          © {new Date().getFullYear()} Antojarte. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}