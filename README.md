# Display Window Size Bookmarklet

Chrome used to show the size of the `innerWindow` as it was being resized when the Developer Tools were open. I personally relied on this feature all the time. With the current update to Chrome 49, this feature is now gone. This is a bookmarklet to give you this functionality back.

## Instalation

### Chrome (Mac)

1. Copy the code from the [js file](display-window-size.js).
1. Right-click on the Bookmark Bar and click Add Page.
1. Name the bookmark 'DsiplayWindowSize'.
1. Paste js code into the URL field.
1. Click Save.

### Firefox (Mac)

1. Copy the code from the [js file](display-window-size.js).
1. Right-click on the Bookmark Bar and click New Bookmark.
1. Name the bookmark 'DsiplayWindowSize'.
1. Paste js code into the Location field.
1. Click Add.

### Safari (Mac)

1. Copy the code from the [js file](display-window-size.js).
1. If Favorites Bar is not visible, go to View > Show Favorites Bar.
1. Then go to Bookmarks > Add Bookmark.
1. Select Favorites from the 'Add this page to' drop down.
1. Name the bookmark 'DsiplayWindowSize'.
1. Right-click on the new bookmark and click Edit Address.
1. Paste js code into the field.
1. Click Done.

## Usage

While on the page in question, click the Bookmarklet. The current window size will appear at the top-right for a few seconds, then fade out. As you resize the browser, it will re-appear, displaying the currently changing size, then fade out again. This functionality will remain until the page is refreshed.
