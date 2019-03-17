const world = 'world';

function hello(word: string = world): string {
  return `Hello ${world}! `;
}

console.log(hello());
