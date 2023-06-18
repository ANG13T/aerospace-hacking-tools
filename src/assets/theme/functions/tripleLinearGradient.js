

/**
  The linearGradient() function helps you to create a linear gradient color background
 */

function tripleLinearGradient(color, colorState, colorStateSecondary, angle) {
  if (angle === undefined) {
    angle = 310;
  }
  return `linear-gradient(${angle}deg, ${color}, ${colorState}, ${colorStateSecondary})`;
}

export default tripleLinearGradient;
