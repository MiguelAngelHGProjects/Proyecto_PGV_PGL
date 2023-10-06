import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSalesService {
  private endpoint = 'http://localhost:8080/sales';

  constructor(private httpClient: HttpClient) { }

  crearVenta(clienteId: number, productoId: number): Observable<any> {
    const venta = { userId: clienteId, headsetId: productoId };
    return this.httpClient.post<any>(this.endpoint, venta);
  }
  
  getClientes(): Observable<any[]> {
    const url = `${this.endpoint}/users`;
    return this.httpClient.get<any[]>(url);
  }

  getProductos(): Observable<any[]> {
    const url = `${this.endpoint}/headsets`;
    return this.httpClient.get<any[]>(url);
  }  
  
  borrarVenta(id: number): Observable<void> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  getVentas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint).pipe(
      tap((ventas) => console.log('Ventas obtenidas:', ventas)),
    );
  }
  
}
