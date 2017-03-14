import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
//defining the lisst of users. It is an array of objects
userObj=[

{"name":"ABC","role":"ADMIN"},
{"name":"DEF", "role":"SUPERWISER"},
{"name":"GHI","role":"MEMBER"},
{"name":"JKL","role":"SUPER ADMIN"},
{"name":"MNO","role":"ADMIN"},
{"name":"PQR","role":"ADMIN"},
{"name":"STU","role":"MEMBER"},
{"name":"VWX","role":"MEMBER"},
{"name":"YZA","role":"MEMBER"},
{"name":"BCD","role":"MEMBER"}

];
//this variable holds the array of matching user objects
matchingUsers=[];

//this variable  binds the input typed in view
myRole:String="";

//function which is called on keydown of text box in view
fetchUsersMatchingRole=()=>{
	
	var i=0;
  
	//iterating through the userObj array
	for (i=0;i<this.userObj.length;i++){
		var obj=this.userObj[i];
		//If the role of the object matches the user typed value 
		if (obj["role"]==this.myRole){
			//then push it to matchingUsers array
			this.matchingUsers.push(obj);

		}
	}


}


}
