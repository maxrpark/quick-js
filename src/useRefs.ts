class Ref {
    ref: HTMLFormElement | HTMLElement | HTMLInputElement | HTMLDivElement;
    constructor(ref: any) {
        this.ref = ref;
    }

    onClick(callback: () => void) {
        if (this.ref) {
            this.ref.addEventListener("click", callback);
        }
    }
    onChange(callback: () => void) {
        if (
            (this.ref && (this.ref as HTMLInputElement).type === "text") ||
            this.ref.nodeName === "FORM"
        ) {
            this.ref.addEventListener("keyup", callback);
        } else {
            this.ref.addEventListener("change", callback);
        }
    }
    onSubmit(callback: () => void) {
        if (this.ref) {
            this.ref.addEventListener("submit", callback);
        }
    }
    onSubmitPrevent(callback: () => void) {
        if (this.ref) {
            this.ref.addEventListener("submit", (e) => {
                e.preventDefault();
                callback();
            });
        }
    }
    toogle(className: string) {
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
        alert(`Element with id ${id} not found`);
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
