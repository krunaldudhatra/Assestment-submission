function Add(numbers) {
  if (!numbers) return 0;

  let delimiters = /[\n,]/;
  if (numbers.startsWith("//")) {
    const [_, delim, rest] = numbers.match(/^\/\/(.+)\n(.*)$/);
    delimiters = new RegExp(`[${escape(delim)}]`);
    numbers = rest;
  }

  return numbers
    .split(delimiters)
    .reduce((sum, num) => sum + parseInt(num), 0);
}

function escape(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}



module.exports = { Add };
