import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(
    private readonly toastService: ToastService
  ) { }

  toast$ = this.toastService.toast$;

  ngOnInit(): void {
  }
}
