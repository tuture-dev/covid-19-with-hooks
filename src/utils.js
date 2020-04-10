export function transformHistory(timeline = {}) {
  return Object.entries(timeline).map((entry) => {
    const [time, number] = entry;
    return { time, number };
  });
}
