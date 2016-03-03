'use strict';

var ohm = require("../lib/ohm.js");

var toExport = {
  grammar,
  semantics,
  grammarCST
};

if(typeof module !== "undefined" && typeof module.exports !== "undefined"){
  module.exports = toExport;
} else {
  Object.assign(window, toExport);
}

var grammar = null,
    semantics = null,
    grammarCST = null;

document.addEventListener("DOMContentLoaded", function(){
  let script = document.querySelector('script[type="text/ohm-js"]');

  toExport.grammar = ohm.grammarFromScriptElement(script);
  toExport.semantics = toExport.grammar.semantics();
  toExport.grammarCST = ohm.ohmGrammar.match(script.textContent);
});
