import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name : "search"
})
export class SearchPipe implements PipeTransform {
	transform(values : any[], q : string) {
		let quote = (str) => str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
		let regex = new RegExp(quote(q), "ig");
		return q.length > 1 ? values.filter((item) => regex.test(item.name)) : values;
	}
}