import React from "react"
import { Link } from "gatsby"
import Version from "../Version"
import styles from "./style.module.scss"

function Posts(props) {

  return (
    <div className={styles.postsWrapper}>
      <ul>
        <li>
          <Link to="/javascript/numeric-separators">Numeric Separators in JavaScript</Link>{" "}<Version number="12" />
          - Apr 5, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-38-adding-two-boolean-values">JS Daily #38 - Adding Two Boolean Values</Link>{" "}
          - Mar 27, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-37-same-key-in-object">JS Daily #37 - Same Key in Object</Link>{" "}
          - Mar 26, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-36-eval">JS Daily #36 - Eval</Link>{" "}
          - Mar 25, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-35-automatic-semicolon-insertion">JS Daily #35 - Automatic Semicolon Insertion</Link>{" "}
          - Mar 24, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-34-hoisting-let-variables">JS Daily #34 - Hoisting of Let Variables</Link>{" "}
          - Mar 23, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-33-promise-resolve">JS Daily #33 - Multiple Resolve in Promises</Link>{" "}
          - Mar 22, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-32-constructor-function-returing-object">JS Daily #32 - Constructor Function Returning an Object</Link>{" "}
          - Mar 21, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-31-optional-catch-binding">JS Daily #31 - Optional Catch Binding</Link>{" "}
          - Mar 20, 2021
        </li>
        <li>
          <Link to="/blog/filter-mongoose-response-for-api">How To: Modify Mongoose Response For API</Link>{" "}
          - Mar 20, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-30-numeric-separtor">JS Daily #30 - Numeric Separator</Link>{" "}
          - Mar 19, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-29-exponentiation-operator">JS Daily #29 - Exponentiation Operator</Link>{" "}
          - Mar 18, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-28-rest-parameter-functions">JS Daily #28 - Rest Parameter in Functions</Link>{" "}
          - Mar 17, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-27-comparing-string-with-string-object">JS Daily #27 - Comparing String With String Object</Link>{" "}
          - Mar 16, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-26-object-copy-reference">JS Daily #26 - Object Copy By Reference</Link>{" "}
          - Mar 15, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-25-double-negation-value">JS Daily #25 - Double Negating a Value</Link>{" "}
          - Mar 14, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-24-template-literal-expression">JS Daily #24 - Template Literal Expression</Link>{" "}
          - Mar 13, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-23-apply-on-object-method">JS Daily #23 - Function Apply() Method on Objects</Link>{" "}
          - Mar 12, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-22-object-key-type">JS Daily #22 - Data Type of Object Keys</Link>{" "}
          - Mar 11, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-21-tagged-template-literal">JS Daily #21 - Tagged Template Literal</Link>{" "}
          - Mar 10, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-20-return-from-constructor">JS Daily #20 - Return From Constructor Function</Link>{" "}
          - Mar 9, 2021
        </li>
        <li>
          <Link to="/blog/macos-configure-ipv6-no-off-option">SOLVED: MacOS - No Off Option Under Configure IPv6</Link>{" "}
          - Mar 9, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-19-optional-chaining">JS Daily #19 - Optional Chaining</Link>{" "}
          - Mar 8, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-18-const-variable-declaration">JS Daily #18 - Variable Declaration Using Const</Link>{" "}
          - Mar 7, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-17-non-existent-object-property">JS Daily #17 - Non Existent Object Property</Link>{" "}
          - Mar 6, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-16-implicit-type-coercion">JS Daily #16 - Implicit Type Coercion</Link>{" "}
          - Mar 5, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-15-add-properties-to-functions">JS Daily #15 - Add Properties to Function</Link>{" "}
          - Mar 4, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-14-increment-operator">JS Daily #14 - Increment Operator</Link>{" "}
          - Mar 3, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-13-settimeout-for-loop">JS Daily #13 - SetTimeout In For Loop</Link>{" "}
          - Mar 2, 2021
        </li>
        <li>
          <Link to="/blog/tools-for-javascript-fullstack-developer">Tools for JavaScript Fullstack Developer</Link>{" "}
          - Mar 1, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-12-default-return-value-function">JS Daily #12 - Default Return Value of a Function</Link>{" "}
          - Mar 1, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-11-named-arguments">JS Daily #11 - Named Arguments</Link>{" "}
          - Feb 28, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-10-logical-or">JS Daily #10 - Logical OR</Link>{" "}
          - Feb 27, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-9-string-replace">JS Daily #9 - String Replace Method</Link>{" "}
          - Feb 26, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-8-apply-with-arrow-function">JS Daily #8 - Using apply() With Arrow Functions</Link>{" "}
          - Feb 25, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-7-block-scoped-let">JS Daily #7 - Block Scoped Let</Link>{" "}
          - Feb 24, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-6-settimeout-asynchronous">JS Daily #6 - SetTimeout and Callstack</Link>{" "}
          - Feb 23, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-5-nullish-coalescing-operator">JS Daily #5 - Boolean Value With Nullish Coalescing Operator</Link>{" "}
          - Feb 22, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-4-truthy-empty-object">JS Daily #4 - Truthy Empty Objects</Link>{" "}
          - Feb 21, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-3-swap-values-destructuring">JS Daily #3 - Swap Values using Destructuring</Link>{" "}
          - Feb 20, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-2-arrow-function-this">JS Daily #2 - this in Arrow Function</Link>{" "}
          - Feb 19, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-1-variable-redeclaration">JS Daily #1 - Variable Redeclaration</Link>{" "}
          - Feb 18, 2021
        </li>
        <li>
          <Link to="/nextjs/deploy-nextjs-site-in-vercel-with-custom-domain">Deploy Next.js Site in Vercel with Custom Domain</Link>{" "}
          - Feb 10, 2021
        </li>
        <li>
          <Link to="/nextjs/hello-world-nextjs-site-for-beginners">Hello World Next.js Site for Beginners</Link>{" "}
          - Feb 8, 2021
        </li>
        <li>
          <Link to="/nextjs/interview-questions-links-redirect">Next.js Interview Questions - Link</Link>{" "}
          - Feb 6, 2021
        </li>
        <li>
          <Link to="/nextjs/interview-questions-routing-dynamic-routes-catch-all">Next.js Interview Questions - Routing, Dynamic Routes, Catch-All Routes</Link>{" "}
          - Feb 5, 2021
        </li>
        <li>
          <Link to="/nextjs/interview-questions-getting-started">Next.js Interview Questions - Getting Started</Link>{" "}
          - Feb 4, 2021
        </li>
        <li>
          <Link to="/react/basic-interview-questions">React Basic Interview Questions</Link>{" "}
          - Jan 28, 2021
        </li>
        <li>
          <Link to="/react/render-props-interview-questions">React Render Props Interview Questions</Link>{" "}
          - Jan 24, 2021
        </li>
        <li>
          <Link to="/react/code-splitting-lazy-suspense-interview-questions">React Code-Splitting, Lazy, Suspense Interview Questions</Link>{" "}
          - Jan 19, 2021
        </li>
        <li>
          <Link to="/react/context-api-interview-questions">React Context API Interview Questions</Link>{" "}
          - Jan 18, 2021
        </li>
        <li>
          <Link to="/react/hooks-interview-questions">React Hooks Interview Questions</Link>{" "}
          - Jan 17, 2021
        </li>
        <li>
          <Link to="/react/refs-interview-questions">React Refs Interview Questions</Link>{" "}
          - Jan 16, 2021
        </li>
        <li>
          <Link to="/blog/empty-shallowwrapper-snapshot-jest-enzyme">
            SOLVED: Empty ShallowWrapper Snapshot Object in Jest and Enzyme
          </Link>{" "}
          - Aug 26, 2020
        </li>
        <li>
          <Link to="/javascript/quiz-arrays">Quiz - Arrays in JavaScript</Link>{" "}
          - Jul 30, 2020
        </li>
        <li>
          <Link to="/javascript/quiz-variables">Quiz - Variables in JavaScript</Link>{" "}
          - Jul 14, 2020
        </li>
        <li>
          <Link to="/javascript/data-types">Data Types in JavaScript</Link>{" "}
          - Jul 2, 2020
        </li>
        <li>
          <Link to="/javascript/es2021-new-features">ES2021 New Features in JavaScript</Link>{" "}
          - Jun 25, 2020
        </li>
        <li>
          <Link to="/javascript/arrays">Arrays in JavaScript</Link>{" "}
          - Jun 24, 2020
        </li>
        <li>
          <Link to="/javascript/questions">JavaScript Questions</Link>{" "}
          - Jun 18, 2020
        </li>
        <li>
          <Link to="/javascript/operators">Operators in JavaScript</Link>{" "}
          - Jun 11, 2020
        </li>
        <li>
          <Link to="/blog/react-native-vs-native-apps">
            React Native vs Native Apps
          </Link>{" "}
          - Jun 4, 2020
        </li>
        <li>
          <Link to="/blog/deno-installation">How to Install Deno</Link> - Jun 2,
          2020
        </li>
        <li>
          <Link to="/blog/react-hello-world-app-without-jsx">
            Hello World App Using React Without JSX
          </Link>{" "}
          - May 29, 2020
        </li>
        <li>
          <Link to="/blog/write-your-first-react-app">
            Write Your First React App
          </Link>{" "}
          - May 29, 2020
        </li>
        <li>
          <Link to="/blog/react-bootstrap-controllabel-warning">
            SOLVED: ControlLabel from React Bootstrap throws Warning
          </Link>{" "}
          - Feb 19, 2020
        </li>
        <li>
          <Link to="/blog/create-react-app-setuptests-js-not-working">
            SOLVED: setupTests.js not working in CreateReactApp
          </Link>{" "}
          - Feb 6, 2020
        </li>
        <li>
          <Link to="/javascript/es2020-new-features">ES2020 New Features in JavaScript</Link>{" "}
          - Jan 15, 2020
        </li>
        <li>
          <Link to="/javascript/variables">Variables in JavaScript</Link>{" "}
          - Dec 3, 2019
        </li>
        <li>
          <Link to="/javascript/introduction">Introduction to JavaScript</Link>{" "}
          - Nov 24, 2019
        </li>
      </ul>
    </div>
  )
}

export default Posts
