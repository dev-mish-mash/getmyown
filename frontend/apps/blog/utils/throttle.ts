const throttle = (cb: any) => {
  let tick = false;
  return () => {
    if (tick) {
      return;
    }
    tick = true;
    // eslint-disable-next-line consistent-return
    return requestAnimationFrame(() => {
      tick = false;
      return cb();
    });
  };
};

export default throttle;
