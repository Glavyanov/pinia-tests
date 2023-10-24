export default function localStoragePlugin({ store, options }) {
  store.$subscribe((mutation, state) => {
    for (const propertyName in state) {
      const key = `${store.cacheKeyPrefix}-${mutation.storeId}-${propertyName}`;
      localStorage.setItem(key, JSON.stringify(state[propertyName]));
    }
  });

  store.$onAction(({ name, store, _, after, onError }) => {
    if (options.cache && options.cache[name]) {
      const loadingKeyName = [options.cache[name].loadingStateKey];
      store[loadingKeyName] = true;
      after(() => {
        store[loadingKeyName] = false;
      });
      onError(() => {
        store[loadingKeyName] = false;
      });
    }
  });

  return {
    cacheKeyPrefix: "robot-shop",
  };
}
