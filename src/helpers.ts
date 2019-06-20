export const documentReady = (callback: any) => {
    if (document.readyState !== 'loading') {
        callback();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback);
    }
};


export function pre(...args: any): void {
    console.log(...args);
}
