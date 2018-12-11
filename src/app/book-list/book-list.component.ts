import { Component, OnInit } from '@angular/core';

import { Book, Thumbnail} from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];

  ngOnInit() {
    this.books = [
      new Book(
        '723749872893487',
        'Das Nichts',
        ['Matthias Raab', 'Thomas Muster'],
        new Date(2018, 12, 5),
        'Grundlagen in Nichttun',
        5,
        [new Thumbnail('asserts/ts.jpeg', 'book title')],
        'asdasd asdasd asdasd',
      ),
      new Book(
        '245234523452345',
        'Fernsheen',
        ['Thomas Muster', 'Matthias Raab'],
        new Date(2018, 5, 12),
        'Grundlagen in Fernsehen',
        5,
        [new Thumbnail('/assets/iw.jpeg', 'book title')],
        'asdasd asdasd asdasd',
      )
    ];


  }

}
