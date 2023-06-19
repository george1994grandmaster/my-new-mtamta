declare module 'locomotive-scroll' {
      interface LocomotiveScrollOptions {
        // Define the options here based on the library's documentation
        // Example: smooth?: boolean;
        // Example: el: HTMLElement | null;
        // ...
      }
    
      class LocomotiveScroll {
        constructor(options: LocomotiveScrollOptions);
        destroy(): void;
        // Define other methods or properties used by the library
        // ...
      }
    
      export default LocomotiveScroll;
    }