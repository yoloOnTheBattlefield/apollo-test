import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import { JSDOM } from "jsdom";

// React 16 Enzyme adapter

configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.mount = mount;
global.render = render;

// const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
// const { window } = jsdom;

// function copyProps(src, target) {
//   const props = Object.getOwnPropertyNames(src)
//     .filter(prop => typeof target[prop] === "undefined")
//     .reduce(
//       (result, prop) => ({
//         ...result,
//         [prop]: Object.getOwnPropertyDescriptor(src, prop)
//       }),
//       {}
//     );
//   Object.defineProperties(target, props);
// }

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};
// copyProps(window, global);
