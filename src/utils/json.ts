// import { EventEmitter } from "https://deno.land/std@0.130.0/node/events.ts";
// import {
//   iterateReader,
//   readerFromStreamReader,
// } from "https://deno.land/std@0.130.0/streams/conversion.ts";

// export const CreateJSON = async (data: ReadableStream<Uint8Array>) => {
//   // const randomString = Math.random().toString(36).substring(2, 15)
//   // Deno.writeFileSync(`/tmp/${randomString}.json`, data.pipeTo(new TextEncoder().encodeStream()))
//   const wrdr = data.getReader();
//   if (wrdr) {
//     const r = readerFromStreamReader(wrdr);
//     let n = 0;
//     while (n > 0) {
//       const b = new Uint8Array(10000);
//       n = (await r.read(b)) || 0;
//     }
//   }
// };

// export class JSONStream extends EventEmitter {
//   private openBraceCount = 0;
//   private tempUint8Array: number[] = [];
//   private decoder = new TextDecoder();

//   constructor(private buffer: ReadableStream<Uint8Array>) {
//     super();
//     this.stream();
//   }

//   async stream() {
//     console.time("Run Time");
//     // const file = await Deno.open(this.response.url);
//     const reader = this.buffer.getReader()!;
//     const file = readerFromStreamReader(reader);

//     //creates iterator from reader, default buffer size is 32kb
//     for await (const buffer of iterateReader(file)) {
//       for (let i = 0, len = buffer.length; i < len; i++) {
//         const uint8 = buffer[i];

//         //remove whitespace
//         if (uint8 === 10 || uint8 === 13 || uint8 === 32) continue;

//         //open brace
//         if (uint8 === 123) {
//           if (this.openBraceCount === 0) this.tempUint8Array = [];
//           this.openBraceCount++;
//         }

//         this.tempUint8Array.push(uint8);

//         //close brace
//         if (uint8 === 125) {
//           this.openBraceCount--;
//           if (this.openBraceCount === 0) {
//             const uint8Ary = new Uint8Array(this.tempUint8Array);
//             const jsonString = this.decoder.decode(uint8Ary);
//             const object = JSON.parse(jsonString);
//             this.emit("object", object);
//           }
//         }
//       }
//     }
//     console.timeEnd("Run Time");
//   }
// }
