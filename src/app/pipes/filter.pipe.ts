import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], minprice, maxprice, available, minstock): any[] {

        console.log(minprice)

        if (!items) return [];

        var newArray=[]

        items.forEach(it => {
            var include = true;

            if (minprice && maxprice) {
                console.log(maxprice)
                console.log(it)
                var newPrice= Number(it.price.replace(/[^0-9.-]+/g, ""));
                if (newPrice < minprice || newPrice > maxprice) {
                    include = false;
                }
            }
            if (available) {
                if (!it.available) {
                    include = false;
                }
            }

            if (minstock) {
                if (it.quantity < minstock){
                    include = false;
                }
            }

            if(include){
                newArray.push(it)
            }

        });

        return newArray

       /*  return items(it => {

           
        }); */
    }
}