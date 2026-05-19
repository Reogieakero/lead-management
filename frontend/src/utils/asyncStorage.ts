// Minimal promise-based wrapper around localStorage to expose an async API
export async function getItem(key: string): Promise<string | null> {
  try {
    const v = localStorage.getItem(key);
    return v;
  } catch (err) {
    return null;
  }
}

export async function setItem(key: string, value: string): Promise<void> {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    // ignore
  }
}

export async function removeItem(key: string): Promise<void> {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    // ignore
  }
}

export default { getItem, setItem, removeItem };
