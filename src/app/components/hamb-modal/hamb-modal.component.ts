import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

/**
 * @title Basic menu
 */
@Component({
  selector: 'app-hamb-modal',
  templateUrl: './hamb-modal.component.html',
  //   styleUrls: ['./hamb-modal.component.scss']
})
export class HambModalComponent implements OnInit {



  constructor(public userService: UserService) { }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
  }


}