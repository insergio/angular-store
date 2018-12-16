import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "sort"
})
export class SortPipe implements PipeTransform {
	transform(array: any, field: string, ascdesc): any[] {
		if (!Array.isArray(array)) {
			return;
		}
		if (field) {

			if (field == "price") {
				for (let i = 0; i < array.length; i++) {
					array[i].rawprice = Number(array[i].price.replace(/[^0-9.-]+/g, ""));
				}
				field = "rawprice"
			}

			if(field=="available"){
				ascdesc=!ascdesc;
			}

			console.log(field)

			switch (ascdesc) {
				case false:
					array.sort((a: any, b: any) => {

						if (a[field] < b[field]) {
							return -1;
						} else if (a[field] > b[field]) {
							return 1;
						} else {
							return 0;
						}

					});
					break;
				case true:
					array.sort((a: any, b: any) => {

						if (a[field] > b[field]) {
							return -1;
						} else if (a[field] < b[field]) {
							return 1;
						} else {
							return 0;
						}
					});
					break;
			}
			console.log(array)
			return array;
		} else {
			return array;
		}
	}
}