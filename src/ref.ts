export const ref = (id: string): any => {
  const ref = document.getElementById(id);

  if (!ref) {
    alert(`Element with id ${id} not found`);
    throw new Error(`Element with id ${id} not found`);
  } else {
    class Ref {
      ref: HTMLFormElement | HTMLElement | HTMLInputElement | HTMLDivElement;
      constructor(id: string) {
        this.ref = document.getElementById(id)!;
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
    let element = new Ref(id);
    return element;
  }
};
