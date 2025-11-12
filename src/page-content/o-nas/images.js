const imageImports = import.meta.glob("@assets/img/o-nas/gallery/*.jpg", {
  eager: true
});

const images = Object.values(imageImports).map(
  // @ts-ignore
  (imageImport) => imageImport.default
);

export default images;
