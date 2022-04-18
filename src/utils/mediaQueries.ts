const tabletQuery = window.matchMedia('(max-width: 820px)');
const phoneQuery = window.matchMedia('(max-width: 425px)');

export function matchesTabletMedia() {
  return tabletQuery.matches;
}
export function matchesPhoneMedia() {
  return phoneQuery.matches;
}
