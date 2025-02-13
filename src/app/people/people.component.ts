import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  @Input() id: number = 0;
  @Input() name: string | null = null;
  @Input() isFavorite: (name: string) => boolean = () => false;
  @Output() favoriteSelected = new EventEmitter<string>();
  @Output() removeFavorite = new EventEmitter<string>();

  selectFavorite() {
    if (this.name) {
      this.favoriteSelected.emit(this.name);
    }
  }

  rmFavorite() {
    if (this.name) {
      this.removeFavorite.emit(this.name);
    }
  }
}
