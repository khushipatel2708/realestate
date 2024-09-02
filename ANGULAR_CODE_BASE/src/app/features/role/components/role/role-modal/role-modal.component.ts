import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AdministrationService } from 'app/administration/service/administration.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    // public toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private administrationService: AdministrationService,
    // public translate: TranslateService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", Validators.compose([Validators.required])],
    })
  }

  onSubmit_Menu() {
        this.submitted = true;
        if (this.form.invalid) {
          alert("invalid");
          return;
        }
      }

}
