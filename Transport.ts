import NavalTransport from '@civ-clone/base-unit-type-naval-transport/NavalTransport';

export class Transport extends NavalTransport {
  capacity() {
    return 8;
  }
}

export default Transport;
