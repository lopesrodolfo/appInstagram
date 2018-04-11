import { CanActivate } from "@angular/router";
import { Auth } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AutenticacaoGuard implements CanActivate {

    constructor(private auth: Auth) { }

    canActivate(): boolean {
        return this.auth.autenticado()
    }
}