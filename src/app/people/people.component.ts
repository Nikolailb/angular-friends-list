import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Person } from '../app.component';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() isFavorite: (person: Person) => boolean = () => false;
  @Output() favoriteSelected = new EventEmitter<Person>();
  @Output() removeFavorite = new EventEmitter<Person>();

  selectFavorite() {
    if (this.name && this.id) {
      this.favoriteSelected.emit(this.asPerson());
    }
  }

  rmFavorite() {
    if (this.name && this.id) {
      this.removeFavorite.emit(this.asPerson());
    }
  }

  asPerson(): Person {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
