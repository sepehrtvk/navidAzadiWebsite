function divideDateRangeIntoSegments(startDate, endDate, numberOfSegments) {
  // Calculate the total span in milliseconds
  const totalSpan = endDate - startDate;

  // Calculate the span of each segment in milliseconds
  const segmentSpan = totalSpan / numberOfSegments;

  let segments = [];
  for (let i = 0; i < numberOfSegments; i++) {
    // Calculate the start date of the current segment
    const segmentStartDate = new Date(startDate.getTime() + segmentSpan * i);

    // Calculate the end date of the current segment
    // For the last segment, ensure it ends exactly at the endDate
    const segmentEndDate =
      i === numberOfSegments - 1
        ? endDate
        : new Date(segmentStartDate.getTime() + segmentSpan);

    // Add the segment to the array
    segments.push({ start: segmentStartDate, end: segmentEndDate });
  }

  return segments;
}

module.exports = { divideDateRangeIntoSegments };
