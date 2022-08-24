import { Delivery } from 'model/delivery';

export const DELIVERY_STORAGE_KEY = 'delivery';

const deliveryStorage = {
  get() {
    const delivery = localStorage.getItem(DELIVERY_STORAGE_KEY);
    try {
      if (!delivery) return null;
      const parsedUser = JSON.parse(delivery) as Delivery;
      return parsedUser;
    } catch (e) {
      localStorage.removeItem(DELIVERY_STORAGE_KEY);
      return null;
    }
  },
  set(delivery: Delivery) {
    localStorage.setItem(DELIVERY_STORAGE_KEY, JSON.stringify(delivery));
  },
  remove() {
    localStorage.removeItem(DELIVERY_STORAGE_KEY);
  },
};

export default deliveryStorage;
