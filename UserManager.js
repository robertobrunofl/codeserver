class UserManager {
  static #users = [];
  create(data) {
    try {
      const user = {
        id:
          UserManager.#users.length === 0
            ? 1
            : UserManager.#users[UserManager.#users.length - 1].id + 1,
        foto: data.foto,
        email: data.email,
        password: data.password,
        role: 0,
      };
      UserManager.#users.push(user);
      console.log("Usuario creado");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }
  read() {
    return UserManager.#users;
  }
}

const gestorDeUsuarios = new UserManager();
gestorDeUsuarios.create({
  foto: "roberto.jpg",
  email: "roberto@gmail.com",
  password: "hola123",
});
gestorDeUsuarios.create({
  foto: "esteban.jpg",
  email: "estaban@gmail.com",
  password: "coder123",
}); // crear un nuevo usuario

console.log(gestorDeUsuarios.read());