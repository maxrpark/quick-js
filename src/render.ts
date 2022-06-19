export const render = (items: [], where: HTMLElement, callback: () => any) => {
  // let renderelements;
  let renderelements = items.map(callback).join('');
  // if (items instanceof Array) {
  //   renderelements = items.map(callback).join('');
  // } else {
  //   renderelements = callback();
  // }

  where.innerHTML = renderelements;
};
