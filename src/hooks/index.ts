/**
 * @description 仅在服务端执行
 */
export const useServerData = async (cb: (...args: any) => void) => {
  if (import.meta.env.SSR) {
    cb && cb()
  }
}
