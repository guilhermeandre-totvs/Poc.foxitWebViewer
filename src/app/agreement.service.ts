import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoxitService  {
  apiPath = 'https://totvssign.dev.totvs.app/documents/'
  token ="Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.iCUEIenrtyq5-I5MKOC36dZru81iqxQEhIkX00PeK9tLWtK9sH0R0A.Rq86JP0DYRuL1AJoL1BYpw.eALeMlYVANwRjaFZNoTCWCGpoAl5lF35d1ZQaju8N3aCZALKfYmEDXPlZPw7iE3FbyWJgLbIIghcfKHv6UhUprncbA8dgrqs9_st_dyFL9Fjneq0ZsJ70D-yMQSaR_EmG2Guh_TRUkWXdFUjWe_J7grlyjhUFTBA18eSU5ckt0Ruc_A-dOUMyp_6EuW41vVZ_EZxPW2xPe9NgwwL50Ds7yoNbc1Uh_1XIoFj7dp95hcCsMWQzkVDY30DReLrYVolWUhxRKV_j4KiDUPsfUf-gMiUWU0VFcv5R6ilP85vsNywmQmqgdgfqwO779swThk-GDZS_S5l8L3p-b0m6Rnkal8WZRelzXH19LL54shD0nkv4rRvTWA-IWTmT23gxKmivc_0FHEB5q2fTovEJse1Benru2omU9cZpbT8SR8uRONSLNhRWcOzotGwFUrVUp8M--ukAAfNXuDeKjaZkcQPATblExgidahk2zNEiTiikh6s8Frm-oGKIhagfbPKpK8eoTqaQEhcuvAHwJHBpMj5Sa7mEc48JN9keiF-z6gzqIPVdGHA1FXphtlrPmLpD2tp6_Cn-mirCCwYM-9zhPzVxXglTtDlVvb5rEi_4CP1_5p3nB5RVXy6ogqv0TqDXIXDh5AAczVDiBx3g8keTbomabmGohSynntcyQMrH3jUmi_4MAY0qSuHmHWHMzrGdOdz5c6AiNrOxkaGWrc6qPmUg_Y8dtbZcJqnZVI00_2oEYCJdIm7Ck6pU5SacUVOdxNAs5plkxnvDZoQboxWVa_df3A3KCEASfSd5k0wvWdybsaUGNIf3JdvL5nHYniqFTF22GW8pzvm4GN-MaCzZ4OVdohdYeINZFbwZ5fEgCl3lLrOe406TV88vPAMbiHELlKur16Rq0oNO8dUOiFW2PkxCIfUA5k1yzDDmhrSbE70oehuYwXBmQ83Efl9jVGqP1A3WNFHlUnMGNztDspLSzM0lpmfFU1G1qmLvLbbcclu2DePKfoP1cLt9oFqT72yls7WvHw3lsmzV5X6T9BW9i8-9rzMwKYVbjG2K9QSW_BL4MOuG-xZXkp8HHUowPckgJKTnbnxjH-kFR-gPsPqrS-2vVFFpoDDpBFyBWh9SfBKqH2hNwYFXQ7Mx6Qp9t16Aa5DORcqXJUwRUDpYIPfqST0_qMPoXJkReyrvbfrocKmBfEbTgXxK6dlXWjEgFFNf1V6xhqavxNeyI62Q8Wxd5b1TqnWCPzHPT-kHa91-k2a42-gadniBSKk9gJAAKTS90MrMvzj75t8gfNgV9sS4B_LGsJHmLJ_SBmfXP8uxJK5gU9GoLhWZ4GWakipkD79vcpGhQEyVvngcM7FYu0TBOboGkEHonrCc8CHai7_evgbiTS86osc2u60vl4CC__ODnkcYpwdxI4v7sOUEGWVEYAwjOHo2NzUEtPn8rDWLOesPqul7zuQI1zRVkey-8ZMIWW_y7PCkEZuQ6S3KQklAK_YnQOtssIfId6FDximfgS64WUAgdWY47jLrEUJOC5KUWk8UIW-EQKM92CYBTIiU1tdxNfhiCRePObwzAfGN7H0HBIb1TA5wHyg5jCNFlQwk5RBMM0RReOBXjUXJmOgw6HNewcq09rn1jB8SlARzfzPgAlkjgzVqKqgBgSsJhD79I4rOnv4GD-1TMjfaLZhEyV1iOeEh27NTbvq1P4j7t4In9RDmLowPEty1lvPPnAPnXM8cF_-y5JBefy4shULpFzRWg6O3l3W8PEkFu4K_uXR81DTmJdfmTuS0MyrtNQzOqzlN8BjJka9bkIjReeruMzIJVAL1MLkyPCCPa0fcZ9fwXRuD1JTWnRVZ44JnVmhQk6V1amDob5aFXAcSulc8CTow_63iAPaeT4utXyKe-u5ZXc62qHuaJ_Y7OpZ1rPz1eY0Y4-Q1aMTxuXnH-uq4LH3Oelc_yROANUJ8lPJK-EXlcA4Rm69_uPBAfM9IYu4GzKnIvcGrt1TLU6Mp6dzhqcs8a3FNLpJfyg0g37fYWwa6jhnU3ZS58p9tQ6Qe8RfCH6O8c6J-vmPMWm88vP5yWHER_S6q1ItkKIlMXQSa2mduZ_RKAg0njLnhjCHKd53ZwzyG1ptxdWcK7MnwncqGPzvrDyi3VBJzUQj-ycUnyVaMxc.se8VYe2-UwZxhUG9aBclJQ"
  constructor(private http: HttpClient) {}

  downloadDocument(): Observable<any> {
    return this.http.get(`${this.apiPath}v1/publicacoes/858505/download?tipoDownload=1`,{
      headers: new HttpHeaders({
          'Authorization': this.token
      })
  } ).pipe(
      map(this.getData.bind(this)),
      catchError(this.handleError)
    )
  }

  private getData(jsonData: any) {
    if (jsonData.success){
      return jsonData.data;
    }
    else
      this.handleError(jsonData);
  }

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
