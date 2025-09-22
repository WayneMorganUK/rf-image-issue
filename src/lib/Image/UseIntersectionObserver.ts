export function useIntersectionObserver(visibleObject: { isIntersecting: boolean }, options: IntersectionObserverInit) {
    return (element: HTMLElement) => {
        const observer = new IntersectionObserver((entries) => {
            visibleObject.isIntersecting = entries[0].isIntersecting;
        }, options);
        observer.observe(element);

        return () => observer.unobserve(element);
    };
}