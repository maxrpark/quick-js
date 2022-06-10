export const useFetch = async (url: string) => {
  let isLoading = true;
  let data = null;
  console.log('useFetch: url', url);
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
