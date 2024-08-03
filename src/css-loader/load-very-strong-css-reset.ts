/**
 * Loads Very Strong CSS Reset into the document.
 *
 * This function creates a new `<link>` element pointing to the CSS reset file
 * and inserts it into the document's `<head>` section. This is useful for
 * applying a CSS reset to ensure consistent styling across different browsers
 * by removing all default browser styling.
 *
 * Usage:
 * Call this function once your document is ready to ensure that the CSS reset
 * is applied before other styles. This is especially important for applications
 * that require a clean slate for custom styling.
 */
export const loadVeryStrongCssReset = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../reset.min.css';
  const head = document.head;
  const linkTags = head.getElementsByTagName('link');
  const metaTags = head.getElementsByTagName('meta');
  if (linkTags.length > 0) {
    head.insertBefore(link, linkTags[0]);
  } else if (metaTags.length > 0) {
    head.insertBefore(link, metaTags[metaTags.length - 1].nextSibling);
  } else {
    head.insertBefore(link, head.firstChild);
  }
};
