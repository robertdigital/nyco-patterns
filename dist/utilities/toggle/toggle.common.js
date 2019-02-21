"use strict";var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),Toggle=function(){function e(t){return classCallCheck(this,e),t=t||{},this._settings={selector:t.selector?t.selector:e.selector,namespace:t.namespace?t.namespace:e.namespace,inactiveClass:t.inactiveClass?t.inactiveClass:e.inactiveClass,activeClass:t.activeClass?t.activeClass:e.activeClass},this}return createClass(e,[{key:"init",value:function(){var e=this;return document.querySelector("body").addEventListener("click",function(t){t.target.matches(e._settings.selector)&&(t.preventDefault(),e._toggle(t))}),this}},{key:"_toggle",value:function(e){var t=this,s=e.target,a=!1;if(a=s.getAttribute("href")?document.querySelector(s.getAttribute("href")):a,!(a=s.ariaControls?document.querySelector("#"+s.ariaControls):a))return this;if(this.elementToggle(s,a),s.dataset[this._settings.namespace+"Undo"]){var i=document.querySelector(s.dataset[this._settings.namespace+"Undo"]);i.addEventListener("click",function(e){e.preventDefault(),t.elementToggle(s,a),i.removeEventListener("click")})}return this}},{key:"elementToggle",value:function(t,s){""!==this._settings.activeClass&&(t.classList.toggle(this._settings.activeClass),s.classList.toggle(this._settings.activeClass)),""!==this._settings.inactiveClass&&s.classList.toggle(this._settings.inactiveClass);for(var a=0;a<e.elAriaRoles.length;a++)t.getAttribute(e.elAriaRoles[a])&&t.setAttribute(e.elAriaRoles[a],!("true"===t.getAttribute(e.elAriaRoles[a])));for(var i=0;i<e.targetAriaRoles.length;i++)s.getAttribute(e.targetAriaRoles[i])&&s.setAttribute(e.targetAriaRoles[i],!("true"===s.getAttribute(e.targetAriaRoles[i])));return t.getAttribute("href")&&s.classList.contains(this._settings.activeClass)&&(window.location.hash="",window.location.hash=t.getAttribute("href")),this}}]),e}();Toggle.selector='[data-js="toggle"]',Toggle.namespace="toggle",Toggle.inactiveClass="hidden",Toggle.activeClass="active",Toggle.elAriaRoles=["aria-pressed","aria-expanded"],Toggle.targetAriaRoles=["aria-hidden"],module.exports=Toggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbW1vbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdGllcy90b2dnbGUvdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUaGUgU2ltcGxlIFRvZ2dsZSBjbGFzcy4gVGhpcyB3aWxsIHRvZ2dsZSB0aGUgY2xhc3MgJ2FjdGl2ZScgYW5kICdoaWRkZW4nXG4gKiBvbiB0YXJnZXQgZWxlbWVudHMsIGRldGVybWluZWQgYnkgYSBjbGljayBldmVudCBvbiBhIHNlbGVjdGVkIGxpbmsgb3JcbiAqIGVsZW1lbnQuIFRoaXMgd2lsbCBhbHNvIHRvZ2dsZSB0aGUgYXJpYS1oaWRkZW4gYXR0cmlidXRlIGZvciB0YXJnZXRlZFxuICogZWxlbWVudHMgdG8gc3VwcG9ydCBzY3JlZW4gcmVhZGVycy4gVGFyZ2V0IHNldHRpbmdzIGFuZCBvdGhlciBmdW5jdGlvbmFsaXR5XG4gKiBjYW4gYmUgY29udHJvbGxlZCB0aHJvdWdoIGRhdGEgYXR0cmlidXRlcy5cbiAqXG4gKiBUaGlzIHVzZXMgdGhlIC5tYXRjaGVzKCkgbWV0aG9kIHdoaWNoIHdpbGwgcmVxdWlyZSBhIHBvbHlmaWxsIGZvciBJRVxuICogaHR0cHM6Ly9wb2x5ZmlsbC5pby92Mi9kb2NzL2ZlYXR1cmVzLyNFbGVtZW50X3Byb3RvdHlwZV9tYXRjaGVzXG4gKlxuICogQmFzaWMgVXNhZ2U7XG4gKlxuICogamF2YXNjcmlwdDpcbiAqICAgbmV3IFRvZ2dsZSgpLmluaXQoKTtcbiAqXG4gKiBUb2dnbGluZyBBbmNob3IgbGlua3M6XG4gKiAgIDxhIGRhdGEtanM9J3RvZ2dsZScgaHJlZj0nI21haW4tbWVudSc+TWVudTwvYT5cbiAqICAgPGRpdiBpZD0nbWFpbi1tZW51JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+IC4uLiA8L2Rpdj5cbiAqXG4gKiBUb2dnbGluZyBhcmlhLWNvbnRyb2wgZWxlbWVudHM6XG4gKlxuICogICA8YnV0dG9uIGRhdGEtanM9J3RvZ2dsZScgYXJpYS1jb250cm9scz0nI21haW4tbWVudScgYXJpYS1wcmVzc2VkPSdmYWxzZSc+XG4gKiAgICAgIE1lbnVcbiAqICAgPC9idXR0b24+XG4gKiAgIDxkaXYgaWQ9J21haW4tbWVudScgYXJpYS1oaWRkZW49J3RydWUnPiAuLi4gPC9kaXY+XG4gKlxuICogQ3JlYXRlIFwiVW5kb1wiIEV2ZW50ICh0byBjbG9zZSBhIGRpYWxvZ3VlKTtcbiAqICAgPGEgaHJlZj0nI21haW4tbWVudScgZGF0YS1qcz0ndG9nZ2xlJyBkYXRhLXRvZ2dsZS11bmRvPScjY2xvc2UnPk1lbnU8L2E+XG4gKiAgIDxkaXYgaWQ9J21haW4tbWVudScgYXJpYS1oaWRkZW49J3RydWUnPlxuICogICAgIDxhIGlkPVwiY2xvc2VcIj5DbG9zZTwvYT5cbiAqICAgPC9kaXY+XG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgVG9nZ2xlIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHMgU2V0dGluZ3MgZm9yIHRoaXMgVG9nZ2xlIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge29iamVjdH0gICBUaGUgY2xhc3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHMpIHtcbiAgICBzID0gKCFzKSA/IHt9IDogcztcblxuICAgIHRoaXMuX3NldHRpbmdzID0ge1xuICAgICAgc2VsZWN0b3I6IChzLnNlbGVjdG9yKSA/IHMuc2VsZWN0b3IgOiBUb2dnbGUuc2VsZWN0b3IsXG4gICAgICBuYW1lc3BhY2U6IChzLm5hbWVzcGFjZSkgPyBzLm5hbWVzcGFjZSA6IFRvZ2dsZS5uYW1lc3BhY2UsXG4gICAgICBpbmFjdGl2ZUNsYXNzOiAocy5pbmFjdGl2ZUNsYXNzKSA/IHMuaW5hY3RpdmVDbGFzcyA6IFRvZ2dsZS5pbmFjdGl2ZUNsYXNzLFxuICAgICAgYWN0aXZlQ2xhc3M6IChzLmFjdGl2ZUNsYXNzKSA/IHMuYWN0aXZlQ2xhc3MgOiBUb2dnbGUuYWN0aXZlQ2xhc3MsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7b2JqZWN0fSAgIFRoZSBjbGFzc1xuICAgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyh0aGlzLl9zZXR0aW5ncy5zZWxlY3RvcikpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy5fdG9nZ2xlKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgY29uc3RhbnRzIHRvIHRoZSBkZWJ1Z2dlclxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50ICBUaGUgbWFpbiBjbGljayBldmVudFxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICBUaGUgY2xhc3NcbiAgICovXG4gIF90b2dnbGUoZXZlbnQpIHtcbiAgICBsZXQgZWwgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IHRhcmdldCA9IGZhbHNlO1xuXG4gICAgLyoqIEFuY2hvciBMaW5rcyAqL1xuICAgIHRhcmdldCA9IChlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkgP1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkgOiB0YXJnZXQ7XG5cbiAgICAvKiogVG9nZ2xlIENvbnRyb2xzICovXG4gICAgdGFyZ2V0ID0gKGVsLmFyaWFDb250cm9scykgP1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWwuYXJpYUNvbnRyb2xzfWApIDogdGFyZ2V0O1xuXG4gICAgLyoqIE1haW4gRnVuY3Rpb25hbGl0eSAqL1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm4gdGhpcztcbiAgICB0aGlzLmVsZW1lbnRUb2dnbGUoZWwsIHRhcmdldCk7XG5cbiAgICAvKiogVW5kbyAqL1xuICAgIGlmIChlbC5kYXRhc2V0W2Ake3RoaXMuX3NldHRpbmdzLm5hbWVzcGFjZX1VbmRvYF0pIHtcbiAgICAgIGNvbnN0IHVuZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBlbC5kYXRhc2V0W2Ake3RoaXMuX3NldHRpbmdzLm5hbWVzcGFjZX1VbmRvYF1cbiAgICAgICk7XG5cbiAgICAgIHVuZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50VG9nZ2xlKGVsLCB0YXJnZXQpO1xuICAgICAgICB1bmRvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiB0b2dnbGluZyBtZXRob2RcbiAgICogQHBhcmFtICB7b2JqZWN0fSBlbCAgICAgVGhlIGN1cnJlbnQgZWxlbWVudCB0byB0b2dnbGUgYWN0aXZlXG4gICAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byB0b2dnbGUgYWN0aXZlL2hpZGRlblxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICBUaGUgY2xhc3NcbiAgICovXG4gIGVsZW1lbnRUb2dnbGUoZWwsIHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5hY3RpdmVDbGFzcyAhPT0gJycpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fc2V0dGluZ3MuYWN0aXZlQ2xhc3MpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5fc2V0dGluZ3MuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUNsYXNzICE9PSAnJykge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIGVsZW1lbnQgZm9yIGRlZmluZWQgYXJpYSByb2xlcyBhbmQgdG9nZ2xlIHRoZW0gaWYgdGhleSBleGlzdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVG9nZ2xlLmVsQXJpYVJvbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKFRvZ2dsZS5lbEFyaWFSb2xlc1tpXSkpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShUb2dnbGUuZWxBcmlhUm9sZXNbaV0sXG4gICAgICAgICAgIShlbC5nZXRBdHRyaWJ1dGUoVG9nZ2xlLmVsQXJpYVJvbGVzW2ldKSA9PT0gJ3RydWUnKSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIHRhcmdldCBmb3IgZGVmaW5lZCBhcmlhIHJvbGVzIGFuZCB0b2dnbGUgdGhlbSBpZiB0aGV5IGV4aXN0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb2dnbGUudGFyZ2V0QXJpYVJvbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShUb2dnbGUudGFyZ2V0QXJpYVJvbGVzW2ldKSlcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShUb2dnbGUudGFyZ2V0QXJpYVJvbGVzW2ldLFxuICAgICAgICAgICEodGFyZ2V0LmdldEF0dHJpYnV0ZShUb2dnbGUudGFyZ2V0QXJpYVJvbGVzW2ldKSA9PT0gJ3RydWUnKSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgJiZcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fc2V0dGluZ3MuYWN0aXZlQ2xhc3MpKVxuICAgIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKiBAdHlwZSB7U3RyaW5nfSBUaGUgbWFpbiBzZWxlY3RvciB0byBhZGQgdGhlIHRvZ2dsaW5nIGZ1bmN0aW9uIHRvICovXG5Ub2dnbGUuc2VsZWN0b3IgPSAnW2RhdGEtanM9XCJ0b2dnbGVcIl0nO1xuXG4vKiogQHR5cGUge1N0cmluZ30gVGhlIG5hbWVzcGFjZSBmb3Igb3VyIGRhdGEgYXR0cmlidXRlIHNldHRpbmdzICovXG5Ub2dnbGUubmFtZXNwYWNlID0gJ3RvZ2dsZSc7XG5cbi8qKiBAdHlwZSB7U3RyaW5nfSBUaGUgaGlkZSBjbGFzcyAqL1xuVG9nZ2xlLmluYWN0aXZlQ2xhc3MgPSAnaGlkZGVuJztcblxuLyoqIEB0eXBlIHtTdHJpbmd9IFRoZSBhY3RpdmUgY2xhc3MgKi9cblRvZ2dsZS5hY3RpdmVDbGFzcyA9ICdhY3RpdmUnO1xuXG4vKiogQHR5cGUge0FycmF5fSBBcmlhIHJvbGVzIHRvIHRvZ2dsZSB0cnVlL2ZhbHNlIG9uIHRoZSB0b2dnbGluZyBlbGVtZW50ICovXG5Ub2dnbGUuZWxBcmlhUm9sZXMgPSBbJ2FyaWEtcHJlc3NlZCcsICdhcmlhLWV4cGFuZGVkJ107XG5cbi8qKiBAdHlwZSB7QXJyYXl9IEFyaWEgcm9sZXMgdG8gdG9nZ2xlIHRydWUvZmFsc2Ugb24gdGhlIHRhcmdldCBlbGVtZW50ICovXG5Ub2dnbGUudGFyZ2V0QXJpYVJvbGVzID0gWydhcmlhLWhpZGRlbiddO1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7Il0sIm5hbWVzIjpbIlRvZ2dsZSIsInMiLCJfc2V0dGluZ3MiLCJzZWxlY3RvciIsIm5hbWVzcGFjZSIsImluYWN0aXZlQ2xhc3MiLCJhY3RpdmVDbGFzcyIsInRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiX3RoaXMiLCJwcmV2ZW50RGVmYXVsdCIsIl90b2dnbGUiLCJlbCIsImdldEF0dHJpYnV0ZSIsImFyaWFDb250cm9scyIsImVsZW1lbnRUb2dnbGUiLCJkYXRhc2V0IiwidW5kbyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJpIiwiZWxBcmlhUm9sZXMiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJ0YXJnZXRBcmlhUm9sZXMiLCJjb250YWlucyIsImxvY2F0aW9uIiwiaGFzaCJdLCJtYXBwaW5ncyI6IjRYQW1DTUEsNkJBTVFDLG1DQUNKQSxXQUVEQyxvQkFDUUQsRUFBRUUsU0FBWUYsRUFBRUUsU0FBV0gsRUFBT0csbUJBQ2pDRixFQUFFRyxVQUFhSCxFQUFFRyxVQUFZSixFQUFPSSx3QkFDaENILEVBQUVJLGNBQWlCSixFQUFFSSxjQUFnQkwsRUFBT0ssMEJBQzlDSixFQUFFSyxZQUFlTCxFQUFFSyxZQUFjTixFQUFPTSxhQUdqREMsMEVBUU1DLFNBQVNDLGNBQWMsUUFFL0JDLGlCQUFpQixRQUFTLFNBQUNDLEdBQ3pCQSxFQUFNQyxPQUFPQyxRQUFRQyxFQUFLWixVQUFVQyxjQUduQ1ksbUJBRURDLFFBQVFMLE1BR1JKLHFDQVFESSxjQUNGTSxFQUFLTixFQUFNQyxPQUNYQSxHQUFTLE9BR0hLLEVBQUdDLGFBQWEsUUFDeEJWLFNBQVNDLGNBQWNRLEVBQUdDLGFBQWEsU0FBV04sTUFHMUNLLEVBQUdFLGFBQ1hYLFNBQVNDLGtCQUFrQlEsRUFBR0UsY0FBa0JQLEdBR3JDLE9BQU9MLGFBQ2ZhLGNBQWNILEVBQUlMLEdBR25CSyxFQUFHSSxRQUFXZCxLQUFLTCxVQUFVRSxrQkFBa0IsS0FDM0NrQixFQUFPZCxTQUFTQyxjQUNwQlEsRUFBR0ksUUFBV2QsS0FBS0wsVUFBVUUscUJBRzFCTSxpQkFBaUIsUUFBUyxTQUFDQyxLQUN4QkksbUJBQ0RLLGNBQWNILEVBQUlMLEtBQ2xCVyxvQkFBb0Isa0JBSXRCaEIsMkNBU0tVLEVBQUlMLEdBQ21CLEtBQS9CTCxLQUFLTCxVQUFVSSxnQkFDZGtCLFVBQVVDLE9BQU9sQixLQUFLTCxVQUFVSSxlQUM1QmtCLFVBQVVDLE9BQU9sQixLQUFLTCxVQUFVSSxjQUdKLEtBQWpDQyxLQUFLTCxVQUFVRyxpQkFDVm1CLFVBQVVDLE9BQU9sQixLQUFLTCxVQUFVRyxtQkFJcEMsSUFBSXFCLEVBQUksRUFBR0EsRUFBSTFCLEVBQU8yQixZQUFZQyxPQUFRRixJQUN6Q1QsRUFBR0MsYUFBYWxCLEVBQU8yQixZQUFZRCxLQUNyQ1QsRUFBR1ksYUFBYTdCLEVBQU8yQixZQUFZRCxLQUNZLFNBQTNDVCxFQUFHQyxhQUFhbEIsRUFBTzJCLFlBQVlELFVBSXRDLElBQUlBLEVBQUksRUFBR0EsRUFBSTFCLEVBQU84QixnQkFBZ0JGLE9BQVFGLElBQzdDZCxFQUFPTSxhQUFhbEIsRUFBTzhCLGdCQUFnQkosS0FDN0NkLEVBQU9pQixhQUFhN0IsRUFBTzhCLGdCQUFnQkosS0FDWSxTQUFuRGQsRUFBT00sYUFBYWxCLEVBQU84QixnQkFBZ0JKLGFBSWpEVCxFQUFHQyxhQUFhLFNBQ2hCTixFQUFPWSxVQUFVTyxTQUFTeEIsS0FBS0wsVUFBVUksc0JBRWxDMEIsU0FBU0MsS0FBTyxVQUNoQkQsU0FBU0MsS0FBT2hCLEVBQUdDLGFBQWEsU0FHbENYLGNBS1hQLE9BQU9HLFNBQVcscUJBR2xCSCxPQUFPSSxVQUFZLFNBR25CSixPQUFPSyxjQUFnQixTQUd2QkwsT0FBT00sWUFBYyxTQUdyQk4sT0FBTzJCLGFBQWUsZUFBZ0IsaUJBR3RDM0IsT0FBTzhCLGlCQUFtQiJ9