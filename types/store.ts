import { HEX } from './utils'

export enum AvailabilityState {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export interface Store {
  uuid: string,
  name: string,
  availabilityState: AvailabilityState,
  providers: Array<any>,
  config: {
    brandColor: HEX,
  },
  secret: string,
  legacyId: string | null,
  organizationUuid: string,
}