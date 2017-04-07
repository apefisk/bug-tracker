import { ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';

import { FirebaseConfigService } from './service/firebase-config.service';

@NgModule({
  imports: [],
  declarations: []
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule exists already. Only import in the root/app module"
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ FirebaseConfigService ]
    }
  }
}
