const isSmall = (size: string) => ["s", "sm", "small"].includes(size);
const isMedium = (size: string) => ["m", "md", "medium"].includes(size);
const isLarge = (size: string) => ["l", "lg", "large"].includes(size);

const sizeClass = (size: string): string => {
  if (isSmall(size)) {
    return "md:w-1/3";
  } else if (isMedium(size)) {
    return "md:w-1/2";
  } else if (isLarge(size)) {
    return "md:w-2/3";
  } else {
    throw Error("Invalid card size");
  }
};

export default sizeClass;
