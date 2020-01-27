var FeedDocs = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FeedDocs = function FeedDocs() {
    _classCallCheck(this, FeedDocs);

    this["default"] = FeedDocs["default"];
  };

  FeedDocs["default"] = {
    feed: 'Required. string or array of strings. This may either be one RSS feed or an array of feeds. Arrays of feeds will be combined and posts will be ordered by date. Currently, this only works with Medium RSS feeds.',
    rssToJson: '"https://api.rss2json.com/v1/api.json?rss_url=" (default). By default it uses https://rss2json.com. It will also work with a self-hosted installation of NYCO\'s RSS into JSON proxy https://github.com/CityOfNewYork/nyco-rss-2-json',
    selector: '"[data-js="feed"]" (default) or other string. The DOM element selector for your feed. The inner html of this element will be replaced with the feed.',
    type: '"medium" (default) or other string. The feed type. Currently, only Medium feeds are supported so this shouldn\'t change.',
    title: 'The title of the feed that appears in the header. By default this uses the feed\'s title. However, if using displaying multiple fields this should be set. Otherwise, it will use the last feed title that was loaded.',
    titleUrl: 'The url that the title links to. By default this uses the feed\'s url. However, if using displaying multiple fields this should be set. Otherwise, it will use the last feed url that was loaded.',
    profileImg: 'The url to the profile image. By default this uses the feed\'s profile image. However, if using displaying multiple fields this should be set.  Otherwise, it will use the last feed image that was loaded.',
    fontSize: 'Any valid css font-size value and unit (em, px, %, etc.). Set this to a smaller percentage (say, 85%) to make the feed appear more compact in smaller columns.',
    ratioProfile: 'array of two strings. Pixel numbers without "px" unit. Image source attribute width and height for the account avatar.',
    postBorderColor: 'Any valid css border-color value. Set the color of the borders in the feed. All of the colors in the feed will inherit the style of the page except for the borders between cards. This may be any standard CSS color variable.',
    postImgHeight: 'Pixel value with "px" unit. CSS height of the post image. The width of the image defaults to 100% the width of the post.',
    postExcerptLength: 'This is the length of the excerpt.',
    postExcerptTrail: 'Setting this will override the trailing ellipsis for excerpts.',
    postCtaText: 'This is the text for each post\'s call to action.',
    postDateLocal: 'The date formatting uses Date.toLocaleDateString(). The options in postDateLocal and postDateFormat are passed as Date.toLocaleDateString(postDateLocal, postDateFormat). Refer to the documentation on Date.toLocaleDateString() here: developer.mozilla.org.',
    postDateFormat: 'This is a parameter used by Date.toLocaleDateString(), Refer to the documentation above for configuration details.',
    postDateTitle: 'This is the title set to the published date element to provide context on mouseover.',
    classes: {
      wrapper: '"o-feed-2column" or "o-feed-3column" are available in the feed stylesheet to change the Feed items layout to 2 or 3 columns. However, any additional string can be input here to add classes to to the widget wrapper. This and other classes are available for the Medium template only. If you create your own template these will not be exposed to them automatically. See the Medium template example to see how they are added.',
      header: 'Adds classes to the widget header above the post list.',
      url: 'Adds classes to to the feeds\'s url.',
      feedItem: 'Adds classes to to the feeds\'s posts.',
      title: 'Adds classes to to the title of each card.',
      link: 'Adds classes to to the link of each card.',
      thumbnail: 'Adds classes to to the thumbnail image of each card.',
      excerpt: 'Adds classes to to the excerpt of each card.',
      itemFooter: 'Adds classes to to the footer of each card with the cta and date.',
      cta: 'Adds classes to to the final call to action of each card.',
      date: 'Adds classes to to the publication date of each card.'
    },
    templates: {
      opener: 'The opening template tag or wrapper of the entire feed. Add blank string to remove these component. This is where you would insert a custom LoDash template for the feed to parse.',
      header: 'The header template that sits at the top of the posts.',
      posts: 'The posts loop including the posts template.',
      closer: 'The closing template tag or wrapper of the entire feed.'
    },
    log: 'false (default) or true. Enables logging data to the console. You will want this turned off in every case unless you are creating a template and need to see the data being passed to it.',
    unique: 'true (default) or true. When using multiple feeds some Medium articles can be duplicated between publications. If you want unique posts by title switch this to true. There is no prioritization of which post will show up.'
  };

  return FeedDocs;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZC1kb2NzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb2JqZWN0cy9mZWVkL2ZlZWQtZG9jcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGVwZW5kZW5jaWVzXG4gKi9cblxuY2xhc3MgRmVlZERvY3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlZmF1bHQgPSBGZWVkRG9jcy5kZWZhdWx0O1xuICB9XG59XG5cbkZlZWREb2NzLmRlZmF1bHQgPSB7XG4gIGZlZWQ6ICdSZXF1aXJlZC4gc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MuIFRoaXMgbWF5IGVpdGhlciBiZSBvbmUgUlNTIGZlZWQgb3IgYW4gYXJyYXkgb2YgZmVlZHMuIEFycmF5cyBvZiBmZWVkcyB3aWxsIGJlIGNvbWJpbmVkIGFuZCBwb3N0cyB3aWxsIGJlIG9yZGVyZWQgYnkgZGF0ZS4gQ3VycmVudGx5LCB0aGlzIG9ubHkgd29ya3Mgd2l0aCBNZWRpdW0gUlNTIGZlZWRzLicsXG4gIHJzc1RvSnNvbjogJ1wiaHR0cHM6Ly9hcGkucnNzMmpzb24uY29tL3YxL2FwaS5qc29uP3Jzc191cmw9XCIgKGRlZmF1bHQpLiBCeSBkZWZhdWx0IGl0IHVzZXMgaHR0cHM6Ly9yc3MyanNvbi5jb20uIEl0IHdpbGwgYWxzbyB3b3JrIHdpdGggYSBzZWxmLWhvc3RlZCBpbnN0YWxsYXRpb24gb2YgTllDT1xcJ3MgUlNTIGludG8gSlNPTiBwcm94eSBodHRwczovL2dpdGh1Yi5jb20vQ2l0eU9mTmV3WW9yay9ueWNvLXJzcy0yLWpzb24nLFxuICBzZWxlY3RvcjogJ1wiW2RhdGEtanM9XCJmZWVkXCJdXCIgKGRlZmF1bHQpIG9yIG90aGVyIHN0cmluZy4gVGhlIERPTSBlbGVtZW50IHNlbGVjdG9yIGZvciB5b3VyIGZlZWQuIFRoZSBpbm5lciBodG1sIG9mIHRoaXMgZWxlbWVudCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGZlZWQuJyxcbiAgdHlwZTogJ1wibWVkaXVtXCIgKGRlZmF1bHQpIG9yIG90aGVyIHN0cmluZy4gVGhlIGZlZWQgdHlwZS4gQ3VycmVudGx5LCBvbmx5IE1lZGl1bSBmZWVkcyBhcmUgc3VwcG9ydGVkIHNvIHRoaXMgc2hvdWxkblxcJ3QgY2hhbmdlLicsXG4gIHRpdGxlOiAnVGhlIHRpdGxlIG9mIHRoZSBmZWVkIHRoYXQgYXBwZWFycyBpbiB0aGUgaGVhZGVyLiBCeSBkZWZhdWx0IHRoaXMgdXNlcyB0aGUgZmVlZFxcJ3MgdGl0bGUuIEhvd2V2ZXIsIGlmIHVzaW5nIGRpc3BsYXlpbmcgbXVsdGlwbGUgZmllbGRzIHRoaXMgc2hvdWxkIGJlIHNldC4gT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgbGFzdCBmZWVkIHRpdGxlIHRoYXQgd2FzIGxvYWRlZC4nLFxuICB0aXRsZVVybDogJ1RoZSB1cmwgdGhhdCB0aGUgdGl0bGUgbGlua3MgdG8uIEJ5IGRlZmF1bHQgdGhpcyB1c2VzIHRoZSBmZWVkXFwncyB1cmwuIEhvd2V2ZXIsIGlmIHVzaW5nIGRpc3BsYXlpbmcgbXVsdGlwbGUgZmllbGRzIHRoaXMgc2hvdWxkIGJlIHNldC4gT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgbGFzdCBmZWVkIHVybCB0aGF0IHdhcyBsb2FkZWQuJyxcbiAgcHJvZmlsZUltZzogJ1RoZSB1cmwgdG8gdGhlIHByb2ZpbGUgaW1hZ2UuIEJ5IGRlZmF1bHQgdGhpcyB1c2VzIHRoZSBmZWVkXFwncyBwcm9maWxlIGltYWdlLiBIb3dldmVyLCBpZiB1c2luZyBkaXNwbGF5aW5nIG11bHRpcGxlIGZpZWxkcyB0aGlzIHNob3VsZCBiZSBzZXQuICBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBsYXN0IGZlZWQgaW1hZ2UgdGhhdCB3YXMgbG9hZGVkLicsXG4gIGZvbnRTaXplOiAnQW55IHZhbGlkIGNzcyBmb250LXNpemUgdmFsdWUgYW5kIHVuaXQgKGVtLCBweCwgJSwgZXRjLikuIFNldCB0aGlzIHRvIGEgc21hbGxlciBwZXJjZW50YWdlIChzYXksIDg1JSkgdG8gbWFrZSB0aGUgZmVlZCBhcHBlYXIgbW9yZSBjb21wYWN0IGluIHNtYWxsZXIgY29sdW1ucy4nLFxuICByYXRpb1Byb2ZpbGU6ICdhcnJheSBvZiB0d28gc3RyaW5ncy4gUGl4ZWwgbnVtYmVycyB3aXRob3V0IFwicHhcIiB1bml0LiBJbWFnZSBzb3VyY2UgYXR0cmlidXRlIHdpZHRoIGFuZCBoZWlnaHQgZm9yIHRoZSBhY2NvdW50IGF2YXRhci4nLFxuICBwb3N0Qm9yZGVyQ29sb3I6ICdBbnkgdmFsaWQgY3NzIGJvcmRlci1jb2xvciB2YWx1ZS4gU2V0IHRoZSBjb2xvciBvZiB0aGUgYm9yZGVycyBpbiB0aGUgZmVlZC4gQWxsIG9mIHRoZSBjb2xvcnMgaW4gdGhlIGZlZWQgd2lsbCBpbmhlcml0IHRoZSBzdHlsZSBvZiB0aGUgcGFnZSBleGNlcHQgZm9yIHRoZSBib3JkZXJzIGJldHdlZW4gY2FyZHMuIFRoaXMgbWF5IGJlIGFueSBzdGFuZGFyZCBDU1MgY29sb3IgdmFyaWFibGUuJyxcbiAgcG9zdEltZ0hlaWdodDogJ1BpeGVsIHZhbHVlIHdpdGggXCJweFwiIHVuaXQuIENTUyBoZWlnaHQgb2YgdGhlIHBvc3QgaW1hZ2UuIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UgZGVmYXVsdHMgdG8gMTAwJSB0aGUgd2lkdGggb2YgdGhlIHBvc3QuJyxcbiAgcG9zdEV4Y2VycHRMZW5ndGg6ICdUaGlzIGlzIHRoZSBsZW5ndGggb2YgdGhlIGV4Y2VycHQuJyxcbiAgcG9zdEV4Y2VycHRUcmFpbDogJ1NldHRpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIHRoZSB0cmFpbGluZyBlbGxpcHNpcyBmb3IgZXhjZXJwdHMuJyxcbiAgcG9zdEN0YVRleHQ6ICdUaGlzIGlzIHRoZSB0ZXh0IGZvciBlYWNoIHBvc3RcXCdzIGNhbGwgdG8gYWN0aW9uLicsXG4gIHBvc3REYXRlTG9jYWw6ICdUaGUgZGF0ZSBmb3JtYXR0aW5nIHVzZXMgRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKS4gVGhlIG9wdGlvbnMgaW4gcG9zdERhdGVMb2NhbCBhbmQgcG9zdERhdGVGb3JtYXQgYXJlIHBhc3NlZCBhcyBEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhwb3N0RGF0ZUxvY2FsLCBwb3N0RGF0ZUZvcm1hdCkuIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkgaGVyZTogZGV2ZWxvcGVyLm1vemlsbGEub3JnLicsXG4gIHBvc3REYXRlRm9ybWF0OiAnVGhpcyBpcyBhIHBhcmFtZXRlciB1c2VkIGJ5IERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCksIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGFib3ZlIGZvciBjb25maWd1cmF0aW9uIGRldGFpbHMuJyxcbiAgcG9zdERhdGVUaXRsZTogJ1RoaXMgaXMgdGhlIHRpdGxlIHNldCB0byB0aGUgcHVibGlzaGVkIGRhdGUgZWxlbWVudCB0byBwcm92aWRlIGNvbnRleHQgb24gbW91c2VvdmVyLicsXG4gIGNsYXNzZXM6IHtcbiAgICB3cmFwcGVyOiAnXCJvLWZlZWQtMmNvbHVtblwiIG9yIFwiby1mZWVkLTNjb2x1bW5cIiBhcmUgYXZhaWxhYmxlIGluIHRoZSBmZWVkIHN0eWxlc2hlZXQgdG8gY2hhbmdlIHRoZSBGZWVkIGl0ZW1zIGxheW91dCB0byAyIG9yIDMgY29sdW1ucy4gSG93ZXZlciwgYW55IGFkZGl0aW9uYWwgc3RyaW5nIGNhbiBiZSBpbnB1dCBoZXJlIHRvIGFkZCBjbGFzc2VzIHRvIHRvIHRoZSB3aWRnZXQgd3JhcHBlci4gVGhpcyBhbmQgb3RoZXIgY2xhc3NlcyBhcmUgYXZhaWxhYmxlIGZvciB0aGUgTWVkaXVtIHRlbXBsYXRlIG9ubHkuIElmIHlvdSBjcmVhdGUgeW91ciBvd24gdGVtcGxhdGUgdGhlc2Ugd2lsbCBub3QgYmUgZXhwb3NlZCB0byB0aGVtIGF1dG9tYXRpY2FsbHkuIFNlZSB0aGUgTWVkaXVtIHRlbXBsYXRlIGV4YW1wbGUgdG8gc2VlIGhvdyB0aGV5IGFyZSBhZGRlZC4nLFxuICAgIGhlYWRlcjogJ0FkZHMgY2xhc3NlcyB0byB0aGUgd2lkZ2V0IGhlYWRlciBhYm92ZSB0aGUgcG9zdCBsaXN0LicsXG4gICAgdXJsOiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSBmZWVkc1xcJ3MgdXJsLicsXG4gICAgZmVlZEl0ZW06ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIGZlZWRzXFwncyBwb3N0cy4nLFxuICAgIHRpdGxlOiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSB0aXRsZSBvZiBlYWNoIGNhcmQuJyxcbiAgICBsaW5rOiAnQWRkcyBjbGFzc2VzIHRvIHRvIHRoZSBsaW5rIG9mIGVhY2ggY2FyZC4nLFxuICAgIHRodW1ibmFpbDogJ0FkZHMgY2xhc3NlcyB0byB0byB0aGUgdGh1bWJuYWlsIGltYWdlIG9mIGVhY2ggY2FyZC4nLFxuICAgIGV4Y2VycHQ6ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIGV4Y2VycHQgb2YgZWFjaCBjYXJkLicsXG4gICAgaXRlbUZvb3RlcjogJ0FkZHMgY2xhc3NlcyB0byB0byB0aGUgZm9vdGVyIG9mIGVhY2ggY2FyZCB3aXRoIHRoZSBjdGEgYW5kIGRhdGUuJyxcbiAgICBjdGE6ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIGZpbmFsIGNhbGwgdG8gYWN0aW9uIG9mIGVhY2ggY2FyZC4nLFxuICAgIGRhdGU6ICdBZGRzIGNsYXNzZXMgdG8gdG8gdGhlIHB1YmxpY2F0aW9uIGRhdGUgb2YgZWFjaCBjYXJkLidcbiAgfSxcbiAgdGVtcGxhdGVzOiB7XG4gICAgb3BlbmVyOiAnVGhlIG9wZW5pbmcgdGVtcGxhdGUgdGFnIG9yIHdyYXBwZXIgb2YgdGhlIGVudGlyZSBmZWVkLiBBZGQgYmxhbmsgc3RyaW5nIHRvIHJlbW92ZSB0aGVzZSBjb21wb25lbnQuIFRoaXMgaXMgd2hlcmUgeW91IHdvdWxkIGluc2VydCBhIGN1c3RvbSBMb0Rhc2ggdGVtcGxhdGUgZm9yIHRoZSBmZWVkIHRvIHBhcnNlLicsXG4gICAgaGVhZGVyOiAnVGhlIGhlYWRlciB0ZW1wbGF0ZSB0aGF0IHNpdHMgYXQgdGhlIHRvcCBvZiB0aGUgcG9zdHMuJyxcbiAgICBwb3N0czogJ1RoZSBwb3N0cyBsb29wIGluY2x1ZGluZyB0aGUgcG9zdHMgdGVtcGxhdGUuJyxcbiAgICBjbG9zZXI6ICdUaGUgY2xvc2luZyB0ZW1wbGF0ZSB0YWcgb3Igd3JhcHBlciBvZiB0aGUgZW50aXJlIGZlZWQuJ1xuICB9LFxuICBsb2c6ICdmYWxzZSAoZGVmYXVsdCkgb3IgdHJ1ZS4gRW5hYmxlcyBsb2dnaW5nIGRhdGEgdG8gdGhlIGNvbnNvbGUuIFlvdSB3aWxsIHdhbnQgdGhpcyB0dXJuZWQgb2ZmIGluIGV2ZXJ5IGNhc2UgdW5sZXNzIHlvdSBhcmUgY3JlYXRpbmcgYSB0ZW1wbGF0ZSBhbmQgbmVlZCB0byBzZWUgdGhlIGRhdGEgYmVpbmcgcGFzc2VkIHRvIGl0LicsXG4gIHVuaXF1ZTogJ3RydWUgKGRlZmF1bHQpIG9yIHRydWUuIFdoZW4gdXNpbmcgbXVsdGlwbGUgZmVlZHMgc29tZSBNZWRpdW0gYXJ0aWNsZXMgY2FuIGJlIGR1cGxpY2F0ZWQgYmV0d2VlbiBwdWJsaWNhdGlvbnMuIElmIHlvdSB3YW50IHVuaXF1ZSBwb3N0cyBieSB0aXRsZSBzd2l0Y2ggdGhpcyB0byB0cnVlLiBUaGVyZSBpcyBubyBwcmlvcml0aXphdGlvbiBvZiB3aGljaCBwb3N0IHdpbGwgc2hvdyB1cC4nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkRG9jcztcbiJdLCJuYW1lcyI6WyJGZWVkRG9jcyIsImZlZWQiLCJyc3NUb0pzb24iLCJzZWxlY3RvciIsInR5cGUiLCJ0aXRsZSIsInRpdGxlVXJsIiwicHJvZmlsZUltZyIsImZvbnRTaXplIiwicmF0aW9Qcm9maWxlIiwicG9zdEJvcmRlckNvbG9yIiwicG9zdEltZ0hlaWdodCIsInBvc3RFeGNlcnB0TGVuZ3RoIiwicG9zdEV4Y2VycHRUcmFpbCIsInBvc3RDdGFUZXh0IiwicG9zdERhdGVMb2NhbCIsInBvc3REYXRlRm9ybWF0IiwicG9zdERhdGVUaXRsZSIsImNsYXNzZXMiLCJ3cmFwcGVyIiwiaGVhZGVyIiwidXJsIiwiZmVlZEl0ZW0iLCJsaW5rIiwidGh1bWJuYWlsIiwiZXhjZXJwdCIsIml0ZW1Gb290ZXIiLCJjdGEiLCJkYXRlIiwidGVtcGxhdGVzIiwib3BlbmVyIiwicG9zdHMiLCJjbG9zZXIiLCJsb2ciLCJ1bmlxdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztNQU1NQSxXQUNKLG9CQUFjOzs7c0JBQ0dBLFFBQVEsV0FBdkI7OztFQUlKQSxRQUFRLFdBQVIsR0FBbUI7SUFDakJDLElBQUksRUFBRSxtTkFEVztJQUVqQkMsU0FBUyxFQUFFLHVPQUZNO0lBR2pCQyxRQUFRLEVBQUUsc0pBSE87SUFJakJDLElBQUksRUFBRSwwSEFKVztJQUtqQkMsS0FBSyxFQUFFLHdOQUxVO0lBTWpCQyxRQUFRLEVBQUUsbU1BTk87SUFPakJDLFVBQVUsRUFBRSw2TUFQSztJQVFqQkMsUUFBUSxFQUFFLGdLQVJPO0lBU2pCQyxZQUFZLEVBQUUsd0hBVEc7SUFVakJDLGVBQWUsRUFBRSxpT0FWQTtJQVdqQkMsYUFBYSxFQUFFLDBIQVhFO0lBWWpCQyxpQkFBaUIsRUFBRSxvQ0FaRjtJQWFqQkMsZ0JBQWdCLEVBQUUsZ0VBYkQ7SUFjakJDLFdBQVcsRUFBRSxtREFkSTtJQWVqQkMsYUFBYSxFQUFFLGdRQWZFO0lBZ0JqQkMsY0FBYyxFQUFFLG9IQWhCQztJQWlCakJDLGFBQWEsRUFBRSxzRkFqQkU7SUFrQmpCQyxPQUFPLEVBQUU7TUFDUEMsT0FBTyxFQUFFLHVhQURGO01BRVBDLE1BQU0sRUFBRSx3REFGRDtNQUdQQyxHQUFHLEVBQUUsc0NBSEU7TUFJUEMsUUFBUSxFQUFFLHdDQUpIO01BS1BqQixLQUFLLEVBQUUsNENBTEE7TUFNUGtCLElBQUksRUFBRSwyQ0FOQztNQU9QQyxTQUFTLEVBQUUsc0RBUEo7TUFRUEMsT0FBTyxFQUFFLDhDQVJGO01BU1BDLFVBQVUsRUFBRSxtRUFUTDtNQVVQQyxHQUFHLEVBQUUsMkRBVkU7TUFXUEMsSUFBSSxFQUFFO0tBN0JTO0lBK0JqQkMsU0FBUyxFQUFFO01BQ1RDLE1BQU0sRUFBRSxvTEFEQztNQUVUVixNQUFNLEVBQUUsd0RBRkM7TUFHVFcsS0FBSyxFQUFFLDhDQUhFO01BSVRDLE1BQU0sRUFBRTtLQW5DTztJQXFDakJDLEdBQUcsRUFBRSwyTEFyQ1k7SUFzQ2pCQyxNQUFNLEVBQUU7R0F0Q1Y7Ozs7Ozs7OyJ9