import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizedTable'
})
export class LocalizedTablePipe implements PipeTransform {
  transform(value: any, language?: string): any {
    language = language || localStorage.getItem('lang') || 'fr'; // Récupère la langue depuis le localStorage, par défaut en français

    if (value && value[language]) {
      return value[language];
    } else {
      return [];
    }
  }
}
