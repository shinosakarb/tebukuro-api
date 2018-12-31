"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "CheckIn",
    embedded: false
  },
  {
    name: "Community",
    embedded: false
  },
  {
    name: "CommunityOwner",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Participant",
    embedded: false
  },
  {
    name: "ParticipantStatus",
    embedded: false
  },
  {
    name: "TicketType",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
