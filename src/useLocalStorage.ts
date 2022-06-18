// on development, don't use it

export const useLocalStorage = (
  name: string,
  item: any,
  save: boolean = false
) => {
  if (localStorage.getItem(name)) {
    if (save === false) {
      return JSON.parse(localStorage.getItem(name) as string);
    } else {
      localStorage.setItem(name, JSON.stringify(item));
      return JSON.parse(localStorage.getItem(name) as string);
    }
  } else {
    localStorage.setItem(name, JSON.stringify(item));
    return item;
  }
};

// const renderElements = async (items, where, callback) => {
//   console.log(items);
//   let renderelements = items.map(callback).join('');

//   where.innerHTML = renderelements;
// };

// let myArray = [{ id: 1, name: 'luci' }];

// useLocalStorage('myArray', myArray);

// myArray.push({ id: 2, name: 'max' });
// // items = useLocalStorage('myArray', myArray, true);

// myArray.push({ id: 3, name: 'coreana' });
// newItems = useLocalStorage('myArray', myArray, true);

// renderElements(newItems, div.ref, (item) => {
//   return `
//     <h2>${item.name}</h2>
//     `;
// });

// setTimeout(() => {
// myArray.push({ id: 4, name: 'novia' });
// useLocalStorage('myArray', myArray, true);
// console.log('poronga', items);

// setTimeout(() => {
//   renderElements(items, div.ref, (item) => {
//     return `
// <h2>${item.name}</h2>
// `;
//   });
// }, 3000);
