import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Eye, Calculator, ArrowRight, MessageSquare, Plus, Trash2, Shield, Info, Download } from 'lucide-react';
import { ProductItem, QuoteItem } from '../types';

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Products Data
  const products: ProductItem[] = [
    {
      id: 'coupler',
      name: 'EN8D Rebar Couplers',
      description: 'Ultra-high strength mechanical splice couplers fabricated from premium EN8D grade steel. Designed to fully replace traditional weak lap-splicing.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      category: 'coupler',
      features: ['EN8D Grade Tensile Steel', 'High fatigue resistance', 'Zero-slip engagement', 'Sizes: 16mm to 32mm'],
    },
    {
      id: 'threading',
      name: 'Precision Threading Services',
      description: 'Heavy-duty industrial thread rolling services executed on site or at our works with automated COHD-45Type machines. Ideal for high-stress structural joints.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      category: 'threading',
      features: ['Clean pitch rolled threads', 'Negligible mass reduction', 'Suitable for all TMT bars', 'High thread engagement depth'],
    },
    {
      id: 'reducer',
      name: 'Reduction Rebar Couplers',
      description: 'Specialized transition couplers used to join steel bars of different diameters with complete safety and stress balance across columns.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      category: 'reducer',
      features: ['Transition structural balance', 'Even distribution of stress', 'Symmetric internal taper', 'Standard dual sizes available'],
    },
    {
      id: 'cap',
      name: 'Protective Thread End Caps',
      description: 'Tough, polymer protective caps designed to guard threaded rebar ends from soil, water, rust, and abrasion before coupler joining at the construction site.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
      category: 'cap',
      features: ['Corrosion protection', 'Highly visible safety colors', 'Perfect snug push-fit', 'Reusable polymer plastic'],
    },
  ];

  // Pricing Matrix from the official Quotation PDF
  const prices = {
    coupler: [
      { size: '16 MM (Grade EN8D)', price: 26 },
      { size: '20 MM (Grade EN8D)', price: 38 },
      { size: '25 MM (Grade EN8D)', price: 58 },
      { size: '32 MM (Grade EN8D)', price: 98 },
    ],
    reducer: [
      { size: '16 + 20 MM', price: 38 },
      { size: '20 + 25 MM', price: 58 },
      { size: '25 + 32 MM', price: 95 },
    ],
    cap: [
      { size: '16 / 20 MM', price: 1 },
      { size: '25 / 32 MM', price: 2 },
    ],
    threading: [
      { size: '16 MM (Both Ends)', price: 18 },
      { size: '20 MM (Both Ends)', price: 20 },
      { size: '25 MM (Both Ends)', price: 25 },
      { size: '32 MM (Both Ends)', price: 28 },
    ],
  };

  // Calculator State
  const [calcType, setCalcType] = useState<'coupler' | 'reducer' | 'cap' | 'threading'>('coupler');
  const [calcSize, setCalcSize] = useState<string>(prices.coupler[0].size);
  const [calcQty, setCalcQty] = useState<number>(100);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  // Update selected size when category changes
  const handleTypeChange = (type: 'coupler' | 'reducer' | 'cap' | 'threading') => {
    setCalcType(type);
    setCalcSize(prices[type][0].size);
  };

  const getPriceForSize = (type: 'coupler' | 'reducer' | 'cap' | 'threading', sizeName: string) => {
    const found = prices[type].find(p => p.size === sizeName);
    return found ? found.price : 0;
  };

  const addToQuote = () => {
    const rate = getPriceForSize(calcType, calcSize);
    
    // Check if duplicate exists
    const duplicateIdx = quoteItems.findIndex(item => item.type === calcType && item.size === calcSize);
    if (duplicateIdx > -1) {
      const updated = [...quoteItems];
      updated[duplicateIdx].quantity += calcQty;
      setQuoteItems(updated);
    } else {
      setQuoteItems([...quoteItems, { type: calcType, size: calcSize, quantity: calcQty, rate }]);
    }
  };

  const removeQuoteItem = (idx: number) => {
    setQuoteItems(quoteItems.filter((_, i) => i !== idx));
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  // Calculations
  const subtotal = quoteItems.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
  const gstAmount = subtotal * 0.18; // 18% GST as per terms & conditions
  const grandTotal = subtotal + gstAmount;

  const handleWhatsAppSend = () => {
    if (quoteItems.length === 0) return;
    
    let text = `*BHAGYALAXMI DD ENTERPRISES - QUOTE INQUIRY*\n`;
    text += `_Indira Nagar, Pune (Owner: Laxman J. Chaughule)_\n\n`;
    text += `Hello, I would like to request a quotation for the following requirements:\n\n`;
    
    quoteItems.forEach((item, idx) => {
      const typeLabel = item.type.toUpperCase();
      text += `${idx + 1}. *${typeLabel}* | Size: ${item.size}\n`;
      text += `   Qty: ${item.quantity} units x Rs. ${item.rate} = *Rs. ${item.quantity * item.rate}*\n\n`;
    });
    
    text += `------------------------------------\n`;
    text += `*Subtotal:* Rs. ${subtotal.toFixed(2)}\n`;
    text += `*GST (18%):* Rs. ${gstAmount.toFixed(2)}\n`;
    text += `*Estimated Grand Total:* *Rs. ${grandTotal.toFixed(2)}*\n\n`;
    text += `_Note: Payment immediate (7 days) after material delivery. Site requires 3-phase electricity. Please confirm feasibility and final delivery schedule._`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919130656955?text=${encoded}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-zinc-900/50 border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3">
            Products & Core Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            High-Performance Manufacturing Solutions
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We manufacture premium mechanical rebar connectors and deliver site threading of supreme precision for heavy-duty infrastructure networks.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24" id="products-grid">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg"
            >
              {/* Image with hover preview triggers */}
              <div className="relative h-64 overflow-hidden bg-zinc-900 shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                
                {/* Lightbox Trigger Button */}
                <button
                  onClick={() => setSelectedImage(product.image)}
                  className="absolute bottom-4 right-4 p-3 bg-black/70 border border-gold-500/30 hover:border-gold-500 rounded-full text-gold-400 hover:text-white transition-all cursor-pointer backdrop-blur-sm flex items-center justify-center shadow-lg"
                  title="Click to Zoom Image"
                  id={`zoom-${product.id}`}
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-gold-500 font-bold uppercase tracking-widest mb-1.5 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                    {product.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => {
                    handleTypeChange(product.category as any);
                    const element = document.getElementById('price-estimator');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  id={`btn-${product.id}`}
                  className="w-full py-3 bg-zinc-900 border border-zinc-800 hover:border-gold-500/40 hover:bg-gold-500/5 text-zinc-300 hover:text-gold-400 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator size={16} />
                  <span>Estimate Price / Quantity</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Estimation Calculator (Official PDF Quotation-based) */}
        <motion.div
          id="price-estimator"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 border border-gold-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background Badge */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Form Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gold-500 mb-2">
                  <Calculator size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Interactive Quotation Portal
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                  Estimate Construction Costs
                </h3>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                  Select your required rebar services or coupler types below. Our system loads the official rates for **Grade EN8D Couplers** & specialized machinery threading services to build a real invoice instantly.
                </p>

                {/* Input Fields Row */}
                <div className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                      Select Item Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { label: 'Standard Coupler', val: 'coupler' },
                        { label: 'Reducer Coupler', val: 'reducer' },
                        { label: 'Protective Cap', val: 'cap' },
                        { label: 'Site Threading', val: 'threading' },
                      ].map((tab) => (
                        <button
                          key={tab.val}
                          type="button"
                          onClick={() => handleTypeChange(tab.val as any)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-bold text-center border transition-all cursor-pointer ${
                            calcType === tab.val
                              ? 'bg-gold-500 border-gold-400 text-black shadow-md shadow-gold-500/15'
                              : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-300'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size and Unit Price Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                        Choose Size / Specification
                      </label>
                      <select
                        value={calcSize}
                        onChange={(e) => setCalcSize(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg py-3 px-4 focus:border-gold-500 outline-none text-sm font-semibold transition-colors"
                      >
                        {prices[calcType].map((item) => (
                          <option key={item.size} value={item.size}>
                            {item.size} (Rs. {item.price}/pc)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                        Enter Quantity (PCS)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={calcQty}
                        onChange={(e) => setCalcQty(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg py-3 px-4 focus:border-gold-500 outline-none text-sm font-semibold transition-colors"
                        placeholder="e.g. 100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Bill Button */}
              <button
                type="button"
                onClick={addToQuote}
                className="w-full sm:w-auto mt-8 px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 border border-gold-500/30 hover:border-gold-500 rounded-xl text-gold-400 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
              >
                <Plus size={16} />
                <span>Add Item to Quotation List</span>
              </button>
            </div>

            {/* Bill Preview Column */}
            <div className="lg:col-span-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <span className="font-display font-bold text-white tracking-wide">
                    Live Quotation Estimate
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800">
                    Draft Quote
                  </span>
                </div>

                {quoteItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-500">
                    <ShoppingCart size={40} className="mb-3 opacity-30 text-gold-500" />
                    <p className="text-xs font-medium">Your quote list is empty.</p>
                    <p className="text-[10px] mt-1 max-w-[200px]">Add couplers or threading specifications on the left to estimate charges.</p>
                  </div>
                ) : (
                  <div className="max-h-64 overflow-y-auto space-y-3 py-4 pr-1">
                    {quoteItems.map((item, idx) => (
                      <div key={idx} className="flex items-start justify-between text-xs bg-zinc-950 p-3 rounded-lg border border-zinc-800/80 group">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-mono font-bold text-gold-500 uppercase">
                            {item.type}
                          </span>
                          <p className="text-white font-semibold">{item.size}</p>
                          <p className="text-zinc-500 font-mono text-[10px]">
                            {item.quantity} pcs @ Rs. {item.rate}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-white font-semibold">
                            Rs. {item.quantity * item.rate}
                          </span>
                          <button
                            onClick={() => removeQuoteItem(idx)}
                            className="text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Totals Area */}
              {quoteItems.length > 0 && (
                <div className="border-t border-zinc-800 pt-4 mt-4 space-y-2">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>Subtotal</span>
                    <span className="font-mono">Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>GST (18% extra)</span>
                    <span className="font-mono">Rs. {gstAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-dashed border-zinc-800">
                    <span className="font-display">Grand Total (EST)</span>
                    <span className="font-mono text-gold-400">Rs. {grandTotal.toFixed(2)}</span>
                  </div>

                  <div className="p-2.5 bg-zinc-950 rounded-lg border border-zinc-800 flex gap-2 items-start mt-4 text-[10px] text-zinc-400 leading-normal">
                    <Info size={14} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>
                      Rates are derived from Pune market standard EN8D specifications. final quotation valid for 15 days. Site requires immediate 3-phase power supply.
                    </span>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={clearQuote}
                      className="px-3.5 py-3 border border-zinc-800 hover:bg-zinc-950 text-zinc-400 hover:text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleWhatsAppSend}
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 cursor-pointer"
                    >
                      <MessageSquare size={14} />
                      <span>Request on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Product technical preview"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 py-2 px-3.5 bg-black/80 hover:bg-gold-500 hover:text-black text-white rounded-full font-bold text-xs transition-colors cursor-pointer border border-zinc-800"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
