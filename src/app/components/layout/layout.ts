import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddUser} from '../add-user/add-user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  faAdd: IconDefinition = faAdd;

  constructor(
    private ngbModal: NgbModal,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
  }

  public openAddUserModal(): void {
    this.ngbModal.open(AddUser, {size: 'lg'});
  }

  public openToastr(): void {
    this.toastr.success("Toastr works");
  }
}
