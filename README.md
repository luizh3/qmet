# Qmet

Qmet is a library/tool for QML Snippets that allows you to write QML-like structures using a concise, abbreviation-based syntax. This approach enables rapid creation of nested and repeated elements, similar to how some editors.

## Installation

Install via npm:

```bash
npm install qmet
```

or clone the repository and install dependencies:

```bash
git clone <repo-url>
cd qmet
npm install
```

## Usage

Import Qmet in your TypeScript or JavaScript project:

```ts
import { /* functions, classes, etc. */ } from 'qmet';
```

## Examples

Here are some example queries or usages:

```
row>column>rectangle
row>column+rectangle
row>3*column
row>column>3*rectangle
row+column+rectangle
3*row+rectangle
3*rectangle
3*rectangle>row>rectangle
```

## License

See the LICENSE file for more information. 