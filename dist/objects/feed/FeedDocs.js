var FeedDocs=function(){"use strict";var e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.default=e.default};return e.default={feed:"Required. This may either be one RSS feed or an array of feeds. Arrays of feeds will be combined and posts will be ordered by date. Currently, this only works with Medium RSS feeds.",selector:"The DOM element selector for your feed. The inner html of this element will be replaced with the feed.",type:"The feed type. Currently, only Medium feeds are supported so this shouldn't change.",title:"The title of the feed that appears in the header. By default this uses the feed's title. However, if using displaying multiple fields this should be set. Otherwise, it will use the last feed title that was loaded.",profileImg:"The url to the profile image. By default this uses the feed's profile image. However, if using displaying multiple fields this should be set.  Otherwise, it will use the last feed image that was loaded.",fontSize:"Set this to a smaller percentage (say, 85%) to make the feed appear more compact in smaller columns",color:"Set the color of the borders in the feed. All of the colors in the feed will inherit the style of the page except for the borders between cards. This may be any standard CSS color variable.",ratioProfile:"Image source attribute width and height for the account avatar.",postImgHeight:"CSS height of the post image. The width of the image defaults to 100% the width of the post.",postExcerptLength:"This is the length of the excerpt.",postExcerptTrail:"This is the trailing ellipsis for excerpts.",postCtaText:"This is the text for each post's call to action.",postDateLocal:"The date formatting uses Date.toLocaleDateString(). The options in postDateLocal and postDateFormat are passed as Date.toLocaleDateString(postDateLocal, postDateFormat). Refer to the documentation on Date.toLocaleDateString() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString",postDateFormat:"This is a parameter used by Date.toLocaleDateString(), Refer to the documentation above for configuration details.",postDateTitle:"This is the title set to the published date element to provide context on mouseover.",classes:{wrapper:'Adds classes to to the wrapper for the whole widget. There are two classes that are available to change the Feed items layout to 2 or 3 columns: "o-feed--column-2" or "o-feed--column-3".',header:"Adds classes to the widget header above the post list.",url:"Adds classes to to the feeds's url.",feedItem:"Adds classes to to the feeds's posts.",title:"Adds classes to to the title of each card.",link:"Adds classes to to the link of each card.",thumbnail:"Adds classes to to the thumbnail image of each card.",excerpt:"Adds classes to to the excerpt of each card.",itemFooter:"Adds classes to to the footer of each card with the cta and date.",cta:"Adds classes to to the final call to action of each card.",date:"Adds classes to to the publication date of each card."},templates:{opener:"The opening template tag or wrapper of the entire feed.",header:"The header template that sits at the top of the posts.",posts:"The posts loop including the posts template.",closer:"The closing template tag or wrapper of the entire feed."},log:"Logs data to the console. You will want this turned off every case unless you are creating a template and need to see the data being passed to it."},e}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlZERvY3MuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vYmplY3RzL2ZlZWQvRmVlZERvY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERlcGVuZGVuY2llc1xuICovXG5cbmNsYXNzIEZlZWREb2NzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZWZhdWx0ID0gRmVlZERvY3MuZGVmYXVsdDtcbiAgfVxufVxuXG5GZWVkRG9jcy5kZWZhdWx0ID0ge1xuICBmZWVkOiAnUmVxdWlyZWQuIFRoaXMgbWF5IGVpdGhlciBiZSBvbmUgUlNTIGZlZWQgb3IgYW4gYXJyYXkgb2YgZmVlZHMuIEFycmF5cyBvZiBmZWVkcyB3aWxsIGJlIGNvbWJpbmVkIGFuZCBwb3N0cyB3aWxsIGJlIG9yZGVyZWQgYnkgZGF0ZS4gQ3VycmVudGx5LCB0aGlzIG9ubHkgd29ya3Mgd2l0aCBNZWRpdW0gUlNTIGZlZWRzLicsXG4gIHNlbGVjdG9yOiAnVGhlIERPTSBlbGVtZW50IHNlbGVjdG9yIGZvciB5b3VyIGZlZWQuIFRoZSBpbm5lciBodG1sIG9mIHRoaXMgZWxlbWVudCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGZlZWQuJyxcbiAgdHlwZTogJ1RoZSBmZWVkIHR5cGUuIEN1cnJlbnRseSwgb25seSBNZWRpdW0gZmVlZHMgYXJlIHN1cHBvcnRlZCBzbyB0aGlzIHNob3VsZG5cXCd0IGNoYW5nZS4nLFxuICB0aXRsZTogJ1RoZSB0aXRsZSBvZiB0aGUgZmVlZCB0aGF0IGFwcGVhcnMgaW4gdGhlIGhlYWRlci4gQnkgZGVmYXVsdCB0aGlzIHVzZXMgdGhlIGZlZWRcXCdzIHRpdGxlLiBIb3dldmVyLCBpZiB1c2luZyBkaXNwbGF5aW5nIG11bHRpcGxlIGZpZWxkcyB0aGlzIHNob3VsZCBiZSBzZXQuIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGxhc3QgZmVlZCB0aXRsZSB0aGF0IHdhcyBsb2FkZWQuJyxcbiAgcHJvZmlsZUltZzogJ1RoZSB1cmwgdG8gdGhlIHByb2ZpbGUgaW1hZ2UuIEJ5IGRlZmF1bHQgdGhpcyB1c2VzIHRoZSBmZWVkXFwncyBwcm9maWxlIGltYWdlLiBIb3dldmVyLCBpZiB1c2luZyBkaXNwbGF5aW5nIG11bHRpcGxlIGZpZWxkcyB0aGlzIHNob3VsZCBiZSBzZXQuICBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBsYXN0IGZlZWQgaW1hZ2UgdGhhdCB3YXMgbG9hZGVkLicsXG4gIGZvbnRTaXplOiAnU2V0IHRoaXMgdG8gYSBzbWFsbGVyIHBlcmNlbnRhZ2UgKHNheSwgODUlKSB0byBtYWtlIHRoZSBmZWVkIGFwcGVhciBtb3JlIGNvbXBhY3QgaW4gc21hbGxlciBjb2x1bW5zJyxcbiAgY29sb3I6ICdTZXQgdGhlIGNvbG9yIG9mIHRoZSBib3JkZXJzIGluIHRoZSBmZWVkLiBBbGwgb2YgdGhlIGNvbG9ycyBpbiB0aGUgZmVlZCB3aWxsIGluaGVyaXQgdGhlIHN0eWxlIG9mIHRoZSBwYWdlIGV4Y2VwdCBmb3IgdGhlIGJvcmRlcnMgYmV0d2VlbiBjYXJkcy4gVGhpcyBtYXkgYmUgYW55IHN0YW5kYXJkIENTUyBjb2xvciB2YXJpYWJsZS4nLFxuICByYXRpb1Byb2ZpbGU6ICdJbWFnZSBzb3VyY2UgYXR0cmlidXRlIHdpZHRoIGFuZCBoZWlnaHQgZm9yIHRoZSBhY2NvdW50IGF2YXRhci4nLFxuICBwb3N0SW1nSGVpZ2h0OiAnQ1NTIGhlaWdodCBvZiB0aGUgcG9zdCBpbWFnZS4gVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBkZWZhdWx0cyB0byAxMDAlIHRoZSB3aWR0aCBvZiB0aGUgcG9zdC4nLFxuICBwb3N0RXhjZXJwdExlbmd0aDogJ1RoaXMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgZXhjZXJwdC4nLFxuICBwb3N0RXhjZXJwdFRyYWlsOiAnVGhpcyBpcyB0aGUgdHJhaWxpbmcgZWxsaXBzaXMgZm9yIGV4Y2VycHRzLicsXG4gIHBvc3RDdGFUZXh0OiAnVGhpcyBpcyB0aGUgdGV4dCBmb3IgZWFjaCBwb3N0XFwncyBjYWxsIHRvIGFjdGlvbi4nLFxuICBwb3N0RGF0ZUxvY2FsOiAnVGhlIGRhdGUgZm9ybWF0dGluZyB1c2VzIERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkuIFRoZSBvcHRpb25zIGluIHBvc3REYXRlTG9jYWwgYW5kIHBvc3REYXRlRm9ybWF0IGFyZSBwYXNzZWQgYXMgRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcocG9zdERhdGVMb2NhbCwgcG9zdERhdGVGb3JtYXQpLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBvbiBEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGUvdG9Mb2NhbGVEYXRlU3RyaW5nJyxcbiAgcG9zdERhdGVGb3JtYXQ6ICdUaGlzIGlzIGEgcGFyYW1ldGVyIHVzZWQgYnkgRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSwgUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gYWJvdmUgZm9yIGNvbmZpZ3VyYXRpb24gZGV0YWlscy4nLFxuICBwb3N0RGF0ZVRpdGxlOiAnVGhpcyBpcyB0aGUgdGl0bGUgc2V0IHRvIHRoZSBwdWJsaXNoZWQgZGF0ZSBlbGVtZW50IHRvIHByb3ZpZGUgY29udGV4dCBvbiBtb3VzZW92ZXIuJyxcbiAgY2xhc3Nlczoge1xuICAgIHdyYXBwZXI6ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIHdyYXBwZXIgZm9yIHRoZSB3aG9sZSB3aWRnZXQuIFRoZXJlIGFyZSB0d28gY2xhc3NlcyB0aGF0IGFyZSBhdmFpbGFibGUgdG8gY2hhbmdlIHRoZSBGZWVkIGl0ZW1zIGxheW91dCB0byAyIG9yIDMgY29sdW1uczogXCJvLWZlZWQtLWNvbHVtbi0yXCIgb3IgXCJvLWZlZWQtLWNvbHVtbi0zXCIuJyxcbiAgICBoZWFkZXI6ICdBZGRzIGNsYXNzZXMgdG8gdGhlIHdpZGdldCBoZWFkZXIgYWJvdmUgdGhlIHBvc3QgbGlzdC4nLFxuICAgIHVybDogJ0FkZHMgY2xhc3NlcyB0byB0byB0aGUgZmVlZHNcXCdzIHVybC4nLFxuICAgIGZlZWRJdGVtOiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSBmZWVkc1xcJ3MgcG9zdHMuJyxcbiAgICB0aXRsZTogJ0FkZHMgY2xhc3NlcyB0byB0byB0aGUgdGl0bGUgb2YgZWFjaCBjYXJkLicsXG4gICAgbGluazogJ0FkZHMgY2xhc3NlcyB0byB0byB0aGUgbGluayBvZiBlYWNoIGNhcmQuJyxcbiAgICB0aHVtYm5haWw6ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIHRodW1ibmFpbCBpbWFnZSBvZiBlYWNoIGNhcmQuJyxcbiAgICBleGNlcnB0OiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSBleGNlcnB0IG9mIGVhY2ggY2FyZC4nLFxuICAgIGl0ZW1Gb290ZXI6ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIGZvb3RlciBvZiBlYWNoIGNhcmQgd2l0aCB0aGUgY3RhIGFuZCBkYXRlLicsXG4gICAgY3RhOiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSBmaW5hbCBjYWxsIHRvIGFjdGlvbiBvZiBlYWNoIGNhcmQuJyxcbiAgICBkYXRlOiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSBwdWJsaWNhdGlvbiBkYXRlIG9mIGVhY2ggY2FyZC4nXG4gIH0sXG4gIHRlbXBsYXRlczoge1xuICAgIG9wZW5lcjogJ1RoZSBvcGVuaW5nIHRlbXBsYXRlIHRhZyBvciB3cmFwcGVyIG9mIHRoZSBlbnRpcmUgZmVlZC4nLFxuICAgIGhlYWRlcjogJ1RoZSBoZWFkZXIgdGVtcGxhdGUgdGhhdCBzaXRzIGF0IHRoZSB0b3Agb2YgdGhlIHBvc3RzLicsXG4gICAgcG9zdHM6ICdUaGUgcG9zdHMgbG9vcCBpbmNsdWRpbmcgdGhlIHBvc3RzIHRlbXBsYXRlLicsXG4gICAgY2xvc2VyOiAnVGhlIGNsb3NpbmcgdGVtcGxhdGUgdGFnIG9yIHdyYXBwZXIgb2YgdGhlIGVudGlyZSBmZWVkLidcbiAgfSxcbiAgbG9nOiAnTG9ncyBkYXRhIHRvIHRoZSBjb25zb2xlLiBZb3Ugd2lsbCB3YW50IHRoaXMgdHVybmVkIG9mZiBldmVyeSBjYXNlIHVubGVzcyB5b3UgYXJlIGNyZWF0aW5nIGEgdGVtcGxhdGUgYW5kIG5lZWQgdG8gc2VlIHRoZSBkYXRhIGJlaW5nIHBhc3NlZCB0byBpdC4nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkRG9jcztcbiJdLCJuYW1lcyI6WyJGZWVkRG9jcyIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJ5Q0FNTUEsRUFDSix3SEFDT0MsUUFBVUQsRUFBU0MsZ0JBSTVCRCxFQUFTQyxjQUNELGlNQUNJLDhHQUNKLDRGQUNDLG1PQUNLLHNOQUNGLDRHQUNILDZNQUNPLGdGQUNDLGlIQUNJLHNEQUNELDBEQUNMLGlFQUNFLGtXQUNDLG1JQUNELHdHQUVKLG9NQUNELDZEQUNILCtDQUNLLDhDQUNILGtEQUNELHNEQUNLLCtEQUNGLDBEQUNHLHdFQUNQLGlFQUNDLDJFQUdFLGlFQUNBLCtEQUNELHNEQUNDLCtEQUVMIn0=