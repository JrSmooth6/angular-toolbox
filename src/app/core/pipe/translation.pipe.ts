import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {
  transform(value: any): any {
    let language = localStorage.getItem('lang') || 'fr'; // Récupère la langue depuis le local storage, par défaut en français

    if (Array.isArray(value)) {
      // Si value est un tableau, on traduit chaque élément du tableau
      return value.map((text: string) => this.translateText(text, language));
    } else {
      // Sinon, on traduit la valeur directement
      return this.translateText(value as string, language);
    }
  }

  private translateText(text: string, language: string): string {
    if (text && typeof text === 'object' && text[language]) {
      return text[language];
    } else {
      return '';
    }
  }
}
