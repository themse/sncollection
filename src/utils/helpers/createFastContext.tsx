// https://github.com/jherr/fast-react-context/blob/main/fast-context-generic/src/createFastContext.tsx

import {
	createContext,
	useCallback,
	useRef,
	PropsWithChildren,
	useContext,
	useSyncExternalStore,
} from 'react';

export default function createFastContext<TStore>(initialState: TStore) {
	const useStoreData = () => {
		const storeRef = useRef(initialState);

		const get = useCallback(() => storeRef.current, []);

		const subscribersRef = useRef(new Set<() => void>());

		const set = useCallback((value: Partial<TStore>) => {
			storeRef.current = { ...storeRef.current, ...value };

			subscribersRef.current.forEach((callback) => callback());
		}, []);

		const subscribe = useCallback((callback: () => void) => {
			subscribersRef.current.add(callback);

			return () => {
				subscribersRef.current.delete(callback);
			};
		}, []);

		return {
			get,
			set,
			subscribe,
		};
	};

	type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

	const StoreContext = createContext<UseStoreDataReturnType | null>(null);

	const FastContextProvider = ({ children }: PropsWithChildren) => {
		const storeData = useStoreData();

		return <StoreContext.Provider value={storeData}>{children}</StoreContext.Provider>;
	};

	const useStore = <TSelectorOutput,>(
		selector: (_store: TStore) => TSelectorOutput,
	): [TSelectorOutput, (_value: Partial<TStore>) => void] => {
		const store = useContext(StoreContext);

		if (!store) {
			throw new Error('useStore is used only within FastContextProvider');
		}

		const state = useSyncExternalStore(
			store.subscribe,
			() => selector(store.get()),
			() => selector(initialState),
		);

		return [state, store.set];
	};

	return {
		FastContextProvider,
		useStore,
	};
}
