function sortAndRaiseToPower(array) {
  if (Array.isArray(array)) {
    const sortedArray = array.sort((a, b) => (a.price > b.price ? 1 : -1));

    return sortedArray
      .map((item) => {
        return {
          price: item.price * item.price,
        };
      })
      .map((item) => item.price);
  }

  return null;
}

module.exports = sortAndRaiseToPower;
