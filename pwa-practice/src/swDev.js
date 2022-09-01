const swDev = () => {
  navigator.serviceWorker.register('./sw.js').then((response) => {
    console.warn('response', response);
  });
};

export default swDev;
