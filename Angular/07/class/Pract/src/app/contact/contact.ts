import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  imports: [MatFormField,MatFormFieldModule,MatInput,MatCard,MatCardHeader,MatCardActions,MatCardContent,MatCardTitle,MatCardSubtitle],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
