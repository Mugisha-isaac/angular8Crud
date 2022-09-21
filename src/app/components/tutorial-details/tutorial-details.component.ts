import { Component, OnInit } from '@angular/core';
import {TutorialService} from "src/app/services/tutorial.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentTutorial:any = null;
  message = '';

  constructor(private tutorialService:TutorialService,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id:any){
        this.tutorialService.get(id).subscribe(data=>{
          this.currentTutorial = data;
          console.log(data);
        }, error=>{
          console.log(error);
        })
  }

}
