import { Component } from '@angular/core';

export interface Person {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: Person[] = [];

  people: Person[] = [
    { id: 1, name: 'lewis' },
    { id: 2, name: 'jules' },
    { id: 3, name: 'ed' },
    { id: 4, name: 'nathan' },
    { id: 5, name: 'dave' },
    { id: 6, name: 'nigel' },
  ];

  addPerson() {
    if (!this.newFriend) {
      return;
    }
    this.people.push({
      id: this.getNewId(),
      name: this.newFriend,
    });
    this.newFriend = null;
  }

  addFavorite(person: Person): void {
    if (this.favorites.find((x) => x.id == person.id) == null) {
      this.favorites.push(person);
    }
  }

  removeFavorite(person: Person): void {
    this.favorites = this.favorites.filter((x) => x.id != person.id);
  }

  isFavorite(person: Person): boolean {
    return this.favorites.find((x) => x.id == person.id) != null;
  }

  getNewId(): number {
    const maxId = this.people.reduce(
      (max, person) => (person.id > max ? person.id : max),
      0
    );
    return maxId + 1;
  }

  favoriteNames(): string {
    return this.favorites.map((person) => person.name).join(', ');
  }
}
