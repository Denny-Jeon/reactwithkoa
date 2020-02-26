const resetPaging = (total, items, current) => {
  if (items.length === 1) {
    if (total === 1) return current;

    return {
      ...current,
      offset: current.offset - current.size,
    };
  }

  return current;
};

export default resetPaging;
