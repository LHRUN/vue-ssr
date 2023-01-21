/**
 * @description 仅在服务端执行
 */
export const useServerData = async (cb: (...args: unknown[]) => void) => {
  if (import.meta.env.SSR) {
    cb && cb()
  }
}
