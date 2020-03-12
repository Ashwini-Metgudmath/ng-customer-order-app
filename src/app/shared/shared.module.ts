import { NgModule } from "@angular/core";
import { CapitalizePipe } from "../shared/capitalize.pipe";

@NgModule({
    declarations:[CapitalizePipe],
    exports: [CapitalizePipe]
})

export class SharedModule {}