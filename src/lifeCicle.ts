export const onMounted = (callback: () => void) => {
  document.addEventListener('DOMContentLoaded', callback);
};
