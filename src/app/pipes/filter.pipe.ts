import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const articles = [];
    for (const article of value) {
      if ((article['title']).toLowerCase().includes(filterString.toLowerCase())) {
        articles.push(article);
      }
    }
    return articles;
  }
}
