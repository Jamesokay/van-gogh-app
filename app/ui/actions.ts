type Dimension = {
  width: number;
  height: number;
};
export function transformDimensions(input: Dimension): Dimension {
  const scalingFactor = 1.75;
  const transformedWidth = Math.round(input.width * scalingFactor);
  const transformedHeight = Math.round(input.height * scalingFactor);
  return {
    width: transformedWidth,
    height: transformedHeight,
  };
}

export function parseDimension(input: string): Dimension {
  const parts = input.split("x");
  if (parts.length !== 2) {
    throw new Error(
      "Invalid dimension format. Expected format 'width x height'."
    );
  }
  return {
    width: parseInt(parts[0].trim(), 10),
    height: parseInt(parts[1].trim(), 10),
  };
}
