const data = {
  el: '#app',
  data: {
    category: '',
    name: '',
    range: '500',
    products: [
      { name: 'Keyboard', price: 44, category: 'Accessories' },
      { name: 'Mouse', price: 20, category: 'Accessories' },
      { name: 'Monitor', price: 399, category: 'Accessories' },
      { name: 'Dell XPS', price: 599, category: 'Laptop' },
      { name: 'MacBook Pro', price: 899, category: 'Laptop' },
      { name: 'Pencil Box', price: 6, category: 'Stationary' },
      { name: 'Pen', price: 2, category: 'Stationary' },
      { name: 'USB Cable', price: 7, category: 'Accessories' },
      { name: 'Eraser', price: 2, category: 'Stationary' },
      { name: 'Highlighter', price: 5, category: 'Stationary' },
    ],
  },
};

const filterProducts = (array) =>
  array.filter((item) => item.category === 'Accessories');

console.log(filterProducts(data.data.products));
