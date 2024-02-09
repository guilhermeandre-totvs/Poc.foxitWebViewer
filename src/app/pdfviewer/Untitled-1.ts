import { Component, NO_ERRORS_SCHEMA, ViewEncapsulation } from "@angular/core";
import * as UIExtension from "@foxitsoftware/foxit-pdf-sdk-for-web-library";

@Component({
  selector: "app-foxitpdfvie",
  template: '<div> <custom:emitter [@on.native.click]="onNativeClick()">Mouse click</custom:emitter></div>',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA]
  

})
export class EventListenerComponent  {
  static getName() {
    return "listener";
  }
  onFoo() {
    alert("on foo"); // The emitter component will immediately trigger the foo event after mounted.
  }
  onNativeClick() {
    alert("on native click event"); // Clicking on the emitter component will trigger the click event.
  }
}
