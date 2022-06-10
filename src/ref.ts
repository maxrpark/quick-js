interface RefInt {
  ref: HTMLElement | null;
}

export const ref = (id: string): RefInt => {
  class Ref {
    ref: HTMLElement | null;
    constructor(id: string) {
      this.ref = document.getElementById(id);
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
  }
  return new Ref(id);
};
