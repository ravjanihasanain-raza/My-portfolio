import { useEffect, useState } from 'react';
import { USE_BACKEND } from '../services/api';

/**
 * Loads a list from the backend. Falls back to `fallback` when the
 * backend is off, returns nothing, or fails.
 * status: 'loading' | 'ready' | 'fallback'
 */
export default function useResource(fetcher, fallback) {
  const [state, setState] = useState({
    status: USE_BACKEND ? 'loading' : 'fallback',
    data: USE_BACKEND ? [] : fallback,
  });

  useEffect(() => {
    if (!USE_BACKEND) return undefined;
    let cancelled = false;

    fetcher()
      .then((data) => {
        if (cancelled) return;
        setState(
          Array.isArray(data) && data.length
            ? { status: 'ready', data }
            : { status: 'fallback', data: fallback },
        );
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'fallback', data: fallback });
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
