## Demo project combining React, TypeScript, Webpack, HyperScript, and Tachyons

This is based on a tutorial for using TypeScript and React with webpack: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

Then a series of commits were made to change it in the following ways.

It was modified to use webpack locally instead of globally (i.e. don’t use the `-g` option; use `--save-dev` instead).

To rebuild the demo use `npx webpack` and afterwards reload the file `index.html`

A `.gitignore` file was added at the top level with `node_modules/` in it to avoid adding those.

It was then modified to use HyperScript instead of JSX for React:
https://www.npmjs.com/package/react-hyperscript

`$ npm install react-hyperscript @types/react-hyperscript`

That change included renaming `Hello.tsx` to `Hello.ts` and renaming `index.tsx` to `index.ts` and making corresponding changes to the webpack config. Changes were made inside those components to use the HyperScript `h` function instead of JSX.

Then the demo was changed further to use the Tachyons CSS library to set colors and margins instead of inline CSS:
http://tachyons.io/

That required: `$ npm install tachyons` 

and then linking the Tachyons stylesheet in `index.html` via:

`<link rel="stylesheet" type="text/css" href="./node_modules/tachyons/css/tachyons.css">`

### Design caveats

The Hello component stores state and does tests locally. But following the Flux/Reflux/Redux/etc approach, it is usually better if applications store as much state as reasonable in a model object outside of components. Applications can then just pass into components a reference to the model (or parts of it) and ways to mutate the model and/or fetch and load current state from a serve. It would be better if validation functions (like used to check the name length) were in a model and not the component. 

Also, the React model of calling setState on each component to update state stored in that component is a premature optimization. Most applications are easier to reason about if they just redraw the top-level component for any model change and let vdom optimize the actual DOM changes. Mithril works this way by default and it works well. Only when there are specific performance issues is some extra optimization then worth considering.

While React unquestionably has a lot of mindshare and developer support, I still prefer Mithril to React because out-of-the-box it supports HyperScript and emphasizes global re-rendering.

### Rationale for library choices

TypeScript is just generally a good choice for larger multi-person projects where types provide an additional level of inline documentation in the code. Types also make it easier for IDEs to provide useful hints and code completion. Like Babel, TypeScript also makes it feasible to use future JavaScript features today.

JSX is yet another templating system promoted based on it looking a lot like HTML that many web programmers and designers are familiar with. But JSX is not HTML (which is an actual standard). While JSX may look "easy" at first because it sort-of looks familiar, JSX makes code harder to refactor, debug, and reason about. JSX adds a layer of unnecessary complexity to applications.

See on this general design point: 
https://www.infoq.com/presentations/Simple-Made-Easy
"Rich Hickey emphasizes simplicity’s virtues over easiness’, showing that while many choose easiness they may end up with complexity, and the better way is to choose easiness along the simplicity path."

Tachyons makes it possible to efficiently do the equivalent of inline styling with CSS in a concise way. Tachyons is an example of "modular", "functional", or "atomic" CSS as opposed to "semantic" CSS. Semantic CSS made some sense as a best practice when HTML files were being edited by hand -- but that best practice is out-of-date for single-page applications. Semantic CSS ultimately does not provide that much value to JavaScript-powered single-page applications based on components. Trying to use CSS semantically can make it very hard to refactor applications because it is hard to determine what CSS you can delete or change -- so CSS files tends to get bigger and bigger. While there are some disciplined approaches to semantic CSS involving prefixes on semantic classes or using CSS preprocessors, in the end that all does not provide that much value in a single page application. Ultimately, semantic CSS tends to just make styling of large web applications hard to modify and debug. When you are writing a complex single-page application, your JavaScript classes provide the semantic level -- not your CSS.

More discussion on that: https://www.leonpaternoster.com/2017/08/modular-css-vs-semantic-class-names-an-example/
And: https://medium.com/@simonswiss/full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study-part-2-dd60256b35b2

There are similar libraries to Tachyons one could choose instead. Also, Tachyons is more an instance of a design pattern. You can make your own similar toolkit of common CSS functional units -- or use your own in conjunction with Tachyons instead of inline styles for special cases Tachyons does not cover.
