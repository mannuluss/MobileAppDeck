import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingInterceptor } from "./interceptor/loading.interceptor";
import { LoaderService } from "./services/loader.service";

export const LOADER_PROVIDER_INTERCEPTOR = [
  LoaderService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    deps: [LoaderService],
    multi: true,
  },
]
