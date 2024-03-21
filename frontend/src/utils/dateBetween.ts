export function isCurrentDateBetween(startDate: Date, endDate: Date) {
  const now = new Date()

  // Ensure dates are in proper format
  const start = new Date(startDate)
  const end = new Date(endDate)

  return now >= start && now <= end
}
