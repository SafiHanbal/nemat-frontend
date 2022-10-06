export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartCount = (state) => state.cart.cartCount;

export const selectCartTotal = (state) => state.cart.cartTotal;

export const selectConfirmOrderLoading = (state) =>
  state.cart.confirmOrderLoading;

export const selectOrderConfirmed = (state) => state.cart.orderConfirmed;

export const selectUserOrders = (state) => state.cart.userOrders;

export const selectUserOrdersLoading = (state) => state.cart.userOrdersLoading;
