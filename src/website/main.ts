import App from "./App.svelte";

declare const window: any;
const app = new App({ target: document.body });
window.app = app;

// export default app;
