class Usuario {

  private correo: string;
  private usuario: string;
  private password: string;

  constructor(correo: string, usuario: string, password: string) {
    this.correo = correo;
    this.usuario = usuario;
    this.password = password;
  }

  get getCorreo(): string {
    return this.correo;
  }

  set setCorreo(value: string) {
    this.correo = value;
  }

  get getUsuario(): string {
    return this.usuario;
  }

  set setUsuario(value: string) {
    this.usuario = value;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(value: string) {
    this.password = value;
  }
}
