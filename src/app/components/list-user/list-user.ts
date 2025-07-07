import {Component, OnInit} from '@angular/core';
import {faPencil, faTimes} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-list-user',
  standalone: false,
  templateUrl: './list-user.html',
  styleUrl: './list-user.scss'
})
export class ListUser implements OnInit {
  faPencil: IconDefinition = faPencil;
  faTimes: IconDefinition = faTimes;

  constructor() {

  }
  ngOnInit() {

  }
}
