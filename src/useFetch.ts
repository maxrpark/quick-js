export const useFetch = async (url: string) => {
  let error = null;
  let data = null;
  const resp = await fetch(url);
  let status = resp.status;
  if (status !== 200) {
    error = await resp.json();
    error.status = status;
    return { error };
  }
  data = await resp.json();
  return { data, error };
};
