import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DataStateService } from 'src/app/services/datastate.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  private pageName = 'Site Feedback';
  feedbackFormGroup!: UntypedFormGroup;
  options: string[] = ["Issue", "Feature", "Comment", "Other"];

  constructor(private dataService: DataStateService) {}

  ngOnInit(): void {
      this.dataService.updatePageTitle(this.pageName);
      this.createForm();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.feedbackFormGroup.controls[controlName].hasError(errorName);
  };

  public onClear = () => {
      this.feedbackFormGroup.reset();
      this.createForm();
  };

  createForm() {
    this.feedbackFormGroup = new UntypedFormGroup({
        type: new UntypedFormControl('', [Validators.required]),
        response: new UntypedFormControl('', [Validators.required]),
        email: new UntypedFormControl(''),
    });
  }

  public onSubmit(formData: { }) {
      //this.sendToParentAndResetForm(player);
      console.log("TODO: save to firebase!");
      alert("Submit Not Enabled");
  }
}
