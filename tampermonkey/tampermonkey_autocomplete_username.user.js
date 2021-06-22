// ==UserScript==
// @name         autocomplete_username
// @namespace    https://lukasjoc.com
// @version      0.1
// @description  autocomplete username in the setttings area
// @author       lukasjoc
// @match        https://github.com/*/*/settings
// ==/UserScript==

(() => {
	"use strict"
	const user = document.querySelector("meta[name=octolytics-actor-login]").content
	const elems = [
		// change visibility
		document.querySelector("div.Box-footer input"),

		// transfer ownership
		document.querySelector("li:nth-child(2) div.Box-footer p:nth-child(2) input"),

		// archive repo
		document.querySelector("li:nth-child(3) div.Box-footer form p input"),

		// delete repo
		document.querySelector("li:nth-child(4) p input"),
	]
	for (let e of elems ) e.value = `${user}/`
})();
