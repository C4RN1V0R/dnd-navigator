import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  user: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.user = {
        name: "TobiDestroyerrXXX"
      }
    }, 2000)
    this.userService.getHello().subscribe((data:any) => {
      this.user = data; 
    })
  }

}
