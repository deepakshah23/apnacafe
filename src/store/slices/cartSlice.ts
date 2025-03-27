import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  checkoutStep: 'cart' | 'delivery' | 'payment' | 'confirmation';
  deliveryInfo: DeliveryInfo | null;
  paymentInfo: PaymentInfo | null;
}

interface DeliveryInfo {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
}

const initialState: CartState = {
  items: [],
  total: 0,
  checkoutStep: 'cart',
  deliveryInfo: null,
  paymentInfo: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    setCheckoutStep: (state, action: PayloadAction<CartState['checkoutStep']>) => {
      state.checkoutStep = action.payload;
    },
    setDeliveryInfo: (state, action: PayloadAction<DeliveryInfo>) => {
      state.deliveryInfo = action.payload;
    },
    setPaymentInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.paymentInfo = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.checkoutStep = 'cart';
      state.deliveryInfo = null;
      state.paymentInfo = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  setCheckoutStep,
  setDeliveryInfo,
  setPaymentInfo,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;