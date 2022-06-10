const ref = (id: string): any => {
  class simpleJs {
    element: HTMLElement | null;
    constructor(id: string) {
      this.element = document.getElementById(id);
    }

    onClick(callback: () => void) {
      if (this.element) {
        this.element.addEventListener('click', callback);
      }
    }
    onChange(callback: () => void) {
      if (this.element) {
        this.element.addEventListener('keydown', callback);
      }
    }
    onSubmit(callback: () => void) {
      if (this.element) {
        this.element.addEventListener('submit', callback);
      }
    }
    onSubmitPrevent(callback: () => void) {
      if (this.element) {
        this.element.addEventListener('submit', (e) => {
          e.preventDefault();
          callback();
        });
      }
    }
  }
  return new simpleJs(id);
};

const onMounted = (callback: () => void) => {
  document.addEventListener('DOMContentLoaded', callback);
};

// useFetch!

const useFetch = async (url: string) => {
  let isLoading = true;
  let data = null;
  try {
    const resp = await fetch(url);
    data = await resp.json();
    isLoading = false;
  } catch (error) {
    isLoading = false;

    console.error(error);
  }
  return { isLoading, data };
};

// module.exports = {
//   ref,
//   onMounted,
//   useFetch,
// };
export = { ref, onMounted, useFetch };
