"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var deepEqual = require("fast-deep-equal/es6/react");
var isPrimitive = function (value) {
    return ["number", "string", "boolean"].includes(typeof value);
};
var warnDeps = function (dependencies) {
    if (dependencies.length === 0) {
        console.warn("useDeepEffect should not be used with no dependencies. Use useEffect instead.");
    }
    if (dependencies.every(isPrimitive)) {
        console.warn("useDeepEffect should not be used with primitive values. Use useEffect instead.");
    }
};
var getTriggerDeps = function (dependencies, comparisonFn) {
    var ref = react_1.useRef();
    var triggerDeps = react_1.useRef(0);
    if (!comparisonFn(dependencies, ref.current)) {
        ref.current = dependencies;
        triggerDeps.current = Math.random();
    }
    return [triggerDeps.current];
};
var useDeepEffect = function (fn, dependencies, comparisonFn) {
    if (dependencies === void 0) { dependencies = []; }
    if (comparisonFn === void 0) { comparisonFn = deepEqual; }
    if (process.env.NODE_ENV !== "production") {
        warnDeps(dependencies);
    }
    return react_1.useEffect(fn, getTriggerDeps(dependencies, comparisonFn));
};
exports.default = useDeepEffect;
//# sourceMappingURL=useDeepEffect.js.map