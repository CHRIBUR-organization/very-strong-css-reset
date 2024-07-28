/**
 * Loads Very Strong Reset CSS into the document.
 *
 * This function creates a new `<link>` element pointing to the reset CSS file
 * and inserts it into the document's `<head>` section. This is useful for
 * applying a CSS reset to ensure consistent styling across different browsers
 * by removing all default browser styling.
 *
 * Usage:
 * Call this function once your document is ready to ensure that the reset CSS
 * is applied before other styles. This is especially important for applications
 * that require a clean slate for custom styling.
 */
export const loadVeryStrongResetCss = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../reset.min.css';
  const head = document.head;
  if (head.firstChild) {
    head.insertBefore(link, head.firstChild);
  } else {
    head.appendChild(link);
  }
};
