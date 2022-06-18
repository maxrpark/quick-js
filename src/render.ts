export const render = (
  items: [] | undefined,
  where: HTMLElement,
  callback: () => any
) => {
  let renderelements;
  if (items instanceof Array) {
    renderelements = items.map(callback).join('');
  } else {
    renderelements = callback();
  }

  where.innerHTML = renderelements;
};
