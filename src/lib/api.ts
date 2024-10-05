export const createRequest = (url: string, options?: RequestInit) => async () => {
  const res = await fetch(url, options);
  const data = await res.json();

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      window.location.href = '/login?error=true&message=You need to login first!';
    } else {
      throw new Error(data.message ?? 'Something went wrong!');
    }
  }

  return data;
};
