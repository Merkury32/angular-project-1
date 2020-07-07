import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthInceptorService } from "./auth/auth-interceptor.service";
import { LoggingService } from "./logging.service";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInceptorService,
      multi: true,
    },
    LoggingService,
  ],
})
export class CoreModule {}
