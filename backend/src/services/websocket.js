// WEBSOCKET
// array temporário pra salvar os usuários conectados ao websocket
let users = [];

function handleWebsockets(io) {
  // Inicia o websocket.
  io.of("/ws").on("connection", (socket) => {
    console.log(`Socket.io: user connected! ID: ${socket.id}`);

    socket.join("global");
    console.log(socket.rooms);

    // O evento 'join server' recebe do frontend o nickname, cria o ojeto user e o guarda em users (declarado acima).
    socket.on("join server", (username) => {
      // Quando houver uma conexão, o usuário deve ser inserido no array de usuários logados.
      const user = {
        username,
        id: socket.id,
      };
      users.push(user);
      //E então notifica todos os usuários que existe um novo user conectado.
      io.emit("new user", users);
    });

    socket.on("client message", (msg) => {
      console.log(msg);
      io.of("/ws").emit("message", {
        from: "me",
        content: msg,
        time: new Date().toISOString(),
      });
    });
  });
}

module.exports = (io) => handleWebsockets(io);
