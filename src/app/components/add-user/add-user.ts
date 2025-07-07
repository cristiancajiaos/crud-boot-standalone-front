import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser implements OnInit {
  faUser: IconDefinition = faUser;
  faTimes: IconDefinition = faTimes;

  constructor(
    private ngbActiveModal: NgbActiveModal
  ) {

  }
  ngOnInit() {
  }

  public createUser(): void {

  }

  public closeModal(): void {
    this.ngbActiveModal.close();
  }

}
