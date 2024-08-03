# Very Strong CSS Reset

![NPM Version](https://img.shields.io/npm/v/%40chribur_%2Fvery-strong-css-reset)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40chribur_%2Fvery-strong-css-reset)

This is a new CSS reset called Very Strong CSS Reset. It aims to be more powerful by referencing existing excellent CSS reset.

## Features

- Completely resets browser default styles
- Extremely radical CSS reset that sacrifices readability and web accessibility
- Uses the `where:()` pseudo-class to keep CSS selector specificity low
- Not supported in Internet Explorer

## Who Should Use This

Recommended for those who meet all of the following criteria:

- Highly knowledgeable in CSS, SCSS, Tailwind CSS, etc.
- Capable of maintaining and improving web accessibility on their own
- Enjoy writing styles from scratch

## How to Use

### `git clone`

```Bash
git clone git@github.com:CHRIBUR-organization/very-strong-css-reset.git
```

Then copy the `reset.min.css` file to your project.

For example, if you pasted it in the `css` directory:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ...
    <link rel="stylesheet" href="css/reset.min.css">
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### `npm install`

```Bash
npm install @chribur_/very-strong-css-reset
```

or

```Bash
yarn add @chribur_/very-strong-css-reset
```

or

```Bash
pnpm add @chribur_/very-strong-css-reset
```

Then import the `reset.min.css` file in your project.

## CSS Resets References

I greatly referred to the following CSS resets in developing Very Strong CSS Reset. Thanks to the developers of them.

- [The New CSS Reset](https://github.com/elad2412/the-new-css-reset)
- [@acab/reset.css](https://github.com/mayank99/reset.css)
- [The Best CSS Reset of 2024!](https://github.com/Lazzzer00/Best-CSS-Reset-2024)

If you know of any other great CSS resets, please let me know through an issue.

## License

[MIT](https://github.com/CHRIBUR-organization/very-strong-css-reset/blob/main/LICENSE)
