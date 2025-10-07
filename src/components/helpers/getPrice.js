  export const getRandomMillionDecimalFormatted = () => {
    const min = 1_000_000;
    const max = 3_000_000;
    const random = Math.random() * (max - min) + min;

    return random.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };