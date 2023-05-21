import { useState } from "react";

const noop = () => null;

const DEFAULT_METHOD = 'POST';

export const useMutation = (options = {}) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const { onSuccess = noop, onError = noop, ...initialOptions } = options;

	const handleMutate = async (body, mutationOptions = {}) => {
		const mergedOptions = { ...initialOptions, ...mutationOptions };

		const {url, method = DEFAULT_METHOD, headers, body: initialBody} = mergedOptions;

		setIsLoading(true);
		try{
			const response = await fetch(url, {method, headers, body: body || initialBody});
			const mutationData = await response.json();

			setData(mutationData);
			onSuccess(mutationData);
		} catch (e) {
			setError(e)
			onError(e)
		} finally {
			setIsLoading(false)
		}
	};

	return {mutate: handleMutate, data, error, isLoading };
};