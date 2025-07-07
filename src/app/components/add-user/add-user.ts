import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {UsersService} from '../../services/users';
import {User} from '../../classes/user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser implements OnInit {
  faUser: IconDefinition = faUser;
  faTimes: IconDefinition = faTimes;

  public firstNameField: FormControl = new FormControl('', [Validators.required]);
  public lastNameField: FormControl = new FormControl('', [Validators.required]);
  public emailField: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public descriptionField: FormControl = new FormControl('');

  public userForm: FormGroup = new FormGroup({});

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {

  }
  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: this.firstNameField,
      lastName: this.lastNameField,
      email: this.emailField,
      description: this.descriptionField
    });
  }

  public createUser(): void {
    console.log('createUser()');
    console.log(this.userForm.value);
    let newUser = new User();
    newUser.firstName = this.userForm.controls['firstName'].value;
    newUser.lastName = this.userForm.controls['lastName'].value;
    newUser.email = this.userForm.controls['email'].value;
    newUser.description = this.userForm.controls['description'].value;
    this.usersService.createUser(newUser).subscribe(user => {
      if (user.id) {
        this.toastr.success('User created successfully');
        this.ngbActiveModal.close();
      } else {
        this.toastr.error('Error trying to create user');
      }
    });
  }

  public closeModal(): void {
    this.ngbActiveModal.dismiss();
  }

}
