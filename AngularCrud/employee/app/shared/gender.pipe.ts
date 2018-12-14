import { Pipe } from '@angular/core';
@Pipe({
  name:"beautifygender"
})
export class GenderPipe {
    transform(value: number, fallback: string): string {
        let gender :string= "";
        if (value == 1) {
            gender = "male";
        } else if (value == 2) {
            gender = "female";
        }
        else {
            gender = "not set";
        }

        return gender;
    }
}