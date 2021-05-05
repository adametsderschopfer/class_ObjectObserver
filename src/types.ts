export {};

declare global {
  interface Window {
    ObjectObserver: TObjectObserver;
  }
}

export type TObjectObserver = ProxyConstructor;
