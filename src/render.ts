export const render = (items: [], where: HTMLElement, callback: () => void) => {
  let renderelements = items.map(callback).join('');
  where.innerHTML = renderelements;
};
