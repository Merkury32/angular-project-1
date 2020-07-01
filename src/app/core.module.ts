import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { RecipeService } from "./recipes/recipe.service";
import { AuthInceptorService } from "./auth/auth-interceptor.service";
import { LoggingService } from "./logging.service";

@NgModule({
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInceptorService,
      multi: true,
    },
    LoggingService,
  ],
})
export class CoreModule {}
