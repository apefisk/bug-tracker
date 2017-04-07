import { Injectable } from '@angular/core';
import { FirebaseConfigService } from "./firebase-config.service";
import { Observable } from "rxjs";
import { Bug } from "../../bug-tracker/model/bug";


@Injectable()
export class BugService {

  constructor(private fire: FirebaseConfigService) {
  }

  private bugsDbReference = this.fire.database.ref().child('bugs');


  getAddedBugs(): Observable<any> {
    return Observable.create(obs => {
      // Whenever a new child is added, the child is called "bug"
      this.bugsDbReference.on('child_added', bug => {
        // Cast the newBug as model Bug
        const newBug = bug.val() as Bug;
        newBug.id = bug.key;
        obs.next(newBug);
      },
      err => {
        obs.throw(err);
      });
    });
  }

  //Whenever getAddedBugs() is called, the user has to manually update the page to see the edited bugs
  //This method will avoid this problem by creating a changed child-listener
  changedListener(): Observable<any> {
    return Observable.create(obs => {
      this.bugsDbReference.on('child_changed', bug => {
        const updatedBug = bug.val() as Bug;
        updatedBug.id = bug.key;
        obs.next(updatedBug);
      },
      err => {
        obs.throw(err);
      });
    });
  }

  addBug(bug: Bug) {
    const newBugReference = this.bugsDbReference.push();
    newBugReference.set({
      title: bug.title,
      status: bug.status,
      severity: bug.severity,
      description: bug.description,
      createdBy: 'Jess',
      createdDate: Date.now(),
    })
      .catch(err => console.error("Unable to add bug to Firebase - ", err));
  }

  //Saves the id of a chosen bug
  updateBug(bug: Bug) {
    const currentBugReference = this.bugsDbReference.child(bug.id);
    bug.id = null;
    bug.updatedBy = "Tom Tickle";
    bug.updatedDate = Date.now();
    currentBugReference.update(bug);
  }
}
