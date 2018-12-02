const setPromiseState = (isPending = false, isFulfilled = false, isRejected = false) => {
  return {
    isPending,
    isFulfilled,
    isRejected
  };
};

export default setPromiseState;
