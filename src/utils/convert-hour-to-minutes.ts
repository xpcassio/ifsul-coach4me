export function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  return hour * 60 + minutes;
}

export function convertMinutesToHour(time: string | null) {
  if (time == null) return "";

  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}
