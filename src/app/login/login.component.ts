// import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../service/authentication.service';
// import { Router } from '@angular/router';
// import { RegisterService, User } from '../service/register.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
// username=''
// password=''
// invalidLogin=false
// userlist:User[];
// name='';
// type='';
//   constructor(private router: Router,
//     private loginservice: AuthenticationService,private user:RegisterService) { }

//   ngOnInit() {
//     this.user.getUsers().subscribe(async res => {
//       this.userlist = await res;
//     }, error => alert(`${error.message}\nWaiting for response from server`))
//   }

//   checkLogin()
//   {
//     console.log(this.userlist);
//     console.log("check")
//     console.log(this.username)
//     console.log(this.password)
//     let flag=0;
//     for(let i=0;i<this.userlist.length;i++)
//     {
//         console.log(this.userlist[i].userName)
        
//       if(this.username===this.userlist[i].userName&&this.password===this.userlist[i].password)
//         {
  
//        sessionStorage.setItem('username',this.userlist[i].userName)
//        sessionStorage.setItem('userType',this.userlist[i].userType)
//           flag=1;
//         break;
//         }
//     }
//     if(flag===1)
//     {
//       this.router.navigate(['/admin'])
//       this.invalidLogin=false
//     }
//     else
//     this.invalidLogin=true
//   }
// }



import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
 password=''
 invalidLogin=false
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin()
  {
    console.log("cheching login");
    console.log(this.username)
    console.log(this.password)
    if(this.loginservice.authenticate(this.username,this.password))
    {
      this.router.navigate(['/admin-landing-page'])
      this.invalidLogin=false
    }
    else
    this.invalidLogin=true
    
  }

}







