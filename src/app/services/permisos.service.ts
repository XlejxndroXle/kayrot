import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  tipoDeUsuario: any
  constructor(private httpClient: HttpClient) {
   }
   async recuperarDatos(){
    this.tipoDeUsuario=jwt_decode( localStorage.getItem('jwt-admin'))['data']['tipoUsuario'];
    
  }

  async getTipoUsuario(){
    await this.recuperarDatos();
    return this.tipoDeUsuario;
  }


 



}

