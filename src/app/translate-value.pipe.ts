import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateValue'
})
export class TranslateValuePipe implements PipeTransform {

  transform(value: number, language: 'ru-RU' | 'en-US'): string {
    if(language === 'ru-RU') {
      return this.separationValue(value, ',');
    }

    if(language === 'en-US') {
      return this.separationValue(value, ' ');
    }
  }

  public separationValue(value: number, char: string) : string {
    const valueToString = value.toString();// число переводим в строку
    const indexPoint = valueToString.indexOf('.');// находим индекс точки

    const fractionalPart = valueToString.slice(indexPoint + 1, valueToString.length);// выделяем дробную часть

    // сначала убираем со строки дробную часть (replace), дальше работаем с целой частью
    // с помощью методов массива выставляем разделитель: либо запятую, либо пробел
    const arrValues = valueToString
      .replace(`.${fractionalPart}`, '')
      .split('')
      .reverse()
      .map((item, index, arr) => {
        if(index === arr.length - 1) return item;
        return (index + 1) % 3 !== 0 ? item : char + item;
    });

    return arrValues
      .reverse()
      .join('')
      .concat(char === ',' ? '.' : ',', fractionalPart);
  }
}
