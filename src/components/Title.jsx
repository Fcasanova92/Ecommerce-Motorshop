export const Title = ({ children, level = 1, className }) => {
  // Validamos el level
  const safeLevel = level >= 1 && level <= 6 ? level : 1;
  const TitleTag = `h${safeLevel}`;

  return <TitleTag className={className}>{children}</TitleTag>;
};