function scoreCalculator(scores) {
  return scores.reduce((acc, val) => {
    if (val < 0) {
      return acc;
    }

    return acc + val;
  }, 0);
}

describe('scoreCalculator', () => {
  it('should work with one number', () => {
    expect(scoreCalculator([75])).toBe(75);
  });

  it('should work with more than one score', () => {
    const sum = scoreCalculator([83, 92, 78]);
    expect(sum).toBe(253);
  });

  it('should treat negative scores as 0', () => {
    const sum = scoreCalculator([83, 92, -65, 78, -92]);
    expect(sum).toBe(253);
  });

  it('should return zero with empty input', () => {
    const sum = scoreCalculator([]);
    expect(sum).toBe(0);
  });
});
