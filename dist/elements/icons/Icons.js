var Icons=function(){"use strict";var e=function(){return this};e.debug=function(){return"1"===e.getUrlParameter(e.PARAMS.DEBUG)},e.getUrlParameter=function(e,n){var t=n||window.location.search,r=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),a=new RegExp("[\\?&]"+r+"=([^&#]*)").exec(t);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))},e.localize=function(e){var n=e||"",t=(window.LOCALIZED_STRINGS||[]).filter(function(n){return!(!n.hasOwnProperty("slug")||n.slug!==e)&&n});return t[0]&&t[0].hasOwnProperty("label")?t[0].label:n},e.PARAMS={DEBUG:"debug"},e.SELECTORS={parseMarkdown:'[data-js="markdown"]'};var n=function n(t){return t=t||n.path,fetch(t).then(function(n){if(n.ok)return n.text();e.debug()&&console.dir(n)}).catch(function(n){e.debug()&&console.dir(n)}).then(function(e){var n=document.createElement("div");n.innerHTML=e,n.setAttribute("aria-hidden",!0),n.setAttribute("style","display: none;"),document.body.appendChild(n)}),this};return n.path="icons.svg",n}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbnMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9tb2R1bGVzL3V0aWxpdHkuanMiLCIuLi8uLi8uLi9zcmMvZWxlbWVudHMvaWNvbnMvSWNvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRoZSBVdGlsaXR5IGNsYXNzXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgVXRpbGl0eSB7XG4gIC8qKlxuICAgKiBUaGUgVXRpbGl0eSBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBVdGlsaXR5IGNsYXNzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIEJvb2xlYW4gZm9yIGRlYnVnIG1vZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHdldGhlciBvciBub3QgdGhlIGZyb250LWVuZCBpcyBpbiBkZWJ1ZyBtb2RlLlxuICovXG5VdGlsaXR5LmRlYnVnID0gKCkgPT4gKFV0aWxpdHkuZ2V0VXJsUGFyYW1ldGVyKFV0aWxpdHkuUEFSQU1TLkRFQlVHKSA9PT0gJzEnKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIGtleSBpbiBhIFVSTCBxdWVyeSBzdHJpbmcuIElmIG5vIFVSTCBxdWVyeVxuICogc3RyaW5nIGlzIHByb3ZpZGVkLCB0aGUgY3VycmVudCBVUkwgbG9jYXRpb24gaXMgdXNlZC5cbiAqIEBwYXJhbSAge3N0cmluZ30gIG5hbWUgICAgICAgIC0gS2V5IG5hbWUuXG4gKiBAcGFyYW0gIHs/c3RyaW5nfSBxdWVyeVN0cmluZyAtIE9wdGlvbmFsIHF1ZXJ5IHN0cmluZyB0byBjaGVjay5cbiAqIEByZXR1cm4gez9zdHJpbmd9IFF1ZXJ5IHBhcmFtZXRlciB2YWx1ZS5cbiAqL1xuVXRpbGl0eS5nZXRVcmxQYXJhbWV0ZXIgPSAobmFtZSwgcXVlcnlTdHJpbmcpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBxdWVyeVN0cmluZyB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBwYXJhbSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIHBhcmFtICsgJz0oW14mI10qKScpO1xuICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyhxdWVyeSk7XG5cbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6XG4gICAgZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xufTtcblxuLyoqXG4gKiBGb3IgdHJhbnNsYXRpbmcgc3RyaW5ncywgdGhlcmUgaXMgYSBnbG9iYWwgTE9DQUxJWkVEX1NUUklOR1MgYXJyYXkgdGhhdFxuICogaXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0ZW1wbGF0ZSBsZXZlbCBzbyB0aGF0IHRob3NlIHN0cmluZ3MgYXJlIGV4cG9zZWQgdG9cbiAqIFdQTUwgdHJhbnNsYXRpb24uIFRoZSBMT0NBTElaRURfU1RSSU5HUyBhcnJheSBpcyBjb21wb3NlZCBvZiBvYmplY3RzIHdpdGggYVxuICogYHNsdWdgIGtleSB3aG9zZSB2YWx1ZSBpcyBzb21lIGNvbnN0YW50LCBhbmQgYSBgbGFiZWxgIHZhbHVlIHdoaWNoIGlzIHRoZVxuICogdHJhbnNsYXRlZCBlcXVpdmFsZW50LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgc2x1ZyBuYW1lIGFuZCByZXR1cm5zIHRoZVxuICogbGFiZWwuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNsdWdcbiAqIEByZXR1cm4ge3N0cmluZ30gbG9jYWxpemVkIHZhbHVlXG4gKi9cblV0aWxpdHkubG9jYWxpemUgPSBmdW5jdGlvbihzbHVnKSB7XG4gIGxldCB0ZXh0ID0gc2x1ZyB8fCAnJztcbiAgY29uc3Qgc3RyaW5ncyA9IHdpbmRvdy5MT0NBTElaRURfU1RSSU5HUyB8fCBbXTtcbiAgY29uc3QgbWF0Y2ggPSBzdHJpbmdzLmZpbHRlcihcbiAgICAocykgPT4gKHMuaGFzT3duUHJvcGVydHkoJ3NsdWcnKSAmJiBzWydzbHVnJ10gPT09IHNsdWcpID8gcyA6IGZhbHNlXG4gICk7XG4gIHJldHVybiAobWF0Y2hbMF0gJiYgbWF0Y2hbMF0uaGFzT3duUHJvcGVydHkoJ2xhYmVsJykpID8gbWF0Y2hbMF0ubGFiZWwgOiB0ZXh0O1xufTtcblxuLyoqXG4gKiBBcHBsaWNhdGlvbiBwYXJhbWV0ZXJzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5VdGlsaXR5LlBBUkFNUyA9IHtcbiAgREVCVUc6ICdkZWJ1Zydcbn07XG5cbi8qKlxuICogU2VsZWN0b3JzIGZvciB0aGUgVXRpbGl0eSBtb2R1bGVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblV0aWxpdHkuU0VMRUNUT1JTID0ge1xuICBwYXJzZU1hcmtkb3duOiAnW2RhdGEtanM9XCJtYXJrZG93blwiXSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxpdHk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uL2pzL21vZHVsZXMvdXRpbGl0eSc7XG5cbi8qKlxuICogVGhlIEljb24gbW9kdWxlXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgSWNvbnMge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgaWNvbiBmaWxlXG4gICAqIEByZXR1cm4ge29iamVjdH0gVGhlIGNsYXNzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgcGF0aCA9IChwYXRoKSA/IHBhdGggOiBJY29ucy5wYXRoO1xuXG4gICAgZmV0Y2gocGF0aClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgaWYgKFV0aWxpdHkuZGVidWcoKSkgY29uc29sZS5kaXIocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgaWYgKFV0aWxpdHkuZGVidWcoKSkgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcHJpdGUuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgc3ByaXRlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgc3ByaXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcHJpdGUpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKiogQHR5cGUge1N0cmluZ30gVGhlIHBhdGggb2YgdGhlIGljb24gZmlsZSAqL1xuSWNvbnMucGF0aCA9ICdpY29ucy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiJdLCJuYW1lcyI6WyJVdGlsaXR5IiwidGhpcyIsImRlYnVnIiwiZ2V0VXJsUGFyYW1ldGVyIiwiUEFSQU1TIiwiREVCVUciLCJuYW1lIiwicXVlcnlTdHJpbmciLCJxdWVyeSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyYW0iLCJyZXBsYWNlIiwicmVzdWx0cyIsIlJlZ0V4cCIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJsb2NhbGl6ZSIsInNsdWciLCJ0ZXh0IiwibWF0Y2giLCJMT0NBTElaRURfU1RSSU5HUyIsImZpbHRlciIsInMiLCJoYXNPd25Qcm9wZXJ0eSIsImxhYmVsIiwiU0VMRUNUT1JTIiwiSWNvbnMiLCJwYXRoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJkaXIiLCJjYXRjaCIsImVycm9yIiwiZGF0YSIsInNwcml0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6ImtDQU1BLElBQU1BLEVBS0osa0JBQ1NDLE1BUVhELEVBQVFFLHVCQUFpRSxNQUFsREYsRUFBUUcsZ0JBQWdCSCxFQUFRSSxPQUFPQyxRQVM5REwsRUFBUUcseUJBQW1CRyxFQUFNQyxPQUN6QkMsRUFBUUQsR0FBZUUsT0FBT0MsU0FBU0MsT0FDdkNDLEVBQVFOLEVBQUtPLFFBQVEsT0FBUSxPQUFPQSxRQUFRLE9BQVEsT0FFcERDLEVBRFEsSUFBSUMsT0FBTyxTQUFXSCxFQUFRLGFBQ3RCSSxLQUFLUixVQUVSLE9BQVpNLEVBQW1CLEdBQ3hCRyxtQkFBbUJILEVBQVEsR0FBR0QsUUFBUSxNQUFPLE9BYWpEYixFQUFRa0IsU0FBVyxTQUFTQyxPQUN0QkMsRUFBT0QsR0FBUSxHQUViRSxHQURVWixPQUFPYSx1QkFDREMsZ0JBQ25CQyxZQUFPQSxFQUFFQyxlQUFlLFNBQVdELEVBQUEsT0FBY0wsSUFBUUssV0FFcERILEVBQU0sSUFBTUEsRUFBTSxHQUFHSSxlQUFlLFNBQVlKLEVBQU0sR0FBR0ssTUFBUU4sR0FPM0VwQixFQUFRSSxjQUNDLFNBT1RKLEVBQVEyQix5QkFDUyx3QkMvRGpCLElBQU1DLEVBTUosV0FBWUMsWUFDRkEsR0FBZUQsRUFBTUMsV0FFdkJBLEdBQ0hDLGNBQU1DLE1BQ0RBLEVBQVNDLFVBQ0pELEVBQVNYLE9BR1pwQixFQUFRRSxpQkFBaUIrQixJQUFJRixLQUVwQ0csZUFBT0MsR0FFRm5DLEVBQVFFLGlCQUFpQitCLElBQUlFLEtBRWxDTCxjQUFNTSxPQUNDQyxFQUFTQyxTQUFTQyxjQUFjLFNBQy9CQyxVQUFZSixJQUNaSyxhQUFhLGVBQWUsS0FDNUJBLGFBQWEsUUFBUywyQkFDcEJDLEtBQUtDLFlBQVlOLEtBR3ZCcEMsYUFLWDJCLEVBQU1DLEtBQU8ifQ==
