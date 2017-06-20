import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe implements PipeTransform {

  transform(isoDateString: string): string {
    const date = new Date(isoDateString);

    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const monthDisplay = month < 10 ? '0' + month : month;
    const dayDisplay = day < 10 ? '0' + day : day;

    return `${monthDisplay}/${dayDisplay}/${year}, ${this.getTimeDisplay(hour, minutes)}`;
  }

  getTimeDisplay(hour: number, minute: number) {
    const h = hour % 12;
    const hourDisplay = h < 10 ? '0' + h : h;
    const minuteDisplay = minute < 10 ? '0' + minute : minute;
    const dayPeriod = hour < 12 ? 'am' : 'pm';

    return `${hourDisplay}:${minuteDisplay}${dayPeriod}`;
  }

}
