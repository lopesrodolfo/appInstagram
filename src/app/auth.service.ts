import { Injectable } from '@angular/core'
import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase'
import { Router } from '@angular/router';

@Injectable()
export class Auth {

    constructor(private router: Router) { }

    public cadastrarUsuario(usuario: Usuario): Promise<any> {

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                // remover a senha do atributo senha do objeto usuário
                delete usuario.senha

                // registrando dados complementares do usuario no path email na base64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((erro: Error) => {
                console.log(erro)
            })
    }

    public autenticar(email: string, senha: string): Promise<any> {

        return firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/home'])
                    })
            })
    }

    public autenticado(): boolean {

        if (localStorage.getItem('idToken') != null) {
            return true
        }

        this.router.navigate(['/'])
        return false
    }

    public sair(): void {

        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                this.router.navigate(['/'])
            })

    }
}