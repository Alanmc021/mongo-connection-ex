const mongoose = require("mongoose");

const dbUser = "2019azimutewebrep";
const dbPassword = "mxcIwTP4gWNlY4w6";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://2019azimutewebrep:${dbPassword}@cluster0.zi4vz9z.mongodb.net/test`
  );

  const connection = mongoose.connection;

  connection.on("error", () => {
    console.error("Erro ao conectar com o mongoDB");
  });

  connection.on("open", () => {
    console.log("Conetado ao mongoDB com sucesso!");

    // Criando o modelo do schema
    const userSchema = new mongoose.Schema({
      name: String,
      age: Number,
      email: String,
    });

    // Criando a instância do modelo e salvando no banco de dados
    const User = mongoose.model("User", userSchema);
    const user = new User({ name: "João", age: 25, email: "joao@example.com" });
    user.save((err, savedUser) => {
      if (err) {
        console.error("Erro ao salvar usuário:", err);
      } else {
        console.log("Usuário salvo com sucesso:", savedUser);
      }
    });
  });
};

connect();