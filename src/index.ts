export {};

// EXAMPLE 1 - Understanding 'as const' in TypeScript

function sum(a: number, b: number) {
  return a + b;
}

// 👇️ const arr: readonly [3, 4]
const arr = [3, 4] as const;

console.log(sum(...arr)); // 👉️ 7

// ---------------------------------------------------

// // EXAMPLE 2 - Declaring a const array in TypeScript

// function sum(a: number, b: number) {
//   return a + b;
// }

// // 👇️ const arr: readonly [3, 4]
// const arr = [3, 4] as const;

// ---------------------------------------------------

// // EXAMPLE 3 - Declaring a const object in TypeScript

// // 👇️ const Pages: {readonly home: '/'; readonly about: '/about'...}
// export const Pages = {
//   home: '/',
//   about: '/about',
//   contacts: '/contacts',
// } as const;

// ---------------------------------------------------

// // EXAMPLE 4 - Const assertions don't make an object or array fully immutable

// const arr = ['/about', '/contacts'];

// // 👇️ const Pages: {readonly home: '/', menu: string[]}
// export const Pages = {
//   home: '/',
//   menu: arr,
// } as const;

// // ✅ Works
// Pages.menu.push('/test');
