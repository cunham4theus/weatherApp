import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  constructor() {}
  @Output() searchValue: EventEmitter<any> = new EventEmitter();

  searchForm = new FormGroup({
    search: new FormControl('', [Validators.pattern('[a-zA-Z]*')]), //unicamente letras
  });
  get f() {
    return this.searchForm.controls;
  }

  getSearch() {
    this.searchValue.emit(this.searchForm.value.search);
  }

  onEnter(evt: any) {
    evt.preventDefault();
    this.searchValue.emit(evt.target.value);
  }

  ngOnInit(): void {}
}
