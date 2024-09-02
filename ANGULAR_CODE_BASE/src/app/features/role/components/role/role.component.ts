import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleModalComponent } from './role-modal/role-modal.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

    constructor(
    private modalService: NgbModal,
    ) { }

  ngOnInit() {
  }
  onAddEdit(id: number) {
    const modalRef = this.modalService.open(RoleModalComponent, {
      centered: true,
      backdrop: "static",
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.onCostCenter_Emit.subscribe((data) => {
      if (data != null) {
        // this.getList();
      }
    });
  }
} 
