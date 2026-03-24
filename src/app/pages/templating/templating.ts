import { Component } from '@angular/core';
import { ClassTemplating } from "../../templates/class-templating/class-templating";
import { ClassEvents } from "../../templates/class-events/class-events";
import { ClassFlow } from "../../templates/class-flow/class-flow";
import { ClassDefer } from "../../templates/class-defer/class-defer";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { KebabCasePipe } from '../../core/pipes/kebab-case-pipe';

@Component({
  selector: 'app-templating',
  imports: [UpperCasePipe, DatePipe, KebabCasePipe],
  templateUrl: './templating.html',
  styleUrl: './templating.css',
})
export class Templating {
/**
Name	Description
AsyncPipe	        Read the value from a Promise or an RxJS Observable.
CurrencyPipe	    Transforms a number to a currency string, formatted according to locale rules.
DatePipe	        Formats a Date value according to locale rules.
DecimalPipe	        Transforms a number into a string with a decimal point, formatted according to locale rules.
I18nPluralPipe      Maps a value to a string that pluralizes the value according to locale rules.
I18nSelectPipe	    Maps a key to a custom selector that returns a desired value.
JsonPipe	        Transforms an object to a string representation via JSON.stringify, intended for debugging.
KeyValuePipe	    Transforms Object or Map into an array of key value pairs.
LowerCasePipe	    Transforms text to all lower case.
PercentPipe	        Transforms a number to a percentage string, formatted according to locale rules.
SlicePipe	        Creates a new Array or String containing a subset (slice) of the elements.
TitleCasePipe	    Transforms text to title case.
UpperCasePipe	    Transforms text to all upper case. 

 */
}
