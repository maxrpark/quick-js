export const useFetch = async (url: string) => {
  let isLoading = true;
  let response = null;
  try {
    const resp = await fetch(url);
    let status = resp.status;
    let data = await resp.json();
    response = { data, status };
    isLoading = false;
  } catch (error) {
    isLoading = false;
    console.error(error);
  }
  return { isLoading, response };
};

console.log('hello');
