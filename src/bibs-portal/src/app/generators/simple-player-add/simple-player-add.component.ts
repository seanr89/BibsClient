import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-simple-player-add',
  templateUrl: './simple-player-add.component.html',
  styleUrls: ['./simple-player-add.component.scss']
})
export class SimplePlayerAddComponent implements OnInit {
  playerFormGroup!: UntypedFormGroup;
  players: IPlayer[] = [];
  inputPlayer: IPlayer | undefined;

  //@Output() childToParent = new EventEmitter<IPlayer>();

    ngOnInit(): void {
        this.createForm();
    }

    public hasError = (controlName: string, errorName: string) => {
        return this.playerFormGroup.controls[controlName].hasError(errorName);
    };

    public onClear = () => {
        this.playerFormGroup.reset();
        this.createForm();
    };

    createForm() {
        this.playerFormGroup = new UntypedFormGroup({
            name: new UntypedFormControl('', [Validators.required]),
            email: new UntypedFormControl('', []),
            rating: new UntypedFormControl('50.0', [])
        });
    }

    public onAdd(formData: { name: any; email: any; rating: any; }) {
        console.log(`onAdd called`);
        const player: IPlayer = {
            name: formData.name,
            email: formData.email,
            rating: formData.rating
        };
        this.players.push(player);
        this.inputPlayer = player;
    }
}
