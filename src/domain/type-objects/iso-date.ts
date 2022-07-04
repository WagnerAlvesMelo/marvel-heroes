export default class IsoDate {
  date!: string;

  constructor(date: string) {
    this.date = date;
  }

  toDate() {
    return new Date(this.date);
  }

  toLocaleDateString() {
    return this.toDate().toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
