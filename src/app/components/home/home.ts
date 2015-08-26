/// <reference path="../../../typings/_custom.d.ts" />

import {Component, View, ViewEncapsulation, NgIf} from 'angular2/angular2';

import {appDirectives, angularDirectives} from 'app/directives/directives';
import {Subscriptions} from '../subscription/subscriptions/subscriptions';
import {UserService} from 'app/services/UserService';

let template = require('./home.html');

@Component({
  selector: 'home'
})
@View({
  directives: [ angularDirectives, appDirectives, Subscriptions, NgIf],
  encapsulation: ViewEncapsulation.EMULATED,
  template: template
})
export class Home {
  constructor(public userService: UserService) {

  }
}
