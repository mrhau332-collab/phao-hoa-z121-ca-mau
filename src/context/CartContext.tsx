"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem, ProductCategory } from "@/types";
import { products } from "@/data/products";

interface CartContextType {
  // Cart
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  // Favorites (localStorage synced)
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  isFavoritesOpen: boolean;
  openFavorites: () => void;
  closeFavorites: () => void;

  // Product Comparison (max 3 items)
  compareIds: string[];
  toggleCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isComparing: (productId: string) => boolean;
  isCompareOpen: boolean;
  openCompare: () => void;
  closeCompare: () => void;
  comparedProducts: Product[];

  // Macro Packaging / 360 Inspection Modal
  macroInspectProduct: Product | null;
  openMacroInspect: (product: Product) => void;
  closeMacroInspect: () => void;

  // Global Filter & Search
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [macroInspectProduct, setMacroInspectProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("z121_cart_items");
      if (savedCart) setItems(JSON.parse(savedCart));

      const savedFavs = localStorage.getItem("z121_favorites");
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedCompare = localStorage.getItem("z121_compare_ids");
      if (savedCompare) setCompareIds(JSON.parse(savedCompare));
    } catch {
      console.warn("Could not load stored data from localStorage");
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save Cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("z121_cart_items", JSON.stringify(items));
      } catch {
        console.warn("Could not save cart to localStorage");
      }
    }
  }, [items, isLoaded]);

  // Save Favorites to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("z121_favorites", JSON.stringify(favorites));
      } catch {
        console.warn("Could not save favorites to localStorage");
      }
    }
  }, [favorites, isLoaded]);

  // Save Compare to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("z121_compare_ids", JSON.stringify(compareIds));
      } catch {
        console.warn("Could not save compare IDs to localStorage");
      }
    }
  }, [compareIds, isLoaded]);

  // Cart operations
  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  // Favorites operations
  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  // Compare operations (max 3 items)
  const toggleCompare = (productId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) {
        // Replace oldest or alert
        return [...prev.slice(1), productId];
      }
      return [...prev, productId];
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareIds((prev) => prev.filter((id) => id !== productId));
  };

  const clearCompare = () => setCompareIds([]);

  const isComparing = (productId: string) => compareIds.includes(productId);

  const comparedProducts = compareIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  // Macro Inspection
  const openMacroInspect = (product: Product) => setMacroInspectProduct(product);
  const closeMacroInspect = () => setMacroInspectProduct(null);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => {
    const price = item.product.price ?? 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),

        favorites,
        toggleFavorite,
        isFavorite,
        isFavoritesOpen,
        openFavorites: () => setIsFavoritesOpen(true),
        closeFavorites: () => setIsFavoritesOpen(false),

        compareIds,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        isComparing,
        isCompareOpen,
        openCompare: () => setIsCompareOpen(true),
        closeCompare: () => setIsCompareOpen(false),
        comparedProducts,

        macroInspectProduct,
        openMacroInspect,
        closeMacroInspect,

        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
