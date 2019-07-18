declare module "random-normal" {
  export default function randomNormal(options?: {
    mean?: number;
    dev?: number;
  }): number;
}

declare module "nice-color-palettes" {
  let colors: string[][];
  export default colors;
}
