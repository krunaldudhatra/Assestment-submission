function Add(numbers) {
  if (!numbers) return 0;

  let delimiters = /[\n,]/;
  if (numbers.startsWith("//")) {
    const [_, delim, rest] = numbers.match(/^\/\/(.+)\n(.*)$/);
    delimiters = new RegExp(`[${escape(delim)}]`);
    numbers = rest;
  }

  const parts = numbers.split(delimiters).map(Number);
  const negatives = parts.filter(n => n < 0);

  if (negatives.length) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return parts.reduce((sum, n) => (n <= 1000 ? sum + n : sum), 0);
}


function escape(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}



module.exports = { Add };
