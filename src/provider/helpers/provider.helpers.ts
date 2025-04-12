import { useCallback, useSyncExternalStore } from "react";
import { Store } from "../types";

// Adds listeners to part of the store so we can see a value without forcing a complete rerender of the child components
// https://stackoverflow.com/questions/59741558/implement-useselector-equivalent-for-react-context
 export const createStore = <T>(initialState: T): Store<T> => {
        let state = initialState;
        const getState = () => state;
        const listeners = new Set<() => boolean>();
        // @ts-expect-error until I figure out the best way to to ensure dispatches are generic
        const setState = (fn) => {
          state = fn(state);
          listeners.forEach((listener) => listener());
        };
        const subscribe = (listener: () => boolean ) => {
          listeners.add(listener);
          return () => listeners.delete(listener);
        };
        return { getState, setState, subscribe };
      };


    // implements a useSelector like function
    export const useStore = <T>(store: Store<T>, selector: (state: T)=>any) =>
    useSyncExternalStore(
        store.subscribe,
        useCallback(() => selector(store.getState()), [store, selector])
    );