import express from "express";
import { WebSocketServer } from "ws";
import cors from "cors";
import http from "http";
import log from "./logger.js";
import { v4 as uuidv4 } from "uuid";

class Server {
  constructor(options = {}) {
    this.host = options.host;
    this.port = options.port;
    this.router = options.router;
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.router);
    this.server = http.createServer(this.app);
    this.wsServer = new WebSocketServer({ server: this.server });
    this.clients = {};
    this.init();
  }

  start() {
    return new Promise((resolve, reject) => {
      this.server.listen(this.port, (error) => {
        if (error) reject("Failed to start server");
        else {
          log.info("HTTP and Websocket server listening on port " + this.port);
          resolve();
        }
      });
    });
  }

  init() {
    this.wsServer.on("connection", (socket) => {
      this.connection(socket);
      socket.on("message", (message) => this.onmessage(message, socket));
      socket.on("error", (error) => this.onerror(error, socket));
      socket.on("close", () => this.onclose(socket));
    });
  }
  connection(socket) {
    const sessionId = uuidv4();
    this.clients[sessionId] = socket;
    log.info(`Client Connected [Session-ID: ${sessionId}] (${this.countConnectedClients()})`);
    socket.send(JSON.stringify({ type: "session", sessionId }));
  }
  onmessage(message, socket) {
    const incomingMessage = JSON.parse(message);
    const sessions = Object.keys(this.clients) || [];
    // TODO: handle message validation and sanitazation
    if (!incomingMessage.sessionId || !sessions.includes(incomingMessage.sessionId)) {
      socket.send("Failed to identify session!");
      socket.close();
      return;
    }
    log.info(`Incoming Message: ${message}`);
  }
  onerror(error, socket) {
    log.error(error);
    socket.close();
    return;
  }
  onclose(socket) {
    const sessionId = this.findSession(socket);
    delete this.clients[sessionId];
    log.info(`Client Disconnected [Session-ID: ${sessionId}] (${this.countConnectedClients()})`);
  }
  findSession(socket) {
    for (const sessionId in this.clients) {
      if (this.clients[sessionId] === socket) return sessionId;
    }
    return null;
  }
  countConnectedClients() {
    return `Clients: ${Object.keys(this.clients).length}`;
  }
  send(message, socket = null) {
    if (socket) socket.send(message);
    else Object.values(this.clients).forEach((client) => client.send(message));
  }
}

export default Server;
