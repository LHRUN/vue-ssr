/**
 * @description Runs only on server side
 */
export const useServerData = async (cb: (...args: unknown[]) => void) => {
  if (import.meta.env.SSR) {
    cb && cb()
  }
}
