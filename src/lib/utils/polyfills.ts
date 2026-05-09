/**
 * Global Polyfills
 * 
 * This file contains polyfills for features missing in older Node.js or browser versions.
 */

// Polyfill for Promise.withResolvers (Node.js < 22, some older browsers)
if (typeof Promise !== 'undefined' && !Promise.withResolvers) {
    Promise.withResolvers = function<T>() {
        let resolve!: (value: T | PromiseLike<T>) => void;
        let reject!: (reason?: any) => void;
        const promise = new Promise<T>((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve, reject };
    };
}
