export const List = ({ children, type = "ul", className }) => {
  const ListTag = type === "ol" ? "ol" : "ul";

  return <ListTag className={className}>{children}</ListTag>;
};