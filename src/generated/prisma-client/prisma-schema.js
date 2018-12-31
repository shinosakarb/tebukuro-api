module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCheckIn {
  count: Int!
}

type AggregateCommunity {
  count: Int!
}

type AggregateCommunityOwner {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateParticipant {
  count: Int!
}

type AggregateTicketType {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CheckIn {
  id: ID!
  participant: Participant!
}

type CheckInConnection {
  pageInfo: PageInfo!
  edges: [CheckInEdge]!
  aggregate: AggregateCheckIn!
}

input CheckInCreateInput {
  participant: ParticipantCreateOneWithoutCheckInInput!
}

input CheckInCreateOneWithoutParticipantInput {
  connect: CheckInWhereUniqueInput
}

type CheckInEdge {
  node: CheckIn!
  cursor: String!
}

enum CheckInOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CheckInPreviousValues {
  id: ID!
}

type CheckInSubscriptionPayload {
  mutation: MutationType!
  node: CheckIn
  updatedFields: [String!]
  previousValues: CheckInPreviousValues
}

input CheckInSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckInWhereInput
  AND: [CheckInSubscriptionWhereInput!]
  OR: [CheckInSubscriptionWhereInput!]
  NOT: [CheckInSubscriptionWhereInput!]
}

input CheckInUpdateInput {
  participant: ParticipantUpdateOneRequiredWithoutCheckInInput
}

input CheckInUpdateOneWithoutParticipantInput {
  delete: Boolean
  disconnect: Boolean
  connect: CheckInWhereUniqueInput
}

input CheckInWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  participant: ParticipantWhereInput
  AND: [CheckInWhereInput!]
  OR: [CheckInWhereInput!]
  NOT: [CheckInWhereInput!]
}

input CheckInWhereUniqueInput {
  id: ID
}

type Community {
  id: ID!
  name: String!
  communityOwners(where: CommunityOwnerWhereInput, orderBy: CommunityOwnerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CommunityOwner!]
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
}

type CommunityConnection {
  pageInfo: PageInfo!
  edges: [CommunityEdge]!
  aggregate: AggregateCommunity!
}

input CommunityCreateInput {
  name: String!
  communityOwners: CommunityOwnerCreateManyWithoutCommunityInput
  events: EventCreateManyWithoutCommunityInput
}

input CommunityCreateOneWithoutCommunityOwnersInput {
  create: CommunityCreateWithoutCommunityOwnersInput
  connect: CommunityWhereUniqueInput
}

input CommunityCreateOneWithoutEventsInput {
  create: CommunityCreateWithoutEventsInput
  connect: CommunityWhereUniqueInput
}

input CommunityCreateWithoutCommunityOwnersInput {
  name: String!
  events: EventCreateManyWithoutCommunityInput
}

input CommunityCreateWithoutEventsInput {
  name: String!
  communityOwners: CommunityOwnerCreateManyWithoutCommunityInput
}

type CommunityEdge {
  node: Community!
  cursor: String!
}

enum CommunityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommunityOwner {
  id: ID!
  community: Community!
  user: User!
}

type CommunityOwnerConnection {
  pageInfo: PageInfo!
  edges: [CommunityOwnerEdge]!
  aggregate: AggregateCommunityOwner!
}

input CommunityOwnerCreateInput {
  community: CommunityCreateOneWithoutCommunityOwnersInput!
  user: UserCreateOneInput!
}

input CommunityOwnerCreateManyWithoutCommunityInput {
  create: [CommunityOwnerCreateWithoutCommunityInput!]
  connect: [CommunityOwnerWhereUniqueInput!]
}

input CommunityOwnerCreateWithoutCommunityInput {
  user: UserCreateOneInput!
}

type CommunityOwnerEdge {
  node: CommunityOwner!
  cursor: String!
}

enum CommunityOwnerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommunityOwnerPreviousValues {
  id: ID!
}

input CommunityOwnerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [CommunityOwnerScalarWhereInput!]
  OR: [CommunityOwnerScalarWhereInput!]
  NOT: [CommunityOwnerScalarWhereInput!]
}

type CommunityOwnerSubscriptionPayload {
  mutation: MutationType!
  node: CommunityOwner
  updatedFields: [String!]
  previousValues: CommunityOwnerPreviousValues
}

input CommunityOwnerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommunityOwnerWhereInput
  AND: [CommunityOwnerSubscriptionWhereInput!]
  OR: [CommunityOwnerSubscriptionWhereInput!]
  NOT: [CommunityOwnerSubscriptionWhereInput!]
}

input CommunityOwnerUpdateInput {
  community: CommunityUpdateOneRequiredWithoutCommunityOwnersInput
  user: UserUpdateOneRequiredInput
}

input CommunityOwnerUpdateManyWithoutCommunityInput {
  create: [CommunityOwnerCreateWithoutCommunityInput!]
  delete: [CommunityOwnerWhereUniqueInput!]
  connect: [CommunityOwnerWhereUniqueInput!]
  disconnect: [CommunityOwnerWhereUniqueInput!]
  update: [CommunityOwnerUpdateWithWhereUniqueWithoutCommunityInput!]
  upsert: [CommunityOwnerUpsertWithWhereUniqueWithoutCommunityInput!]
  deleteMany: [CommunityOwnerScalarWhereInput!]
}

input CommunityOwnerUpdateWithoutCommunityDataInput {
  user: UserUpdateOneRequiredInput
}

input CommunityOwnerUpdateWithWhereUniqueWithoutCommunityInput {
  where: CommunityOwnerWhereUniqueInput!
  data: CommunityOwnerUpdateWithoutCommunityDataInput!
}

input CommunityOwnerUpsertWithWhereUniqueWithoutCommunityInput {
  where: CommunityOwnerWhereUniqueInput!
  update: CommunityOwnerUpdateWithoutCommunityDataInput!
  create: CommunityOwnerCreateWithoutCommunityInput!
}

input CommunityOwnerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  community: CommunityWhereInput
  user: UserWhereInput
  AND: [CommunityOwnerWhereInput!]
  OR: [CommunityOwnerWhereInput!]
  NOT: [CommunityOwnerWhereInput!]
}

input CommunityOwnerWhereUniqueInput {
  id: ID
}

type CommunityPreviousValues {
  id: ID!
  name: String!
}

type CommunitySubscriptionPayload {
  mutation: MutationType!
  node: Community
  updatedFields: [String!]
  previousValues: CommunityPreviousValues
}

input CommunitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommunityWhereInput
  AND: [CommunitySubscriptionWhereInput!]
  OR: [CommunitySubscriptionWhereInput!]
  NOT: [CommunitySubscriptionWhereInput!]
}

input CommunityUpdateInput {
  name: String
  communityOwners: CommunityOwnerUpdateManyWithoutCommunityInput
  events: EventUpdateManyWithoutCommunityInput
}

input CommunityUpdateManyMutationInput {
  name: String
}

input CommunityUpdateOneRequiredWithoutCommunityOwnersInput {
  create: CommunityCreateWithoutCommunityOwnersInput
  update: CommunityUpdateWithoutCommunityOwnersDataInput
  upsert: CommunityUpsertWithoutCommunityOwnersInput
  connect: CommunityWhereUniqueInput
}

input CommunityUpdateOneRequiredWithoutEventsInput {
  create: CommunityCreateWithoutEventsInput
  update: CommunityUpdateWithoutEventsDataInput
  upsert: CommunityUpsertWithoutEventsInput
  connect: CommunityWhereUniqueInput
}

input CommunityUpdateWithoutCommunityOwnersDataInput {
  name: String
  events: EventUpdateManyWithoutCommunityInput
}

input CommunityUpdateWithoutEventsDataInput {
  name: String
  communityOwners: CommunityOwnerUpdateManyWithoutCommunityInput
}

input CommunityUpsertWithoutCommunityOwnersInput {
  update: CommunityUpdateWithoutCommunityOwnersDataInput!
  create: CommunityCreateWithoutCommunityOwnersInput!
}

input CommunityUpsertWithoutEventsInput {
  update: CommunityUpdateWithoutEventsDataInput!
  create: CommunityCreateWithoutEventsInput!
}

input CommunityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  communityOwners_every: CommunityOwnerWhereInput
  communityOwners_some: CommunityOwnerWhereInput
  communityOwners_none: CommunityOwnerWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  AND: [CommunityWhereInput!]
  OR: [CommunityWhereInput!]
  NOT: [CommunityWhereInput!]
}

input CommunityWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

type Event {
  id: ID!
  name: String!
  description: String
  openedAt: DateTime!
  closedAt: DateTime!
  community: Community!
  ticketTypes(where: TicketTypeWhereInput, orderBy: TicketTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TicketType!]
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  name: String!
  description: String
  openedAt: DateTime!
  closedAt: DateTime!
  community: CommunityCreateOneWithoutEventsInput!
  ticketTypes: TicketTypeCreateManyWithoutEventInput
}

input EventCreateManyWithoutCommunityInput {
  create: [EventCreateWithoutCommunityInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneWithoutTicketTypesInput {
  create: EventCreateWithoutTicketTypesInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutCommunityInput {
  name: String!
  description: String
  openedAt: DateTime!
  closedAt: DateTime!
  ticketTypes: TicketTypeCreateManyWithoutEventInput
}

input EventCreateWithoutTicketTypesInput {
  name: String!
  description: String
  openedAt: DateTime!
  closedAt: DateTime!
  community: CommunityCreateOneWithoutEventsInput!
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  openedAt_ASC
  openedAt_DESC
  closedAt_ASC
  closedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EventPreviousValues {
  id: ID!
  name: String!
  description: String
  openedAt: DateTime!
  closedAt: DateTime!
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  openedAt: DateTime
  openedAt_not: DateTime
  openedAt_in: [DateTime!]
  openedAt_not_in: [DateTime!]
  openedAt_lt: DateTime
  openedAt_lte: DateTime
  openedAt_gt: DateTime
  openedAt_gte: DateTime
  closedAt: DateTime
  closedAt_not: DateTime
  closedAt_in: [DateTime!]
  closedAt_not_in: [DateTime!]
  closedAt_lt: DateTime
  closedAt_lte: DateTime
  closedAt_gt: DateTime
  closedAt_gte: DateTime
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  name: String
  description: String
  openedAt: DateTime
  closedAt: DateTime
  community: CommunityUpdateOneRequiredWithoutEventsInput
  ticketTypes: TicketTypeUpdateManyWithoutEventInput
}

input EventUpdateManyDataInput {
  name: String
  description: String
  openedAt: DateTime
  closedAt: DateTime
}

input EventUpdateManyMutationInput {
  name: String
  description: String
  openedAt: DateTime
  closedAt: DateTime
}

input EventUpdateManyWithoutCommunityInput {
  create: [EventCreateWithoutCommunityInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutCommunityInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutCommunityInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateOneRequiredWithoutTicketTypesInput {
  create: EventCreateWithoutTicketTypesInput
  update: EventUpdateWithoutTicketTypesDataInput
  upsert: EventUpsertWithoutTicketTypesInput
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutCommunityDataInput {
  name: String
  description: String
  openedAt: DateTime
  closedAt: DateTime
  ticketTypes: TicketTypeUpdateManyWithoutEventInput
}

input EventUpdateWithoutTicketTypesDataInput {
  name: String
  description: String
  openedAt: DateTime
  closedAt: DateTime
  community: CommunityUpdateOneRequiredWithoutEventsInput
}

input EventUpdateWithWhereUniqueWithoutCommunityInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutCommunityDataInput!
}

input EventUpsertWithoutTicketTypesInput {
  update: EventUpdateWithoutTicketTypesDataInput!
  create: EventCreateWithoutTicketTypesInput!
}

input EventUpsertWithWhereUniqueWithoutCommunityInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutCommunityDataInput!
  create: EventCreateWithoutCommunityInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  openedAt: DateTime
  openedAt_not: DateTime
  openedAt_in: [DateTime!]
  openedAt_not_in: [DateTime!]
  openedAt_lt: DateTime
  openedAt_lte: DateTime
  openedAt_gt: DateTime
  openedAt_gte: DateTime
  closedAt: DateTime
  closedAt_not: DateTime
  closedAt_in: [DateTime!]
  closedAt_not_in: [DateTime!]
  closedAt_lt: DateTime
  closedAt_lte: DateTime
  closedAt_gt: DateTime
  closedAt_gte: DateTime
  community: CommunityWhereInput
  ticketTypes_every: TicketTypeWhereInput
  ticketTypes_some: TicketTypeWhereInput
  ticketTypes_none: TicketTypeWhereInput
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCheckIn(data: CheckInCreateInput!): CheckIn!
  updateCheckIn(data: CheckInUpdateInput!, where: CheckInWhereUniqueInput!): CheckIn
  upsertCheckIn(where: CheckInWhereUniqueInput!, create: CheckInCreateInput!, update: CheckInUpdateInput!): CheckIn!
  deleteCheckIn(where: CheckInWhereUniqueInput!): CheckIn
  deleteManyCheckIns(where: CheckInWhereInput): BatchPayload!
  createCommunity(data: CommunityCreateInput!): Community!
  updateCommunity(data: CommunityUpdateInput!, where: CommunityWhereUniqueInput!): Community
  updateManyCommunities(data: CommunityUpdateManyMutationInput!, where: CommunityWhereInput): BatchPayload!
  upsertCommunity(where: CommunityWhereUniqueInput!, create: CommunityCreateInput!, update: CommunityUpdateInput!): Community!
  deleteCommunity(where: CommunityWhereUniqueInput!): Community
  deleteManyCommunities(where: CommunityWhereInput): BatchPayload!
  createCommunityOwner(data: CommunityOwnerCreateInput!): CommunityOwner!
  updateCommunityOwner(data: CommunityOwnerUpdateInput!, where: CommunityOwnerWhereUniqueInput!): CommunityOwner
  upsertCommunityOwner(where: CommunityOwnerWhereUniqueInput!, create: CommunityOwnerCreateInput!, update: CommunityOwnerUpdateInput!): CommunityOwner!
  deleteCommunityOwner(where: CommunityOwnerWhereUniqueInput!): CommunityOwner
  deleteManyCommunityOwners(where: CommunityOwnerWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createParticipant(data: ParticipantCreateInput!): Participant!
  updateParticipant(data: ParticipantUpdateInput!, where: ParticipantWhereUniqueInput!): Participant
  updateManyParticipants(data: ParticipantUpdateManyMutationInput!, where: ParticipantWhereInput): BatchPayload!
  upsertParticipant(where: ParticipantWhereUniqueInput!, create: ParticipantCreateInput!, update: ParticipantUpdateInput!): Participant!
  deleteParticipant(where: ParticipantWhereUniqueInput!): Participant
  deleteManyParticipants(where: ParticipantWhereInput): BatchPayload!
  createTicketType(data: TicketTypeCreateInput!): TicketType!
  updateTicketType(data: TicketTypeUpdateInput!, where: TicketTypeWhereUniqueInput!): TicketType
  updateManyTicketTypes(data: TicketTypeUpdateManyMutationInput!, where: TicketTypeWhereInput): BatchPayload!
  upsertTicketType(where: TicketTypeWhereUniqueInput!, create: TicketTypeCreateInput!, update: TicketTypeUpdateInput!): TicketType!
  deleteTicketType(where: TicketTypeWhereUniqueInput!): TicketType
  deleteManyTicketTypes(where: TicketTypeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Participant {
  id: ID!
  status: ParticipantStatus!
  ticketType: TicketType!
  user: User!
  checkIn: CheckIn
}

type ParticipantConnection {
  pageInfo: PageInfo!
  edges: [ParticipantEdge]!
  aggregate: AggregateParticipant!
}

input ParticipantCreateInput {
  status: ParticipantStatus!
  ticketType: TicketTypeCreateOneWithoutParticipantsInput!
  user: UserCreateOneInput!
  checkIn: CheckInCreateOneWithoutParticipantInput
}

input ParticipantCreateManyWithoutTicketTypeInput {
  create: [ParticipantCreateWithoutTicketTypeInput!]
  connect: [ParticipantWhereUniqueInput!]
}

input ParticipantCreateOneWithoutCheckInInput {
  create: ParticipantCreateWithoutCheckInInput
  connect: ParticipantWhereUniqueInput
}

input ParticipantCreateWithoutCheckInInput {
  status: ParticipantStatus!
  ticketType: TicketTypeCreateOneWithoutParticipantsInput!
  user: UserCreateOneInput!
}

input ParticipantCreateWithoutTicketTypeInput {
  status: ParticipantStatus!
  user: UserCreateOneInput!
  checkIn: CheckInCreateOneWithoutParticipantInput
}

type ParticipantEdge {
  node: Participant!
  cursor: String!
}

enum ParticipantOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParticipantPreviousValues {
  id: ID!
  status: ParticipantStatus!
}

input ParticipantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: ParticipantStatus
  status_not: ParticipantStatus
  status_in: [ParticipantStatus!]
  status_not_in: [ParticipantStatus!]
  AND: [ParticipantScalarWhereInput!]
  OR: [ParticipantScalarWhereInput!]
  NOT: [ParticipantScalarWhereInput!]
}

enum ParticipantStatus {
  REGISTERED
  ATTENDING
  CANCEL_WAITING
  CANCELED
}

type ParticipantSubscriptionPayload {
  mutation: MutationType!
  node: Participant
  updatedFields: [String!]
  previousValues: ParticipantPreviousValues
}

input ParticipantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParticipantWhereInput
  AND: [ParticipantSubscriptionWhereInput!]
  OR: [ParticipantSubscriptionWhereInput!]
  NOT: [ParticipantSubscriptionWhereInput!]
}

input ParticipantUpdateInput {
  status: ParticipantStatus
  ticketType: TicketTypeUpdateOneRequiredWithoutParticipantsInput
  user: UserUpdateOneRequiredInput
  checkIn: CheckInUpdateOneWithoutParticipantInput
}

input ParticipantUpdateManyDataInput {
  status: ParticipantStatus
}

input ParticipantUpdateManyMutationInput {
  status: ParticipantStatus
}

input ParticipantUpdateManyWithoutTicketTypeInput {
  create: [ParticipantCreateWithoutTicketTypeInput!]
  delete: [ParticipantWhereUniqueInput!]
  connect: [ParticipantWhereUniqueInput!]
  disconnect: [ParticipantWhereUniqueInput!]
  update: [ParticipantUpdateWithWhereUniqueWithoutTicketTypeInput!]
  upsert: [ParticipantUpsertWithWhereUniqueWithoutTicketTypeInput!]
  deleteMany: [ParticipantScalarWhereInput!]
  updateMany: [ParticipantUpdateManyWithWhereNestedInput!]
}

input ParticipantUpdateManyWithWhereNestedInput {
  where: ParticipantScalarWhereInput!
  data: ParticipantUpdateManyDataInput!
}

input ParticipantUpdateOneRequiredWithoutCheckInInput {
  create: ParticipantCreateWithoutCheckInInput
  update: ParticipantUpdateWithoutCheckInDataInput
  upsert: ParticipantUpsertWithoutCheckInInput
  connect: ParticipantWhereUniqueInput
}

input ParticipantUpdateWithoutCheckInDataInput {
  status: ParticipantStatus
  ticketType: TicketTypeUpdateOneRequiredWithoutParticipantsInput
  user: UserUpdateOneRequiredInput
}

input ParticipantUpdateWithoutTicketTypeDataInput {
  status: ParticipantStatus
  user: UserUpdateOneRequiredInput
  checkIn: CheckInUpdateOneWithoutParticipantInput
}

input ParticipantUpdateWithWhereUniqueWithoutTicketTypeInput {
  where: ParticipantWhereUniqueInput!
  data: ParticipantUpdateWithoutTicketTypeDataInput!
}

input ParticipantUpsertWithoutCheckInInput {
  update: ParticipantUpdateWithoutCheckInDataInput!
  create: ParticipantCreateWithoutCheckInInput!
}

input ParticipantUpsertWithWhereUniqueWithoutTicketTypeInput {
  where: ParticipantWhereUniqueInput!
  update: ParticipantUpdateWithoutTicketTypeDataInput!
  create: ParticipantCreateWithoutTicketTypeInput!
}

input ParticipantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: ParticipantStatus
  status_not: ParticipantStatus
  status_in: [ParticipantStatus!]
  status_not_in: [ParticipantStatus!]
  ticketType: TicketTypeWhereInput
  user: UserWhereInput
  checkIn: CheckInWhereInput
  AND: [ParticipantWhereInput!]
  OR: [ParticipantWhereInput!]
  NOT: [ParticipantWhereInput!]
}

input ParticipantWhereUniqueInput {
  id: ID
}

type Query {
  checkIn(where: CheckInWhereUniqueInput!): CheckIn
  checkIns(where: CheckInWhereInput, orderBy: CheckInOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckIn]!
  checkInsConnection(where: CheckInWhereInput, orderBy: CheckInOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckInConnection!
  community(where: CommunityWhereUniqueInput!): Community
  communities(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Community]!
  communitiesConnection(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommunityConnection!
  communityOwner(where: CommunityOwnerWhereUniqueInput!): CommunityOwner
  communityOwners(where: CommunityOwnerWhereInput, orderBy: CommunityOwnerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CommunityOwner]!
  communityOwnersConnection(where: CommunityOwnerWhereInput, orderBy: CommunityOwnerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommunityOwnerConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  participant(where: ParticipantWhereUniqueInput!): Participant
  participants(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Participant]!
  participantsConnection(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParticipantConnection!
  ticketType(where: TicketTypeWhereUniqueInput!): TicketType
  ticketTypes(where: TicketTypeWhereInput, orderBy: TicketTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TicketType]!
  ticketTypesConnection(where: TicketTypeWhereInput, orderBy: TicketTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TicketTypeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  checkIn(where: CheckInSubscriptionWhereInput): CheckInSubscriptionPayload
  community(where: CommunitySubscriptionWhereInput): CommunitySubscriptionPayload
  communityOwner(where: CommunityOwnerSubscriptionWhereInput): CommunityOwnerSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  participant(where: ParticipantSubscriptionWhereInput): ParticipantSubscriptionPayload
  ticketType(where: TicketTypeSubscriptionWhereInput): TicketTypeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type TicketType {
  id: ID!
  name: String!
  registrationCapacity: Int!
  registrationFee: Int!
  registrationOpenedAt: DateTime!
  registrationClosedAt: DateTime!
  event: Event!
  participants(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Participant!]
}

type TicketTypeConnection {
  pageInfo: PageInfo!
  edges: [TicketTypeEdge]!
  aggregate: AggregateTicketType!
}

input TicketTypeCreateInput {
  name: String!
  registrationCapacity: Int!
  registrationFee: Int!
  registrationOpenedAt: DateTime!
  registrationClosedAt: DateTime!
  event: EventCreateOneWithoutTicketTypesInput!
  participants: ParticipantCreateManyWithoutTicketTypeInput
}

input TicketTypeCreateManyWithoutEventInput {
  create: [TicketTypeCreateWithoutEventInput!]
  connect: [TicketTypeWhereUniqueInput!]
}

input TicketTypeCreateOneWithoutParticipantsInput {
  create: TicketTypeCreateWithoutParticipantsInput
  connect: TicketTypeWhereUniqueInput
}

input TicketTypeCreateWithoutEventInput {
  name: String!
  registrationCapacity: Int!
  registrationFee: Int!
  registrationOpenedAt: DateTime!
  registrationClosedAt: DateTime!
  participants: ParticipantCreateManyWithoutTicketTypeInput
}

input TicketTypeCreateWithoutParticipantsInput {
  name: String!
  registrationCapacity: Int!
  registrationFee: Int!
  registrationOpenedAt: DateTime!
  registrationClosedAt: DateTime!
  event: EventCreateOneWithoutTicketTypesInput!
}

type TicketTypeEdge {
  node: TicketType!
  cursor: String!
}

enum TicketTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  registrationCapacity_ASC
  registrationCapacity_DESC
  registrationFee_ASC
  registrationFee_DESC
  registrationOpenedAt_ASC
  registrationOpenedAt_DESC
  registrationClosedAt_ASC
  registrationClosedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TicketTypePreviousValues {
  id: ID!
  name: String!
  registrationCapacity: Int!
  registrationFee: Int!
  registrationOpenedAt: DateTime!
  registrationClosedAt: DateTime!
}

input TicketTypeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  registrationCapacity: Int
  registrationCapacity_not: Int
  registrationCapacity_in: [Int!]
  registrationCapacity_not_in: [Int!]
  registrationCapacity_lt: Int
  registrationCapacity_lte: Int
  registrationCapacity_gt: Int
  registrationCapacity_gte: Int
  registrationFee: Int
  registrationFee_not: Int
  registrationFee_in: [Int!]
  registrationFee_not_in: [Int!]
  registrationFee_lt: Int
  registrationFee_lte: Int
  registrationFee_gt: Int
  registrationFee_gte: Int
  registrationOpenedAt: DateTime
  registrationOpenedAt_not: DateTime
  registrationOpenedAt_in: [DateTime!]
  registrationOpenedAt_not_in: [DateTime!]
  registrationOpenedAt_lt: DateTime
  registrationOpenedAt_lte: DateTime
  registrationOpenedAt_gt: DateTime
  registrationOpenedAt_gte: DateTime
  registrationClosedAt: DateTime
  registrationClosedAt_not: DateTime
  registrationClosedAt_in: [DateTime!]
  registrationClosedAt_not_in: [DateTime!]
  registrationClosedAt_lt: DateTime
  registrationClosedAt_lte: DateTime
  registrationClosedAt_gt: DateTime
  registrationClosedAt_gte: DateTime
  AND: [TicketTypeScalarWhereInput!]
  OR: [TicketTypeScalarWhereInput!]
  NOT: [TicketTypeScalarWhereInput!]
}

type TicketTypeSubscriptionPayload {
  mutation: MutationType!
  node: TicketType
  updatedFields: [String!]
  previousValues: TicketTypePreviousValues
}

input TicketTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TicketTypeWhereInput
  AND: [TicketTypeSubscriptionWhereInput!]
  OR: [TicketTypeSubscriptionWhereInput!]
  NOT: [TicketTypeSubscriptionWhereInput!]
}

input TicketTypeUpdateInput {
  name: String
  registrationCapacity: Int
  registrationFee: Int
  registrationOpenedAt: DateTime
  registrationClosedAt: DateTime
  event: EventUpdateOneRequiredWithoutTicketTypesInput
  participants: ParticipantUpdateManyWithoutTicketTypeInput
}

input TicketTypeUpdateManyDataInput {
  name: String
  registrationCapacity: Int
  registrationFee: Int
  registrationOpenedAt: DateTime
  registrationClosedAt: DateTime
}

input TicketTypeUpdateManyMutationInput {
  name: String
  registrationCapacity: Int
  registrationFee: Int
  registrationOpenedAt: DateTime
  registrationClosedAt: DateTime
}

input TicketTypeUpdateManyWithoutEventInput {
  create: [TicketTypeCreateWithoutEventInput!]
  delete: [TicketTypeWhereUniqueInput!]
  connect: [TicketTypeWhereUniqueInput!]
  disconnect: [TicketTypeWhereUniqueInput!]
  update: [TicketTypeUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [TicketTypeUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [TicketTypeScalarWhereInput!]
  updateMany: [TicketTypeUpdateManyWithWhereNestedInput!]
}

input TicketTypeUpdateManyWithWhereNestedInput {
  where: TicketTypeScalarWhereInput!
  data: TicketTypeUpdateManyDataInput!
}

input TicketTypeUpdateOneRequiredWithoutParticipantsInput {
  create: TicketTypeCreateWithoutParticipantsInput
  update: TicketTypeUpdateWithoutParticipantsDataInput
  upsert: TicketTypeUpsertWithoutParticipantsInput
  connect: TicketTypeWhereUniqueInput
}

input TicketTypeUpdateWithoutEventDataInput {
  name: String
  registrationCapacity: Int
  registrationFee: Int
  registrationOpenedAt: DateTime
  registrationClosedAt: DateTime
  participants: ParticipantUpdateManyWithoutTicketTypeInput
}

input TicketTypeUpdateWithoutParticipantsDataInput {
  name: String
  registrationCapacity: Int
  registrationFee: Int
  registrationOpenedAt: DateTime
  registrationClosedAt: DateTime
  event: EventUpdateOneRequiredWithoutTicketTypesInput
}

input TicketTypeUpdateWithWhereUniqueWithoutEventInput {
  where: TicketTypeWhereUniqueInput!
  data: TicketTypeUpdateWithoutEventDataInput!
}

input TicketTypeUpsertWithoutParticipantsInput {
  update: TicketTypeUpdateWithoutParticipantsDataInput!
  create: TicketTypeCreateWithoutParticipantsInput!
}

input TicketTypeUpsertWithWhereUniqueWithoutEventInput {
  where: TicketTypeWhereUniqueInput!
  update: TicketTypeUpdateWithoutEventDataInput!
  create: TicketTypeCreateWithoutEventInput!
}

input TicketTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  registrationCapacity: Int
  registrationCapacity_not: Int
  registrationCapacity_in: [Int!]
  registrationCapacity_not_in: [Int!]
  registrationCapacity_lt: Int
  registrationCapacity_lte: Int
  registrationCapacity_gt: Int
  registrationCapacity_gte: Int
  registrationFee: Int
  registrationFee_not: Int
  registrationFee_in: [Int!]
  registrationFee_not_in: [Int!]
  registrationFee_lt: Int
  registrationFee_lte: Int
  registrationFee_gt: Int
  registrationFee_gte: Int
  registrationOpenedAt: DateTime
  registrationOpenedAt_not: DateTime
  registrationOpenedAt_in: [DateTime!]
  registrationOpenedAt_not_in: [DateTime!]
  registrationOpenedAt_lt: DateTime
  registrationOpenedAt_lte: DateTime
  registrationOpenedAt_gt: DateTime
  registrationOpenedAt_gte: DateTime
  registrationClosedAt: DateTime
  registrationClosedAt_not: DateTime
  registrationClosedAt_in: [DateTime!]
  registrationClosedAt_not_in: [DateTime!]
  registrationClosedAt_lt: DateTime
  registrationClosedAt_lte: DateTime
  registrationClosedAt_gt: DateTime
  registrationClosedAt_gte: DateTime
  event: EventWhereInput
  participants_every: ParticipantWhereInput
  participants_some: ParticipantWhereInput
  participants_none: ParticipantWhereInput
  AND: [TicketTypeWhereInput!]
  OR: [TicketTypeWhereInput!]
  NOT: [TicketTypeWhereInput!]
}

input TicketTypeWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  uid: String!
  name: String!
  picture: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  uid: String!
  name: String!
  picture: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  name_ASC
  name_DESC
  picture_ASC
  picture_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  uid: String!
  name: String!
  picture: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  uid: String
  name: String
  picture: String
}

input UserUpdateInput {
  uid: String
  name: String
  picture: String
}

input UserUpdateManyMutationInput {
  uid: String
  name: String
  picture: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  uid: String
}
`
      }
    