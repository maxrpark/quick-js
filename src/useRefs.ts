import { HTMLElementTagNameMap } from './interfaces';
interface DOMElement {
  ref: HTMLElement | null;
}

// interface RefInterface {
//   ref: any;
//   onClick?: (callback: () => void) => void;
//   onChange?: (callback: () => void) => void;
//   onSubmit?: (callback: () => void) => void;
//   onSubmitPrevent?: (callback: () => void) => void;
//   toogleClass?: (className: string) => void;
// }

class Ref {
  ref: HTMLFormElement | HTMLElement | HTMLInputElement | HTMLDivElement;
  constructor(refel: any) {
    this.ref = refel;
  }

  onClick(callback: () => void) {
    if (this.ref) {
      this.ref.addEventListener('click', callback);
    }
  }
  onChange(callback: () => void) {
    if (this.ref) {
      this.ref.addEventListener('keyup', callback);
    }
  }
  onSubmit(callback: () => void) {
    if (this.ref) {
      this.ref.addEventListener('submit', callback);
    }
  }
  onSubmitPrevent(callback: () => void) {
    if (this.ref) {
      this.ref.addEventListener('submit', (e) => {
        e.preventDefault();
        callback();
      });
    }
  }
  toogleClass(className: string) {
    if (this.ref) {
      this.ref.classList.toggle(className);
    }
  }
}

export const refs = (id: string): any => {
  const refs = document.querySelectorAll(`#${id}`);
  let element;
  let list = [] as any[];
  if (!refs) {
    alert(`Element MAcwith id ${id} not found`);
    throw new Error(`Element with id ${id} not found`);
  } else {
    refs.forEach((refel) => {
      element = new Ref(refel);
      list.push(element);
    });
    return list;
  }
};

export const ref = (id: string): any => {
  const ref = document.getElementById(id);

  if (!ref) {
    alert(`Element with id ${id} not found`);
    throw new Error(`Element with id ${id} not found`);
  } else {
    return new Ref(ref);
  }
};
